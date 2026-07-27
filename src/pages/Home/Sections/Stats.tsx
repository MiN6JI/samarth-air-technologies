import StatCard from "./Stats/StatsCard";
import statsData from "./Stats/statsData";

function Stats() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-center text-5xl font-bold">
          Powering Homes Across India
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((item) => (
            <StatCard key={item.id} {...item} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl bg-sky-50 p-8 lg:flex-row">
          <div className="flex items-center gap-5">
            <img
              src="https://img.icons8.com/color/96/india.png"
              alt="India"
              className="h-10 w-10"
            />

            <p className="text-2xl font-medium text-slate-900">
              We are present in <strong>31 Cities</strong> across{" "}
              <strong>10 States</strong>, and are growing every day.
            </p>
          </div>

          <button className="rounded-xl bg-indigo-900 px-12 py-4 text-lg font-semibold text-white transition hover:bg-indigo-800">
            Unlock Your Solar Savings
          </button>
        </div>
      </div>
    </section>
  );
}

export default Stats;