import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useDispatch } from "react-redux";
import { fetchRandomPlanet } from "../randomPlanetSlice";

export const RandomPlanet = styled(({ className }) => {
  const dispatch = useDispatch();
  // const randomPlanet = useSelector(selectRandomPlanet);

  useEffect(() => {
    dispatch(fetchRandomPlanet());
  }, [dispatch]);
  return <div className={className}>km</div>;
})``;
