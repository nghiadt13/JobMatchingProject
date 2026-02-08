import { apiClient } from "@/lib/api/client";

export const candidateService = {
  getAll: () => apiClient.get("/candidates"),
  getById: (id: string) => apiClient.get(`/candidates/${id}`),
};
