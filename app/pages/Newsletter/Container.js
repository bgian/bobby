import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { updateEmail } from 'store/Landing/actions'
import { makeSelectEmail } from 'store/Landing/selectors'
import reducer from 'store/Landing/reducer';
import saga from 'store/Landing/saga';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import NewsletterComponent from './Component';

const NewsletterContainer = (props) => (
  <NewsletterComponent
    updateEmail={props.updateEmail}
    email={props.email}
  />
);

NewsletterComponent.propTypes = {
  updateEmail: PropTypes.func,
  email: PropTypes.string
}

export const mapDispatchToProps = (dispatch) => ({
  updateEmail: (evt) => dispatch(updateEmail(evt.target.value))
});

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'landing', reducer });
const withSaga = injectSaga({ key: 'landing', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewsletterContainer);
