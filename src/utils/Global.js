import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
  html {
    scroll-behavior: smooth;
    font-size: 16px;
    line-height: 1.3;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #root {
    height: 100%;
  }
  body {
    color: ${(props) => props.theme.colors.primary};
    margin: 0;
    padding: 0;
    height: 100%;
  }
  a, button {
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
  }
  * {
    box-sizing: border-box;
  }

  input, button, video {
    outline: none;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
