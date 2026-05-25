import MainLayout from "../components/MainLayout";
import UsersChart from "../components/charts/UsersChart";
import StatsGrid from "../components/dashboard/StatsGrid";
import StatsGridSkeleton from "../components/dashboard/StatsGridSkeleton";

import { useUsersAnalytics } from "../hooks/useUsersAnalytics";
import { useQuery } from "@tanstack/react-query";
import { getStats } from "../api/stats.api";
import { useDashboardStore } from "../store/dashboard.store";

type StatsItem = {
  id: number;
  title: string;
  value: string;
};

function Dashboard() {
  const analyticsQuery = useUsersAnalytics();
  const { selectedRange, setSelectedRange } = useDashboardStore();

  const {
    data: statsData,
    isLoading,
    error,
  } = useQuery<StatsItem[]>({
    queryKey: ["stats"],
    queryFn: getStats,
  });

  // Loading State
  if (isLoading) {
    return (
      <MainLayout>
        <h1 className="text-3xl font-bold mb-6">Developer Analytics Board</h1>
        <StatsGridSkeleton />
      </MainLayout>
    );
  }

  // Error State
  if (error) {
    return (
      <MainLayout>
        <h1 className="text-3xl font-bold mb-6">Developer Analytics</h1>
        <p className="text-red-400">
          Something went wrong while fetching stats.
        </p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Developer Analytics</h1>
      <p className="text-slate-400 mb-6">Current Range: {selectedRange}</p>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSelectedRange("Last 7 Days")}
          className="bg-slate-800 px-4 py-2 rounded-lg"
        >
          Last 7 Days
        </button>

        <button
          onClick={() => setSelectedRange("Last 30 Days")}
          className="bg-slate-800 px-4 py-2 rounded-lg"
        >
          Last 30 Days
        </button>
      </div>

      <StatsGrid stats={statsData || []} />

      <UsersChart data={analyticsQuery.data || []} />
    </MainLayout>
  );
}

export default Dashboard;
