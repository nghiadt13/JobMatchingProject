"use client";

import { useQuery } from "@tanstack/react-query";
import { matchingService } from "@/services/matching.service";

export function useMatching() {
  return useQuery({
    queryKey: ["matching"],
    queryFn: () => matchingService.getMatches(),
  });
}
