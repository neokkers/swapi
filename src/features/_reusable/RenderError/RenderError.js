import React from "react";
import styled from "styled-components/macro";
import { Box } from "../Box/Box";

export const RenderError = styled(({ className }) => {
  return (
    <Box className={className} role={"alert"}>
      OOps. Something went wrong
    </Box>
  );
})`
  padding: ${(p) => p.theme.sizes.mainPadding};
`;
