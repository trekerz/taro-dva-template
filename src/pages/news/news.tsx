import './news.scss'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { ConnectState, ConnectProps } from '@/models/connect.d'
import { HtmlParse } from '@/components/htmlParse'

interface IProps extends ConnectProps {
}

interface IState {

}

@connect((d: ConnectState) => d)
class News extends Component<IProps, IState> {
  config: Config = {
    navigationBarTitleText: '详情'
  }

  constructor(props: IProps) {
    super(props);
  }

  get id() {
    return Number(this.$router.params.id || -999);
  }

  getNews() {
    const { news } = this.props;
    return news.list.data[this.id];
  }

  componentDidMount() {
    const news = this.getNews();
    const wxParse: any = require("@/wxParse/wxParse.js");
    wxParse.wxParse('article', 'html', `<div>${news.content}</div>`, this.$scope, 5)
  }
  
  render() {
    const news = this.getNews();
    return (
      <View className="page-news-wrapper">
        {news ? (
          <View className="news">
            <View className="title">{news.title}</View>
            <View className="desc">{`${news.time} ${news.src}`}</View>
            <View className="content">
              <HtmlParse html={news.content}/>
            </View>
          </View>
        ) : (<View className="empty">找不到数据</View>)}
      </View>
    )
  }
}

export default News
