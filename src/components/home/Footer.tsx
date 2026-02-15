"use client";

import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark pb-8 pt-16 text-white/70">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* About */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold text-sm font-extrabold text-navy">
                JM
              </div>
              <span className="text-lg font-bold text-white">
                Job<span className="text-gold">Match</span>
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              Nền tảng tuyển dụng và tìm việc làm hàng đầu Việt Nam, kết nối ứng
              viên với hàng ngàn nhà tuyển dụng uy tín.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-gold" /> contact@jobmatch.vn
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-gold" /> 1900 xxxx
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" /> Hà Nội, Việt Nam
              </p>
            </div>
          </div>

          {/* For Candidates */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Ứng viên</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                "Tìm việc làm",
                "Tạo CV",
                "Blog nghề nghiệp",
                "Trắc nghiệm MBTI",
                "Tính lương",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-gold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Nhà tuyển dụng
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                "Đăng tuyển",
                "Tìm ứng viên",
                "Bảng giá dịch vụ",
                "Liên hệ kinh doanh",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-gold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">
              Về chúng tôi
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                "Giới thiệu",
                "Điều khoản sử dụng",
                "Chính sách bảo mật",
                "Quy chế hoạt động",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-gold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-xs text-white/40">
            © 2025 JobMatch. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Facebook", "LinkedIn", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-white/40 transition-colors hover:text-gold"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
