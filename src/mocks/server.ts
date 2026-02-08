import { setupServer } from "msw/node";
import { authHandlers } from "./handlers/auth.handlers";
import { jobHandlers } from "./handlers/job.handlers";
import { matchingHandlers } from "./handlers/matching.handlers";

export const server = setupServer(
  ...authHandlers,
  ...jobHandlers,
  ...matchingHandlers
);
