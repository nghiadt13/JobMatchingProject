"use client";

import {
  Building,
  Calculator,
  Headphones,
  Landmark,
  Megaphone,
  Monitor,
  ShoppingCart,
  Users,
} from "lucide-react";

const industries = [
  {
    icon: <ShoppingCart size={24} />,
    name: "Kinh doanh / Bán hàng",
    count: "8,542",
  },
  {
    icon: <Megaphone size={24} />,
    name: "Marketing / Truyền thông",
    count: "4,231",
  },
  {
    icon: <Headphones size={24} />,
    name: "Chăm sóc khách hàng",
    count: "3,876",
  },
  { icon: <Users size={24} />, name: "Nhân sự", count: "2,945" },
  { icon: <Monitor size={24} />, name: "IT / Phần mềm", count: "7,128" },
  {
    icon: <Landmark size={24} />,
    name: "Tài chính / Ngân hàng",
    count: "3,654",
  },
  { icon: <Building size={24} />, name: "Bất động sản", count: "2,187" },
  {
    icon: <Calculator size={24} />,
    name: "Kế toán / Kiểm toán",
    count: "3,421",
  },
];

const TopIndustriesSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">
          Top ngành nghề <span className="text-gold">nổi bật</span>
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {industries.map((item, i) => (
            <div
              key={i}
              className="group cursor-pointer rounded-xl border bg-card p-6 text-center transition-all hover:border-gold hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-navy/10 text-navy transition-colors group-hover:bg-gold/15 group-hover:text-gold">
                {item.icon}
              </div>
              <h3 className="mb-1 text-sm font-semibold text-foreground">
                {item.name}
              </h3>
              <p className="text-lg font-bold text-gold">{item.count}</p>
              <p className="text-xs text-muted-foreground">việc làm</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopIndustriesSection;
