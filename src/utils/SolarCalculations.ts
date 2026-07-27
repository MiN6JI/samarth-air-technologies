// solarCalculations.js
// Approximate, illustrative formulas for a rooftop solar savings estimator.
// These are simplified assumptions for demo purposes, not financial advice.

const UNIT_RATE = 8; // ₹ per kWh, blended average Indian residential tariff
const UNITS_PER_KW_PER_DAY = 4; // average generation per kW installed per day (India)
const COST_PER_KW = 55000; // ₹ indicative installed cost per kW before subsidy
const ANNUAL_DEGRADATION = 0.01; // 1% panel output loss per year
const ANNUAL_INFLATION = 0.03; // 3% assumed electricity tariff inflation
const PROJECT_YEARS = 25;
const CO2_PER_KWH = 0.82; // kg CO2 offset per kWh (India grid emission factor)
const CO2_PER_TREE_YEAR = 21; // kg CO2 absorbed per tree per year
const CO2_PER_KM_DRIVEN = 1 / 6; // kg CO2 per km (approx petrol car), so km = co2 * 6

/**
 * Government subsidy under the rooftop solar scheme (approximate slabs).
 */
function estimateSubsidy(systemSizeKw: number): number {
  if (systemSizeKw <= 0) return 0;
  const firstSlabKw = Math.min(systemSizeKw, 2);
  const secondSlabKw = Math.max(Math.min(systemSizeKw, 3) - 2, 0);
  const subsidy = firstSlabKw * 30000 + secondSlabKw * 18000;
  return Math.min(Math.round(subsidy), 78000);
}

/**
 * Rounds a system size to the nearest sensible increment and clamps it
 * to a realistic residential rooftop range.
 */
function normalizeSystemSize(rawKw: number): number {
  const rounded = Math.round(rawKw * 2) / 2; // nearest 0.5 kW
  return Math.min(Math.max(rounded, 1), 10);
}

/**
 * Core estimator: given a monthly electricity bill, returns system sizing,
 * cost, savings, and environmental impact figures.
 */
export function calculateSolarEstimate(billValue: number | string) {
  const bill = Number(billValue) || 0;
  const monthlyUnits = bill / UNIT_RATE;
  const rawSystemSize = monthlyUnits / (30 * UNITS_PER_KW_PER_DAY);
  const systemSizeKw = normalizeSystemSize(rawSystemSize);

  const roofAreaSqft = Math.round(systemSizeKw * 100);
  const grossCost = Math.round(systemSizeKw * COST_PER_KW);
  const subsidy = estimateSubsidy(systemSizeKw);
  const netCost = grossCost - subsidy;

  const dailyUnitsGenerated = systemSizeKw * UNITS_PER_KW_PER_DAY;
  const monthlySavings = Math.round(dailyUnitsGenerated * 30 * UNIT_RATE);

  // Lifetime savings across 25 years, applying degradation to output and
  // inflation to the tariff each year.
  let lifetimeSavings = 0;
  let annualUnits = dailyUnitsGenerated * 365;
  let tariff = UNIT_RATE;
  for (let year = 1; year <= PROJECT_YEARS; year += 1) {
    lifetimeSavings += annualUnits * tariff;
    annualUnits *= 1 - ANNUAL_DEGRADATION;
    tariff *= 1 + ANNUAL_INFLATION;
  }
  lifetimeSavings = Math.round(lifetimeSavings);
  const yearlySavings = Math.round(monthlySavings * 12);

  const annualCo2Kg = Math.round(dailyUnitsGenerated * 365 * CO2_PER_KWH);
  const treesEquivalent = Math.round(annualCo2Kg / CO2_PER_TREE_YEAR);
  const distanceKm = Math.round(annualCo2Kg * (1 / CO2_PER_KM_DRIVEN === Infinity ? 0 : 6));

  return {
    systemSizeKw,
    roofAreaSqft,
    grossCost,
    subsidy,
    netCost,
    monthlySavings,
    yearlySavings,
    lifetimeSavings,
    annualCo2Kg,
    treesEquivalent,
    distanceKm,
  };
}

/**
 * Reducing-balance EMI calculation.
 * @param {number} principal - loan amount in ₹ (net cost after subsidy)
 * @param {number} tenureMonths - loan tenure in months
 * @param {number} annualRate - annual interest rate, e.g. 10.5 for 10.5%
 */
export function calculateEmi(principal: number, tenureMonths: number, annualRate: number = 10.5): number {
  if (principal <= 0 || tenureMonths <= 0) return 0;
  const monthlyRate = annualRate / 12 / 100;
  if (monthlyRate === 0) return Math.round(principal / tenureMonths);
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  return Math.round(emi);
}

export function formatCurrency(value: number | null | undefined): string {
  if (value === null || value === undefined || Number.isNaN(value)) return "₹N/A";
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

export function isValidPincode(pincode: string | number): boolean {
  return /^[1-9][0-9]{5}$/.test(String(pincode).trim());
}