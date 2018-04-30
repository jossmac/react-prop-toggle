/* @jsx glam */
import glam from 'glam';

const gutter = 15;

// styled components
// ------------------------------

export const Container = props => (
  <div
    css={{
      display: 'flex ',
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
export const Box = ({ isActive, ...props }) => (
  <div
    css={{
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
export const Switch = props => (
  <div
    css={{
      margin: 'auto',
      position: 'relative',
      userSelect: 'none',
      width: switchSize * 2,
    }}
    {...props}
  />
);
export const SwitchTrack = props => (
  <div
    css={{
      height: switchSize / 2,
      backgroundColor: 'rgba(0,0,0,0.1)',
      width: '100%',
      borderRadius: switchSize / 2,
    }}
    {...props}
  />
);
export const SwitchHandle = ({ isActive, ...props }) => (
  <button
    type="button"
    css={{
      alignItems: 'center',
      background: 'linear-gradient(to bottom, white, #fafbfc)',
      backgroundColor: 'white',
      border: 0,
      borderRadius: '50%',
      boxShadow: '0 1px 5px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      display: 'flex ',
      filter: `grayscale(${isActive ? '0%' : '100%'})`,
      fontSize: switchSize / 2,
      height: switchSize,
      justifyContent: 'center',
      left: 0,
      marginTop: -(switchSize / 2),
      outline: 0,
      position: 'absolute',
      top: '50%',
      transform: `translateX(${isActive ? '100%' : 0}) rotate(${
        isActive ? '15deg' : '0deg'
      })`,
      transition: 'transform 200ms, filter 200ms',
      width: switchSize,

      '&:hover, &:focus': {
        boxShadow:
          '0 1px 5px rgba(0, 0, 0, 0.35), 0 1px 1px rgba(0, 0, 0, 0.1)',
      },
    }}
    {...props}
  />
);
export const Repo = ({ isLocked, ...props }) => (
  <a
    target="_blank"
    css={{
      borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
      color: 'inherit',
      paddingBottom: 1,
      textDecoration: 'none',

      ':hover': {
        borderBottomColor: 'rgba(0, 0, 0, 0.6)',
        textDecoration: 'none',
      },
    }}
    {...props}
  />
);

/*
  ==============================
  Misc.
  ==============================
*/

export const Header = props => (
  <header css={{ marginBottom: '2em' }} {...props} />
);
export const Footer = ({ isVisible, ...props }) => (
  <footer
    css={{
      color: 'white',
      marginTop: '2em',
      visibility: isVisible ? 'visible' : 'hidden',

      '& a': { color: 'inherit' },
    }}
    {...props}
  />
);
export const Title = props => (
  <h1
    css={{
      display: 'inline',
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: '-0.025em',
      margin: 0,
    }}
    {...props}
  />
);
export const Code = props => (
  <code
    css={{
      backgroundColor: 'rgba(0, 0, 0, 0.09)',
      borderRadius: '3px',
      color: '#091e42',
      display: 'inline-block',
      fontFamily: '"Monaco", monospace',
      fontSize: '0.85em',
      lineHeight: '1.4',
      padding: '1px 5px',
    }}
    {...props}
  />
);
