import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPlanet,
  // fetchRandomPlanet,
  selectRandomPlanet,
} from "../randomPlanetSlice";
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
import { getRandomInt } from "../../../utils/common";

export const RandomPlanet = styled(({ className, delay = 5000, planetId }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(selectRandomPlanet);

  useEffect(() => {
    let i;

    const fetchPlanetF = async () =>
      dispatch(fetchPlanet(planetId || getRandomInt(0, 20)));

    const f = async () => {
      await fetchPlanetF();
      i = setInterval(() => fetchPlanetF(), delay);
    };
    f();

    return () => {
      clearInterval(i);
    };
  }, [delay, dispatch, planetId]);

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
