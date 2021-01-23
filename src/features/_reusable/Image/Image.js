import React from "react";
import styled from "styled-components/macro";

export const Image = styled(({ className, src, alt }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt || ""} />
    </div>
  );
})`
  width: ${(p) => p.width || "100px"};
  height: ${(p) => p.height || "100px"};
  border-radius: ${(p) => p.theme.sizes.borderRadius};
  overflow: hidden;
  background: ${(p) => p.theme.colors.bgGray};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
