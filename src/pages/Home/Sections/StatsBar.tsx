import Container from "../../../components/UI/Container";

const stats = [
  { value: "6+", label: "Years of Experience" },
  { value: "250", label: "Clients Served" },
  // { value: "150", label: "Active AMCs" },
  { value: "120+", label: "Project Completed" },
  { value: "100%", label: "Compliance Score" },
];

export default function StatsBar() {
  return (
    <section className="w-full bg-neutral-100 py-16">
      <Container>
        <div className="grid grid-cols-2 gap-y-12 text-center sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold text-primary sm:text-5xl">
                {value}
              </p>
              <p className="mt-3 text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
