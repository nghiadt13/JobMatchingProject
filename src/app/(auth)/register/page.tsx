import { RegisterForm } from "@/components/features/auth/register-form";

export default function RegisterPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Register</h1>
      <RegisterForm />
    </div>
  );
}
