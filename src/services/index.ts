import Api from '../utils/request'
import { IResponse } from '../types/api'

/**
 * 全局api
 */

// 检查是否绑定
export const checkIfBinded = (): IResponse<boolean> =>
  Api.checkIfBinded()
