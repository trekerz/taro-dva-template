import Taro from '@tarojs/taro'

const TOKEN = 'TOKEN'

export const setToken = (token) => {
  return Taro.setStorageSync(TOKEN, token)
}

export const getToken = () => {
  return Taro.getStorageSync(TOKEN)
}
