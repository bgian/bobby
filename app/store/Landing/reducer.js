import { fromJS } from 'immutable';
import { CHANGE_EMAIL } from './constants';

export const initialState = fromJS({
  email: '',
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return state.set('email', action.email);
    default:
      return state;
  }
}

export default reducer;
