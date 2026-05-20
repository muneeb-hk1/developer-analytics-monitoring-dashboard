import MainLayout from "../components/MainLayout";

import UsersChart from "../components/charts/UsersChart";

import { useUserAnalytics } from "../hooks/useUsersAnalytics";

import StatsGrid from "../components/dashboard/StatsGrid";

import { useQuery } from "@tanstack/react-query";

import { getStats } from "../api/stats.api";

type StatsItem = {
  id: number;
  title: string;
  value: string;
};

function Dashboard() {
  const { data, isLoading, error } = useQuery<StatsItem[]>({
    queryKey: ["stats"],
    queryFn: getStats,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p> Something is wrong..</p>;
  }

  const analyticsQuery = useUsersAnalytics();

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Developer Analytics</h1>

      <StatsGrid stats={data || []} />

      <UsersChart data={analyticsQuery.data || []} />
    </MainLayout>
  );
}

export default Dashboard;
