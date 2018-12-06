import React from 'react';
import PropTypes from 'prop-types';
import H3 from 'components/H3';
import ArrowLink from 'components/ArrowLink';

import StyledFooter from './styles/footer';
import Emoji from './styles/emoji';

const Footer = props => (
  <StyledFooter {...props}>
    <Emoji>{props.emoji}</Emoji>
    <H3>{props.text}</H3>
    <ArrowLink href={props.url}>{props.link}</ArrowLink>
  </StyledFooter>
);

Footer.defaultProps = {
  emoji: '👋',
  text: 'Are you in Paris or New York?',
  url: 'mailto:hi@bobby.so',
  link: "Let's find a time to meet",
};

Footer.propTypes = {
  emoji: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  link: PropTypes.string,
};

export default Footer;
