import Skeleton from "../ui/Skeleton";

function StatsGridSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="bg-slate-800 p-5 rounded-xl">
          <Skeleton className="h-4 w-24" />

          <Skeleton className="h-10 w-32 mt-5" />
        </div>
      ))}
    </div>
  );
}

export default StatsGridSkeleton;
