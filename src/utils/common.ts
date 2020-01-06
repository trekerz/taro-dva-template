// 共用函数
/**
 * 封装 padEnd
 */
export const pad = function (str: string, length?: number) {
  return String.prototype.padEnd.call(String(str), length)
}

/**
 * 时间格式的转换
 */
export const formatTime = (time) => {
  return `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}.${pad(time.getMilliseconds(), 3)}`
}

/**
 * 全局公共变量
 */
export const globalData: any = {}
