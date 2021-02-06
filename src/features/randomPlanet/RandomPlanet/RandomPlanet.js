import React, { useEffect } from "react";
import styled from "styled-components/macro";
import {
  RANDOM_PLANET_IMAGE_SIZE,
  VISUAL_GUIDE_IMAGE_PATH,
} from "../../../utils/constants";
import { Box } from "../../_reusable/Box/Box";
import { FlexBlockWithImage } from "../../_reusable/FlexBlock/FlexBlock";
import { Title } from "../../_reusable/Title/Title";
import { ItemList } from "../../_reusable/ItemList/ItemList";

export const RandomPlanet = styled(
  ({
    className,
    visualGuideRoute,
    data: { name, population, diameter, rotation_period },
  }) => {
    return (
      <Box className={className}>
        <FlexBlockWithImage
          src={`${VISUAL_GUIDE_IMAGE_PATH}${visualGuideRoute}`}
          imgW={RANDOM_PLANET_IMAGE_SIZE}
          imgH={RANDOM_PLANET_IMAGE_SIZE}
        >
          <Title>{name}</Title>
          <ItemList>
            <div>Population: {population}</div>
            <div>Diameter: {diameter}</div>
            <div>Rotation period: {rotation_period}</div>
          </ItemList>
        </FlexBlockWithImage>
      </Box>
    );
  }
)``;
