import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanet, selectRandomPlanet } from "../randomPlanetSlice";
import { getRandomInt } from "../../../utils/common";
import { RandomPlanetLoader } from "../RandomPlanetLoader/RandomPlanetLoader";
import { getVisualGuideImageRoute } from "../specs";
import { RandomPlanet } from "../RandomPlanet/RandomPlanet";
import { ErrorBoundary } from "../../_reusable/ErrorBoundary/ErrorBoundary";
import _ from "lodash";
import { RenderError } from "../../_reusable/RenderError/RenderError";
export const RandomPlanetContainer = ({ delay = 500, planetId }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(selectRandomPlanet);
  console.log(planetId, "1230");
  useEffect(() => {
    const fetchData = async () =>
      await dispatch(fetchPlanet(planetId || getRandomInt(0, 2)));

    fetchData();
    const i = setInterval(() => fetchData(), delay);

    return () => {
      clearInterval(i);
    };
  }, [delay, dispatch, planetId]);

  if (error) throw new Error(error);
  if (!data || loading) return <RandomPlanetLoader />;

  const visualGuideRoute = getVisualGuideImageRoute(data);

  const props = {
    visualGuideRoute,
    data,
  };
  return <RandomPlanet {...props} />;
};

export const RandomPlanetContainerHandled = ({ delay = 500, ...props }) => {
  const [planetId, setPlanetId] = useState(null);
  useEffect(() => {
    const i = setInterval(() => setPlanetId(getRandomInt(0, 2)), delay);
  }, []);
  return (
    <ErrorBoundary FallbackComponent={() => <RenderError />}>
      <RandomPlanetContainer {...props} />
    </ErrorBoundary>
  );
};
