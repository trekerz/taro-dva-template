/**
 * 用户信息数据类型
 */
export interface IWXUserInfo {
  nickName: string
  avatarUrl: string
  gender: number
  country: string
  province: string
  city: string
  language: string
}

/**
 * input type类型
 */
export type IWXInputType = 'text' | 'number' | 'idcard' | 'digit'

/**
 * taro - imageloader - files参数类型
 */
export interface ITaroImageLoaderFiles {
  url: string
  file: {
    path: string
    size: number
  }
}
