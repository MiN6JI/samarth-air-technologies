type FeatureListProps = {
  title: string;
  image: string;
  features: string[];
  positive: boolean;
};

function FeatureList({ title, image, features, positive }: FeatureListProps) {
  return (
    <div
      className={`rounded-3xl p-8 ${
        positive ? "bg-[#20284A] text-white" : "bg-transparent text-gray-300"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="mx-auto mb-6 h-24 object-contain"
      />

      <h3 className="mb-8 text-center text-2xl font-bold">{title}</h3>

      <div className="space-y-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-3 border-b border-gray-600 pb-5"
          >
            <span
              className={`text-xl ${
                positive ? "text-green-400" : "text-red-400"
              }`}
            >
              {positive ? "✓" : "✕"}
            </span>

            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureList;
