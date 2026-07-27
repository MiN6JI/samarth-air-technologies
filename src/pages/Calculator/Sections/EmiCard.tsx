import { formatCurrency } from "../../../utils/SolarCalculations";

const MIN_TENURE = 3;
const MAX_TENURE = 60;

interface EmiCardProps {
  netCost: number;
  subsidy: number;
  tenureMonths: number;
  onTenureChange: (tenure: number) => void;
  emi: number;
}

export default function EmiCard({
  netCost,
  subsidy,
  tenureMonths,
  onTenureChange,
  emi,
}: EmiCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-sun border border-navy/5 p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h3 className="font-display text-lg font-semibold text-navy">
            Buy solar at ₹0 investment
          </h3>
          <p className="text-navy/60 text-sm mt-1">
            Govt. subsidy of {formatCurrency(subsidy)} covers your down payment.
          </p>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-wide text-navy/50">Monthly EMI</div>
          <div className="font-display text-2xl font-semibold text-amber-dark tabular-nums">
            {formatCurrency(emi)}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-baseline justify-between mb-1.5">
          <span className="text-sm font-medium text-navy/80">EMI tenure</span>
          <span className="font-display text-base font-semibold text-navy tabular-nums">
            {tenureMonths} months
          </span>
        </div>
        <input
          type="range"
          min={MIN_TENURE}
          max={MAX_TENURE}
          step={1}
          value={tenureMonths}
          onChange={(e) => onTenureChange(Number(e.target.value))}
          className="w-full accent-amber h-2 cursor-pointer"
        />
        <div className="flex justify-between text-xs text-navy/45 mt-1">
          <span>{MIN_TENURE} months</span>
          <span>{MAX_TENURE} months</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-5">
        <div className="rounded-2xl bg-mist px-4 py-3">
          <div className="text-xs uppercase tracking-wide text-navy/50">Net cost</div>
          <div className="font-display text-lg font-semibold text-navy mt-0.5 tabular-nums">
            {formatCurrency(netCost)}
          </div>
        </div>
        <div className="rounded-2xl bg-mist px-4 py-3">
          <div className="text-xs uppercase tracking-wide text-navy/50">Subsidy applied</div>
          <div className="font-display text-lg font-semibold text-leaf mt-0.5 tabular-nums">
            {formatCurrency(subsidy)}
          </div>
        </div>
      </div>
    </div>
  );
}   