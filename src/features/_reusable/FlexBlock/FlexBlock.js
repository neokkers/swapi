import React from "react";
import styled from "styled-components/macro";
import { Image } from "../Image/Image";

export const FlexBlockWithImage = styled(
  ({ className, children, src, imgW, imgH }) => {
    return (
      <div className={className}>
        <Image src={src} height={imgW} width={imgH} />
        <div className="content">{children}</div>
      </div>
    );
  }
)`
  display: flex;

  > .content {
    flex: 1;
    padding-left: ${(p) => p.theme.sizes.mainPadding};
  }
`;
