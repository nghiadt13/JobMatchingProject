"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Play, Search } from "lucide-react";

const categories = [
  "Kinh doanh / Bán hàng",
  "IT Phần mềm",
  "Marketing",
  "Kế toán / Kiểm toán",
  "Hành chính / Thư ký",
  "Nhân sự",
  "Tài chính / Ngân hàng",
  "Xây dựng",
];

const HeroSection = () => {
  return (
    <section className="gradient-navy relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="bg-gold/3 absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 pb-16 pt-12">
        {/* Headline */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Tìm việc làm & tạo CV <br />
            <span className="text-gold">nhanh chóng, hiệu quả</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Kết nối hàng triệu ứng viên với nhà tuyển dụng hàng đầu Việt Nam
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-10 max-w-3xl rounded-xl border border-white/10 bg-white/10 p-2 backdrop-blur-md">
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                size={18}
              />
              <Input
                placeholder="Vị trí tuyển dụng, tên công ty..."
                className="h-12 border-white/10 bg-white/10 pl-10 text-white placeholder:text-white/40"
              />
            </div>
            <div className="relative w-full md:w-48">
              <MapPin
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                size={18}
              />
              <Input
                placeholder="Địa điểm"
                className="h-12 border-white/10 bg-white/10 pl-10 text-white placeholder:text-white/40"
              />
            </div>
            <Button className="h-12 bg-gold px-8 font-bold text-navy hover:bg-gold-dark">
              <Search size={18} /> Tìm kiếm
            </Button>
          </div>
        </div>

        {/* Bottom grid: categories + promo banner */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Category sidebar */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
              Ngành nghề phổ biến
            </h3>
            <div className="space-y-1">
              {categories.map((cat) => (
                <a
                  key={cat}
                  href="#"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-gold"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold/60" />
                  {cat}
                </a>
              ))}
            </div>
          </div>

          {/* Promo Banner */}
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-navy-light to-navy lg:col-span-2">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy/90 to-transparent" />
            <div className="relative z-20 p-8 text-left">
              <span className="mb-4 inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                Nổi bật
              </span>
              <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                CV Builder 2.0 <br /> Tạo CV chuyên nghiệp
              </h3>
              <p className="mb-6 max-w-md text-white/60">
                Hơn 50+ mẫu CV đẹp, chuyên nghiệp giúp bạn nổi bật trước nhà
                tuyển dụng
              </p>
              <div className="flex items-center gap-4">
                <Button className="bg-gold font-bold text-navy hover:bg-gold-dark">
                  Tạo CV ngay
                </Button>
                <button className="flex items-center gap-2 text-white/70 transition-colors hover:text-gold">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold/50">
                    <Play size={16} className="ml-0.5 text-gold" />
                  </div>
                  <span className="text-sm font-medium">Xem video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
