import { injectGlobal, keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  .app-container {
    text-align: center;
  }
  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 80px;
  }
  header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: #fff;
  }
  .intro {
    font-size: large;
  }
`
