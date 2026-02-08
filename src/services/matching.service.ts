import { API_ENDPOINTS } from "@/constants/api-endpoints";
import { apiClient } from "@/lib/api/client";

export const matchingService = {
  getMatches: () => apiClient.get(API_ENDPOINTS.matching),
};
