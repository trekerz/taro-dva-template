/**
 * component组件快速生成脚本
 */

const fs = require('fs')

const dirName = process.argv[2]
const capDirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)
if (!dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run com test')
  process.exit(0)
}

// 组件模板
const indexTemp = `import './${dirName}.scss'
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { IProps, IState } from './${dirName}.interface'

class ${capDirName} extends Component<IProps, IState> {
  static options = {
    addGlobalClass: true
  }
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }
  static defaultProps: IProps = {}

  componentWillMount () { }

  componentDidMount () { }

  componentDidShow () { }

  componentWillUnmount () { }

  componentDidHide () { }

  render() {
    return (
      <View className='com-${dirName}-wrapper'>
        组件
      </View>
    )
  }
}

export default ${capDirName}
`

// scss文件模板
const scssTemp = `
.com-${dirName}-wrapper {
  width: 100%;
}
`

// config 接口地址配置模板
const configTemp = `
export default {
  test: '/wechat/perfect-info', //xxx接口
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
`

fs.mkdirSync(`./src/components/${dirName}`)
process.chdir(`./src/components/${dirName}`)

fs.writeFileSync(`${dirName}.tsx`, indexTemp)
fs.writeFileSync(`${dirName}.scss`, scssTemp)
fs.writeFileSync(`${dirName}.interface.ts`, interfaceTemp)

process.exit(0)
