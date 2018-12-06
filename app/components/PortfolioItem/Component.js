import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ArrowLink from 'components/ArrowLink';

import StyledPortfolioItem from './styles/item';
import Text from './styles/text';
import Tags from './styles/tags';

class PortfolioItemComponent extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      image: null
    }
  }

  componentDidMount(){
    if(this.props.image == 'human'){
      this.setState({ image: require('images/human.png')})
    } else if(this.props.image == 'jour'){
      this.setState({ image: require('images/jour.png')})
    } else if(this.props.image == 'quinn'){
      this.setState({ image: require('images/quinn.png')})
    } else if(this.props.image == 'zebra'){
      this.setState({ image: require('images/zebra.png')})
    }
  }
  render() {
    return (
      <StyledPortfolioItem className="item">
        <img src={this.state.image} alt={this.props.tagline} />
        <Text>
          <a href={this.props.link}>{this.props.with}</a>
          {this.props.tagline}
        </Text>
        <Tags>{this.props.tags}</Tags>
        {this.props.link && (
          <ArrowLink href={this.props.link}>
            {this.props.link.replace('http://', '').replace('https://', '')}
          </ArrowLink>
        )}
      </StyledPortfolioItem>
    );
  }
}

// PortfolioItemComponent.defaultProps = {
//   image: tempImage,
// };

PortfolioItemComponent.propTypes = {
  tagline: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  with: PropTypes.string.isRequired,
};

export default PortfolioItemComponent;
