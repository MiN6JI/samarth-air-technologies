// src/components/FAQ/FAQSection.tsx
import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";

import Container from "../../../components/UI/Container";

const faqs = [
  {
    question: "How long does a solar installation take?",
    answer:
      "Most residential installations are completed within 1-3 days, depending on system size and roof complexity. Commercial projects may take longer based on scope.",
  },
  {
    question: "What maintenance does a solar system need?",
    answer:
      "Solar systems require minimal maintenance — periodic panel cleaning and an annual inspection are typically enough to keep performance optimal.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we offer flexible financing plans including loans, leases, and power purchase agreements to fit different budgets.",
  },
  {
    question: "What happens during a power outage?",
    answer:
      "Standard grid-tied systems shut off during outages for safety. Adding a battery storage system allows you to keep power running when the grid goes down.",
  },
  {
    question: "How much can I save on my energy bills?",
    answer:
      "Savings vary by location, system size, and usage, but most customers see a significant reduction in monthly energy costs after switching to solar.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            FAQ's
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
            Frequently asked questions
          </h2>

          <p className="mt-5 text-gray-500">
            Answers to common questions about our solar installation process,
            maintenance, and support.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="px-6 md:px-8">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {isOpen ? (
                      <HiMinus className="h-4 w-4" />
                    ) : (
                      <HiPlus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-gray-500">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
