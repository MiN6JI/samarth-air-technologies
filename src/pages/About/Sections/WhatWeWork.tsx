// import { PiDatabaseLight, PiGlobeLight } from "react-icons/pi";
import {
  PiSnowflakeLight,
  PiSolarPanelLight,
  PiFireExtinguisherLight,
} from "react-icons/pi";
import Container from "../../../components/UI/Container";

const features = [
  {
    icon: PiSnowflakeLight,
    title: "Expert HVAC & Climate Control",
    description:
      "Providing fast, efficient, and reliable heating, cooling, and ventilation solutions tailored to your space.",
  },
  {
    icon: PiSolarPanelLight,
    title: "Integrated Electrical & Solar",
    description:
      "Delivering smart power distribution, expert electrical installations, and clean rooftop solar energy solutions.",
  },
  {
    icon: PiFireExtinguisherLight,
    title: "Complete Fire Protection",
    description:
      "Ensuring total safety with state-of-the-art fire detection, alarm systems, and suppression equipment.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-100/70 py-24 border-y border-slate-200/60">
      {/* Background ambient accents */}
      {/* <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl" /> */}

      <Container>
        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: text */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center justify-left gap-2 text-sm font-semibold tracking-[0.2em] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Solutions Designed for Better Living
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Delivering Trusted MEP, Safety & Solar Solutions
            </h2>

            {/* Description */}
            <div className="mt-6 flex flex-col gap-4 text-slate-600 leading-relaxed text-base">
              <p>
                Established in 2021 and based in Bhandup, Samarth Air
                Technologies is a professionally managed engineering
                organization delivering innovative, reliable, and sustainable
                MEP solutions. We specialize in end-to-end HVAC, Fire Safety,
                Electrical, and Solar Energy systems tailored for residential,
                commercial, and industrial facilities.
              </p>

              <p>
                Operating with an uncompromising commitment to safety and
                quality, our skilled technical team ensures seamless execution,
                full statutory compliance, and long-term energy efficiency
                across every project.
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-900/5">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
                alt="Technician servicing an outdoor AC unit"
                className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-800 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-lg font-bold leading-snug text-slate-900 group-hover:text-slate-900">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>

              <div className="mt-6 h-1 w-12 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-full group-hover:bg-primary" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
