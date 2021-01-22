import React from "react";
import styled from "styled-components/macro";
import { css } from "styled-components";

export const Title = styled(({ className, children }) => {
  return <div className={className}>{children}</div>;
})`
  line-height: 1.2;
  ${(p) =>
    p.big &&
    css`
      font-size: ${p.theme.sizes["text3XL"]};
    `}
  ${(p) =>
    p.medium &&
    css`
      font-size: ${p.theme.sizes["textTitle1"]};
    `}
`;
