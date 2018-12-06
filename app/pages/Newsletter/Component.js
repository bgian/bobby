import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Wrapper from 'components/Wrapper';
import Footer from 'components/Footer';
import H1 from 'components/H1';
import H4 from 'components/H4';
import P from 'components/P';

import Hero from './styles/hero';
import Date from './styles/date';
import Article from './styles/article';
import BackButton from './styles/back';
import Email from './styles/email';

class NewsletterComponent extends PureComponent {
  render () {
    return (
      <Wrapper>
        <Helmet title='Bobby Giangeruso | Newsletter' />
        <BackButton>
          <Link to='/'>👈 Back</Link>
        </BackButton>
        <Wrapper maxWidth={580}>
          <Email>
            <input
              value={this.props.email}
              placeholder={'Your email address'}
              onChange={this.props.updateEmail}
            />
            <P>💌  New projects, insights and interesting things I discover.</P>
          </Email>
          <Hero>
            <H1>Thoughts</H1>
          </Hero>

          <Article>
            <H4>test</H4>
            <Date>June 13, 2018</Date>
            <P smallest bottom={0}>Could be one line of text.</P>
            <P smallest bottom={0}>Could be two lines of text.</P>
            <P smallest bottom={0}>Maybe it only needs to be three.</P>
          </Article>

        </Wrapper>
        <Footer emoji={'💬'} text='Want more thoughts?' link={'Follow me on twitter'} url='https://twitter.com/_bgian' />
      </Wrapper>
    )
  }
}

NewsletterComponent.propTypes = {
  updateEmail: PropTypes.func,
  email: PropTypes.string
}

export default NewsletterComponent
