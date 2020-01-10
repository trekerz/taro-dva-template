import Taro, { Component } from '@tarojs/taro'
import {
  ISMOCK,
  MAINHOST,
  APPCONFIG
} from '../config'
import requestConfig, {
  commonParam
} from '../config/requestConfig'
import Tips from './tips'
import { getToken } from './storage'
import { HTTP_CODE } from './constant'
import { IResponse } from '../types/api'

// import { createLogger } from './logger'

declare type TMethods = 'GET' | 'OPTIONS' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
declare type THeaders = { [key: string]: string }
declare type TDatas = { method: TMethods, [key: string]: any }
interface IOptions {
  url: string
  host?: string
  method?: TMethods
  data?: TDatas
  header?: THeaders
}

export class Request {
  //登陆的promise
  static loginReadyPromise: Promise<any> = Promise.resolve()
  // 正在登陆
  static isLogining: boolean = false
  // 导出的api对象
  static apiLists: { [key: string]: () => any } = {}

  // constructor(setting) {

  // }

  /**
   * @static 处理options
   * @param {IOptions | string} opts
   * @param {TDatas} data
   * @returns {IOptions}
   * @memberof Request
   */
  static combineOptions(opts, data: TDatas, method: TMethods): IOptions {
    if (typeof opts === 'string') {
      opts = {
        url: opts
      }
    }

    // 复制一份要改的url
    let _url = opts.url

    // 填充url中的常量
    _url = _url
      .replace(/\{\}/g, APPCONFIG.tenantCode)

    // 填充url中的变量
    // 变量格式为：{变量名}
    const varNameList = _url.match(/\{.*?\}/g)
    if (varNameList && varNameList.length) {
      varNameList.map(v => {
        const varName = v.replace('{', '').replace('}', '')
        if (data && data[varName]) {
          _url = _url.replace(v, data[varName])
          delete data[varName]
        } else {
          _url = _url.replace(v, '')
        }
      })
    }

    return {
      data: { ...commonParam, ...opts.data, ...data },
      method: opts.method || data.method || method || 'GET',
      url: `${opts.host || MAINHOST}${_url}`
    }
  }

  /**
   *
   * @static request请求 基于 Taro.request
   * @param {IOptions} opts
   */
  static async request(opts: IOptions) {
    const token = getToken()

    // // token不存在
    // if (!token) {
    //   // await this.login()
    //   this.returnToLogin()
    //   return
    // }

    // token存在
    Object.assign(opts, { header: { 'token': token } })

    //  Taro.request 请求
    const res = await Taro.request(opts)

    // 是否mock
    if (ISMOCK) { return res.data }

    // 登陆失效
    if (res.data.statusCode === HTTP_CODE.UNAUTHORIZED.code) {
      // await this.login()
      // return this.request(opts)
      this.returnToLogin()
      return
    }

    // 请求成功
    if (res.data && res.data.statusCode === HTTP_CODE.SUCCESS.code) {
      return res.data
    }

    // 请求错误
    const d = {
      ...res.data,
      statusMessage: (res.data && res.data.statusMessage) || `网络开小差啦～`
    }
    Tips.toast(d.statusMessage)
    return d
  }

  // /**
  //  *
  //  * @static 登陆
  //  * @returns  promise
  //  * @memberof Request
  //  */
  // static login() {
  //   if (!this.isLogining) { this.loginReadyPromise = this.onLogining() }
  //   return this.loginReadyPromise
  // }

  // /**
  //  *
  //  * @static 登陆的具体方法
  //  * @returns
  //  * @memberof Request
  //  */
  // static onLogining() {
  //   this.isLogining = true
  //   return new Promise(async (resolve, reject) => {
  //     // 获取code
  //     const { code } = await Taro.login()

  //     // 请求登录
  //     const { data } = await Taro.request({
  //       url: `${MAINHOST}${requestConfig.loginUrl}`,
  //       data: { code: code }
  //     })

  //     if (data.code !== 0 || !data.data || !data.data.token) {
  //       reject()
  //       return
  //     }

  //     Taro.setStorageSync('token', data.data.token)
  //     this.isLogining = false
  //     resolve()
  //   })
  // }

  /**
   * 返回登录页
   */
  static returnToLogin() {
    // 跳转到登录页
    // Taro.reLaunch({
    //   url: '/pages/login/login'
    // })
  }

  /**
   *
   * @static  创建请求函数
   * @param {(IOptions | string)} opts
   * @returns
   * @memberof Request
   */
  static createRequests(opts: IOptions | string): () => {} {
    return async (data = {}, method: TMethods = 'GET') => {
      const _opts = this.combineOptions(opts, data, method)
      const res = await this.request(_opts)
      // createLogger({ title: 'request', req: _opts, res: res })
      return res
    }
  }

  /**
   *
   * @static 抛出整个项目的api方法
   * @returns
   * @memberof Request
   */
  static getApiList(requestConfig) {
    if (!Object.keys(requestConfig).length) return {}

    Object.keys(requestConfig).forEach((key) => {
      this.apiLists[key] = this.createRequests(requestConfig[key])
    })

    return this.apiLists
  }
}

// 验证接口返回值
export function isSuccess<T>(res: IResponse<T>): T | null {
  if (res && res.statusCode === HTTP_CODE.SUCCESS.code) {
    return res.responseContent
  }
  return null
}

// 验证保存类接口返回值
export function isSuccessSave<T>(res: IResponse<T>): boolean {
  if (res && res.statusCode === HTTP_CODE.SUCCESS.code) {
      return true
  }
  return false
}

// 导出
const Api = Request.getApiList(requestConfig)
Component.prototype.$api = Api
export default Api as any
