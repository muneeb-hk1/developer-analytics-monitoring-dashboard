import Skeleton from "../ui/Skeleton";

function ChartSkeleton() {
  return (
    <div className="bg-slate-800 p-6 rounded-xl mt-8">
      <Skeleton className="h-6 w-52" />

      <Skeleton className="h-4 w-72 mt-3" />

      <Skeleton className="h-[300px] w-full mt-8" />
    </div>
  );
}

export default ChartSkeleton;
