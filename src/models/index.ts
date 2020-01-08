import { requireModules } from '../utils/utils'
import globalModel from './model'

// 导入各页面model
const modelContext = require.context('../pages', true, /model\.ts$/)
const models = requireModules(modelContext)

export default [
  ...models,
  globalModel
]
