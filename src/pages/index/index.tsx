import './index.scss'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { VideoService } from '../../services/video'

interface IProps {

}

interface IState {

}

class Index extends Component<IProps, IState> {
  config: Config = {
    navigationBarTitleText: '首页'
  }
  constructor(props: IProps) {
    super(props)
    this.state = { }
  }

  async componentDidMount () {
    const res = await VideoService.getRecommendList()
    console.log(res)
  }

  componentDidShow () { }

  componentWillUnmount () { }

  componentDidHide () { }

  render() {
    return (
      <View onClick={this.componentDidMount.bind(this)}>
        ssss
      </View>
    )
  }
}

export default Index
