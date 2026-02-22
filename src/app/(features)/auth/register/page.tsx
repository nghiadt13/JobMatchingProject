"use client";

import {
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  HomeIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
  ShieldIcon,
  UserIcon,
} from "@/components/auth/icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/constants/routes";
import { getPasswordStrength, getStrengthColor } from "@/lib/utils/password";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<"candidate" | "employer">("candidate");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

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
      <div className="w-full max-w-[580px] animate-pop-in rounded-3xl border border-[rgba(212,168,67,0.2)] bg-[rgba(22,35,71,0.7)] p-12 shadow-[0_30px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(212,168,67,0.1)] backdrop-blur-xl">
        {/* Gold line at top */}
        <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent opacity-60" />

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
          <Link href={ROUTES.auth.login}>
            <Button className="relative mt-6 h-[50px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dim))] text-[0.95rem] font-bold tracking-[0.5px] text-[hsl(var(--navy))] shadow-[0_6px_24px_rgba(212,168,67,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(212,168,67,0.4)]">
              Đăng nhập ngay
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[580px] animate-pop-in rounded-3xl border border-[rgba(212,168,67,0.2)] bg-[rgba(22,35,71,0.7)] p-12 shadow-[0_30px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(212,168,67,0.1)] backdrop-blur-xl">
      {/* Gold line at top */}
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent opacity-60" />

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
                <span className="text-[0.82rem] font-medium">
                  Nhà tuyển dụng
                </span>
              </label>
            </div>

            <Button
              onClick={() => setStep(2)}
              className="relative h-[50px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dim))] text-[0.95rem] font-bold tracking-[0.5px] text-[hsl(var(--navy))] shadow-[0_6px_24px_rgba(212,168,67,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(212,168,67,0.4)]"
            >
              Tiếp tục
            </Button>

            <p className="mt-4 text-center text-[0.83rem] text-[rgba(245,240,232,0.45)]">
              Đã có tài khoản?{" "}
              <Link
                href={ROUTES.auth.login}
                className="text-[hsl(var(--gold))] hover:underline"
              >
                Đăng nhập
              </Link>
            </p>
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
                    onChange={(e) =>
                      setPasswordStrength(getPasswordStrength(e.target.value))
                    }
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
                      className={`h-[3px] flex-1 rounded-sm transition-colors ${getStrengthColor(i, passwordStrength)}`}
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
    </div>
  );
}
