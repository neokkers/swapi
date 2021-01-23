import React from "react";
import { GlobalStyle } from "./utils/Global";
import styled from "styled-components/macro";
import { Layout } from "./features/_reusable/Layout/Layout";
import { ItemList } from "./features/_reusable/ItemList/ItemList";

const App = styled(({ className }) => {
  return (
    <div className={className + " App"}>
      <Layout
        leftComponent={
          <ItemList>
            <div>wf</div>
            <div>wf</div>
            <div>wf</div>
          </ItemList>
        }
        rightComponent={<div>mwekmfkwme</div>}
      />
      <GlobalStyle />
    </div>
  );
})`
  height: 100%;
`;

export default App;
