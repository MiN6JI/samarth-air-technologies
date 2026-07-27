import SolarArcGauge from "./SolarArcGauge";

interface SystemSizeCardProps {
  systemSizeKw: number;
  roofAreaSqft: number;
}

export default function SystemSizeCard({ systemSizeKw, roofAreaSqft }: SystemSizeCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-sun border border-navy/5 p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-navy mb-2">
        Required system size
      </h3>
      <SolarArcGauge systemSizeKw={systemSizeKw} />

      <div className="grid grid-cols-2 gap-3 mt-6">
        <div className="rounded-2xl bg-mist px-4 py-3">
          <div className="text-xs uppercase tracking-wide text-navy/50">
            Roof area
          </div>
          <div className="font-display text-xl font-semibold text-navy mt-0.5 tabular-nums">
            {roofAreaSqft ? roofAreaSqft.toLocaleString("en-IN") : "N/A"}{" "}
            <span className="text-sm font-medium text-navy/60">sq. ft.</span>
          </div>
        </div>
        <div className="rounded-2xl bg-mist px-4 py-3">
          <div className="text-xs uppercase tracking-wide text-navy/50">
            System size
          </div>
          <div className="font-display text-xl font-semibold text-navy mt-0.5 tabular-nums">
            {systemSizeKw ? systemSizeKw.toFixed(1) : "N/A"}{" "}
            <span className="text-sm font-medium text-navy/60">kW</span>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-dashed border-navy/15 px-4 py-3 text-sm text-navy/60 flex items-center justify-between gap-3">
        <span>Not enough roof space?</span>
        <button className="text-amber-dark font-medium whitespace-nowrap hover:underline">
          Talk to a consultant
        </button>
      </div>
    </div>
  );
}
