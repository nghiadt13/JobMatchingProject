import { apiClient } from "./client";

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
