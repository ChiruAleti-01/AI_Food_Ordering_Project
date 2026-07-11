import axios from "axios";
import qs from "qs";

const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "/api"
      : "https://ai-food-ordering-project.onrender.com/api",

  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "repeat" }),
});

// Attach JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;