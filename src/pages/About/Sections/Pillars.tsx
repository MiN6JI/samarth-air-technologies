import {
  PiTargetLight,
  PiEyeLight,
  PiLightbulbLight,
  PiMedalLight,
  PiHandshakeLight,
  PiUsersThreeLight,
  PiLeafLight,
  PiScalesLight,
} from "react-icons/pi";
import Container from "../../../components/UI/Container";
import AnimateIn from "../../../components/UI/AnimateIn";

const coreValues = [
  {
    title: "Innovation",
    description: "Continuously improving technology and solutions.",
    icon: PiLightbulbLight,
  },
  {
    title: "Quality",
    description: "Maintaining high standards in products and services.",
    icon: PiMedalLight,
  },
  {
    title: "Reliability",
    description: "Building dependable, long-term solutions and relationships.",
    icon: PiHandshakeLight,
  },
  {
    title: "Customer Focus",
    description:
      "Understanding customer needs and delivering practical results.",
    icon: PiUsersThreeLight,
  },
  {
    title: "Sustainability",
    description: "Promoting efficient and responsible technology.",
    icon: PiLeafLight,
  },
  {
    title: "Integrity",
    description: "Conducting business with transparency and accountability.",
    icon: PiScalesLight,
  },
];

export default function Pillars() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-24 border-b border-slate-200/60">
      {/* Background Subtle Gradient Blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <Container>
        {/* Section Header */}
        <AnimateIn variant="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-slow" />
              Company Foundation
            </div>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Our Pillars
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              Guiding principles that define our purpose, direct our vision, and
              shape our commitment to excellence.
            </p>
          </div>
        </AnimateIn>

        {/* Mission & Vision Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <AnimateIn variant="fade-right" delay={200}>
            <div className="group relative h-full flex flex-col justify-between rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-slate-200/80 transition-all duration-300 hover:shadow-xl hover:border-primary/30">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-primary/5 transition-transform duration-500 group-hover:scale-110" />
              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <PiTargetLight className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Our Mission
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed text-base">
                  A concise statement describing what SmartH Air Technologies
                  does, who it serves, and the value it creates.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Vision Card */}
          <AnimateIn variant="fade-left" delay={300}>
            <div className="group relative h-full flex flex-col justify-between rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-slate-200/80 transition-all duration-300 hover:shadow-xl hover:border-primary/30">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-primary/5 transition-transform duration-500 group-hover:scale-110" />
              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <PiEyeLight className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Our Vision
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed text-base">
                  A forward-looking statement describing where the company wants
                  to be and the impact it aims to create.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Core Values Section */}
        <div className="mt-24">
          <AnimateIn variant="fade-up" delay={100}>
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Our Core Values
              </h3>
              <div className="mt-2 mx-auto h-1 w-16 rounded bg-primary" />
            </div>
          </AnimateIn>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map(({ title, description, icon: Icon }, index) => (
              <AnimateIn key={title} variant="fade-up" delay={150 + index * 80}>
                <div className="group relative h-full flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-800 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-5 text-xl font-bold text-slate-900">
                      {title}
                    </h4>
                    <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                      {description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
