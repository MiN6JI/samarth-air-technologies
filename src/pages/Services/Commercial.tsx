import { useState } from "react";
import {
  LuBuilding2,
  LuTrendingDown,
  LuChevronDown,
  LuFileSearch,
  LuArrowUpRight,
  LuLandmark,
  LuFactory,
} from "react-icons/lu";

/**
 * Commercial & Industrial Solar — service page
 * ------------------------------------------------------------
 * Uses the project's Tailwind v4 @theme tokens:
 *   font-sans (Inter/Plus Jakarta Sans) · font-display (Space Grotesk)
 *   color-sky #EAF3FB · color-mist #F3F7FB · color-navy #0F2540
 *   color-amber #F5A524 · color-amber-dark #D9860E
 *   color-ember #E8622C · color-leaf #2F9E6E
 *   shadow-sun
 */

// Illustrative daily load profile — encodes why commercial solar pays off:
// businesses draw most power during working hours, which is exactly when
// panels generate most. Values are percentages of peak demand.
const hours = ["6a", "8a", "10a", "12p", "2p", "4p", "6p", "8p"];
const gridOnly = [20, 55, 78, 88, 92, 85, 60, 30];
const withSolar = [20, 30, 25, 18, 20, 32, 55, 30];

function DemandCurve() {
  const width = 720;
  const height = 260;
  const padding = { top: 20, right: 20, bottom: 34, left: 34 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const maxVal = 100;

  const toPoints = (arr: number[]) =>
    arr
      .map((v, i) => {
        const x = padding.left + (i / (arr.length - 1)) * chartW;
        const y = padding.top + chartH - (v / maxVal) * chartH;
        return `${x},${y}`;
      })
      .join(" ");

  const areaPath = (arr: number[]) => {
    const pts = arr.map((v, i) => {
      const x = padding.left + (i / (arr.length - 1)) * chartW;
      const y = padding.top + chartH - (v / maxVal) * chartH;
      return { x, y };
    });
    const top = pts.map((p) => `${p.x},${p.y}`).join(" L ");
    return `M ${pts[0].x},${padding.top + chartH} L ${top} L ${
      pts[pts.length - 1].x
    },${padding.top + chartH} Z`;
  };

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full min-w-[600px]"
        role="img"
        aria-label="Grid draw across a business day, with and without solar generation"
      >
        {[0, 25, 50, 75, 100].map((g) => {
          const y = padding.top + chartH - (g / maxVal) * chartH;
          return (
            <line
              key={g}
              x1={padding.left}
              y1={y}
              x2={width - padding.right}
              y2={y}
              stroke="var(--color-navy)"
              strokeOpacity="0.08"
              strokeWidth="1"
            />
          );
        })}
        <path d={areaPath(gridOnly)} fill="var(--color-leaf)" opacity="0.12" />
        <polyline
          points={toPoints(gridOnly)}
          fill="none"
          stroke="var(--color-leaf)"
          strokeWidth="2"
          strokeDasharray="4 5"
        />
        <path d={areaPath(withSolar)} fill="var(--color-amber)" opacity="0.18" />
        <polyline
          points={toPoints(withSolar)}
          fill="none"
          stroke="var(--color-amber)"
          strokeWidth="2.5"
        />
        {hours.map((h, i) => {
          const x = padding.left + (i / (hours.length - 1)) * chartW;
          return (
            <text
              key={h}
              x={x}
              y={height - 8}
              textAnchor="middle"
              className="fill-navy/45 font-mono text-[11px]"
            >
              {h}
            </text>
          );
        })}
      </svg>
      <div className="mt-4 flex flex-wrap gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span
            className="h-[2px] w-5 bg-leaf"
            style={{ borderTop: "2px dashed var(--color-leaf)" }}
          />
          <span className="text-navy/70">Grid draw — no solar</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-[2px] w-5 bg-amber" />
          <span className="text-navy/70">Grid draw — with solar</span>
        </div>
      </div>
    </div>
  );
}

const tiers = [
  {
    icon: LuBuilding2,
    name: "Office & Retail",
    range: "30–150 kW",
    detail: "Roof-mounted arrays sized to daytime opening hours.",
  },
  {
    icon: LuFactory,
    name: "Industrial & Warehouse",
    range: "150–750 kW",
    detail: "High roof coverage, built around continuous shift-pattern load.",
  },
  {
    icon: LuLandmark,
    name: "Multi-site Portfolios",
    range: "750 kW+",
    detail:
      "Staged rollout across sites, one contract and one reporting layer.",
  },
];

const steps = [
  {
    label: "Load audit",
    detail:
      "12 months of interval meter data reviewed against tariff structure.",
  },
  {
    label: "Engineering & permits",
    detail:
      "Structural review, single-line diagrams, utility interconnection filed.",
  },
  {
    label: "Procurement & build",
    detail:
      "Panels, inverters, and racking installed around your operating hours.",
  },
  {
    label: "Commissioning & reporting",
    detail:
      "System energized, metering verified, monitoring handed to your team.",
  },
];

const faqs = [
  {
    q: "How is this different from a residential quote?",
    a: "Commercial systems are sized against your actual demand charges and interval data, not a flat estimate. We also handle three-phase interconnection, structural sign-off, and any incentive or depreciation paperwork specific to businesses.",
  },
  {
    q: "Can this run alongside a backup generator?",
    a: "Yes. We design the interconnection so solar, grid, and any existing generator or UPS coexist safely, with the switching logic handled by the inverter and controls.",
  },
  {
    q: "What financing structures do you support?",
    a: "Direct purchase, financed purchase, and power purchase agreements (PPA) where a third party owns the system and you buy the output at a fixed rate. We'll model the numbers for each against your usage.",
  },
  {
    q: "Do you handle multi-site rollouts?",
    a: "Yes — we stage design and installation across locations under a single contract, with consolidated monitoring and reporting across the portfolio.",
  },
];

export default function CommercialSolarPage() {
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
            <LuBuilding2 size={18} />
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              Commercial &amp; Industrial Solar
            </span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Your peak hours are our
            <span className="text-amber"> peak output.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy/70">
            Commercial demand charges are highest exactly when the sun is
            strongest. We size systems against your interval meter data, not a
            rule of thumb.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button className="rounded-full bg-amber px-7 py-3 font-display text-sm font-semibold text-navy shadow-sun transition-transform hover:scale-[1.03] hover:bg-amber-dark">
              Request a load audit
            </button>
            <button className="flex items-center gap-1.5 rounded-full border border-navy/20 px-7 py-3 font-display text-sm font-medium text-navy hover:border-navy/40">
              View case studies <LuArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Demand curve */}
      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-amber-dark">
            <LuTrendingDown size={18} />
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              Load profile
            </span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
            Where solar cuts your grid draw
          </h2>
          <p className="mt-2 max-w-lg text-navy/65">
            Illustrative profile for a daytime-operating facility — actual
            savings are modeled from your own meter data during the audit.
          </p>
          <div className="mt-10 rounded-2xl border border-navy/10 bg-white p-6 shadow-sun sm:p-8">
            <DemandCurve />
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="border-t border-navy/10 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Built for your site type
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sun"
              >
                <t.icon className="text-amber-dark" size={24} />
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {t.name}
                </h3>
                <p className="mt-2 font-mono text-xl text-amber-dark">
                  {t.range}
                </p>
                <p className="mt-3 text-sm text-navy/70">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-navy/10 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2 text-amber-dark">
            <LuFileSearch size={18} />
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              Delivery
            </span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
            How a project runs
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.label} className="bg-white p-6">
                <p className="font-mono text-[11px] uppercase tracking-wide text-leaf">
                  Stage {i + 1}
                </p>
                <h3 className="mt-2 font-display font-semibold">
                  {s.label}
                </h3>
                <p className="mt-2 text-sm text-navy/65">{s.detail}</p>
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
                  <span className="font-display font-medium">
                    {f.q}
                  </span>
                  <LuChevronDown
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
              <LuFileSearch size={18} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                Next step
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold text-sky sm:text-3xl">
              Request a load audit
            </h3>
            <p className="mt-2 max-w-md text-sm text-sky/70">
              Send 12 months of interval data and we'll return a sized design
              and payback model within a week.
            </p>
          </div>
          <button className="whitespace-nowrap rounded-full bg-amber px-7 py-3 font-display text-sm font-semibold text-navy transition-transform hover:scale-[1.03] hover:bg-amber-dark">
            Start the audit
          </button>
        </div>
      </section>
    </div>
  );
}
