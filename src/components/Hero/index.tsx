import * as React from 'react';
const HeroDiv = require('./styles').HeroDiv;

interface IProps extends React.Props<Hero> {
  color: string,
};

class Hero extends React.Component<any, any> {
  static defaultProps: IProps = {
    color: '#2d2d2d',
  }
  render() {
    return (
      <HeroDiv color={this.props.color}>
        {this.props.children}
      </HeroDiv>
    );
  }
}

export default Hero;