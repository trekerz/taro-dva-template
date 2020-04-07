import { Http } from "@/utils/request";

/** 新闻列表数据 */
export interface INewsList {
  msg: string;
  result: {
    channel: string;
    list: INews[];
    num: number;
  }
}

/** 新闻详情数据 */
export interface INews {
  category: string;
  content: string;
  pic: string;
  src: string;
  time: string;
  title: string;
  url: string;
  weburl: string;
}

/** 新闻推荐列表参数 */
export interface RecommendListParams {
  /** 频道 */
  channel: string;
  /** 数量 默认10，最大40 */
  num: number;
  /** 起始位置，默认0 */
  start: number;
}

/** 新闻服务接口 */
export class NewsService {
  /** 新闻推荐列表 */
  static getRecommendList(d: RecommendListParams) {
    return Http.get<INewsList>('get', d)
  }
}