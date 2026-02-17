import { LoginForm } from "@/components/features/auth/login-form";

export default function LoginPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Login</h1>
      <LoginForm />
    </div>
  );
}
