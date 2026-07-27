import FeatureList from "./Comparision/Feature";
import comparisonData from "./Comparision/comparisonData";

function Comparison() {
  return (
    <section className="bg-[#151A33] py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="text-5xl font-bold">
            The SolarTech Advantage
          </h2>

          <p className="mt-6 text-2xl text-gray-300">
            End-to-end management. No middlemen.
          </p>

          <div className="mt-10 flex items-center gap-6 rounded-3xl bg-blue-100 p-6 text-black">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
              alt="Expert"
              className="h-28 w-28 rounded-full object-cover"
            />

            <div>
              <h3 className="text-3xl font-bold">
                Got questions?
              </h3>

              <p className="mt-2 text-lg">
                Our solar experts are just a call away.
              </p>

              <button className="mt-4 font-semibold text-blue-700">
                Talk to our expert →
              </button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-8">
          <FeatureList
            {...comparisonData.left}
            positive
          />

          <FeatureList
            {...comparisonData.right}
            positive={false}
          />
        </div>
      </div>
    </section>
  );
}

export default Comparison;