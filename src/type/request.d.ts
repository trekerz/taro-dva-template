/** 接口响应数据 */
export interface IResponseData<T> {
  code: number;
  data: T;
  message: string;
}