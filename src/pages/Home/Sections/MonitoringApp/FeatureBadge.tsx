type FeatureBadgeProps = {
  title: string;
  className?: string;
};

function FeatureBadge({ title, className = "" }: FeatureBadgeProps) {
  return (
    <div
      className={`absolute rounded-2xl bg-white p-5 shadow-xl ${className}`}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-white">
        📊
      </div>

      <p className="max-w-[180px] text-lg font-medium text-gray-800">
        {title}
      </p>
    </div>
  );
}

export default FeatureBadge;