/**
 * 接口地址
 */
export const baseUrl = 'https://way.jd.com/jisuapi/';

export const APPKEY = 'bdf37705a1cc9fe12c586640d04bca00';

/**
 * 接口业务返回码
 */
export const REQUEST_CODE = {
  SUCCESS: {
    key: 'SUCCESS',
    code: '10000',
    text: '请求成功'
  },
  APPKEY_ERROR: {
    key: 'APPKEY_ERROR',
    code: '10001',
    text: 'appkey错误'
  },
  NETWORKER_ERROR: {
    key: 'NETWORKER_ERROR',
    code: '-999',
    text: '网络错误'
  }
};
