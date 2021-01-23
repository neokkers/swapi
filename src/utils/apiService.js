import axios from "axios";
import {
  API_BASE,
  MOCK_API_DELAY,
  OK_STATUSES,
  SERVER_ERROR_MSG,
} from "./constants";

export const apiService = axios.create({
  baseURL: API_BASE,
});

apiService.interceptors.request.use(
  async (config) => {
    return await new Promise((resolve) => {
      setTimeout(() => resolve(config), MOCK_API_DELAY);
    });
  },
  (error) => Promise.reject(error)
);

export const getResource = async (route) => {
  const res = await apiService.get(route);
  if (!OK_STATUSES.includes(res?.status) || !res?.data)
    throw new Error(SERVER_ERROR_MSG);
  return res.data;
};

export const fetchingConnector = async (
  dispatch,
  setData,
  setError,
  setLoading,
  fetch
) => {
  dispatch(setLoading(true));
  try {
    const r = await fetch();
    console.log(r);
    dispatch(setData(r));
    dispatch(setError(null));
  } catch (e) {
    dispatch(setError(e.message));
    dispatch(setLoading(false));
    // throw new Error(e.message);
  }
  dispatch(setLoading(false));
};
