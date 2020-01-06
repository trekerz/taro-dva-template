import './index.scss'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { IProps, IState } from './index.interface'
// import { } from '../../components'

// @connect(({ index }) => ({
//     ...index,
// }))

class Index extends Component<IProps, IState> {
  config: Config = {
    navigationBarTitleText: '标题'
  }
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  componentWillMount () { }

  componentDidMount () { }

  componentDidShow () { }

  componentWillUnmount () { }

  componentDidHide () { }

  render() {
    return (
      <View className='page-index-wrapper'>
        页面
      </View>
    )
  }
}

export default Index
