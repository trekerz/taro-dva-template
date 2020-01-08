
import Api from '../../utils/request'
import { IResponse } from '../../types/api'
import { IData } from './index.interface'

// 获取下次发射任务
export const getNextLaunch = (data): IResponse<IData> =>
  Api.getNextLaunch(data)
