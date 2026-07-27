import {
  RiHandCoinLine,
  RiToolsLine,
  RiShieldCheckLine,
  RiSmartphoneLine,
} from "react-icons/ri";

const features = [
  {
    icon: <RiHandCoinLine size={30} />,
    title: "Money-back promise at Rs. 8/unit",
  },
  {
    icon: <RiToolsLine size={30} />,
    title: "Regular Proactive maintenance visits",
  },
  {
    icon: <RiShieldCheckLine size={30} />,
    title: "₹0 Repair & Replacement Cost",
  },
  {
    icon: <RiSmartphoneLine size={30} />,
    title: "App to track real-time power generation",
  },
];

export default function GoodZero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto rounded-[36px] bg-gradient-to-r from-[#f7efef] via-[#dff7ff] to-[#dce9ff] overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center p-12 lg:p-16">
          {/* Left Content */}
          <div>
            <p className="text-2xl font-semibold text-gray-900">Introducing</p>

            <h2 className="text-6xl font-extrabold text-[#24358D] mt-2">
              GoodZero
              <span className="text-3xl align-top">™</span>
            </h2>

            <p className="mt-8 text-2xl font-bold text-[#14213D] leading-snug">
              India's only Guaranteed Solar Savings Plan
            </p>

            <button className="mt-12 bg-[#2326A8] hover:bg-[#1a1d87] text-white font-semibold rounded-2xl px-12 py-5 text-xl transition">
              Know More about GoodZero
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-12">
            {features.map((item, index) => (
              <div key={index}>
                <div className="text-[#2437d0] mb-4">{item.icon}</div>

                <p className="text-2xl leading-snug font-medium text-[#14213D]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
