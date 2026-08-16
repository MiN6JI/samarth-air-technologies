import { PiDatabaseLight, PiGlobeLight } from "react-icons/pi";
import Container from "../../../components/UI/Container";

const features = [
  {
    icon: PiDatabaseLight,
    title: "Expert Heating Services",
    description:
      "Providing fast, safe, and efficient heating solutions tailored",
  },
  {
    icon: PiGlobeLight,
    title: "Reliable Climate Control",
    description:
      "Providing fast, safe, and efficient heating solutions tailored",
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full bg-primary-dark py-24">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: text content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-white">
              <span className="h-2 w-2 rounded-full bg-white" />
              WHAT WE DO
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Delivering trusted solutions reliable heating &amp; cooling
            </h2>

            <div className="mt-5 flex flex-col gap-2.5">
              <p className="text-white">
                Established in 2019, CraftInnove Services India Pvt. Ltd. is a
                professionally managed Electro-Mechanical (EL-Mech) organization
                delivering innovative, reliable, and sustainable engineering
                solutions.
              </p>

              <p className="text-white">
                We are a Government-Approved Electrical Contractor, licensed by
                the Government of Maharashtra, operating as a 100% compliant
                organization aligned with all statutory and industry standards.
              </p>
            </div>

            {/* Badge + feature cards */}
            <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* Feature cards */}
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="w-full max-w-xs rounded-2xl bg-white p-6 sm:w-64"
                >
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
              alt="Technician servicing an outdoor AC unit"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
