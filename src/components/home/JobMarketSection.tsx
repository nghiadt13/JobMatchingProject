"use client";

import { Briefcase, Building2, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const lineData = [
  { name: "T1", jobs: 12000 },
  { name: "T2", jobs: 14500 },
  { name: "T3", jobs: 13800 },
  { name: "T4", jobs: 16200 },
  { name: "T5", jobs: 18900 },
  { name: "T6", jobs: 21000 },
  { name: "T7", jobs: 19500 },
  { name: "T8", jobs: 22000 },
  { name: "T9", jobs: 24500 },
  { name: "T10", jobs: 23800 },
  { name: "T11", jobs: 26000 },
  { name: "T12", jobs: 28500 },
];

const barData = [
  { name: "IT", value: 8500 },
  { name: "Sales", value: 7200 },
  { name: "Marketing", value: 5400 },
  { name: "Finance", value: 4800 },
  { name: "HR", value: 3600 },
  { name: "Design", value: 2900 },
];

const latestJobs = [
  {
    title: "Senior React Developer",
    company: "FPT Software",
    salary: "25-40 triệu",
  },
  { title: "Marketing Manager", company: "Vingroup", salary: "20-30 triệu" },
  {
    title: "Business Analyst",
    company: "VNG Corporation",
    salary: "18-28 triệu",
  },
  { title: "UI/UX Designer", company: "Tiki", salary: "15-25 triệu" },
];

const today = new Date();
const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

const JobMarketSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Thị trường việc làm hôm nay
          </h2>
          <span className="rounded-full bg-gold/10 px-3 py-1 text-sm font-medium text-gold">
            {formattedDate}
          </span>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard
            icon={<Briefcase size={20} />}
            value="2,458"
            label="Việc làm mới 24h"
          />
          <StatCard
            icon={<TrendingUp size={20} />}
            value="48,392"
            label="Việc làm đang tuyển"
          />
          <StatCard
            icon={<Building2 size={20} />}
            value="12,847"
            label="Công ty đang hoạt động"
          />
        </div>

        {/* Charts + Latest Jobs */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Line Chart */}
          <div className="rounded-xl border bg-card p-5">
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Xu hướng tuyển dụng 2024
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(220,15%,88%)"
                />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11 }}
                  stroke="hsl(220,10%,46%)"
                />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(220,10%,46%)" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="jobs"
                  stroke="hsl(43,52%,55%)"
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: "hsl(43,52%,55%)" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="rounded-xl border bg-card p-5">
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Nhu cầu theo ngành
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(220,15%,88%)"
                />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11 }}
                  stroke="hsl(220,10%,46%)"
                />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(220,10%,46%)" />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="hsl(224,71%,15%)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Latest jobs */}
          <div className="rounded-xl border bg-card p-5">
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Việc làm mới nhất
            </h3>
            <div className="space-y-3">
              {latestJobs.map((job, i) => (
                <div
                  key={i}
                  className="flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/10 text-xs font-bold text-navy">
                    {job.company.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">
                      {job.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {job.company}
                    </p>
                    <span className="text-xs font-semibold text-gold">
                      {job.salary}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="flex items-center gap-4 rounded-xl bg-navy p-5">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold">
      {icon}
    </div>
    <div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-white/60">{label}</p>
    </div>
  </div>
);

export default JobMarketSection;
