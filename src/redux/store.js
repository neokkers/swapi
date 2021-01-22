import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import randomPlanetReducer from "../features/randomPlanet/randomPlanetSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    randomPlanet: randomPlanetReducer,
  },
});
