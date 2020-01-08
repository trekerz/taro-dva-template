/**
 * pages页面快速生成脚本
 */

const fs = require('fs')

const dirName = process.argv[2]
const capDirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)
if (!dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run page test')
  process.exit(0)
}

// 页面模板
const indexTemp = `import './${dirName}.scss'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { IProps, IState } from './${dirName}.interface'
// import { } from '../../components'

// @connect(state => ({
//   ...state.${dirName},
//   global: state.global,
//   loading: state.loading
// }))

class ${capDirName} extends Component<IProps, IState> {
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
      <View className='page-${dirName}-wrapper'>
        页面
      </View>
    )
  }
}

export default ${capDirName}
`

// scss文件模板
const scssTemp = `
.page-${dirName}-wrapper {
  width: 100%;
  min-height: 100vh;
}
`

// config 接口地址配置模板
const configTemp = `
export default {
  //xxx接口
  test: {
    url: '/wechat/perfect-info',
    method: 'GET'
  },
}
`

// 接口请求模板
const serviceTemp = `
import Api from '../../utils/request'
import { IResponse } from '../../types/api'
import { IData } from './index.interface'

export const testApi = (data): IResponse<IData> =>
  Api.test(data)
`

// model模板
const modelTemp = `
// import Taro from '@tarojs/taro'
import * as ${dirName}Api from './service'

export default {
  namespace: '${dirName}',
  state: {},

  effects: {},

  reducers: {}

}
`

const interfaceTemp = `
/**
 * ${dirName}.state 参数类型
 *
 * @export
 * @interface IState
 */
export interface IState { }

/**
 * ${dirName}.props 参数类型
 *
 * @export
 * @interface IProps
 */
export interface IProps { }

/**
 * 接口返回数据类型
 *
 * @export
 * @interface IData
 */
export interface IData { }
`

fs.mkdirSync(`./src/pages/${dirName}`)
process.chdir(`./src/pages/${dirName}`)

fs.writeFileSync(`${dirName}.tsx`, indexTemp)
fs.writeFileSync(`${dirName}.scss`, scssTemp)
fs.writeFileSync('config.ts', configTemp)
fs.writeFileSync('service.ts', serviceTemp)
fs.writeFileSync('model.ts', modelTemp)
fs.writeFileSync(`${dirName}.interface.ts`, interfaceTemp)

process.exit(0)
