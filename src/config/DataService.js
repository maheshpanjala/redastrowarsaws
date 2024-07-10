import axios from "axios";

const API_ENDPOINT = "http://localhost:3027/api/";

// const API_ENDPOINT = "http://35.177.56.74:3027/api/";
// export const IMAGE_URL = "http://35.177.56.74:3027/uploads/";
// const API_ENDPOINT = "http://192.168.29.136:3027/api/";

// const API_ENDPOINT = "http://192.168.29.208:3027/api/";

//const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
export const IMAGE_URL = "http://localhost:3027/"; //process.env.REACT_APP_IMAGE_URL;

const dataService = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

dataService.interceptors.request.use(
  (config) => {
    config.headers.auth = localStorage.getItem("user-token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default dataService;
