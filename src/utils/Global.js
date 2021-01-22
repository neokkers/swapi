import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
  html {
    scroll-behavior: smooth;
    font-size: 16px;
    line-height: 1.3;
  }
  body {
    color: ${(props) => props.theme.colors.primary};
    margin: 0;
  }
  a, button {
    text-decoration: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
  }

  input, button, video {
    outline: none;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
