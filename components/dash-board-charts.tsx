"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";


const viewsData = [
  { month: "T1", views: 2100 },
  { month: "T2", views: 2540 },
  { month: "T3", views: 3220 },
  { month: "T4", views: 4180 },
  { month: "T5", views: 4360 },
  { month: "T6", views: 3900 },
  { month: "T7", views: 4700 },
  { month: "T8", views: 5120 },
  { month: "T9", views: 4740 },
  { month: "T10", views: 5100 },
  { month: "T11", views: 4530 },
  { month: "T12", views: 5300 },
];

const uploadsData = [
  { month: "T1", uploads: 80 },
  { month: "T2", uploads: 110 },
  { month: "T3", uploads: 120 },
  { month: "T4", uploads: 150 },
  { month: "T5", uploads: 180 },
  { month: "T6", uploads: 160 },
  { month: "T7", uploads: 190 },
  { month: "T8", uploads: 200 },
  { month: "T9", uploads: 205 },
  { month: "T10", uploads: 220 },
  { month: "T11", uploads: 210 },
  { month: "T12", uploads: 225 },
];

const newAccountsData = [
  { month: "T1", accounts: 20 },
  { month: "T2", accounts: 30 },
  { month: "T3", accounts: 35 },
  { month: "T4", accounts: 44 },
  { month: "T5", accounts: 48 },
  { month: "T6", accounts: 46 },
  { month: "T7", accounts: 55 },
  { month: "T8", accounts: 58 },
  { month: "T9", accounts: 60 },
  { month: "T10", accounts: 62 },
  { month: "T11", accounts: 68 },
  { month: "T12", accounts: 71 },
];

export default function DashboardCharts() {
  // Lấy số liệu tháng hiện tại
  const now = new Date();
  const thisMonth = now.getMonth(); // 0-based: 0 = T1
  const thisMonthViews = viewsData[thisMonth]?.views || 0;
  const thisMonthUploads = uploadsData[thisMonth]?.uploads || 0;
  const thisMonthAccounts = newAccountsData[thisMonth]?.accounts || 0;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {/* Lượt xem theo tháng */}
      <Card className="rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-muted-foreground font-semibold">
            Lượt xem tháng này
          </CardTitle>
          <span className="text-3xl font-bold text-primary">
            {thisMonthViews}
          </span>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={140}>
            <LineChart data={viewsData}>
              <Line
                type="monotone"
                dataKey="views"
                stroke="#2563eb"
                strokeWidth={3}
                dot={false}
              />
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="month" />
              <YAxis hide />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      {/* Video đăng theo tháng */}
      <Card className="rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-muted-foreground font-semibold">
            Video đăng tháng này
          </CardTitle>
          <span className="text-3xl font-bold text-green-600">
            {thisMonthUploads}
          </span>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={140}>
            <BarChart data={uploadsData}>
              <Bar dataKey="uploads" fill="#22c55e" radius={[12, 12, 0, 0]} />
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="month" />
              <YAxis hide />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      {/* Tài khoản mới theo tháng */}
      <Card className="rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-muted-foreground font-semibold">
            Tài khoản mới tháng này
          </CardTitle>
          <span className="text-3xl font-bold text-violet-600">
            {thisMonthAccounts}
          </span>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={140}>
            <AreaChart data={newAccountsData}>
              <defs>
                <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#f3e8ff" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="accounts"
                stroke="#a78bfa"
                fill="url(#colorAcc)"
                strokeWidth={3}
                dot={false}
              />
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="month" />
              <YAxis hide />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
