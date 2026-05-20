type StatsCardProps = {
  title: string;
  value: string;
};

function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-slate-800 !p-4 rounded-xl">
      <h3 className="text-slate-400">{title}</h3>

      <p className="text-3xl mt-3 font-bold">{value}</p>
    </div>
  );
}

export default StatsCard;
