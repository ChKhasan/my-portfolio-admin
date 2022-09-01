import axios from "axios";
import { API_URL, TOKEN } from "../const/Api";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZU51bWJlciI6Iis5OTg5NzEzODE4MDQiLCJpYXQiOjE2NjE3NjA5MDcsImV4cCI6MTY5MzMxODUwN30.DwTX_DRY0aq8S-ym65AGDcagoELaq3oklxu5wi2ZUP4`,
  },
});

export const httpRequest = (config) => {
  return axiosInstance(config);
};
