import { useState } from "react";

const faqs = [
  {
    question: "I'm not sure if I have enough space for a solar system.",
    answer:
      "Our experts will visit your home, evaluate your rooftop and power needs, then provide a free 3D design before you decide.",
  },
  {
    question: "Do I need to pay a huge amount upfront?",
    answer:
      "No. Flexible EMI options are available and government subsidies help reduce the upfront investment.",
  },
  {
    question: "How complicated is the subsidy process?",
    answer:
      "We handle the entire subsidy paperwork from application to approval, making the process hassle-free.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Once your design is approved, installation is typically completed within a day depending on weather and site conditions.",
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
          <p className="text-green-600 font-semibold uppercase tracking-wider">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-gray-600 leading-7">
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
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
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
