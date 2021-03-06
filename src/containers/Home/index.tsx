import * as React from 'react';
import { Header, Image, Hero, Button, Anchor } from 'components';
import { Docs } from 'containers';
const Container = require('./styles').Container;

class Home extends React.Component<any, any> {
  public render() {
    return (
      <Container>
        <section>
          <Hero>
            <Image src="https://raygun.com/blog/wp-content/uploads/2016/07/Callums-post-on-Typescript.png" />
            <Header color="#007acc">
              Scalable React TS Boilerplate
            </Header>
            <Button color="#c05b4d">
              <Anchor color="#fff" href="https://github.com/RyanCCollins/scalable-react-ts-boilerplate">
                Get Started
              </Anchor>
            </Button>
          </Hero>
        </section>
        <Docs />
      </Container>
    );
  }
}

export default Home;
