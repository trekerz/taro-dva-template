import './index.scss'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { IProps, IState, IData } from './index.interface'
// import { } from '../../components'

@connect(({ index }) => ({
    ...index,
}))

class Index extends Component<IProps, IState> {
  config: Config = {
    navigationBarTitleText: '标题'
  }
  constructor(props: IProps) {
    super(props)
    this.state = { }
  }

  componentWillMount () { }

  componentDidMount () {
    this.getData()
  }

  componentDidShow () { }

  componentWillUnmount () { }

  componentDidHide () { }

  // 获取今日数据
  async getData() {
    await this.props.dispatch({
      type: 'index/getNextLaunch',
      payload: null
    })
  }

  render() {
    const {
      data = {} as IData
    } = this.props
    return (
      <View className='page-index-wrapper'>
        <View>SpaceX下一次发射任务</View>
        <View>班次：{data.flight_number}</View>
        <View>任务：{data.mission_name}</View>
        <View>UTC时间：{data.launch_date_utc}</View>
        <View>火箭：{data.rocket.rocket_type} {data.rocket.rocket_name}</View>
      </View>
    )
  }
}

export default Index
