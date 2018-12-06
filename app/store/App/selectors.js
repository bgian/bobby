import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');
const globalRoute = state => state.get('global');

const makeSelectLocation = () => {
  createSelector(selectRoute, routeState => routeState.get('location').toJS());
}

const makeSelectLoading = () => {
  createSelector(globalRoute, state => state.get('loading').toJS());
}

export {
  makeSelectLocation,
  makeSelectLoading
};
