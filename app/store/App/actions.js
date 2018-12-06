import { UPDATE_LOADING } from './constants';

export const updateLoading = (state) => {
  return (dispatch) => {
    dispatch(changeLoading(state));
  };
}

const changeLoading = (state) => {
  return {
    type: UPDATE_LOADING,
    state,
  };
}
