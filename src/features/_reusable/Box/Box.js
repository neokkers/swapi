import React from "react";
import styled from "styled-components/macro";

export const Box = styled(({ ...props }) => {
  return <div {...props} />;
})`
  padding: ${(p) => p.theme.sizes.mainPadding};
  background: ${(p) => p.theme.colors.bgGray};
`;
