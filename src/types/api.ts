
/**
 * HTTP 请求返回的通用数据接口格式
 * @interface
 */
export interface IResponse<T = undefined> {
  /**
   * @attribute - 请求返回的业务状态代码。
   * 需要注意是的，<em>不是<em> HTTP 的状态码。
   */
  statusCode: string

  /** @attribute - 请求返回的文本信息（关于本次请求结果的简要说明） */
  statusMessage: string

  /** @attribute - HTTP请求返回的主数据（可能为空） */
  responseContent: T
}

/**
* HTTP 请求返回[主数据]{@link IResponse#responseContent}为数组格式的接口约束
*
* @interface
* @extends IResponse
*/
export interface IArrayResponse<T> extends IResponse<T[]> { }

/**
* HTTP 请求返回的分页类数据格式的接口约束
* @interface
*/
export interface IPagination {
  endRow: number

  firstPage: number

  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  lastPage: number
  navigateFirstPage: number
  navigateLastPage: number
  navigatePages: number
  navigatepageNums: number[]
  nextPage: number
  pageNum: number
  /**
   * 默认值为 15条每页
   *
   * @memberof Ipagination
   */
  pageSize: number
  pages: number
  prePage: number
  size: number
  startRow: number
  total: number
}

/**
* 列表类接口的返回数据结构
*/
export interface IListResponse<T> extends IPagination {
  list: Array<T>
}

export interface IPageParams {
  pageNum: number
  pageSize: number
}
