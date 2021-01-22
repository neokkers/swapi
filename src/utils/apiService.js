import axios from "axios";

const API_BASE = "https://swapi.dev/api";

export const apiService = axios.create({
  baseURL: API_BASE,
});

export const getResource = async (route) => {
  const res = await apiService.get(route);
  if (res.status !== 200 || !res?.data) throw new Error("Api service error");
  return res.data;
};
