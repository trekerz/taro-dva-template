/** 接口响应数据 */
export interface IResponseData<T> {
  code: string;
  result: T | null;
  msg: string;
}