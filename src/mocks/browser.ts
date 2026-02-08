import { setupWorker } from "msw/browser";
import { authHandlers } from "./handlers/auth.handlers";
import { jobHandlers } from "./handlers/job.handlers";
import { matchingHandlers } from "./handlers/matching.handlers";

export const worker = setupWorker(
  ...authHandlers,
  ...jobHandlers,
  ...matchingHandlers
);
