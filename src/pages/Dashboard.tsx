import MainLayout from "../components/MainLayout";
import StatsCard from "../components/dashboard/StatsCards";

type StatsDataType = {
  id: number;
  title: string;
  value: string;
};

const StatsData: StatsDataType[] = [
  {
    id: 1,
    title: "Total Users",
    value: "12,430",
  },
  {
    id: 2,
    title: "Active Sessions",
    value: "1,203",
  },
  {
    id: 3,
    title: "Errors",
    value: "32",
  },
  {
    id: 4,
    title: "Build Success",
    value: "98%",
  },
];

function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-6">Developer Analytics</h1>

      <div className="grid grid-cols-4 gap-6">
        {StatsData.map((item) => (
          <StatsCard key={item.id} title={item.title} value={item.value} />
        ))}
      </div>
    </MainLayout>
  );
}

export default Dashboard;
