import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomPlanet, selectRandomPlanet } from "../randomPlanetSlice";
import { Image } from "../../_reusable/Image/Image";
import { getVisualGuideImageRoute } from "../specs";
import { VISUAL_GUIDE_IMAGE_PATH } from "../../../utils/constants";

export const RandomPlanet = styled(({ className, delay = 5000 }) => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectRandomPlanet);

  useEffect(() => {
    dispatch(fetchRandomPlanet());
    const i = setInterval(() => dispatch(fetchRandomPlanet()), delay);
    return () => {
      clearInterval(i);
    };
  }, [delay, dispatch]);

  if (loading || !data) return null;

  const visualGuideRoute = getVisualGuideImageRoute(data);

  return (
    <div className={className}>
      <div className="img">
        <Image src={`${VISUAL_GUIDE_IMAGE_PATH}${visualGuideRoute}`} />
      </div>
    </div>
  );
})``;
