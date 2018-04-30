import React, { Component } from 'react';
import { render } from 'react-dom';

import PropToggle from '../../src';
import {
  Box,
  Container,
  Footer,
  Header,
  Repo,
  Title,
  Switch,
  SwitchTrack,
  SwitchHandle,
} from './styled';

// example
// ------------------------------

class App extends Component {
  state = { isActive: false };

  toggle = () => {
    this.setState(state => ({ isActive: !state.isActive }));
  };

  render() {
    const { isActive } = this.state;
    const red = '#FF5630';
    const green = '#36B37E';
    const blue = '#0065FF';
    return (
      <Container>
        <PropToggle
          isActive={isActive}
          attributes={{ class: 'fun', 'data-has-awesome-bg': 'true' }}
        />
        <Box isActive={isActive}>
          <Header>
            <div>
              <Title>
                {' '}
                <Repo href="https://github.com/jossmac/react-prop-toggle">
                  react-prop-toggle
                </Repo>
              </Title>{' '}
              is a safe, declarative way to influence the styles and attributes
              of nodes outside your app's render tree.
            </div>
          </Header>
          <div>
            <Switch onClick={this.toggle}>
              <SwitchTrack />
              <SwitchHandle isActive={isActive}>🦄</SwitchHandle>
            </Switch>
          </div>
        </Box>
        <Footer>
          <span> by </span>
          <a href="https://twitter.com/jossmackison" target="_blank">
            @jossmac
          </a>
        </Footer>
      </Container>
    );
  }
}

// render
// ------------------------------

render(<App />, document.getElementById('root'));
