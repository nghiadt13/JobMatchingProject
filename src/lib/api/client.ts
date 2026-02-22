import { APP_CONFIG } from "@/constants/config";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: APP_CONFIG.apiUrl,
  timeout: 10000,
});
