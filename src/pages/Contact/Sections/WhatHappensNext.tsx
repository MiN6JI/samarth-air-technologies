import {
  FiSearch,
  FiMessageSquare,
  FiCompass,
  FiCheckCircle,
} from "react-icons/fi";
import Container from "../../../components/UI/Container";
import AnimateIn from "../../../components/UI/AnimateIn";

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "We Understand",
    description:
      "We review your requirements, challenges, and project objectives.",
    icon: FiSearch,
  },
  {
    number: "02",
    title: "We Consult",
    description:
      "Our technical team connects with you to understand your needs in detail.",
    icon: FiMessageSquare,
  },
  {
    number: "03",
    title: "We Plan",
    description:
      "We assess the scope, technical requirements, timelines, and compliance needs.",
    icon: FiCompass,
  },
  {
    number: "04",
    title: "We Deliver",
    description:
      "You receive a practical, tailored solution designed around your project goals.",
    icon: FiCheckCircle,
  },
];

const WhatHappensNext = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/80 border-t border-slate-200/70 overflow-hidden">
      {/* Decorative background glow & mesh pattern */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,101,46,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />

      <Container>
        {/* Section Header */}
        <AnimateIn variant="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-primary uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-slow" />
              OUR PROCESS
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              What Happens Next
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From initial enquiry to final solution, our team guides you
              through every step with clarity and expertise.
            </p>
          </div>
        </AnimateIn>

        {/* 4 Steps Grid */}
        <div className="relative mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map(({ number, title, description, icon: Icon }, index) => (
            <AnimateIn key={number} variant="fade-up" delay={150 + index * 100}>
              <div className="group relative flex flex-col justify-between h-full bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300">
                {/* Connecting Line Accent for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[2px] bg-slate-200 group-hover:bg-primary/40 transition-colors z-10" />
                )}

                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-300 group-hover:text-primary transition-colors duration-300">
                      {number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-110">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-200">
                    {index + 1}. {title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                    {description}
                  </p>
                </div>

                {/* Bottom Card Accent Bar */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary/80 group-hover:text-primary">
                  <span>Step {number}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-150 transition-all" />
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatHappensNext;
