import { requireModules } from '../utils/utils'

const modelContext = require.context('../pages', true, /model\.ts$/)
const models = requireModules(modelContext)

export default models
