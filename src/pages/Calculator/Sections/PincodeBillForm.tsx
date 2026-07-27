import { useState } from "react";
import { isValidPincode } from "../../../utils/SolarCalculations";

const MIN_BILL = 500;
const MAX_BILL = 10000;

interface PincodeBillFormProps {
  pincode: string;
  city: string;
  billValue: number;
  onPincodeChange: (pincode: string) => void;
  onCityChange: (city: string) => void;
  onBillChange: (bill: number) => void;
}

export default function PincodeBillForm({
  pincode,
  city,
  billValue,
  onPincodeChange,
  onCityChange,
  onBillChange,
}: PincodeBillFormProps) {
  const [touched, setTouched] = useState(false);
  const pincodeError = touched && !isValidPincode(pincode);

  return (
    <div className="bg-white rounded-3xl shadow-sun border border-navy/5 p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold text-navy">
        Calculate your solar savings
      </h2>
      <p className="text-navy/60 mt-1 text-sm">
        Two numbers are all it takes to size your rooftop system.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="pincode" className="block text-sm font-medium text-navy/80 mb-1.5">
            Pin code
          </label>
          <input
            id="pincode"
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={pincode}
            onChange={(e) => onPincodeChange(e.target.value.replace(/\D/g, ""))}
            onBlur={() => setTouched(true)}
            placeholder="e.g. 411006"
            className={`w-full rounded-xl border px-4 py-3 text-navy font-medium tabular-nums
              focus:outline-none focus:ring-2 focus:ring-amber/50 transition-colors
              ${pincodeError ? "border-ember" : "border-navy/15 focus:border-amber"}`}
          />
          {pincodeError && (
            <p className="text-ember text-xs mt-1.5">Please enter a valid 6-digit pincode.</p>
          )}
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-navy/80 mb-1.5">
            City
          </label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            placeholder="e.g. Pune"
            className="w-full rounded-xl border border-navy/15 px-4 py-3 text-navy font-medium
              focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition-colors"
          />
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-1.5">
            <label htmlFor="bill" className="block text-sm font-medium text-navy/80">
              Avg. monthly electricity bill
            </label>
            <span className="font-display text-lg font-semibold text-navy tabular-nums">
              ₹{Number(billValue).toLocaleString("en-IN")}
            </span>
          </div>
          <input
            id="bill"
            type="range"
            min={MIN_BILL}
            max={MAX_BILL}
            step={100}
            value={billValue}
            onChange={(e) => onBillChange(Number(e.target.value))}
            className="w-full accent-amber h-2 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-navy/45 mt-1">
            <span>Min ₹{MIN_BILL.toLocaleString("en-IN")}</span>
            <span>Max ₹{MAX_BILL.toLocaleString("en-IN")}</span>
          </div>
          <p className="text-xs text-navy/45 mt-2">
            Tip: take a 12-month average across all meters before averaging.
          </p>
        </div>
      </div>
    </div>
  );
}