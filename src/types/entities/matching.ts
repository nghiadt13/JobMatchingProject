export interface MatchingResult {
  jobId: string;
  candidateId: string;
  score: number;
  strengths: string[];
  gaps: string[];
}
