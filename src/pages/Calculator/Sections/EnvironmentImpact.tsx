const STATS = [
  {
    key: "co2",
    label: "CO2 mitigated / year",
    unit: "Kg",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3.5 9h17M3.5 15h17M12 3a13 13 0 010 18 13 13 0 010-18z" />
      </svg>
    ),
  },
  {
    key: "trees",
    label: "Trees planted, equivalent",
    unit: "",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l4 6h-2.5l3.5 5h-3l3 5H7l3-5H7l3.5-5H8z" />
        <path d="M12 19v2" />
      </svg>
    ),
  },
  {
    key: "distance",
    label: "Equivalent distance driven",
    unit: "Kms",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 13l2-6a2 2 0 012-1.4h10A2 2 0 0119 7l2 6" />
        <path d="M3 13v4a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-4" />
        <circle cx="7.5" cy="17.5" r="1.5" />
        <circle cx="16.5" cy="17.5" r="1.5" />
      </svg>
    ),
  },
];

interface EnvironmentImpactProps {
  annualCo2Kg: number;
  treesEquivalent: number;
  distanceKm: number;
}

export default function EnvironmentImpact({
  annualCo2Kg,
  treesEquivalent,
  distanceKm,
}: EnvironmentImpactProps) {
  const values: Record<string, number> = {
    co2: annualCo2Kg,
    trees: treesEquivalent,
    distance: distanceKm,
  };

  return (
    <div className="bg-white rounded-3xl shadow-sun border border-navy/5 p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-navy mb-1">
        Your solar saves more than money
      </h3>
      <p className="text-navy/60 text-sm mb-6">Estimated environmental impact, per year</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {STATS.map((stat) => (
          <div key={stat.key} className="rounded-2xl bg-mist p-4 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-leaf/10 text-leaf flex items-center justify-center">
              {stat.icon}
            </div>
            <div>
              <div className="font-display text-2xl font-semibold text-navy tabular-nums">
                {values[stat.key] ? values[stat.key].toLocaleString("en-IN") : "N/A"}{" "}
                {stat.unit && <span className="text-sm font-medium text-navy/60">{stat.unit}</span>}
              </div>
              <div className="text-xs text-navy/50 mt-0.5">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}