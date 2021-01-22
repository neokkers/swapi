import React from "react";
import { GlobalStyle } from "./utils/Global";
import styled from "styled-components/macro";

const App = styled(({ className }) => {
  return (
    <div className={className + " App"}>
      <GlobalStyle />
    </div>
  );
})``;

export default App;
