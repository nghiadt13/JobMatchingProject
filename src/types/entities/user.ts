export type UserRole = "candidate" | "employer";

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
}
