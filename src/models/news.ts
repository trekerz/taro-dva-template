import modelExtend from 'dva-model-extend';
import { NewsModelType } from "./news.d";
import commonModel from "./commom";
import { NewsService, INewsList, RecommendListParams } from '@/services/news';
import { IResponseData } from '@/type/request';
import { ConnectState } from './connect';
import { REQUEST_CODE } from '@/utils/constant';

/** 新闻models */
const newsModel: NewsModelType = {
  namespace: 'news',
  state: {
    list: {
      params: {
        channel: '头条',
        num: 40,
        start: 0,
      },
      data: []
    }
  },
  effects: {
    *fetchNews({ payload }, { call, put, select }) {
      const state: ConnectState = yield select(state => state); 
      const { list } = state.news;
      const requestData: RecommendListParams = {
        ...list.params,
        start: list.params.start + list.params.num,
        ...payload,
      }
      const res: IResponseData<INewsList> = yield call(NewsService.getRecommendList, requestData);
      if (res.code === REQUEST_CODE.SUCCESS.code && res.result) {
        yield put({
          type: 'updateState',
          payload: {
            list: {
              params: {
                ...requestData
              },
              data: requestData.start === 0 ? res.result.result.list : [...list.data, ...res.result.result.list]
            }
          },
        });
      }
    }
  }
}
export default modelExtend(commonModel, newsModel);