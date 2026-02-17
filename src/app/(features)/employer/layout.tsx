import { Header } from "@/components/layout/header";
import type { ReactNode } from "react";

export default function EmployerLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main className="p-6">{children}</main>
    </div>
  );
}
