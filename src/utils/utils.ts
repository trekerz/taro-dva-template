/**
 * 批量导入模块
 */
export function requireModules(context) {
  if (!context || !context.keys) {
    return
  }
  let result = []
  // 导入各模块
  context.keys().forEach(ret => {
    const reqModule = context(ret)
    result = result.concat(reqModule.default || reqModule)
  })
  return result
}
