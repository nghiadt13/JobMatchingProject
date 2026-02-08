import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="space-y-4 p-6">
      <h1 className="text-3xl font-bold">Job Matching Platform</h1>
      <p>Frontend scaffold is ready.</p>
      <div className="flex gap-4">
        <Link className="underline" href="/login">
          Login
        </Link>
        <Link className="underline" href="/dashboard">
          Candidate dashboard
        </Link>
        <Link className="underline" href="/employer/dashboard">
          Employer dashboard
        </Link>
      </div>
    </main>
  );
}
