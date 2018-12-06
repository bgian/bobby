import { fromJS } from 'immutable';
import { UPDATE_LOADING } from './constants';

const initialState = fromJS({
  loading: false
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOADING:
      return state.set('loading', action.state);
    default:
      return state;
  }
}

export default reducer;
