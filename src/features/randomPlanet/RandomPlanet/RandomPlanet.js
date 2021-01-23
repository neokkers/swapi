import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomPlanet, selectRandomPlanet } from "../randomPlanetSlice";
import { getVisualGuideImageRoute } from "../specs";
import {
  RANDOM_PLANET_IMAGE_SIZE,
  VISUAL_GUIDE_IMAGE_PATH,
} from "../../../utils/constants";
import { RenderError } from "../../_reusable/RenderError/RenderError";
import { Box } from "../../_reusable/Box/Box";
import { RandomPlanetLoader } from "../RandomPlanetLoader/RandomPlanetLoader";
import { FlexBlockWithImage } from "../../_reusable/FlexBlock/FlexBlock";
import { Title } from "../../_reusable/Title/Title";
import { ItemList } from "../../_reusable/ItemList/ItemList";

export const RandomPlanet = styled(({ className, delay = 5000 }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(selectRandomPlanet);

  useEffect(() => {
    let i;
    const f = async () => {
      await dispatch(fetchRandomPlanet());
      i = setInterval(() => dispatch(fetchRandomPlanet()), delay);
    };
    f();

    return () => {
      clearInterval(i);
    };
  }, [delay, dispatch]);

  if (!data || loading) return <RandomPlanetLoader />;
  if (error) return <RenderError name={"Random planet"} />;

  const visualGuideRoute = getVisualGuideImageRoute(data);

  return (
    <Box className={className}>
      <FlexBlockWithImage
        src={`${VISUAL_GUIDE_IMAGE_PATH}${visualGuideRoute}`}
        imgW={RANDOM_PLANET_IMAGE_SIZE}
        imgH={RANDOM_PLANET_IMAGE_SIZE}
      >
        <Title>{data.name}</Title>
        <ItemList>
          <div>Population: {data.population}</div>
          <div>Diameter: {data.diameter}</div>
          <div>Rotation period: {data.rotation_period}</div>
        </ItemList>
      </FlexBlockWithImage>
    </Box>
  );
})``;
