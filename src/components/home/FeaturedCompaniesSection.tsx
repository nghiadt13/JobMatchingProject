"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Users } from "lucide-react";
import { useState } from "react";

const filters = [
  "Tất cả",
  "Ngân hàng",
  "Bất động sản",
  "IT / Phần mềm",
  "FMCG",
  "Tài chính",
];

const featuredCompany = {
  name: "FPT Software",
  industry: "IT / Phần mềm",
  jobs: 142,
  employees: "30,000+",
  description:
    "Công ty phần mềm hàng đầu Việt Nam, cung cấp dịch vụ công nghệ cho khách hàng toàn cầu.",
};

const companies = [
  { name: "Vingroup", industry: "Bất động sản", jobs: 89 },
  { name: "Techcombank", industry: "Ngân hàng", jobs: 67 },
  { name: "VNG Corporation", industry: "IT / Phần mềm", jobs: 54 },
  { name: "Samsung Vietnam", industry: "Sản xuất", jobs: 78 },
  { name: "Shopee", industry: "Thương mại điện tử", jobs: 93 },
  { name: "Momo", industry: "Fintech", jobs: 45 },
  { name: "VPBank", industry: "Ngân hàng", jobs: 56 },
  { name: "Tiki", industry: "Thương mại điện tử", jobs: 38 },
];

const FeaturedCompaniesSection = () => {
  const [activeFilter, setActiveFilter] = useState("Tất cả");

  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Thương hiệu lớn tiêu biểu
            </h2>
            <Badge className="bg-gold font-bold text-navy">Pro Company</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === f
                    ? "bg-navy text-white"
                    : "border bg-card text-muted-foreground hover:border-gold/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Featured spotlight */}
          <div className="gradient-navy flex min-h-[300px] flex-col justify-between rounded-xl p-6 text-white">
            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 text-xl font-bold text-gold">
                {featuredCompany.name.charAt(0)}
              </div>
              <h3 className="mb-1 text-xl font-bold">{featuredCompany.name}</h3>
              <p className="mb-3 text-sm text-white/60">
                {featuredCompany.industry}
              </p>
              <p className="mb-4 text-sm text-white/70">
                {featuredCompany.description}
              </p>
              <div className="flex gap-4 text-sm">
                <span className="flex items-center gap-1 text-gold">
                  <Building2 size={14} /> {featuredCompany.jobs} việc làm
                </span>
                <span className="flex items-center gap-1 text-white/60">
                  <Users size={14} /> {featuredCompany.employees}
                </span>
              </div>
            </div>
            <Button className="mt-4 w-fit bg-gold font-bold text-navy hover:bg-gold-dark">
              + Theo dõi
            </Button>
          </div>

          {/* Company grid */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:col-span-2">
            {companies.map((c, i) => (
              <div
                key={i}
                className="group cursor-pointer rounded-xl border bg-card p-4 text-center transition-all hover:border-gold/50"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-navy/10 font-bold text-navy transition-colors group-hover:bg-gold/15 group-hover:text-gold">
                  {c.name.charAt(0)}
                </div>
                <h4 className="mb-1 truncate text-sm font-semibold text-foreground">
                  {c.name}
                </h4>
                <p className="mb-1 text-xs text-muted-foreground">
                  {c.industry}
                </p>
                <p className="text-xs font-bold text-gold">{c.jobs} việc làm</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompaniesSection;
