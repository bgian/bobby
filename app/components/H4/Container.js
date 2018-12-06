import React, { Children } from 'react';

import StyledHeading from './styles/heading';

const Heading = (props) => (
  <StyledHeading {...props}>
    {Children.toArray(props.children)}
  </StyledHeading>
);

export default Heading;
