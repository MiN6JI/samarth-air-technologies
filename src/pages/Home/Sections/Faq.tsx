import { useState } from "react";

const faqs = [
  {
    question:
      "What HVAC services do you offer for residential and commercial spaces?",
    answer:
      "We provide complete end-to-end HVAC solutions, including system design, professional installation, routine maintenance, and emergency repair for air conditioning, VRF/VRV systems, and ventilation units to ensure year-round climate control and energy efficiency.",
  },
  {
    question:
      "How do I know if my building has enough space for a rooftop solar system?",
    answer:
      "Our team conducts a free site survey to inspect your rooftop area, shading, and structural strength. Based on your energy needs and available space, we design a customized solar setup—plus help you navigate government subsidies to minimize upfront costs.",
  },
  {
    question: "What fire safety systems do you install and maintain?",
    answer:
      "We design, install, and service comprehensive fire protection systems, including automatic fire alarms, smoke detectors, fire hydrants, sprinklers, and portable extinguishers to keep your property safe and fully compliant with safety regulations.",
  },
  {
    question:
      "Do you handle both new electrical installations and maintenance?",
    answer:
      "Yes! We handle full-scale electrical wiring, panel installations, power distribution, lighting design, and safety audits for new setups, as well as ongoing maintenance and quick troubleshooting for existing systems.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-slate-500">
            <span className="h-2 w-2 rounded-full bg-primary" />
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Ask Me Anything <br /> you want
          </h2>

          <p className="mt-6 text-slate-600">
            Everything you need to know about our rooftop solar solutions.
          </p>
        </div>

        {/* Right */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${
                    isOpen ? "bg-primary text-white" : "hover:bg-gray-50"
                  }`}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>

                  <span className="text-2xl font-light w-6 text-center">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-7">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
