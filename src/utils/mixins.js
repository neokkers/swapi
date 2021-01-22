import { css } from "styled-components";

export const withFontSize = css`
  font-size: ${(p) => p.theme.sizes[p.size]};
`;
