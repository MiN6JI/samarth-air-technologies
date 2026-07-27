import { useMemo, useState } from "react";
import PincodeBillForm from "./Sections/PincodeBillForm";
import SystemSizeCard from "./Sections/SystemSizeCard";
import SavingsCard from "./Sections/SavingsCard";
import EmiCard from "./Sections/EmiCard";
import EnvironmentImpact from "./Sections/EnvironmentImpact";
import {
  calculateSolarEstimate,
  calculateEmi,
} from "../../utils/SolarCalculations";

const JOURNEY_STEPS = [
  {
    title: "Calculate your savings",
    body: "Use the calculator to check your investment, ROI, and savings in seconds.",
  },
  {
    title: "Book a free consultation",
    body: "Our experts visit at your convenience for a detailed rooftop assessment.",
  },
  {
    title: "Quick & safe installation",
    body: "Get a cyclone-proof system installed on your roof in as little as 8 hours.",
  },
];

export default function SolarCalculatorPage() {
  const [pincode, setPincode] = useState("411006");
  const [city, setCity] = useState("Pune");
  const [billValue, setBillValue] = useState(3600);
  const [tenureMonths, setTenureMonths] = useState(60);

  const estimate = useMemo(
    () => calculateSolarEstimate(billValue),
    [billValue],
  );
  const emi = useMemo(
    () => calculateEmi(estimate.netCost, tenureMonths),
    [estimate.netCost, tenureMonths],
  );

  return (
    <div className="min-h-screen bg-linear-to-b from-sky to-white">
      {/* Hero */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8 text-center">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase text-amber-dark bg-amber/10 rounded-full px-3 py-1">
          Free · Takes under a minute
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-semibold text-navy mt-5 leading-tight">
          Calculate your solar savings, now
        </h1>
        <p className="text-navy/60 mt-3 max-w-xl mx-auto text-base sm:text-lg">
          Unlock savings, build that dream fund, and start ticking off your
          checklist.
        </p>
      </header>

      {/* Calculator */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-6">
            <PincodeBillForm
              pincode={pincode}
              city={city}
              billValue={billValue}
              onPincodeChange={setPincode}
              onCityChange={setCity}
              onBillChange={setBillValue}
            />

            <div className="mt-6 rounded-3xl bg-navy/5 px-6 py-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center text-amber-dark font-display font-semibold">
                ★
              </div>
              <div>
                <div className="text-sm font-medium text-navy">
                  4.8/5 Google rating
                </div>
                <div className="text-xs text-navy/50">
                  6000+ verified reviews
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <SystemSizeCard
                systemSizeKw={estimate.systemSizeKw}
                roofAreaSqft={estimate.roofAreaSqft}
              />
            </div>
            <SavingsCard
              monthlySavings={estimate.monthlySavings}
              yearlySavings={estimate.yearlySavings}
              lifetimeSavings={estimate.lifetimeSavings}
            />
            <EmiCard
              netCost={estimate.netCost}
              subsidy={estimate.subsidy}
              tenureMonths={tenureMonths}
              onTenureChange={setTenureMonths}
              emi={emi}
            />
            <div className="sm:col-span-2">
              <EnvironmentImpact
                annualCo2Kg={estimate.annualCo2Kg}
                treesEquivalent={estimate.treesEquivalent}
                distanceKm={estimate.distanceKm}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Journey */}
      <section className="bg-navy/[0.03] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy text-center">
            Your journey with solar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {JOURNEY_STEPS.map((step, i) => (
              <div
                key={step.title}
                className="bg-white rounded-2xl p-6 border border-navy/5"
              >
                <div className="w-9 h-9 rounded-full bg-amber text-navy font-display font-semibold flex items-center justify-center text-sm">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-navy mt-4">
                  {step.title}
                </h3>
                <p className="text-navy/60 text-sm mt-2 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-amber hover:bg-amber-dark transition-colors text-navy font-display font-semibold rounded-full px-7 py-3.5">
              Book a free consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
