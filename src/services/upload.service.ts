import { apiClient } from "@/lib/api/client";

export const uploadService = {
  uploadCv: (file: File) => {
    const form = new FormData();
    form.append("file", file);
    return apiClient.post("/uploads/cv", form);
  },
};
