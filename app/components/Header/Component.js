import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from 'components/Wrapper';

import StyledHeader from './styles/header';
import HeaderTitle from './styles/title';
import StyledNav from './styles/nav';

const HeaderComponent = () => (
  <StyledHeader className="animation-fadeInDown animation-delay-0">
    <Wrapper className="wrapper">
      <HeaderTitle>
        <Link to="/" href="/">
          <span role="img" aria-label="wave">
            👋{' '}
          </span>Startups, Product, Design
        </Link>
      </HeaderTitle>
      <StyledNav>
        <li>
          <a href="https://twitter.com/_bgian" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://medium.com/@_bgian" target="_blank" rel="noopener noreferrer">
            Medium
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/_bgian/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://t.me/bgian" target="_blank" rel="noopener noreferrer">
            Chat
          </a>
        </li>
      </StyledNav>
    </Wrapper>
  </StyledHeader>
);

export default HeaderComponent;
