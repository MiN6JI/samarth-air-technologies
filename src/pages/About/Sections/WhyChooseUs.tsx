import {
  PiCpuLight,
  PiShieldCheckLight,
  PiSlidersHorizontalLight,
  PiWrenchLight,
  PiGaugeLight,
  PiHeadsetLight,
} from "react-icons/pi";
import Container from "../../../components/UI/Container";
import AnimateIn from "../../../components/UI/AnimateIn";

const whyChooseUsData = [
  {
    number: "01",
    title: "Smart Technology",
    description:
      "Modern solutions designed for better efficiency and performance.",
    icon: PiCpuLight,
  },
  {
    number: "02",
    title: "Trusted Quality",
    description:
      "Reliable products and services built around quality and consistency.",
    icon: PiShieldCheckLight,
  },
  {
    number: "03",
    title: "Tailored Solutions",
    description:
      "Solutions designed around your specific requirements and environment.",
    icon: PiSlidersHorizontalLight,
  },
  {
    number: "04",
    title: "Technical Expertise",
    description:
      "Knowledge and experience to solve complex air and environmental challenges.",
    icon: PiWrenchLight,
  },
  {
    number: "05",
    title: "Efficient Performance",
    description:
      "A focus on energy efficiency, operational performance, and long-term value.",
    icon: PiGaugeLight,
  },
  {
    number: "06",
    title: "Dedicated Support",
    description: "Reliable assistance throughout your journey with us.",
    icon: PiHeadsetLight,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-primary text-white py-20 lg:py-24">
      {/* Background Subtle Accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-black/20 blur-3xl" />

      <Container>
        {/* Section Header */}
        <AnimateIn variant="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] text-white/90 uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              Why Choose Us
            </div>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
              Smart Solutions. Reliable Performance. Better Air.
            </h2>
            <p className="mt-5 text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              At SmartH Air Technologies, we combine technology, expertise, and
              customer-focused solutions to deliver reliable air and
              environmental solutions tailored to modern needs.
            </p>
          </div>
        </AnimateIn>

        {/* Single Row Feature Layout */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2">
          {whyChooseUsData.map(
            ({ number, title, description, icon: Icon }, index) => (
              <AnimateIn
                key={number}
                variant="fade-up"
                delay={150 + index * 70}
                className="h-full"
              >
                <div className="group relative h-full flex flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900 hover:-translate-y-2 hover:shadow-2xl">
                  <div>
                    <div className="flex items-center justify-between">
                      {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white transition-colors duration-300 group-hover:bg-primary group-hover:text-white shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div> */}
                      <span className="text-xl font-black tracking-tight text-white/40 group-hover:text-primary/40 transition-colors duration-300">
                        {number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-bold leading-snug group-hover:text-slate-900 transition-colors duration-300">
                      {title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-white/80 group-hover:text-slate-600 leading-relaxed transition-colors duration-300">
                      {description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 group-hover:border-slate-200 transition-colors duration-300">
                    <div className="h-1 w-8 rounded-full bg-white/30 group-hover:bg-primary transition-all duration-300 group-hover:w-full" />
                  </div>
                </div>
              </AnimateIn>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
