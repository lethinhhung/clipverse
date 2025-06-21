import { AdminReportTable } from "@/components/admin-report-table";

import DashboardStats from "@/components/dash-board-stats";

const statsItems = [
  { title: "Total Reports:", value: "1,234" },
  { title: "Unread Reports:", value: "12" },
];

export default function ReportManagementPage() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-col items-center py-15 gap-4 w-[80%]">
        <h1 className="text-4xl font-bold mb-4 ">User Management</h1>
        <DashboardStats items={statsItems} />
        <AdminReportTable />
      </div>
    </div>
  );
}
