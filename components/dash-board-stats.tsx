import React from "react";

type DashboardStatsItem = {
  title: string;
  value: string | number;
};

interface DashboardStatsProps {
  items: DashboardStatsItem[];
}

export default function DashboardStats({ items }: DashboardStatsProps) {
  return (
    <div className="mt-4 mb-4 w-full flex flex-col gap-5 justify-center items-center">
      <div className="w-full flex flex-row justify-center items-center gap-5 flex-wrap">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="
              w-50 p-5 flex flex-col border border-gray-300 rounded-md
              bg-silver gap-2.5 items-start shadow-md
            "
          >
            <p className="text-sm min-h-[18px] flex items-center">
              {item.title}
            </p>
            <p className="text-2xl font-semibold min-h-[36px] flex items-center">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
