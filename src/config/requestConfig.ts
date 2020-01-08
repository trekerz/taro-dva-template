import { requireModules } from '../utils/utils'

/**
 * 请求的公共参数
 */
export const commonParam = {}

/**
 * 各页面api映射文件
 */
const reqContext = require.context('../pages', true, /config\.ts$/)
const requestList = requireModules(reqContext)
const requestConfig = {}
if (requestList) {
  requestList.forEach(req => {
    Object.keys(req).forEach(reqKey => {
      requestConfig[reqKey] = req[reqKey]
    })
  })
}

/**
 * 全局api
 */
const globalRequestConfig = {
  // 检查是否绑定
  checkIfBinded: {
    url: '/{}/check-bind',
    method: 'GET'
  },
}

export default {
  ...requestConfig,
  ...globalRequestConfig
}
