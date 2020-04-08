/**
 * 公共model
 */
import { Reducer } from 'redux';

interface CommonModel {
  reducers: {
    updateState: Reducer<any>;
  };
}

const commonModel: CommonModel = {
  reducers: {
    updateState(state: any, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  },
};

export default commonModel;
