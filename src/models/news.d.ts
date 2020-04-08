import { INews } from '@/services/news';
import { Effect } from "dva";

/** 新闻model数据 */
export interface NewsModelState {
  /** 新闻列表 */
  list: {
    /** 列表参数 */
    params: {
      /** 频道 */
      channel: string;
      /** 数量 默认10，最大40 */
      num: number;
      /** 起始位置，默认0 */
      start: number;
    };
    /** 列表数据 */
    data: INews[];
  };
}

export interface NewsModelType {
  namespace: 'news';
  state: NewsModelState;
  effects: {
    /** 获取新闻列表数据 */
    fetchNews: Effect;
  };
  reducers?: {
  };
}