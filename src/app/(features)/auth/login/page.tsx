"use client";

import {
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  MailIcon,
} from "@/components/auth/icons";
import { SocialButtons } from "@/components/auth/social-buttons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-[580px] animate-pop-in rounded-3xl border border-[rgba(212,168,67,0.2)] bg-[rgba(22,35,71,0.7)] p-12 shadow-[0_30px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(212,168,67,0.1)] backdrop-blur-xl">
      {/* Gold line at top */}
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent opacity-60" />

      <div className="animate-slide-in">
        <h2 className="font-display mb-1.5 text-[1.55rem] font-bold text-[hsl(var(--white))]">
          Chào mừng trở lại
        </h2>
        <p className="mb-7 text-[0.83rem] text-[rgba(245,240,232,0.45)]">
          Đăng nhập để tiếp tục hành trình sự nghiệp của bạn
        </p>

        <form onSubmit={handleSubmit} className="space-y-[18px]">
          <div>
            <label className="mb-2 block text-[0.78rem] font-medium uppercase tracking-[0.5px] text-[rgba(245,240,232,0.6)]">
              Email
            </label>
            <div className="relative flex items-center">
              <MailIcon className="pointer-events-none absolute left-4 h-4 w-4 text-[rgba(245,240,232,0.45)]" />
              <Input
                type="email"
                placeholder="you@example.com"
                required
                className="h-[46px] w-full rounded-xl border-[1.5px] border-[rgba(212,168,67,0.15)] bg-[rgba(15,27,61,0.6)] pl-11 pr-4 text-[0.9rem] text-[hsl(var(--white))] placeholder:text-[rgba(245,240,232,0.25)] focus:border-[hsl(var(--gold))] focus:bg-[rgba(15,27,61,0.8)] focus:shadow-[0_0_0_4px_rgba(212,168,67,0.08),0_4px_20px_rgba(0,0,0,0.2)] focus:ring-0"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-[0.78rem] font-medium uppercase tracking-[0.5px] text-[rgba(245,240,232,0.6)]">
              Mật khẩu
            </label>
            <div className="relative flex items-center">
              <LockIcon className="pointer-events-none absolute left-4 h-4 w-4 text-[rgba(245,240,232,0.45)]" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
                className="h-[46px] w-full rounded-xl border-[1.5px] border-[rgba(212,168,67,0.15)] bg-[rgba(15,27,61,0.6)] pl-11 pr-11 text-[0.9rem] text-[hsl(var(--white))] placeholder:text-[rgba(245,240,232,0.25)] focus:border-[hsl(var(--gold))] focus:bg-[rgba(15,27,61,0.8)] focus:shadow-[0_0_0_4px_rgba(212,168,67,0.08),0_4px_20px_rgba(0,0,0,0.2)] focus:ring-0"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 flex h-6 w-6 items-center justify-center text-[rgba(245,240,232,0.45)] transition-colors hover:text-[hsl(var(--gold))]"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <div className="-mt-2 text-right">
            <a
              href="#"
              className="text-[0.78rem] text-[hsl(var(--gold))] transition-opacity hover:opacity-70"
            >
              Quên mật khẩu?
            </a>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="relative h-[50px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dim))] text-[0.95rem] font-bold tracking-[0.5px] text-[hsl(var(--navy))] shadow-[0_6px_24px_rgba(212,168,67,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(212,168,67,0.4)] active:translate-y-0 disabled:opacity-80"
          >
            {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Button>
        </form>

        {/* Terms checkbox */}
        <div className="mb-5 mt-4 flex items-start gap-2.5">
          <Checkbox
            id="login-terms"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked as boolean)}
            className="mt-0.5 h-[17px] w-[17px] rounded border-[rgba(212,168,67,0.2)] bg-[rgba(15,27,61,0.6)] data-[state=checked]:border-[hsl(var(--gold))] data-[state=checked]:bg-[hsl(var(--gold))]"
          />
          <label
            htmlFor="login-terms"
            className="cursor-pointer text-[0.78rem] leading-[1.5] text-[rgba(245,240,232,0.45)]"
          >
            Tôi đồng ý với{" "}
            <a href="#" className="text-[hsl(var(--gold))] hover:underline">
              Điều khoản dịch vụ
            </a>{" "}
            và{" "}
            <a href="#" className="text-[hsl(var(--gold))] hover:underline">
              Chính sách bảo mật
            </a>{" "}
            của JobMatching
          </label>
        </div>

        <SocialButtons />

        <p className="mt-5 text-center text-[0.83rem] text-[rgba(245,240,232,0.45)]">
          Chưa có tài khoản?{" "}
          <Link
            href={ROUTES.auth.register}
            className="text-[hsl(var(--gold))] hover:underline"
          >
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
}
