import React, { Children } from 'react';
import PropTypes from 'prop-types';
import StyledHeading from './styles/heading';

const Heading = props => (
  <StyledHeading {...props}>{Children.toArray(props.children)}</StyledHeading>
);

Heading.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Heading;
