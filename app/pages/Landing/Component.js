import React from 'react';
import ColorScroll from 'react-color-scroll';

import Wrapper from 'components/Wrapper';
import Header from 'components/Header';
import Footer from 'components/Footer';
import H1 from 'components/H1';
import P from 'components/P';
import H2 from 'components/H2';
import Small from 'components/Small';
import PortfolioItem from 'components/PortfolioItem';
import ArrowLink from 'components/ArrowLink';

import Hero from './styles/hero';
import Items from './styles/items';

let portfolioItems = null;

class LandingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animateIn: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const portfolioYPos = portfolioItems.getBoundingClientRect().y;
    if (portfolioYPos < 700) {
      this.setState({ animateIn: true });
    }
  }

  render() {
    return (
      <ColorScroll colors={['#FFF7EF', '#F2F2FD', '#FCEEEE']} onScroll={this.handleScroll}>
        <Header />
        <Wrapper>
          <Wrapper maxWidth={563}>
            <Hero className="animation-fadeInUp animation-delay-1">
              <H1>Bobby Giangeruso</H1>
              <P>
                is building products in the mental health {' '}
                <span role="img" aria-label="brain">
                  🧠
                </span>{' '}
                space. Spending my time in NYC & Paris.
              </P>
              <P small light bottom={25}>
                Co-founder at <ArrowLink target="_blank" href="https://itunes.apple.com/us/app/jour-guided-journaling/id1439590239">Jour</ArrowLink>. Spend most of my time thinking 
                about startups, design and product.
              </P>
              <P small light bottom={25}>
                If you’re interested in any of those things, you should join this <ArrowLink target="_blank" href="https://t.me/joinchat/KJwGcBB0PWseDvy-FCY5-w">group on Telegram</ArrowLink> 
                {' '} I started ✨
              </P>
              <P small light bottom={25}>
                Read more about my <ArrowLink target="_blank" href="https://angel.co/bgian">previous experiences</ArrowLink>.
              </P>
            </Hero>
          </Wrapper>

          <Small opacity animate={this.state.animateIn}>
            Get to know my recent work
          </Small>
          <H2 opacity animate={this.state.animateIn}>
            Things {"I've"} worked on
          </H2>
          <Items
            animate={this.state.animateIn}
            innerRef={(elm) => {
              portfolioItems = elm;
            }}
          >
            <PortfolioItem
              with="Human "
              tagline="is a home for building a joyful world"
              tags="Co-founder, Designer"
              link="http://ofhuman.com"
              image="human"
            />

            <PortfolioItem
              with="jour "
              tagline="is self-care through journaling"
              tags="Co-founder, Designer"
              link="https://itunes.apple.com/us/app/jour-guided-journaling/id1439590239"
              image="jour"
            />

            <PortfolioItem
              with="Quinn "
              tagline="is your home for content & copywriting"
              tags="Branding, Product"
              link="http://quinncontent.com"
              image="quinn"
            />

            <PortfolioItem
              with="Zebra "
              tagline="is connecting brands with youth tastemakers"
              tags="Product, Branding, Visual Language"
              link="http://zebraiq.com"
              image="zebra"
            />
          </Items>

          <Footer />
        </Wrapper>
      </ColorScroll>
    );
  }
}

export default LandingComponent;
