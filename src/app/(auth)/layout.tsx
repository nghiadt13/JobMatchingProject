import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div className="mx-auto min-h-screen max-w-md p-6">{children}</div>;
}
