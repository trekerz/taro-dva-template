import { requireModules } from '../utils/utils'
import globalRequestConfig from '../services/config'

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

export default {
  ...requestConfig,
  ...globalRequestConfig
}
