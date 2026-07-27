import { formatCurrency } from "../../../utils/SolarCalculations";

interface SavingsCardProps {
  monthlySavings: number;
  yearlySavings: number;
  lifetimeSavings: number;
}

export default function SavingsCard({
  monthlySavings,
  yearlySavings,
  lifetimeSavings,
}: SavingsCardProps) {
  const rows = [
    { label: "Monthly*", value: monthlySavings },
    { label: "Yearly*", value: yearlySavings },
    { label: "Lifetime (25 yrs)*", value: lifetimeSavings, emphasize: true },
  ];

  return (
    <div className="bg-navy rounded-3xl shadow-sun p-6 sm:p-8 text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber/20 blur-3xl"
      />
      <h3 className="font-display text-lg font-semibold relative">
        Your solar savings
      </h3>
      <p className="text-white/50 text-sm mt-1 relative">
        With SolarSquare-style estimates
      </p>

      <div className="mt-6 space-y-3 relative">
        {rows.map((row) => (
          <div
            key={row.label}
            className={`flex items-center justify-between rounded-2xl px-4 py-3 ${
              row.emphasize ? "bg-amber text-navy" : "bg-white/8"
            }`}
          >
            <span
              className={`text-sm ${row.emphasize ? "text-navy/70" : "text-white/60"}`}
            >
              {row.label}
            </span>
            <span className="font-display text-xl font-semibold tabular-nums">
              {formatCurrency(row.value)}
            </span>
          </div>
        ))}
      </div>

      <p className="text-white/40 text-xs mt-5 relative leading-relaxed">
        Assumes 1% annual panel degradation and 3% annual tariff inflation over
        25 years.
      </p>
    </div>
  );
}
