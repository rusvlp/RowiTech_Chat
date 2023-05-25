import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 100%;
  }

  body {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  .container {
    position: relative;
    z-index: 1;
  }

  p, a,
  h1, h2, h3, h4, h5, h6,
  input, select, option, button,
  label {
    font-family: 'Ubuntu', sans-serif;
  }

  @font-face {
    font-family: 'Roboto-Light';
    src: url('./assets/fonts/Roboto-Light.ttf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto-Regular';
    src: url('./assets/fonts/Roboto-Regular.ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto-Medium';
    src: url('./assets/fonts/Roboto-Medium.ttf');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto-Bold';
    src: url('./assets/fonts/Roboto-Bold.ttf');
    font-weight: 700;
    font-style: normal;
  }

`;
