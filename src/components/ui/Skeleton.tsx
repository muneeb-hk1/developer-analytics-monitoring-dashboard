type Props = {
  className?: string;
};

function Skeleton({ className = "" }: Props) {
  return (
    <div
      className={`
        animate-pulse
        rounded-md
        bg-slate-700
        ${className}
      `}
    />
  );
}

export default Skeleton;
