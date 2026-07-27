type TrustCardProps = {
  image: string;
  title: string;
  description: string;
};

function TrustCard({ image, title, description }: TrustCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="mb-5 h-56 w-full rounded-2xl object-cover"
      />

      <h3 className="mb-3 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="text-base leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default TrustCard;