import React from "react";
import styled from "styled-components/macro";
import { Box } from "../../_reusable/Box/Box";
import {
  RANDOM_PLANET_IMAGE_SIZE,
  RANDOM_PLANET_LOADER_IMAGE,
} from "../../../utils/constants";
import { FlexBlockWithImage } from "../../_reusable/FlexBlock/FlexBlock";

export const RandomPlanetLoader = styled(({ className }) => {
  return (
    <Box className={className}>
      <FlexBlockWithImage
        src={RANDOM_PLANET_LOADER_IMAGE}
        imgW={RANDOM_PLANET_IMAGE_SIZE}
        imgH={RANDOM_PLANET_IMAGE_SIZE}
      >
        Loading
      </FlexBlockWithImage>
    </Box>
  );
})``;
