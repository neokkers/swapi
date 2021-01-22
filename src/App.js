import React from "react";
import { GlobalStyle } from "./utils/Global";
import styled from "styled-components/macro";
import { RandomPlanet } from "./features/randomPlanet/RandomPlanet/RandomPlanet";

const App = styled(({ className }) => {
  return (
    <div className={className + " App"}>
      <RandomPlanet />
      <GlobalStyle />
    </div>
  );
})``;

export default App;
