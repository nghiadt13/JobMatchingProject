import { API_ENDPOINTS } from "@/constants/api-endpoints";
import { apiClient } from "@/lib/api/client";

export const authService = {
  login: (payload: { email: string; password: string }) =>
    apiClient.post(API_ENDPOINTS.auth.login, payload),
  register: (payload: { email: string; password: string; fullName: string }) =>
    apiClient.post(API_ENDPOINTS.auth.register, payload),
  me: () => apiClient.get(API_ENDPOINTS.auth.me),
};
