import { HiOutlineCheckCircle } from "react-icons/hi2";
import Container from "../../../components/UI/Container";
import AnimateIn from "../../../components/UI/AnimateIn";

export default function About() {
  return (
    <Container className="py-26">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Left: text content */}
        <AnimateIn variant="fade-right" delay={100}>
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-slow" />
              SMART SOLUTIONS
            </div>
            {/* Heading */}
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              About Us
            </h2>
            {/* Subcopy */}
            <p className="mt-6 max-w-md text-slate-500 leading-relaxed">
              Established in 2021 and based in Bhandup, Samarth Air Technologies
              is a leading provider of comprehensive HVAC, Fire Safety,
              Electrical, and Solar Energy solutions. Our mission is to engineer
              high-efficiency, reliable, and sustainable environments tailored
              to our clients' unique needs.
            </p>
            <p className="mt-6 max-w-md text-slate-500 leading-relaxed">
              Backed by a dedicated team of certified engineers and skilled
              technicians, we deliver end-to-end services—from initial design
              and installation to long-term maintenance. Whether powering
              residential spaces or securing large-scale commercial facilities,
              we are committed to safety, innovation, and complete peace of
              mind.
            </p>

            <hr className="mt-10 border-slate-200" />
            {/* Checklist */}
            <div className="mt-8 space-y-4">
              {[
                "Expert service in HVAC, Solar, Fire and Electrical installations",
                "Reliable AMC & maintenance contracts ensuring system longevity",
                "Client-centric approach backed by professional integrity",
              ].map((item, idx) => (
                <AnimateIn key={idx} variant="fade-up" delay={250 + idx * 100}>
                  <div className="flex items-center gap-3 text-slate-700 font-medium group">
                    <HiOutlineCheckCircle className="h-5 w-5 shrink-0 rounded-full bg-primary p-0.5 text-white transition-transform duration-300 group-hover:scale-125" />
                    <span className="group-hover:text-slate-900 transition-colors">
                      {item}
                    </span>
                  </div>
                </AnimateIn>
              ))}
            </div>

            {/* CTA */}
            <button className="mt-8 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-primary-dark hover:scale-105 hover:shadow-lg active:scale-95">
              Read More
            </button>
          </div>
        </AnimateIn>

        {/* Right: image collage */}
        <AnimateIn variant="fade-left" delay={200}>
          <div className="relative grid grid-cols-2 gap-5">
            {/* Decorative dot grid, top right */}
            <div
              className="pointer-events-none absolute -top-6 right-8 hidden grid-cols-6 gap-1.5 sm:grid animate-float"
              aria-hidden="true"
            >
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-primary" />
              ))}
            </div>

            <div className="col-span-1 overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <img
                src="/services/HVAC.webp"
                alt="HVAC Service"
                className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="col-span-1 mt-10 overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <img
                src="/services/Fire.webp"
                alt="Fire Service"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="h-65 col-span-1 overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <img
                src="/services/Electrical.webp"
                alt="Electrical Service"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="col-span-1 mt-4 overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <img
                src="/services/Solar.webp"
                alt="Solar Service"
                className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Decorative dot grid, bottom left */}
            <div
              className="pointer-events-none absolute -bottom-6 left-8 grid grid-cols-6 gap-1.5 animate-float"
              aria-hidden="true"
            >
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-slate-900"
                />
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </Container>
  );
}
