import { createSlice } from "@reduxjs/toolkit";
import { getResource } from "../../utils/apiService";
import { getRandomInt } from "../../utils/common";

export const counterSlice = createSlice({
  name: "randomPlanet",
  initialState: {
    data: null,
  },
  reducers: {
    setRandomPlanet: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setRandomPlanet } = counterSlice.actions;

export const fetchRandomPlanet = () => async (dispatch) => {
  try {
    const id = getRandomInt(0, 2000000);
    const data = await getResource(`/planets/${id}`);

    dispatch(setRandomPlanet(data));
  } catch (e) {
    // throw new Error("wefew");
    console.error(e);
  }
};

export const selectRandomPlanet = (state) => state.randomPlanet.data;

export default counterSlice.reducer;
