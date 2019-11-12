import React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

import Root from "./components/Root";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');

  html, body {
    margin: 0;
    padding: 0;
  }
  
  html, body, #app {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Lato;
  }
`;

render(
  <>
    <GlobalStyle />
    <Root />
  </>,
  document.getElementById("app")
);
