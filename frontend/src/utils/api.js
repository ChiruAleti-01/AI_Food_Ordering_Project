import axios from "axios";
import qs from "qs";

const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "/api"
      : "https://ai-food-ordering-project.onrender.com/api",

  withCredentials: true,

  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "repeat" }),
});

export default api;