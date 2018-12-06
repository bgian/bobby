import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLanding = state => state.get('landing', initialState);

const makeSelectEmail = () =>
  createSelector(selectLanding, state => state.get('email'));

export {
  selectLanding,
  makeSelectEmail
};
