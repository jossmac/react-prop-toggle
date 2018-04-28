import React, { Component } from 'react';
import { render } from 'react-dom';
import PropToggle from '../../src';

// styled components
// ------------------------------

const Container = props => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      boxSizing: 'border-box',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 400,
      paddingLeft: 15,
      paddingRight: 15,
      textAlign: 'center',
    }}
    {...props}
  />
);
const Box = ({ isActive, ...props }) => (
  <div
    style={{
      backgroundColor: 'white',
      boxShadow: isActive
        ? '0 1px 5px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.1)'
        : null,
      borderRadius: 4,
      lineHeight: 1.4,
      padding: `30px 30px 40px`,
    }}
    {...props}
  />
);

const switchSize = 48;
const Switch = props => (
  <div
    style={{
      position: 'relative',
      width: switchSize * 2,
      margin: 'auto',
      WebkitUserSelect: 'none',
      msUserSelect: 'none',
      MozUserSelect: 'none',
      userSelect: 'none',
    }}
    {...props}
  />
);
const SwitchTrack = props => (
  <div
    style={{
      height: switchSize / 2,
      backgroundColor: 'rgba(0,0,0,0.1)',
      width: '100%',
      borderRadius: switchSize / 2,
    }}
    {...props}
  />
);
const SwitchHandle = ({ isActive, ...props }) => (
  <div
    style={{
      alignItems: 'center',
      background: 'linear-gradient(to bottom, white, #fafbfc)',
      backgroundColor: 'white',
      borderRadius: '50%',
      boxShadow: '0 1px 5px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      display: 'flex',
      filter: `grayscale(${isActive ? '0%' : '100%'})`,
      fontSize: switchSize / 2,
      height: switchSize,
      justifyContent: 'center',
      left: 0,
      marginTop: -(switchSize / 2),
      position: 'absolute',
      top: '50%',
      transform: `translateX(${isActive ? '100%' : 0}) rotate(${
        isActive ? '15deg' : '0deg'
      })`,
      transition: 'transform 200ms, filter 200ms',
      width: switchSize,
    }}
    {...props}
  />
);

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
          <header>
            <div>
              <h1>
                {' '}
                <a
                  href="https://github.com/jossmac/react-prop-toggle"
                  style={{ color: 'inherit' }}
                >
                  react-prop-toggle
                </a>
              </h1>{' '}
              is a safe, declarative way to influence the styles and attributes
              of nodes outside your app's tree.
            </div>
          </header>
          <div>
            <Switch onClick={this.toggle}>
              <SwitchTrack />
              <SwitchHandle isActive={isActive}>🦄</SwitchHandle>
            </Switch>
          </div>
        </Box>
        <footer>
          <span> by </span>
          <a href="https://twitter.com/jossmackison" target="_blank">
            @jossmac
          </a>
        </footer>
      </Container>
    );
  }
}

// render
// ------------------------------

render(<App />, document.getElementById('root'));
