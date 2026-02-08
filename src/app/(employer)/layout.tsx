import type { ReactNode } from "react";
import { Header } from "@/components/layout/header";

export default function EmployerLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main className="p-6">{children}</main>
    </div>
  );
}
