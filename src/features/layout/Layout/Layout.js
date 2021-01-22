import React from "react";
import styled from "styled-components/macro";
import { RandomPlanet } from "../../randomPlanet/RandomPlanet/RandomPlanet";
import { Container } from "../../_reusable/Container/Container";

export const Layout = styled(({ className, leftComponent, rightComponent }) => {
  return (
    <div className={className}>
      <Container>
        <RandomPlanet />
        <div className="flex-wrapper">
          <div className="left">{leftComponent}</div>
          <div className="right">{rightComponent}</div>
        </div>
        <div>wekfm</div>
      </Container>
    </div>
  );
})`
  height: 100%;
  width: 100%;
  ${Container} {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    > * {
      &:not(:last-child) {
        margin-bottom: ${(p) => p.theme.sizes.mainPadding};
      }
    }

    .flex-wrapper {
      flex: 1;
      display: flex;
      flex-wrap: wrap;

      margin: 0 -${(p) => p.theme.sizes.mainPadding} 0 0;
      > * {
        //padding: ${(p) => p.theme.sizes.mainPadding};
        background: ${(p) => p.theme.colors.bgGray};
        margin: 0 ${(p) => p.theme.sizes.mainPadding}
          ${(p) => p.theme.sizes.mainPadding} 0;
        flex: 1;
      }
    }
  }
`;
