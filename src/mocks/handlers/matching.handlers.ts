import { http, HttpResponse } from "msw";
import { matches } from "../data/matches";

export const matchingHandlers = [
  http.get("*/matching", () => HttpResponse.json(matches)),
];
