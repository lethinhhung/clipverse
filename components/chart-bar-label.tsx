"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import { TrendingUp } from "lucide-react";
import { useTheme } from "next-themes";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
  { month: "Apr", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "Jun", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartBarLabel() {
  const { theme } = useTheme();
  const barColor = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <Card className="w-full max-w-sm min-w-70 h-auto overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Traffic Overview</CardTitle>
        <CardDescription className="text-xs text-gray-500">
          Jan – Jun 2024
        </CardDescription>
      </CardHeader>

      <CardContent className="w-full h-45 pt-0">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={6}
                fontSize={10}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="desktop" fill={barColor} radius={4}>
                <LabelList
                  dataKey="desktop"
                  position="top"
                  offset={8}
                  className="fill-foreground"
                  fontSize={10}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex flex-col gap-1 px-4 pb-3 text-xs">
        <div className="flex items-center gap-1 font-medium">
          +5.2% this month
          <TrendingUp className="h-3 w-3" />
        </div>
        <div className="text-muted-foreground">
          Last 6 months' visitor stats
        </div>
      </CardFooter>
    </Card>
  );
}
