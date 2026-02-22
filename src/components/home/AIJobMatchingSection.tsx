"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { vietnamLocations } from "@/data/vietnam-locations";
import { Sparkles } from "lucide-react";
import { useState } from "react";

const AIJobMatchingSection = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");

  const selectedCityData = vietnamLocations.find(
    (city) => city.code === selectedCity
  );

  const handleApply = () => {
    const filters = {
      jobTitle,
      city: selectedCityData?.name || "",
      district:
        selectedCityData?.districts.find((d) => d.code === selectedDistrict)
          ?.name || "",
    };
    console.log("Applied filters:", filters);
    // TODO: Implement actual filtering logic
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy py-20">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">
              Công nghệ AI
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Tìm việc thông minh với{" "}
            <span className="text-gold">AI JobMatching</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Hệ thống AI của chúng tôi sẽ phân tích kỹ năng, kinh nghiệm và tìm
            kiếm công việc phù hợp nhất cho bạn
          </p>
        </div>

        {/* AI Matching Card */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="mb-6">
              <h3 className="mb-2 text-xl font-bold text-white">
                Tìm kiếm công việc phù hợp
              </h3>
              <p className="text-sm text-white/60">
                Nhập thông tin để AI tìm kiếm công việc tốt nhất cho bạn
              </p>
            </div>

            <div className="space-y-4">
              {/* Job Title Input */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  Vị trí công việc
                </label>
                <Input
                  placeholder="VD: Lập trình viên, Marketing Manager..."
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="h-12 border-white/10 bg-white/10 text-white placeholder:text-white/40"
                />
              </div>

              {/* Location Selectors */}
              <div className="grid gap-4 md:grid-cols-2">
                {/* City Selector */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Thành phố
                  </label>
                  <Select
                    value={selectedCity}
                    onValueChange={(value) => {
                      setSelectedCity(value);
                      setSelectedDistrict(""); // Reset district when city changes
                    }}
                  >
                    <SelectTrigger className="h-12 border-white/10 bg-white/10 text-white">
                      <SelectValue placeholder="Chọn thành phố" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px] border-white/10 bg-navy">
                      {vietnamLocations.map((city) => (
                        <SelectItem
                          key={city.code}
                          value={city.code}
                          className="cursor-pointer text-white hover:bg-gold/20 hover:text-gold focus:bg-gold/20 focus:text-gold"
                        >
                          {city.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* District Selector */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Quận / Huyện
                  </label>
                  <Select
                    value={selectedDistrict}
                    onValueChange={setSelectedDistrict}
                    disabled={!selectedCity}
                  >
                    <SelectTrigger className="h-12 border-white/10 bg-white/10 text-white disabled:opacity-50">
                      <SelectValue placeholder="Chọn quận/huyện" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px] border-white/10 bg-navy">
                      {selectedCityData?.districts.map((district) => (
                        <SelectItem
                          key={district.code}
                          value={district.code}
                          className="cursor-pointer text-white hover:bg-gold/20 hover:text-gold focus:bg-gold/20 focus:text-gold"
                        >
                          {district.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Apply Button */}
              <div className="pt-2">
                <Button
                  onClick={handleApply}
                  className="h-12 w-full bg-gold text-base font-bold text-navy hover:bg-gold-dark md:w-auto md:px-12"
                  disabled={!jobTitle || !selectedCity}
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Áp dụng bộ lọc
                </Button>
              </div>
            </div>

            {/* AI Features */}
            <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/20">
                  <Sparkles className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    Phân tích thông minh
                  </h4>
                  <p className="text-sm text-white/60">
                    AI phân tích kỹ năng và kinh nghiệm của bạn
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/20">
                  <Sparkles className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    Gợi ý chính xác
                  </h4>
                  <p className="text-sm text-white/60">
                    Tìm công việc phù hợp 95% với yêu cầu
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/20">
                  <Sparkles className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    Tiết kiệm thời gian
                  </h4>
                  <p className="text-sm text-white/60">
                    Giảm 80% thời gian tìm kiếm việc làm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIJobMatchingSection;
