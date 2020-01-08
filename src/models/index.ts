import { requireModules } from '../utils/utils'

// 导入各页面model
const modelContext = require.context('../pages', true, /model\.ts$/)
const models = requireModules(modelContext)

// 全局model
const globalModel = {
  namespace: 'global',
  state: {},

  effects: {},

  reducers: {}

}

export default [
  ...models,
  globalModel
]
