import _ from "lodash";

export const getVisualGuideImageRoute = (randomPlanet) => {
  const splitUrl = randomPlanet.url.split("/");
  return [_.nth(splitUrl, -3), _.nth(splitUrl, -2)].join("/") + ".jpg";
};
