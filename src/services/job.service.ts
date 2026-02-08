import { API_ENDPOINTS } from "@/constants/api-endpoints";
import { apiClient } from "@/lib/api/client";

export const jobService = {
  getAll: () => apiClient.get(API_ENDPOINTS.jobs),
  getById: (id: string) => apiClient.get(`${API_ENDPOINTS.jobs}/${id}`),
  create: (data: unknown) => apiClient.post(API_ENDPOINTS.jobs, data),
};
