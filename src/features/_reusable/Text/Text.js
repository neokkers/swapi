import React from "react";
import styled from "styled-components/macro";
import { withFontSize } from "../../../utils/mixins";
import { css } from "styled-components";

export const Text = styled(({ className }) => {
  return <div className={className} />;
})`
  ${withFontSize}
  ${(p) =>
    p.medium &&
    css`
      font-size: ${p.theme.sizes["textM"]};
    `}
`;
