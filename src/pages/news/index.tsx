import './index.scss'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { ConnectState, ConnectProps } from '@/models/connect.d'

interface IProps extends ConnectProps {
}

interface IState {

}

@connect((d: ConnectState) => d)
class Index extends Component<IProps, IState> {
  config: Config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
  }

  constructor(props: IProps) {
    super(props);
  }

  componentDidMount () {
    const { news } = this.props;
    news.list.data.length === 0 && this.getNews(true);
    
  }

  componentDidShow () { }

  componentWillUnmount () { }

  componentDidHide () { }

  async onReachBottom() {
    await this.getNews(false);
    Taro.stopPullDownRefresh();
  }

  onPullDownRefresh() {
    this.getNews(true);
  }

  async getNews(refresh: boolean) {
    const { dispatch, loading } = this.props;
    if (loading.models.news) return;
    const payload = refresh ? { start: 0 } : undefined;
    await dispatch({
      type: 'news/fetchNews',
      payload
    });
  }

  gotoNews(index: number) {
    Taro.navigateTo({ url : `/pages/news/news?id=${index}`})
  }

  render() {
    const { list } = this.props.news;
    return (
      <View className="page-index-wrapper">
        {list.data.map((item, i) => {
          return (
            <View className="news-cell" key={item.title} onClick={this.gotoNews.bind(this, i)}>
              <View className="news-cell-hd"><Image src={item.pic} className="img" mode="aspectFit"/></View>
              <View className="news-cell-bd">
                <View className="title">{item.title}</View>
                <View className="desc">
                  {`${item.time} ${item.src}`}
                </View>
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}

export default Index
