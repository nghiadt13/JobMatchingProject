"use client";

import { Button } from "@/components/ui/button";
import { FileText, UserCircle } from "lucide-react";

const PersonalBrandingSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">
          Xây dựng <span className="text-gold">thương hiệu cá nhân</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Profile Builder */}
          <div className="gradient-navy group relative overflow-hidden rounded-2xl p-8">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative z-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <UserCircle size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                Tạo Profile ấn tượng
              </h3>
              <p className="mb-6 leading-relaxed text-white/60">
                Xây dựng hồ sơ cá nhân chuyên nghiệp, giúp nhà tuyển dụng tìm
                thấy bạn nhanh hơn. Nổi bật giữa hàng ngàn ứng viên với profile
                được tối ưu.
              </p>
              <Button className="bg-gold font-bold text-navy hover:bg-gold-dark">
                Tạo Profile
              </Button>
            </div>
          </div>

          {/* CV Builder */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-gold/20 bg-card p-8 transition-colors hover:border-gold/40">
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-navy/5 blur-3xl" />
            <div className="relative z-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy/10 text-navy">
                <FileText size={28} />
              </div>
              <div className="mb-3 flex items-center gap-2">
                <h3 className="text-xl font-bold text-foreground">
                  CV Builder
                </h3>
                <span className="rounded-full bg-gold px-2 py-0.5 text-xs font-bold text-navy">
                  2.0
                </span>
              </div>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Tạo CV chuyên nghiệp chỉ trong 5 phút với 50+ mẫu đẹp. Xuất PDF
                chất lượng cao, sẵn sàng gửi nhà tuyển dụng ngay.
              </p>
              <Button className="bg-navy font-bold text-white hover:bg-navy-light">
                Tạo CV ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalBrandingSection;
