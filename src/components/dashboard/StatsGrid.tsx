import StatsCard from "./StatsCards";

type StatsItem = {
  id: number;
  title: string;
  value: string;
};

type Props = {
  stats: StatsItem[];
};

function StatsGrid({ stats }: Props) {
  return (
    <div className="grid grid-cols-4 gap-6 !py-4">
      {stats.map((item) => (
        <StatsCard key={item.id} title={item.title} value={item.value} />
      ))}
    </div>
  );
}

export default StatsGrid;
