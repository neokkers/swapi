import axios from "axios";

const API_BASE = "https://swapi.dev/api";

export const apiService = axios.create({
  baseURL: API_BASE,
});
