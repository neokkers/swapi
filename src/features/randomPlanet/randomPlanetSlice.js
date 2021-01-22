import { createSlice } from "@reduxjs/toolkit";
import { apiService } from "../../utils/apiService";
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
  const id = getRandomInt(0, 20);
  const { data } = await apiService.get(`/planets/${id}`);

  dispatch(setRandomPlanet(data));
};

export const selectRandomPlanet = (state) => state.randomPlanet.data;

export default counterSlice.reducer;
