"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";

export function useAuth() {
  return useMutation({
    mutationFn: authService.login,
  });
}
