import { useState } from "react";

function SavingsCalculator() {
  const [pincode, setPincode] = useState("");
  const [bill, setBill] = useState(0);

  return (
    <section className="bg-[#F5FBF8] py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row">
        {/* Left */}
        <div className="flex-1">
          <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-green-200 bg-white">
            <img
              src="https://img.icons8.com/color/96/calculator.png"
              alt="Calculator"
              className="h-14 w-14"
            />
          </div>

          <h2 className="max-w-xl text-6xl font-bold leading-tight text-[#1E2A5E]">
            See How Much You Can Save with Solar
          </h2>

          <p className="mt-8 max-w-lg text-2xl leading-10 text-gray-700">
            Enter your pincode and average monthly electricity bill to
            calculate your savings.
          </p>
        </div>

        {/* Right */}
        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="PIN Code"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="mb-10 w-full rounded-xl border border-gray-300 bg-white px-6 py-5 text-lg outline-none focus:border-blue-500"
          />

          <div className="mb-3 flex justify-between">
            <span className="text-xl font-semibold">
              Monthly Electricity Bill
            </span>

            <span className="text-xl font-bold">
              ₹{bill}
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={25000}
            step={500}
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            className="h-3 w-full cursor-pointer accent-green-400"
          />

          <button className="mt-12 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-gray-700 py-5 text-xl font-semibold text-white transition hover:opacity-90">
            Calculate Now →
          </button>
        </div>
      </div>
    </section>
  );
}

export default SavingsCalculator;