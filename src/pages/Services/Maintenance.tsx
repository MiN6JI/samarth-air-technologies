import React, { useState } from "react";
import {
  LuWrench as Wrench,
  LuGauge as GaugeIcon,
  LuTriangleAlert as AlertTriangle,
  LuCircleCheckBig as CheckCircle2,
  LuChevronDown as ChevronDown,
  LuArrowUpRight as ArrowUpRight,
  LuRadar as Radar,
} from "react-icons/lu";

/**
 * Solar Maintenance & Monitoring — service page
 * ------------------------------------------------------------
 * Uses the project's Tailwind v4 @theme tokens:
 *   font-sans (Inter/Plus Jakarta Sans) · font-display (Space Grotesk)
 *   color-sky #EAF3FB · color-mist #F3F7FB · color-navy #0F2540
 *   color-amber #F5A524 · color-amber-dark #D9860E
 *   color-ember #E8622C · color-leaf #2F9E6E
 *   shadow-sun
 */

function PerformanceGauge({ value = 94 }: { value?: number }) {
  const size = 220;
  const stroke = 14;
  const r = (size - stroke) / 2;
  const circumference = Math.PI * r; // half circle
  const filled = (value / 100) * circumference;

  return (
    <svg
      viewBox={`0 0 ${size} ${size / 2 + 20}`}
      className="w-full max-w-[280px]"
      role="img"
      aria-label={`System performance ratio: ${value} percent of expected output`}
    >
      <path
        d={`M ${stroke / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${size / 2}`}
        fill="none"
        stroke="var(--color-navy)"
        strokeOpacity="0.1"
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <path
        d={`M ${stroke / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - stroke / 2} ${size / 2}`}
        fill="none"
        stroke="var(--color-amber)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${filled} ${circumference}`}
      />
      <text
        x={size / 2}
        y={size / 2 - 6}
        textAnchor="middle"
        className="fill-navy font-mono"
        style={{ fontSize: 34 }}
      >
        {value}%
      </text>
      <text
        x={size / 2}
        y={size / 2 + 18}
        textAnchor="middle"
        className="fill-navy/55 font-sans"
        style={{ fontSize: 12 }}
      >
        performance ratio
      </text>
    </svg>
  );
}

const alerts = [
  {
    level: "resolved",
    label: "Panel string 4 — under-performing",
    note: "Cleared after cleaning visit, output restored to baseline.",
    time: "Tue 09:14",
  },
  {
    level: "watch",
    label: "Inverter efficiency drift, 2.1%",
    note: "Within tolerance, flagged for next scheduled visit.",
    time: "Mon 22:40",
  },
  {
    level: "resolved",
    label: "Communication gap, 6 hrs",
    note: "Monitoring gateway reconnected automatically.",
    time: "Sun 03:02",
  },
];

const plans = [
  {
    name: "Monitor",
    price: "Remote only",
    points: [
      "24/7 output monitoring",
      "Fault alerts by email/SMS",
      "Quarterly performance report",
    ],
  },
  {
    name: "Care",
    price: "Most common",
    featured: true,
    points: [
      "Everything in Monitor",
      "Annual on-site inspection & cleaning",
      "Priority fault response, 48 hrs",
    ],
  },
  {
    name: "Full Cover",
    price: "For larger systems",
    points: [
      "Everything in Care",
      "Inverter & component replacement labor",
      "Same-week emergency call-out",
    ],
  },
];

const faqs = [
  {
    q: "How do you know if my system is underperforming?",
    a: "Your inverter output is compared against an expected generation model built from your system's design, local weather, and panel degradation curve. A sustained gap against that model raises an alert.",
  },
  {
    q: "What counts as an emergency call-out?",
    a: "A full system shutdown, a fault code indicating a safety issue, or any visible damage to panels or wiring. Routine under-performance or a single fault code is handled on the next scheduled visit unless it's escalating.",
  },
  {
    q: "Can you monitor a system you didn't install?",
    a: "In most cases, yes. We can connect to your existing inverter's monitoring platform, or fit a monitoring gateway where the manufacturer allows third-party access.",
  },
  {
    q: "How often should panels actually be cleaned?",
    a: "Most roofs need it once a year. Sites near dust, agriculture, or heavy pollen may need two visits — your performance data will show if output is dropping from soiling rather than a fault.",
  },
];

export default function SolarMaintenancePage() {
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
            <Wrench size={18} />
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              Maintenance &amp; Monitoring
            </span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            A system that tells you
            <span className="text-amber"> when something's off.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy/70">
            Panels quietly lose output long before they visibly fail.
            Continuous monitoring catches the drop before it costs you a
            season of generation.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button className="rounded-full bg-amber px-7 py-3 font-display text-sm font-semibold text-navy shadow-sun transition-transform hover:scale-[1.03] hover:bg-amber-dark">
              Check my system's health
            </button>
            <button className="flex items-center gap-1.5 rounded-full border border-navy/20 px-7 py-3 font-display text-sm font-medium text-navy hover:border-navy/40">
              Compare plans <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Live-style dashboard */}
      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-amber-dark">
            <Radar size={18} />
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              Sample dashboard
            </span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
            What monitoring actually watches
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
            <div className="flex flex-col items-center rounded-2xl border border-navy/10 bg-white p-6 shadow-sun">
              <PerformanceGauge value={94} />
              <p className="mt-2 text-center text-sm text-navy/60">
                Illustrative reading — your dashboard shows your system's own
                figure, updated hourly.
              </p>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sun">
              <p className="font-mono text-[11px] uppercase tracking-wide text-navy/50">
                Recent alert log
              </p>
              <div className="mt-4 divide-y divide-navy/10">
                {alerts.map((a) => (
                  <div key={a.label} className="flex items-start gap-3 py-4">
                    {a.level === "resolved" ? (
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-leaf" />
                    ) : (
                      <AlertTriangle size={18} className="mt-0.5 shrink-0 text-ember" />
                    )}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <p className="font-display text-sm font-medium">
                          {a.label}
                        </p>
                        <p className="font-mono text-xs text-navy/45">
                          {a.time}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-navy/65">{a.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="border-t border-navy/10 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-amber-dark">
            <GaugeIcon size={18} />
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              Plans
            </span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
            Choose your level of cover
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border p-6 ${
                  p.featured
                    ? "border-amber bg-white shadow-sun"
                    : "border-navy/10 bg-white"
                }`}
              >
                <p className="font-mono text-[11px] uppercase tracking-wide text-amber-dark">
                  {p.price}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold">
                  {p.name}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-sm text-navy/75"
                    >
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-leaf" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
              <Wrench size={18} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                Next step
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-sky sm:text-3xl">
              Get your system checked
            </h3>
            <p className="mt-2 max-w-md text-sm text-sky/70">
              Send your last bill or inverter serial number and we'll tell you
              if your output looks right before you commit to a plan.
            </p>
          </div>
          <button className="whitespace-nowrap rounded-full bg-amber px-7 py-3 font-display text-sm font-semibold text-navy transition-transform hover:scale-[1.03] hover:bg-amber-dark">
            Request a check
          </button>
        </div>
      </section>
    </div>
  );
}
