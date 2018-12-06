import React, { Children } from 'react';
import PropTypes from 'prop-types';
import StyledLink from './styles/link';

class ArrowLink extends React.PureComponent {
  render() {
    return <StyledLink {...this.props}>{Children.toArray(this.props.children)}</StyledLink>;
  }
}

ArrowLink.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ArrowLink;
