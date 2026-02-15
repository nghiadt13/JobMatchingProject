"use client";

import { Button } from "@/components/ui/button";
import { Brain, Lightbulb } from "lucide-react";

const SelfDiscoverySection = () => {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 text-center text-2xl font-bold text-foreground md:text-3xl">
          Thấu hiểu <span className="text-gold">bản thân</span>
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-center text-muted-foreground">
          Khám phá tính cách và năng lực tiềm ẩn để chọn nghề nghiệp phù hợp
          nhất
        </p>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* MBTI */}
          <div className="gradient-navy relative overflow-hidden rounded-2xl p-8">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
            <div className="relative z-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Brain size={28} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Trắc nghiệm MBTI
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-white/60">
                Khám phá 16 nhóm tính cách để hiểu rõ điểm mạnh, điểm yếu và môi
                trường làm việc phù hợp với bạn.
              </p>
              <Button className="bg-gold font-bold text-navy hover:bg-gold-dark">
                Khám phá ngay
              </Button>
            </div>
          </div>

          {/* MI */}
          <div className="gradient-navy relative overflow-hidden rounded-2xl p-8">
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
            <div className="relative z-10">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Lightbulb size={28} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Trắc nghiệm MI
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-white/60">
                Đánh giá đa trí tuệ theo mô hình Howard Gardner, tìm ra năng lực
                vượt trội và định hướng nghề nghiệp.
              </p>
              <Button className="bg-gold font-bold text-navy hover:bg-gold-dark">
                Khám phá ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfDiscoverySection;
