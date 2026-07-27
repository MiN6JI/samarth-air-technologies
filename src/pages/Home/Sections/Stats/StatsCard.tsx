type StatCardProps = {
  icon: string;
  value: string;
  label: string;
};

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-gray-50 p-8">
      <img
        src={icon}
        alt={label}
        className="mb-5 h-10 w-10"
      />

      <h3 className="text-3xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-2 text-gray-600">
        {label}
      </p>
    </div>
  );
}

export default StatCard;