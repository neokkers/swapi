import React from "react";
import styled from "styled-components/macro";

export const Container = styled(({ children, className }) => {
  return <div className={className}>{children}</div>;
})`
  padding: ${(p) => p.theme.sizes.mainPadding};
  margin: 0 auto;
  width: ${(p) => p.theme.sizes.containerWidthLaptop};
`;
