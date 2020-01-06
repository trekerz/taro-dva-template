import Taro, { Component } from '@tarojs/taro'
import { SHAREINFO } from './index'

/**
 * 进行 taro 的处理
 * 1. 方法的改写
 * 2. utils 的挂载
 */

/**
 * navigateTo 超过8次之后 强行进行redirectTo 否则会造成页面卡顿
 */
const taroNavigateTo = Taro.navigateTo
Taro.navigateTo = (data) => {
  if (Taro.getCurrentPages().length > 8) {
    return Taro.redirectTo(data)
  }
  return taroNavigateTo(data)
}

/**
 * Component挂载分享方法
 */
Component.prototype.onShareAppMessage = function () {
  return SHAREINFO
}
