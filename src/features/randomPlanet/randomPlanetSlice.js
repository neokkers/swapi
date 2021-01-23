import { createSlice } from "@reduxjs/toolkit";
import { fetchingConnector, getResource } from "../../utils/apiService";
import { getRandomInt } from "../../utils/common";

export const counterSlice = createSlice({
  name: "randomPlanet",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setRandomPlanet: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setRandomPlanet, setLoading, setError } = counterSlice.actions;

export const fetchRandomPlanet = () => async (dispatch) => {
  const randomInt = getRandomInt(0, 20);
  await fetchingConnector(dispatch, setRandomPlanet, setError, setLoading, () =>
    getResource(`/planets/${randomInt}`)
  );
};
export const fetchPlanet = (id) => async (dispatch) => {
  await fetchingConnector(dispatch, setRandomPlanet, setError, setLoading, () =>
    getResource(`/planets/${id}`)
  );
};

export const selectRandomPlanet = (state) => state.randomPlanet;

export default counterSlice.reducer;
