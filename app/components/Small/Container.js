import React, { Children } from 'react';
import PropTypes from 'prop-types';

import StyledSmall from './styles/small';

const Small = props => <StyledSmall {...props}>{Children.toArray(props.children)}</StyledSmall>;

Small.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Small;
