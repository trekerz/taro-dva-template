
// import Taro from '@tarojs/taro';
import * as indexApi from './service'

export default {
  namespace: 'index',
  state: {
    data: {},
    v: '2.0'
  },
  effects: {
    * getNextLaunch({ payload }, { select, call, put }) {
      const { v } = yield select(state => state.index)
      console.log(v)
      const data: any = {}
      if (payload) {
        data.payload = payload
      }
      const ret = yield call(indexApi.getNextLaunch, data)
      yield put({
        type: 'updateState',
        payload: {
          data: ret
        }
      })
    }
  },
  reducers: {
    updateState(state, { payload: data }) {
      return { ...state, ...data }
    }
  }
}
