import Taro from '@tarojs/taro'
import { IResponseData } from '../type/request'
import { baseUrl, REQUEST_CODE } from './constant'
export class Http {
  /**
   *
   * @static request请求 基于 Taro.request
   * @param {IOptions} opts
   */
  static async request<T>(opts: Taro.request.Option<IResponseData<T>>) {
    try {
      if (!/^http[s]\:/.test(opts.url || '')) {
        opts.url = baseUrl + opts.url
      }
      const res = await Taro.request(opts)
      return res.data
    } catch(error) {
      return {
        code: REQUEST_CODE.NETWORKER_ERROR.code,
        data: null,
        message: REQUEST_CODE.NETWORKER_ERROR.text
      }
    }
  }

  static get<T>(url: string, data: any) {
    return this.request<T>({
      url,
      method: 'GET',
      data
    })
  }

  static post<T>(url: string, data: any) {
    return this.request<T>({
      url,
      method: 'POST',
      data
    })
  }
}