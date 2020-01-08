/**
 * 线上环境
 * 这里测试使用的是 spaceX 接口
 */
export const ONLINEHOST = 'https://api.spacexdata.com'

/**
 * 测试环境
 */
export const QAHOST = 'http://xxx.cn'

/**
 * 线上mock
 */
export const MOCKHOST = 'http://xxx/mock'

/**
 * 是否mock
 */
export const ISMOCK = false

/**
 * 当前的host  ONLINEHOST | QAHOST | MOCKHOST
 */
export const MAINHOST = ONLINEHOST

/**
 * 全局的分享信息 不用每一个都去写
 */
export const SHAREINFO = {
  'title': '分享标题',
  'path': '路径',
  'imageUrl': ''
}

/**
 * 基础配置
 */
export const APPCONFIG = {
  appId: 'wx123456789101112',
  tenantCode: 'test'
}
