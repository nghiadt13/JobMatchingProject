export type JobType = "full-time" | "part-time" | "contract";

export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  requirements: string[];
  location: string;
  type: JobType;
  createdAt: string;
}
