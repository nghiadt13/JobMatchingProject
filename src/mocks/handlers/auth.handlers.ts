import { http, HttpResponse } from "msw";

export const authHandlers = [
  http.post("*/auth/login", () => HttpResponse.json({ token: "mock-token" })),
];
