const features = [
  {
    image: "/duo-tone-icons/repair-service.png",
    title: "HVAC Service & AMC",
    description:
      "Get support anytime, day or night, with no time constraints—just solutions.",
  },
  {
    image: "/duo-tone-icons/solar-house.png",
    title: "Solar Install & AMC",
    description:
      "Connect with specialized professionals who can guide you through complex issues.",
  },
  {
    image: "/duo-tone-icons/electricity.png",
    title: "Electrical Maintenance",
    description:
      "Explore our clear and transparent pricing structure to keep you informed.",
  },
  {
    image: "/duo-tone-icons/alarm-variant.png",
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
        <div className="mb-5 flex items-center justify-center gap-2 text-sm font-semibold tracking-[0.2em] text-slate-500">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Features
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-center text-4xl text-slate-900 sm:text-5xl font-bold">
          Our Key Advantages
        </h2>

        {/* Feature grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ image, title, description }) => (
            <div key={title} className="flex flex-col">
              <img
                src={image}
                alt={title}
                className="h-12 w-12 object-contain"
              />

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
