"use client";

import { useQuery } from "@tanstack/react-query";
import { jobService } from "@/services/job.service";

export function useJobs() {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: () => jobService.getAll(),
  });
}
