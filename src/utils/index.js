import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});
