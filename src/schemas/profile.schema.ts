import { z } from "zod";

export const profileSchema = z.object({
  fullName: z.string().min(2),
  bio: z.string().optional(),
});
