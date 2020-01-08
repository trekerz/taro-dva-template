
import Api from '../../utils/request'
import { IResponse } from '../../types/api'
import { IData } from './index.interface'

export const getNextLaunch = (data): IResponse<IData> =>
  Api.getNextLaunch(data)
