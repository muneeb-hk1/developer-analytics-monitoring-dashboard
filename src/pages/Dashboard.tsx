import MainLayout from "../components/MainLayout";
import StatsCard from "../components/dashboard/StatsCards";

import { useQuery } from "@tanstack/react-query";

import { getStats } from "../api/stats.api";

type StatsItem = {
  id: number;
  title: string;
  value: string;
};

function Dashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Developer Analytics</h1>

      <div className="grid grid-cols-4 gap-6">
        {data.map((item: StatsItem) => (
          <StatsCard key={item.id} title={item.title} value={item.value} />
        ))}
      </div>
    </MainLayout>
  );
}

export default Dashboard;
