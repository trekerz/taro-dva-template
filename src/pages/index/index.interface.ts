
/**
 * index.state 参数类型
 *
 * @export
 * @interface IState
 */
export interface IState { }

/**
 * index.props 参数类型
 *
 * @export
 * @interface IProps
 */
export interface IProps {
  dispatch?: any
  data?: IData
}

export interface IData {
  flight_number: number
  mission_name: string
  mission_id: []
  launch_year: number
  launch_date_unix: number
  launch_date_utc: string
  launch_date_local: string
  is_tentative: boolean
  tentative_max_precision: string
  tbd: boolean
  launch_window: object
  rocket: {
    rocket_id: string
    rocket_name: string
    rocket_type: string
  }
}
