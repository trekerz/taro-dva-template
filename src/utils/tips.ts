import Taro from '@tarojs/taro'

/**
 * 提示语加载工具类
 */
export default class Tips {
  static isLoading = false

  /**
   * 信息提示
   */
  static toast(title: string, onHide?: () => void) {
    Taro.showToast({
      title,
      icon: 'none',
      mask: true,
      duration: 1500
    })
    if (onHide) {
      setTimeout(() => {
        onHide()
      }, 500)
    }
  }

  /**
   * 弹出加载提示
   */
  static loading(title: string = '加载中', force: boolean = false) {
    if (this.isLoading && !force) {
      return
    }
    this.isLoading = true
    if (Taro.showLoading)  {
      Taro.showLoading({
        title,
        mask: true
      })
    } else {
      Taro.showNavigationBarLoading()
    }
  }

  /**
   * 加载完毕处理
   */
  static loaded() {
    let duration = 0
    if (this.isLoading) {
      this.isLoading = false
      if (Taro.hideLoading) {
        Taro.hideLoading()
      } else {
        Taro.hideNavigationBarLoading()
      }
      duration = 500
    }
    // 隐藏动画大约 500ms, 避免后面直接 toast 时的显示 bug
    return new Promise(resolve => setTimeout(resolve, duration))
  }

  /**
   * 弹出提示框
   */
  static success(title: string, duration: number = 1500) {
    Taro.showToast({
      title,
      icon: 'success',
      mask: true,
      duration
    })
    if (duration > 0) {
      return new Promise(resolve => setTimeout(resolve, duration))
    }
  }
}
