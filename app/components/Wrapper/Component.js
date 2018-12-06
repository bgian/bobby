import React, { PureComponent, Children } from 'react';
import StyledWrapper from './styles/wrapper';

class WrapperComponent extends PureComponent {
  render () {
    return (
      <StyledWrapper {...this.props}>
        {Children.toArray(this.props.children)}
      </StyledWrapper>
    );
  }
};

export default WrapperComponent;
