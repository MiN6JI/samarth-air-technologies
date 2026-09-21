import Container from "../../../components/UI/Container";
import AnimateIn from "../../../components/UI/AnimateIn";
import AnimatedCounter from "../../../components/UI/AnimatedCounter";

const stats = [
  { value: "6+", label: "Years of Experience" },
  { value: "250", label: "Clients Served" },
  { value: "120+", label: "Project Completed" },
  { value: "100%", label: "Compliance Score" },
];

export default function StatsBar() {
  return (
    <section className="w-full bg-neutral-100 py-16 overflow-hidden">
      <Container>
        <div className="grid grid-cols-2 gap-y-12 text-center sm:grid-cols-4">
          {stats.map(({ value, label }, index) => (
            <AnimateIn
              key={label}
              variant="zoom-in"
              delay={index * 150}
            >
              <div className="group transition-transform duration-300 hover:scale-105">
                <p className="text-4xl font-extrabold text-primary sm:text-5xl transition-colors duration-300 group-hover:text-primary-dark">
                  <AnimatedCounter value={value} duration={2000} />
                </p>
                <p className="mt-3 text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                  {label}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

