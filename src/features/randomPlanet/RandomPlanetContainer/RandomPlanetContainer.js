import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlanet, selectRandomPlanet } from "../randomPlanetSlice";
import { getRandomInt } from "../../../utils/common";
import { RandomPlanetLoader } from "../RandomPlanetLoader/RandomPlanetLoader";
import { getVisualGuideImageRoute } from "../specs";
import { RandomPlanet } from "../RandomPlanet/RandomPlanet";
import { ErrorBoundary } from "../../_reusable/ErrorBoundary/ErrorBoundary";
import { RenderError } from "../../_reusable/RenderError/RenderError";
export const RandomPlanetContainer = ({ planetId = 1 }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(selectRandomPlanet);
  useEffect(() => {
    dispatch(fetchPlanet(planetId));
  }, [dispatch, planetId]);

  if (error) throw new Error(error);
  if (!data || loading) return <RandomPlanetLoader />;

  const visualGuideRoute = getVisualGuideImageRoute(data);

  const props = {
    visualGuideRoute,
    data,
  };
  return <RandomPlanet {...props} />;
};

export const RandomPlanetContainerHandled = ({ delay = 4000 }) => {
  const [planetId, setPlanetId] = useState(null);
  useEffect(() => {
    const i = setInterval(() => setPlanetId(getRandomInt(0, 2)), delay);
    return () => {
      clearInterval(i);
    };
  }, [delay]);
  return (
    <div>
      <ErrorBoundary FallbackComponent={() => <RenderError />} key={planetId}>
        <RandomPlanetContainer planetId={planetId} />
      </ErrorBoundary>
    </div>
  );
};
