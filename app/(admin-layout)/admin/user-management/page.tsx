import { AdminUserTable } from "@/components/admin-user-table";

import DashboardStats from "@/components/dash-board-stats";

const statsItems = [
  { title: "User Account:", value: "1,234" },
  { title: "Administrator Account:", value: "5" },
];

export default function UserManagementPage() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-col items-center py-15 gap-4 w-[80%]">
        <h1 className="text-4xl font-bold mb-4 ">User Management</h1>
        <DashboardStats items={statsItems} />
        <AdminUserTable />
      </div>
    </div>
  );
}
