import React from "react";
import { FaHouseChimney } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { PiBankBold } from "react-icons/pi";
import { LiaRulerCombinedSolid } from "react-icons/lia";
const features = [
  {
    icon: FaHouseChimney,
    title: "HVAC Service & AMC",
    description:
      "Get support anytime, day or night, with no time constraints—just solutions.",
  },
  {
    icon: HiOutlineShoppingCart,
    title: "Solar Install & AMC",
    description:
      "Connect with specialized professionals who can guide you through complex issues.",
  },
  {
    icon: PiBankBold,
    title: "Electrical Maintenance",
    description:
      "Explore our clear and transparent pricing structure to keep you informed.",
  },
  {
    icon: LiaRulerCombinedSolid,
    title: "Fire Alarm & Safety",
    description:
      "Need something specific? We offer flexible solutions tailored to your home's unique needs.",
  },
];

export default function KeyAdvantages() {
  return (
    <section className="w-full bg-neutral-100 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-900">
          <span aria-hidden="true">🔧</span>
          Our Features
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-center text-4xl text-slate-900 sm:text-5xl font-bold">
          Our Key Advantages
        </h2>

        {/* Feature grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col">
              <Icon className="h-11 w-11 text-primary" strokeWidth={1.5} />

              <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {description}
              </p>

              <div className="mt-6 h-px w-10 bg-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
