"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "@/schemas/auth.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(() => undefined)}>
      <Input placeholder="Email" type="email" {...form.register("email")} />
      <Input
        placeholder="Password"
        type="password"
        {...form.register("password")}
      />
      <Button className="w-full" type="submit">
        Sign in
      </Button>
    </form>
  );
}
