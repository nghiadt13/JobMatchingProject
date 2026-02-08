import { http, HttpResponse } from "msw";
import { jobs } from "../data/jobs";

export const jobHandlers = [http.get("*/jobs", () => HttpResponse.json(jobs))];
