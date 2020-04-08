/* tslint:disable */
/* eslint-disable */
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

interface IProps {
  html: string;
}

interface IState {

}
const wxParse: any = require("@/wxParse/wxParse.js");

export class HtmlParse extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
  }

  componentWillReceiveProps(next: IProps) {
    if (this.props.html !== next.html) {
      wxParse.wxParse('article', 'html', `<div>${next.html}</div>`, this.$scope, 5)
    }
  }

  componentDidMount() {
    const { html } = this.props;
    wxParse.wxParse('article', 'html', `<div>${html}</div>`, this.$scope, 5)
  }
  
  render() {
    return (
      <View>
        <import src="../../wxParse/wxParse.wxml"/>
        <template is="wxParse" data="{{wxParseData:article.nodes}}"/>
      </View>
    )
  }
}
