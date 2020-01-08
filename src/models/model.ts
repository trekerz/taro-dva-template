import * as globalApi from '../services'
import { getToken } from '../utils/storage'
import { IResponse } from '../types/api'
import { isSuccess } from '../utils/request'

// 全局model
export default {
  namespace: 'global',
  state: {
    hasLogin: false,
  },

  effects: {
    // 检查是否绑定
    * checkIfBinded({ payload }, { select, call, put }) {
      const res: IResponse<boolean> = yield call(globalApi.checkIfBinded)
      const data = isSuccess(res)
      return data
    },
  },

  reducers: {
    // 检查是否已登录
    checkIfLogin(state) {
      const token = getToken()
      let hasLogin = false
      if (token) {
        hasLogin = true
      }
      return { ...state, hasLogin }
    },
  }

}
