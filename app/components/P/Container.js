import React, { Children } from 'react';

import StyledParagraph from './styles/paragraph';

const Paragraph = (props) => (
  <StyledParagraph {...props}>
    {Children.toArray(props.children)}
  </StyledParagraph>
);

export default Paragraph;
