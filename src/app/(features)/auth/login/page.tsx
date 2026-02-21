"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { use, useState } from "react";

// Icons
function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 18.18z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] flex-shrink-0">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[17px] w-[17px] flex-shrink-0"
      fill="#0A66C2"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[17px] w-[17px] flex-shrink-0"
      fill="#1877F2"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// Login Form Component
function LoginForm() {
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

      {/* Divider */}
      <div className="my-5 flex items-center gap-3 text-[0.75rem] text-[rgba(245,240,232,0.2)]">
        <div className="h-px flex-1 bg-[rgba(212,168,67,0.2)]" />
        <span>hoặc tiếp tục với</span>
        <div className="h-px flex-1 bg-[rgba(212,168,67,0.2)]" />
      </div>

      {/* Social buttons */}
      <div className="flex flex-col gap-2">
        <button className="flex items-center justify-center gap-2.5 rounded-[10px] border-[1.5px] border-[rgba(212,168,67,0.2)] bg-[rgba(15,27,61,0.5)] px-4 py-2.5 text-[0.85rem] font-medium text-[rgba(245,240,232,0.45)] transition-all hover:-translate-y-px hover:border-[hsl(var(--gold))] hover:bg-[rgba(212,168,67,0.12)] hover:text-[hsl(var(--white))] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
          <GoogleIcon />
          <span className="flex-1 text-center">Tiếp tục với Google</span>
        </button>
        <button className="flex items-center justify-center gap-2.5 rounded-[10px] border-[1.5px] border-[rgba(212,168,67,0.2)] bg-[rgba(15,27,61,0.5)] px-4 py-2.5 text-[0.85rem] font-medium text-[rgba(245,240,232,0.45)] transition-all hover:-translate-y-px hover:border-[hsl(var(--gold))] hover:bg-[rgba(212,168,67,0.12)] hover:text-[hsl(var(--white))] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
          <LinkedInIcon />
          <span className="flex-1 text-center">Tiếp tục với LinkedIn</span>
        </button>
        <button className="flex items-center justify-center gap-2.5 rounded-[10px] border-[1.5px] border-[rgba(212,168,67,0.2)] bg-[rgba(15,27,61,0.5)] px-4 py-2.5 text-[0.85rem] font-medium text-[rgba(245,240,232,0.45)] transition-all hover:-translate-y-px hover:border-[hsl(var(--gold))] hover:bg-[rgba(212,168,67,0.12)] hover:text-[hsl(var(--white))] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
          <FacebookIcon />
          <span className="flex-1 text-center">Tiếp tục với Facebook</span>
        </button>
      </div>
    </div>
  );
}

// Signup Form Component
function SignupForm() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<"candidate" | "employer">("candidate");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const checkPasswordStrength = (pw: string) => {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    setPasswordStrength(score);
  };

  const getStrengthColor = (index: number) => {
    if (index >= passwordStrength) return "bg-[rgba(212,168,67,0.2)]";
    const colors = [
      "bg-[#e74c3c]",
      "bg-[#e67e22]",
      "bg-[#f1c40f]",
      "bg-[hsl(var(--gold))]",
    ];
    return colors[passwordStrength - 1] || "bg-[rgba(212,168,67,0.2)]";
  };

  const handleSignup = () => {
    if (!agreed) {
      return;
    }
    setIsSuccess(true);
  };

  const handleReset = () => {
    setStep(1);
    setIsSuccess(false);
    setAgreed(false);
    setPasswordStrength(0);
  };

  if (isSuccess) {
    return (
      <div className="animate-pop-in py-5 text-center">
        <div className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dim))] shadow-[0_8px_32px_rgba(212,168,67,0.4)]">
          <CheckIcon className="h-8 w-8 text-[hsl(var(--navy))]" />
        </div>
        <h2 className="font-display mb-2.5 text-[1.4rem] text-[hsl(var(--white))]">
          Đăng ký thành công! 🎉
        </h2>
        <p className="text-[0.85rem] leading-[1.6] text-[rgba(245,240,232,0.45)]">
          Chào mừng bạn đến với JobMatching.
          <br />
          Hãy kiểm tra email để xác thực tài khoản.
        </p>
        <Button
          onClick={handleReset}
          className="relative mt-6 h-[50px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dim))] text-[0.95rem] font-bold tracking-[0.5px] text-[hsl(var(--navy))] shadow-[0_6px_24px_rgba(212,168,67,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(212,168,67,0.4)]"
        >
          Đăng nhập ngay
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-slide-in">
      {/* Progress Steps */}
      <div className="mb-7 flex items-center">
        <div className="flex items-center gap-2">
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full border-2 text-[0.72rem] font-semibold transition-all ${
              step >= 1
                ? "border-[hsl(var(--gold))] bg-[hsl(var(--gold))] text-[hsl(var(--navy))] shadow-[0_0_12px_rgba(212,168,67,0.4)]"
                : "border-[rgba(212,168,67,0.2)] bg-[rgba(15,27,61,0.8)] text-[rgba(245,240,232,0.45)]"
            }`}
          >
            {step > 1 ? <CheckIcon className="h-3.5 w-3.5" /> : "1"}
          </div>
          <span
            className={`text-[0.73rem] transition-colors ${
              step >= 1
                ? "text-[hsl(var(--gold-light))]"
                : "text-[rgba(245,240,232,0.45)]"
            }`}
          >
            Vai trò
          </span>
        </div>
        <div
          className={`mx-2 h-px flex-1 transition-colors ${
            step > 1 ? "bg-[hsl(var(--gold))]" : "bg-[rgba(212,168,67,0.2)]"
          }`}
        />
        <div className="flex items-center gap-2">
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full border-2 text-[0.72rem] font-semibold transition-all ${
              step >= 2
                ? "border-[hsl(var(--gold))] bg-[hsl(var(--gold))] text-[hsl(var(--navy))] shadow-[0_0_12px_rgba(212,168,67,0.4)]"
                : "border-[rgba(212,168,67,0.2)] bg-[rgba(15,27,61,0.8)] text-[rgba(245,240,232,0.45)]"
            }`}
          >
            {step > 2 ? <CheckIcon className="h-3.5 w-3.5" /> : "2"}
          </div>
          <span
            className={`text-[0.73rem] transition-colors ${
              step >= 2
                ? "text-[hsl(var(--gold-light))]"
                : "text-[rgba(245,240,232,0.45)]"
            }`}
          >
            Thông tin
          </span>
        </div>
        <div
          className={`mx-2 h-px flex-1 transition-colors ${
            step > 2 ? "bg-[hsl(var(--gold))]" : "bg-[rgba(212,168,67,0.2)]"
          }`}
        />
        <div className="flex items-center gap-2">
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full border-2 text-[0.72rem] font-semibold transition-all ${
              step >= 3
                ? "border-[hsl(var(--gold))] bg-[hsl(var(--gold))] text-[hsl(var(--navy))] shadow-[0_0_12px_rgba(212,168,67,0.4)]"
                : "border-[rgba(212,168,67,0.2)] bg-[rgba(15,27,61,0.8)] text-[rgba(245,240,232,0.45)]"
            }`}
          >
            3
          </div>
          <span
            className={`text-[0.73rem] transition-colors ${
              step >= 3
                ? "text-[hsl(var(--gold-light))]"
                : "text-[rgba(245,240,232,0.45)]"
            }`}
          >
            Bảo mật
          </span>
        </div>
      </div>

      {/* Step 1: Role Selection */}
      {step === 1 && (
        <div className="animate-slide-in">
          <h2 className="font-display mb-1.5 text-[1.55rem] font-bold text-[hsl(var(--white))]">
            Bạn là ai?
          </h2>
          <p className="mb-7 text-[0.83rem] text-[rgba(245,240,232,0.45)]">
            Chọn vai trò phù hợp với bạn
          </p>

          <div className="mb-5 grid grid-cols-2 gap-2.5">
            <label
              className={`flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border-[1.5px] p-3.5 transition-all ${
                role === "candidate"
                  ? "border-[hsl(var(--gold))] bg-[rgba(212,168,67,0.12)] text-[hsl(var(--gold-light))]"
                  : "border-[rgba(212,168,67,0.15)] bg-[rgba(15,27,61,0.6)] text-[rgba(245,240,232,0.45)]"
              }`}
            >
              <input
                type="radio"
                name="role"
                value="candidate"
                checked={role === "candidate"}
                onChange={() => setRole("candidate")}
                className="sr-only"
              />
              <UserIcon
                className={`h-[22px] w-[22px] transition-colors ${
                  role === "candidate"
                    ? "text-[hsl(var(--gold))]"
                    : "text-[rgba(245,240,232,0.45)]"
                }`}
              />
              <span className="text-[0.82rem] font-medium">Ứng viên</span>
            </label>
            <label
              className={`flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border-[1.5px] p-3.5 transition-all ${
                role === "employer"
                  ? "border-[hsl(var(--gold))] bg-[rgba(212,168,67,0.12)] text-[hsl(var(--gold-light))]"
                  : "border-[rgba(212,168,67,0.15)] bg-[rgba(15,27,61,0.6)] text-[rgba(245,240,232,0.45)]"
              }`}
            >
              <input
                type="radio"
                name="role"
                value="employer"
                checked={role === "employer"}
                onChange={() => setRole("employer")}
                className="sr-only"
              />
              <HomeIcon
                className={`h-[22px] w-[22px] transition-colors ${
                  role === "employer"
                    ? "text-[hsl(var(--gold))]"
                    : "text-[rgba(245,240,232,0.45)]"
                }`}
              />
              <span className="text-[0.82rem] font-medium">Nhà tuyển dụng</span>
            </label>
          </div>

          <Button
            onClick={() => setStep(2)}
            className="relative h-[50px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dim))] text-[0.95rem] font-bold tracking-[0.5px] text-[hsl(var(--navy))] shadow-[0_6px_24px_rgba(212,168,67,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(212,168,67,0.4)]"
          >
            Tiếp tục
          </Button>
        </div>
      )}

      {/* Step 2: Personal Info */}
      {step === 2 && (
        <div className="animate-slide-in">
          <h2 className="font-display mb-1.5 text-[1.55rem] font-bold text-[hsl(var(--white))]">
            Thông tin của bạn
          </h2>
          <p className="mb-7 text-[0.83rem] text-[rgba(245,240,232,0.45)]">
            Hãy cho chúng tôi biết thêm về bạn
          </p>

          <div className="space-y-[18px]">
            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="mb-2 block text-[0.78rem] font-medium uppercase tracking-[0.5px] text-[rgba(245,240,232,0.6)]">
                  Họ
                </label>
                <div className="relative flex items-center">
                  <UserIcon className="pointer-events-none absolute left-4 h-4 w-4 text-[rgba(245,240,232,0.45)]" />
                  <Input
                    type="text"
                    placeholder="Nguyễn"
                    className="h-[46px] w-full rounded-xl border-[1.5px] border-[rgba(212,168,67,0.15)] bg-[rgba(15,27,61,0.6)] pl-11 pr-4 text-[0.9rem] text-[hsl(var(--white))] placeholder:text-[rgba(245,240,232,0.25)] focus:border-[hsl(var(--gold))] focus:bg-[rgba(15,27,61,0.8)] focus:shadow-[0_0_0_4px_rgba(212,168,67,0.08),0_4px_20px_rgba(0,0,0,0.2)] focus:ring-0"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-[0.78rem] font-medium uppercase tracking-[0.5px] text-[rgba(245,240,232,0.6)]">
                  Tên
                </label>
                <div className="relative flex items-center">
                  <UserIcon className="pointer-events-none absolute left-4 h-4 w-4 text-[rgba(245,240,232,0.45)]" />
                  <Input
                    type="text"
                    placeholder="Văn A"
                    className="h-[46px] w-full rounded-xl border-[1.5px] border-[rgba(212,168,67,0.15)] bg-[rgba(15,27,61,0.6)] pl-11 pr-4 text-[0.9rem] text-[hsl(var(--white))] placeholder:text-[rgba(245,240,232,0.25)] focus:border-[hsl(var(--gold))] focus:bg-[rgba(15,27,61,0.8)] focus:shadow-[0_0_0_4px_rgba(212,168,67,0.08),0_4px_20px_rgba(0,0,0,0.2)] focus:ring-0"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[0.78rem] font-medium uppercase tracking-[0.5px] text-[rgba(245,240,232,0.6)]">
                Email
              </label>
              <div className="relative flex items-center">
                <MailIcon className="pointer-events-none absolute left-4 h-4 w-4 text-[rgba(245,240,232,0.45)]" />
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="h-[46px] w-full rounded-xl border-[1.5px] border-[rgba(212,168,67,0.15)] bg-[rgba(15,27,61,0.6)] pl-11 pr-4 text-[0.9rem] text-[hsl(var(--white))] placeholder:text-[rgba(245,240,232,0.25)] focus:border-[hsl(var(--gold))] focus:bg-[rgba(15,27,61,0.8)] focus:shadow-[0_0_0_4px_rgba(212,168,67,0.08),0_4px_20px_rgba(0,0,0,0.2)] focus:ring-0"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[0.78rem] font-medium uppercase tracking-[0.5px] text-[rgba(245,240,232,0.6)]">
                Số điện thoại
              </label>
              <div className="relative flex items-center">
                <PhoneIcon className="pointer-events-none absolute left-4 h-4 w-4 text-[rgba(245,240,232,0.45)]" />
                <Input
                  type="text"
                  placeholder="+84 *** *** ***"
                  className="h-[46px] w-full rounded-xl border-[1.5px] border-[rgba(212,168,67,0.15)] bg-[rgba(15,27,61,0.6)] pl-11 pr-4 text-[0.9rem] text-[hsl(var(--white))] placeholder:text-[rgba(245,240,232,0.25)] focus:border-[hsl(var(--gold))] focus:bg-[rgba(15,27,61,0.8)] focus:shadow-[0_0_0_4px_rgba(212,168,67,0.08),0_4px_20px_rgba(0,0,0,0.2)] focus:ring-0"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 flex gap-2.5">
            <Button
              onClick={() => setStep(1)}
              variant="outline"
              className="h-[50px] flex-1 rounded-xl border-[1.5px] border-[rgba(212,168,67,0.2)] bg-[rgba(15,27,61,0.6)] text-[rgba(245,240,232,0.6)] shadow-none transition-all hover:bg-[rgba(15,27,61,0.8)] hover:text-[hsl(var(--white))]"
            >
              ← Quay lại
            </Button>
            <Button
              onClick={() => setStep(3)}
              className="relative h-[50px] flex-[2] overflow-hidden rounded-xl bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dim))] text-[0.95rem] font-bold tracking-[0.5px] text-[hsl(var(--navy))] shadow-[0_6px_24px_rgba(212,168,67,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(212,168,67,0.4)]"
            >
              Tiếp tục
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Security */}
      {step === 3 && (
        <div className="animate-slide-in">
          <h2 className="font-display mb-1.5 text-[1.55rem] font-bold text-[hsl(var(--white))]">
            Tạo mật khẩu
          </h2>
          <p className="mb-7 text-[0.83rem] text-[rgba(245,240,232,0.45)]">
            Bảo vệ tài khoản của bạn
          </p>

          <div className="space-y-[18px]">
            <div>
              <label className="mb-2 block text-[0.78rem] font-medium uppercase tracking-[0.5px] text-[rgba(245,240,232,0.6)]">
                Mật khẩu
              </label>
              <div className="relative flex items-center">
                <LockIcon className="pointer-events-none absolute left-4 h-4 w-4 text-[rgba(245,240,232,0.45)]" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Tối thiểu 8 ký tự"
                  onChange={(e) => checkPasswordStrength(e.target.value)}
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
              {/* Password strength */}
              <div className="mt-2 flex gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-[3px] flex-1 rounded-sm transition-colors ${getStrengthColor(i)}`}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[0.78rem] font-medium uppercase tracking-[0.5px] text-[rgba(245,240,232,0.6)]">
                Xác nhận mật khẩu
              </label>
              <div className="relative flex items-center">
                <ShieldIcon className="pointer-events-none absolute left-4 h-4 w-4 text-[rgba(245,240,232,0.45)]" />
                <Input
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  className="h-[46px] w-full rounded-xl border-[1.5px] border-[rgba(212,168,67,0.15)] bg-[rgba(15,27,61,0.6)] pl-11 pr-4 text-[0.9rem] text-[hsl(var(--white))] placeholder:text-[rgba(245,240,232,0.25)] focus:border-[hsl(var(--gold))] focus:bg-[rgba(15,27,61,0.8)] focus:shadow-[0_0_0_4px_rgba(212,168,67,0.08),0_4px_20px_rgba(0,0,0,0.2)] focus:ring-0"
                />
              </div>
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="mb-5 mt-4 flex items-start gap-2.5">
            <Checkbox
              id="signup-terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              className={`mt-0.5 h-[18px] w-[18px] rounded border-[1.5px] bg-[rgba(15,27,61,0.6)] transition-all data-[state=checked]:border-[hsl(var(--gold))] data-[state=checked]:bg-[hsl(var(--gold))] ${
                !agreed ? "border-[rgba(212,168,67,0.2)]" : ""
              }`}
            />
            <label
              htmlFor="signup-terms"
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

          <div className="flex gap-2.5">
            <Button
              onClick={() => setStep(2)}
              variant="outline"
              className="h-[50px] flex-1 rounded-xl border-[1.5px] border-[rgba(212,168,67,0.2)] bg-[rgba(15,27,61,0.6)] text-[rgba(245,240,232,0.6)] shadow-none transition-all hover:bg-[rgba(15,27,61,0.8)] hover:text-[hsl(var(--white))]"
            >
              ← Quay lại
            </Button>
            <Button
              onClick={handleSignup}
              className="relative h-[50px] flex-[2] overflow-hidden rounded-xl bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dim))] text-[0.95rem] font-bold tracking-[0.5px] text-[hsl(var(--navy))] shadow-[0_6px_24px_rgba(212,168,67,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(212,168,67,0.4)]"
            >
              Tạo tài khoản
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AuthPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const params = use(searchParams);
  const defaultTab = params.tab === "signup" ? "signup" : "login";

  return (
    <div className="w-full max-w-[440px] animate-pop-in rounded-3xl border border-[rgba(212,168,67,0.2)] bg-[rgba(22,35,71,0.7)] p-10 shadow-[0_30px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(212,168,67,0.1)] backdrop-blur-xl">
      {/* Gold line at top */}
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent opacity-60" />

      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-2 rounded-xl border border-[rgba(212,168,67,0.1)] bg-[rgba(15,27,61,0.6)] p-1">
          <TabsTrigger
            value="login"
            className="rounded-lg py-2.5 text-[0.88rem] font-medium text-[rgba(245,240,232,0.45)] transition-all data-[state=active]:bg-gradient-to-br data-[state=active]:from-[hsl(var(--gold))] data-[state=active]:to-[hsl(var(--gold-dim))] data-[state=active]:font-semibold data-[state=active]:text-[hsl(var(--navy))] data-[state=active]:shadow-[0_4px_16px_rgba(212,168,67,0.3)]"
          >
            Đăng nhập
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="rounded-lg py-2.5 text-[0.88rem] font-medium text-[rgba(245,240,232,0.45)] transition-all data-[state=active]:bg-gradient-to-br data-[state=active]:from-[hsl(var(--gold))] data-[state=active]:to-[hsl(var(--gold-dim))] data-[state=active]:font-semibold data-[state=active]:text-[hsl(var(--navy))] data-[state=active]:shadow-[0_4px_16px_rgba(212,168,67,0.3)]"
          >
            Đăng ký
          </TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <LoginForm />
        </TabsContent>

        <TabsContent value="signup">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
