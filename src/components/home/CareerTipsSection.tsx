"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "10 kỹ năng mềm cần thiết cho năm 2025",
    category: "Kỹ năng",
    readTime: "5 phút",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Cách viết CV ấn tượng cho ngành IT",
    category: "CV & Hồ sơ",
    readTime: "8 phút",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Bí quyết thành công trong phỏng vấn online",
    category: "Phỏng vấn",
    readTime: "6 phút",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Xu hướng lương 2025: Ngành nào trả cao nhất?",
    category: "Thị trường",
    readTime: "10 phút",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "Chuyển ngành IT ở tuổi 30 – Có muộn không?",
    category: "Định hướng",
    readTime: "7 phút",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    title: "5 sai lầm phổ biến khi tìm việc mới",
    category: "Tìm việc",
    readTime: "4 phút",
    color: "bg-cyan-500/10 text-cyan-600",
  },
];

const CareerTipsSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Cẩm nang <span className="text-gold">nghề nghiệp</span>
          </h2>
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-dark"
          >
            Xem tất cả <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <div
              key={i}
              className="group cursor-pointer overflow-hidden rounded-xl border bg-card transition-all hover:border-gold/40 hover:shadow-lg"
            >
              {/* Thumbnail placeholder */}
              <div className="relative h-40 bg-gradient-to-br from-navy/80 to-navy-light">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-black text-white/20">
                    {i + 1}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <Badge className={`${article.color} mb-3 border-0 text-xs`}>
                  {article.category}
                </Badge>
                <h3 className="mb-3 line-clamp-2 text-sm font-semibold text-foreground transition-colors group-hover:text-gold">
                  {article.title}
                </h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock size={12} /> {article.readTime} đọc
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTipsSection;
