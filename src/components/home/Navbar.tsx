"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-light/30 bg-navy backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-lg font-extrabold text-navy">
            JM
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Job<span className="text-gold">Match</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <NavItem label="Việc làm" />
          <NavDropdown
            label="Tạo CV"
            items={["CV Mẫu", "CV Builder 2.0", "Hướng dẫn viết CV"]}
          />
          <NavDropdown
            label="Công cụ"
            items={[
              "Tính lương Gross/Net",
              "Trắc nghiệm MBTI",
              "Trắc nghiệm MI",
            ]}
          />
          <NavDropdown
            label="Cẩm nang nghề nghiệp"
            items={[
              "Bí quyết tìm việc",
              "Kỹ năng phỏng vấn",
              "Phát triển sự nghiệp",
            ]}
          />
        </nav>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="ghost"
            className="text-white/80 hover:bg-navy-light hover:text-white"
          >
            Đăng nhập
          </Button>
          <Button className="bg-gold font-semibold text-navy hover:bg-gold-dark">
            Đăng ký
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="space-y-3 border-t border-navy-light/20 bg-navy-dark px-4 py-4 lg:hidden">
          <a href="#" className="block py-2 text-white/80 hover:text-gold">
            Việc làm
          </a>
          <a href="#" className="block py-2 text-white/80 hover:text-gold">
            Tạo CV
          </a>
          <a href="#" className="block py-2 text-white/80 hover:text-gold">
            Công cụ
          </a>
          <a href="#" className="block py-2 text-white/80 hover:text-gold">
            Cẩm nang nghề nghiệp
          </a>
          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              className="flex-1 border-white/30 text-white"
            >
              Đăng nhập
            </Button>
            <Button className="flex-1 bg-gold font-semibold text-navy hover:bg-gold-dark">
              Đăng ký
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ label }: { label: string }) => (
  <a
    href="#"
    className="px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-gold"
  >
    {label}
  </a>
);

const NavDropdown = ({ label, items }: { label: string; items: string[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-gold">
        {label}{" "}
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-navy-light/30 bg-navy-dark py-2 shadow-xl">
          {items.map((item) => (
            <Link
              key={item}
              href="#"
              className="block px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-navy-light/30 hover:text-gold"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
