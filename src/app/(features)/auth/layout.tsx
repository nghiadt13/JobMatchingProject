"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import "./auth.css";

interface Particle {
  id: number;
  left: number;
  bottom: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}

function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        bottom: Math.random() * 30,
        size: Math.random() > 0.7 ? 3 : 2,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 10,
        drift: (Math.random() - 0.5) * 80,
        opacity: 0.2 + Math.random() * 0.5,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-rise rounded-full bg-[hsl(var(--gold))]"
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[hsl(var(--navy))]">
      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 15% 50%, rgba(212,168,67,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 50% 70% at 85% 20%, rgba(30,47,90,0.9) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 80% 80%, rgba(212,168,67,0.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,168,67,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,168,67,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Orbs */}
      <div
        className="absolute -right-[100px] -top-[100px] h-[500px] w-[500px] animate-float rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,67,0.08), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute -bottom-[50px] -left-[50px] h-[300px] w-[300px] animate-float rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(36,54,112,0.6), transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "-4s",
        }}
      />

      {/* Particles */}
      <Particles />
    </div>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-[#0F1B3D]"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  );
}

function LeftPanel() {
  return (
    <div className="relative hidden flex-col justify-center px-[70px] py-[60px] lg:flex">
      {/* Brand */}
      <div className="absolute left-[70px] top-10 flex animate-fade-down items-center gap-3">
        <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--gold-dim))] shadow-[0_4px_20px_rgba(212,168,67,0.3)]">
          <BriefcaseIcon />
        </div>
        <span className="font-display text-[1.1rem] font-bold tracking-[0.5px] text-[hsl(var(--white))]">
          Job<span className="text-[hsl(var(--gold))]">Matching</span>
        </span>
      </div>

      {/* Hero Content */}
      <div className="animate-fade-up">
        {/* Tag */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-[20px] border border-[rgba(212,168,67,0.2)] bg-[rgba(212,168,67,0.12)] px-3.5 py-1.5 text-[0.72rem] font-medium uppercase tracking-[1.5px] text-[hsl(var(--gold-light))]">
          <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-[hsl(var(--gold))]" />
          #1 Platform Tuyển Dụng
        </div>

        {/* Title */}
        <h1 className="font-display mb-5 text-[clamp(2.2rem,3vw,3.2rem)] font-black leading-[1.1] text-[hsl(var(--white))]">
          Kết nối tài năng
          <em className="block not-italic text-[hsl(var(--gold))]">
            với cơ hội
          </em>
          hoàn hảo
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-[380px] text-[0.95rem] leading-[1.7] text-[rgba(245,240,232,0.45)]">
          Hàng nghìn cơ hội nghề nghiệp hàng đầu đang chờ bạn. Hãy để
          JobMatching đưa bạn đến đúng nơi, đúng lúc.
        </p>

        {/* Stats */}
        <div
          className="flex animate-fade-up gap-8"
          style={{ animationDelay: "0.4s" }}
        >
          <div>
            <div className="font-display text-[1.8rem] font-bold leading-none text-[hsl(var(--gold))]">
              50K+
            </div>
            <div className="mt-1 text-[0.75rem] tracking-[0.5px] text-[rgba(245,240,232,0.45)]">
              Việc làm
            </div>
          </div>
          <div className="w-px self-stretch bg-[rgba(212,168,67,0.2)]" />
          <div>
            <div className="font-display text-[1.8rem] font-bold leading-none text-[hsl(var(--gold))]">
              12K+
            </div>
            <div className="mt-1 text-[0.75rem] tracking-[0.5px] text-[rgba(245,240,232,0.45)]">
              Doanh nghiệp
            </div>
          </div>
          <div className="w-px self-stretch bg-[rgba(212,168,67,0.2)]" />
          <div>
            <div className="font-display text-[1.8rem] font-bold leading-none text-[hsl(var(--gold))]">
              98%
            </div>
            <div className="mt-1 text-[0.75rem] tracking-[0.5px] text-[rgba(245,240,232,0.45)]">
              Hài lòng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="auth-layout">
      <Background />
      <div className="relative z-10 grid min-h-screen lg:grid-cols-2">
        <LeftPanel />
        <div className="flex items-center justify-start p-5 lg:p-10 lg:pl-16">
          {children}
        </div>
      </div>
    </div>
  );
}
