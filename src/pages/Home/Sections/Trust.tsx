import TrustCard from "./Trust/TrustCard";
import trustData from "./Trust/trustData";

function Trust() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-4xl font-bold text-gray-900 md:text-5xl">
          Why Families Across India Trust SolarTech
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustData.map((item) => (
            <TrustCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;