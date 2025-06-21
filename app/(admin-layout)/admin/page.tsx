import DashboardCharts from "@/components/dash-board-charts";
import DashboardStats from "@/components/dash-board-stats";

const statsItems = [
  { title: "User Account:", value: "1,234" },
  { title: "Administrator Account:", value: "5" },
  { title: "Video:", value: "105.000" },
  { title: "Total Views:", value: "1200.000" },
  { title: "Report:", value: "1200.000" },
];

function AdminDashboard() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-col items-center py-25 gap-8">
        <h1 className="text-4xl font-bold mb-4 ">Dashboard</h1>
        <DashboardStats items={statsItems} />
        <DashboardCharts />
      </div>
    </div>
  );
}

export default AdminDashboard;
