import { PiDatabaseLight, PiGlobeLight } from "react-icons/pi";
import Container from "../../../components/UI/Container";

const features = [
  {
    icon: PiDatabaseLight,
    title: "Expert HVAC & Climate Control",
    description:
      "Providing fast, efficient, and reliable heating, cooling, and ventilation solutions tailored to your space.",
  },
  {
    icon: PiGlobeLight,
    title: "Integrated Electrical & Solar",
    description:
      "Delivering smart power distribution, expert electrical installations, and clean rooftop solar energy solutions.",
  },
  {
    icon: PiGlobeLight,
    title: "Complete Fire Protection",
    description:
      "Ensuring total safety with state-of-the-art fire detection, alarm systems, and suppression equipment.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full overflow-hidden bg-primary-dark py-24">
      <Container>
        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: text */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-white">
              <span className="h-2 w-2 rounded-full bg-white" />
              WHAT WE DO
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Delivering Trusted MEP, Safety & Solar Solutions
            </h2>

            {/* Description */}
            <div className="mt-5 flex flex-col gap-2.5">
              <p className="text-white">
                Established in 2021 and based in Bhandup, Samarth Air
                Technologies is a professionally managed engineering
                organization delivering innovative, reliable, and sustainable
                MEP solutions. We specialize in end-to-end HVAC, Fire Safety,
                Electrical, and Solar Energy systems tailored for residential,
                commercial, and industrial facilities.
              </p>

              <p className="text-white">
                Operating with an uncompromising commitment to safety and
                quality, our skilled technical team ensures seamless execution,
                full statutory compliance, and long-term energy efficiency
                across every project.
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
              alt="Technician servicing an outdoor AC unit"
              className="h-[668px] w-full object-cover"
            />
          </div>
        </div>

        {/* Feature cards */}
        <div className="relative z-20 -mt-[250px] grid grid-cols-1 gap-6 sm:grid-cols-3 lg:w-[780px]">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="min-h-[300px] bg-white p-7 shadow-xl rounded-2xl"
            >
              <Icon className="h-8 w-8 text-primary" />

              <h3 className="mt-7 text-lg font-bold leading-relaxed text-slate-900">
                {title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
