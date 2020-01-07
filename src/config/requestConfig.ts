import { requireModules } from '../utils/utils'

/**
 * 请求的公共参数
 */
export const commonParam = {}

/**
 * 请求映射文件
 */
const reqContext = require.context('../pages', true, /config\.ts$/)
const requestList = requireModules(reqContext)
const requests = {}
if (requestList) {
  requestList.forEach(req => {
    Object.keys(req).forEach(reqKey => {
      requests[reqKey] = req[reqKey]
    })
  })
}
const requestConfig = {
  loginUrl: '/api/user/wechat-auth', // 微信登录接口
  ...requests
}

export default requestConfig
