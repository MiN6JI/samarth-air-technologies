import React, { useState } from "react";
import {
  LuSun as Sun,
  LuHouse as Home,
  LuGauge as Gauge,
  LuShieldCheck as ShieldCheck,
  LuClock3 as Clock3,
  LuChevronDown as ChevronDown,
  LuArrowUpRight as ArrowUpRight,
  LuBatteryCharging as BatteryCharging,
} from "react-icons/lu";

/**
 * Residential Solar — service page
 * ------------------------------------------------------------
 * Uses the project's Tailwind v4 @theme tokens:
 *   font-sans (Inter/Plus Jakarta Sans) · font-display (Space Grotesk)
 *   color-sky #EAF3FB · color-mist #F3F7FB · color-navy #0F2540
 *   color-amber #F5A524 · color-amber-dark #D9860E
 *   color-ember #E8622C · color-leaf #2F9E6E
 *   shadow-sun
 */

const stages = [
  {
    time: "Morning",
    label: "Site Survey",
    detail: "Roof, shading, and panel orientation assessed on-site.",
  },
  {
    time: "Midday",
    label: "System Design",
    detail: "Panel count, inverter, and battery sized to your usage.",
  },
  {
    time: "Afternoon",
    label: "Install",
    detail: "Mounting, wiring, and inverter commissioned in 1–2 days.",
  },
  {
    time: "Evening",
    label: "Switch-On",
    detail: "Grid connection approved and your meter starts running back.",
  },
];

function SunArcTimeline() {
  const [active, setActive] = useState(1);
  const width = 760;
  const height = 220;
  const points = [
    { x: 70, y: 190 },
    { x: 280, y: 40 },
    { x: 480, y: 40 },
    { x: 690, y: 190 },
  ];
  const sunPos = points[active];

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full min-w-[640px] h-[340px]"
        role="img"
        aria-label="Installation process across a single day, from morning survey to evening switch-on"
      >
        <path
          d={`M ${points[0].x} ${points[0].y} Q ${width / 2} -40 ${points[3].x} ${points[3].y}`}
          fill="none"
          stroke="var(--color-navy)"
          strokeOpacity="0.15"
          strokeWidth="2"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
        {points.map((p, i) => (
          <g key={i} onClick={() => setActive(i)} className="cursor-pointer">
            <circle
              cx={p.x}
              cy={p.y}
              r={i === active ? 9 : 6}
              fill={i === active ? "var(--color-amber)" : "#ffffff"}
              stroke="var(--color-leaf)"
              strokeWidth={i === active ? 0 : 1.5}
              className="transition-all duration-300"
            />
            <text
              x={p.x}
              y={p.y + 32}
              textAnchor="middle"
              className="fill-navy font-sans text-[13px]"
              opacity={i === active ? 1 : 0.5}
            >
              {stages[i].time}
            </text>
          </g>
        ))}
        <g
          className="transition-transform duration-500 ease-out"
          transform={`translate(${sunPos.x}, ${sunPos.y - 26})`}
        >
          <circle r="10" fill="var(--color-amber)" />
          <circle r="16" fill="var(--color-amber)" opacity="0.18" />
        </g>
      </svg>
      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-4">
        {stages.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActive(i)}
            className={`rounded-lg border px-4 py-3 text-left transition-colors ${
              i === active
                ? "border-amber bg-white shadow-sun"
                : "border-navy/10 bg-transparent hover:bg-white/60"
            }`}
          >
            <p className="font-mono text-[11px] uppercase tracking-wide text-amber-dark">
              {s.label}
            </p>
            <p className="mt-1 font-sans text-sm leading-snug text-navy/70">
              {s.detail}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

const packages = [
  {
    name: "Starter",
    size: "3.5 kW",
    panels: "9 panels",
    fit: "1–2 bedroom homes, daytime-heavy usage",
  },
  {
    name: "Household",
    size: "6.6 kW",
    panels: "16 panels",
    fit: "Most 3–4 bedroom homes",
    featured: true,
  },
  {
    name: "Household + Storage",
    size: "6.6 kW + 10 kWh",
    panels: "16 panels, 1 battery",
    fit: "Homes wanting night-time backup power",
  },
];

const faqs = [
  {
    q: "How long does installation actually take?",
    a: "Most homes are fully wired and mounted in a single day. Larger roofs or battery add-ons can run into a second day. Grid approval to switch on typically follows within 5–10 business days, depending on your utility.",
  },
  {
    q: "What happens on a cloudy day?",
    a: "Panels still generate on overcast days, just at reduced output. Your system draws the shortfall from the grid automatically, or from a battery if you have one installed.",
  },
  {
    q: "Do I need to reinforce my roof?",
    a: "Rarely. Our site survey checks rafter spacing and roof condition before design. If reinforcement is ever needed, it's flagged and quoted before you commit.",
  },
  {
    q: "What's actually covered under warranty?",
    a: "Panels carry a 25-year performance warranty, inverters 10–12 years, and our own installation workmanship is covered for 10 years.",
  },
];

export default function ResidentialSolarPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-mist text-navy font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy/10 bg-sky px-6 py-24 sm:px-10 lg:px-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-navy) 1px, transparent 1px), linear-gradient(90deg, var(--color-navy) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-amber-dark">
            <Home size={18} />
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              Residential Solar
            </span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Put your roof to work
            <span className="text-amber">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy/70">
            A rooftop system sized to how your household actually uses power —
            designed, installed, and switched on in about a week.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button className="rounded-full bg-amber px-7 py-3 font-display text-sm font-semibold text-navy shadow-sun transition-transform hover:scale-[1.03] hover:bg-amber-dark">
              Get a free site survey
            </button>
            <button className="flex items-center gap-1.5 rounded-full border border-navy/20 px-7 py-3 font-display text-sm font-medium text-navy hover:border-navy/40">
              See sample designs <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-navy/10 pt-8">
            {[
              { v: "25-yr", l: "panel performance warranty" },
              { v: "6–9 mo", l: "typical bill payback ramp" },
              { v: "1 day", l: "average install time" },
            ].map((stat) => (
              <div key={stat.l}>
                <p className="font-mono text-2xl text-amber-dark sm:text-3xl">
                  {stat.v}
                </p>
                <p className="mt-1 text-xs text-navy/60">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — sun arc */}
      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            From survey to switch-on
          </h2>
          <p className="mt-2 max-w-lg text-navy/65">
            Tap a stage to see what happens — the same arc your panels will
            trace across the sky every day after.
          </p>
          <div className="mt-10">
            <SunArcTimeline />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="border-t border-navy/10 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Sized to your household
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border p-6 ${
                  p.featured
                    ? "border-amber bg-white shadow-sun"
                    : "border-navy/10 bg-white"
                }`}
              >
                {p.featured && (
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-wide text-amber-dark">
                    Most common
                  </p>
                )}
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-3 font-mono text-2xl text-amber-dark">
                  {p.size}
                </p>
                <p className="mt-1 text-sm text-navy/60">{p.panels}</p>
                <p className="mt-4 text-sm text-navy/75">{p.fit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-navy/10 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
          {[
            {
              icon: Gauge,
              title: "Right-sized, not over-sold",
              body: "Designed from your last 12 months of usage, not a flat rule of thumb.",
            },
            {
              icon: ShieldCheck,
              title: "10-year workmanship cover",
              body: "Beyond the panel warranty, our own install work is guaranteed for a decade.",
            },
            {
              icon: Clock3,
              title: "One point of contact",
              body: "The engineer who designs your system is the one who signs it off.",
            },
          ].map((f) => (
            <div key={f.title}>
              <f.icon className="text-amber-dark" size={26} />
              <h3 className="mt-4 font-display text-lg font-semibold">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-navy/70">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-navy/10 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Common questions
          </h2>
          <div className="mt-8 divide-y divide-navy/10">
            {faqs.map((f, i) => (
              <div key={f.q} className="py-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-display font-medium">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-amber-dark transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <p className="mt-3 text-sm leading-relaxed text-navy/70">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-navy/10 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 rounded-2xl bg-navy p-10 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2 text-amber">
              <BatteryCharging size={18} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                Next step
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-sky sm:text-3xl">
              Book a free site survey
            </h3>
            <p className="mt-2 max-w-md text-sm text-sky/70">
              20 minutes on your roof, a design within 48 hours, no obligation
              to proceed.
            </p>
          </div>
          <button className="whitespace-nowrap rounded-full bg-amber px-7 py-3 font-display text-sm font-semibold text-navy transition-transform hover:scale-[1.03] hover:bg-amber-dark">
            <div className="flex items-center gap-2">
              <Sun size={16} /> Book my survey
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
