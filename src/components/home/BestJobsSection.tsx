"use client";

import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const locations = [
  "Ngẫu Nhiên",
  "Hà Nội",
  "TP. Hồ Chí Minh",
  "Đà Nẵng",
  "Khác",
];

const jobs = [
  {
    title: "Frontend Developer (React)",
    company: "FPT Software",
    salary: "20-35 triệu",
    location: "Hà Nội",
    hot: true,
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_logo.svg",
  },
  {
    title: "Product Manager",
    company: "VNG Corporation",
    salary: "30-45 triệu",
    location: "TP. HCM",
    hot: true,
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/VNG_Corporation_Logo.svg",
  },
  {
    title: "Data Analyst",
    company: "Shopee Vietnam",
    salary: "18-28 triệu",
    location: "TP. HCM",
    hot: false,
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg",
  },
  {
    title: "DevOps Engineer",
    company: "Momo",
    salary: "25-40 triệu",
    location: "TP. HCM",
    hot: true,
    logo: "https://upload.wikimedia.org/wikipedia/vi/d/d1/MoMo_Logo.svg",
  },
  {
    title: "Graphic Designer",
    company: "Tiki",
    salary: "12-18 triệu",
    location: "Hà Nội",
    hot: false,
    logo: "https://salt.tikicdn.com/ts/upload/ae/f1/ad/c8d31efc435551348ea4910e3f40994d.png",
  },
  {
    title: "Sales Executive",
    company: "Vingroup",
    salary: "15-25 triệu",
    location: "Hà Nội",
    hot: false,
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Logo_Vingroup.svg",
  },
  {
    title: "Backend Developer (Java)",
    company: "Techcombank",
    salary: "25-40 triệu",
    location: "Hà Nội",
    hot: true,
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Logo_Techcombank.svg",
  },
  {
    title: "HR Business Partner",
    company: "Samsung Vietnam",
    salary: "20-32 triệu",
    location: "Đà Nẵng",
    hot: false,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
];

const BestJobsSection = () => {
  const [activeTab, setActiveTab] = useState("Ngẫu Nhiên");

  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Việc làm tốt nhất
            </h2>
            <Badge className="gap-1 border-gold/30 bg-gold/15 text-gold">
              <Sparkles size={12} /> AI đề xuất
            </Badge>
          </div>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setActiveTab(loc)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === loc
                    ? "bg-navy text-white"
                    : "border bg-card text-muted-foreground hover:border-gold/50"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="group relative cursor-pointer rounded-xl border bg-card p-5 transition-all hover:border-gold/50 hover:shadow-lg"
            >
              {job.hot && (
                <span className="absolute right-3 top-3 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white">
                  HOT
                </span>
              )}
              <div className="mb-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-navy/10">
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 line-clamp-2 text-sm font-semibold text-foreground transition-colors group-hover:text-gold">
                {job.title}
              </h3>
              <p className="mb-2 text-xs text-muted-foreground">
                {job.company}
              </p>
              <p className="mb-2 text-sm font-bold text-gold">{job.salary}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin size={12} /> {job.location}
                </span>
                <button className="text-muted-foreground transition-colors hover:text-red-400">
                  <Heart size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestJobsSection;
