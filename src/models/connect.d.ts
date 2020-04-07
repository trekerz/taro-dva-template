import { NewsModelState } from "./news.d";
import { Dispatch, AnyAction } from "redux";

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    news: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
  news: NewsModelState;
}

export interface DispatchAction extends AnyAction {
  payload?: Object;
}

export interface ConnectProps extends ConnectState {
  dispatch: Dispatch<DispatchAction>;
}