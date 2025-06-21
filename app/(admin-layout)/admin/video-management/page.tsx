import { AdminVideoTable } from "@/components/admin-video-table";

import DashboardStats from "@/components/dash-board-stats";

const statsItems = [
  { title: "Total Videos:", value: "1,234" },
  { title: "Total Views:", value: "5" },
];

export default function VideoManagementPage() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-col items-center py-15 gap-4 w-[80%]">
        <h1 className="text-4xl font-bold mb-4 ">Video Management</h1>
        <DashboardStats items={statsItems} />
        <AdminVideoTable />
      </div>
    </div>
  );
}
