import { formatTime } from './common'

// 封装 log 函数

const defaults = {
  level: 'log',
  logger: console,
  logErrors: true,
  colors: {
    title: 'inherit',
    req: '#9e9e9e',
    res: '#4caf50',
    error: '#f20404'
  }
}

function printBuffer(logEntry, options) {
  const {
    logger,
    colors
  } = options

  let {
    title,
    started,
    req,
    res
  } = logEntry

  // Message
  const headerCss = ['color: gray; font-weight: lighter;']
  const styles = s => `color: ${s}; font-weight: bold;`

  // render
  logger.group(`%c ${title} @${formatTime(started)}`, ...headerCss)
  logger.log('%c req', styles(colors.req), req)
  logger.log('%c res', styles(colors.res), res)
  logger.groupEnd()
}

interface ILogEntry {
  started?: object // 触发时间
}

function createLogger(options: ILogEntry = {}) {
  const loggerOptions = Object.assign({}, defaults, options)
  const logEntry = options
  logEntry.started = new Date()
  printBuffer(logEntry, Object.assign({}, loggerOptions))
}

export {
  defaults,
  createLogger
}
