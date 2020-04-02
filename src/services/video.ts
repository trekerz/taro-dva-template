import { Http } from "../utils/request";

/** 视频服务接口 */
export class VideoService {
  /** 视频推荐列表 */
  static getRecommendList() {
    return Http.get('user-service/user/v1/user/token/', {
      timeline: 0,
      count: 30
    })
  }
}