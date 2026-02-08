import type { Job } from "@/types/entities/job";
import { Card } from "@/components/ui/card";

export function JobCard({ job }: { job: Job }) {
  return (
    <Card>
      <h3 className="font-semibold">{job.title}</h3>
      <p className="text-sm text-muted-foreground">{job.company}</p>
    </Card>
  );
}
