import { useState, useEffect, useRef } from "react";
import Container from "../../../components/UI/Container";
import {
  HiOutlineSparkles,
  HiOutlineBolt,
  HiOutlineShieldCheck,
  HiOutlineCheck,
  HiOutlineArrowTrendingUp,
  HiOutlineCalendarDays,
  HiOutlineBuildingOffice2,
  HiOutlineWrenchScrewdriver,
  HiOutlineTrophy,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { PiWindLight, PiSunLight } from "react-icons/pi";

interface Milestone {
  id: string;
  year: string;
  quarter?: string;
  fullDate: string;
  location: string;
  subtitle: string;
  category: string;
  title: string;
  description: string;
  achievements: string[];
  metric: {
    value: string;
    label: string;
  };
  icon: React.ElementType;
  badgeColor: string;
  gradientPill: string;
  accentBg: string;
  tag: string;
}

const milestones: Milestone[] = [
  {
    id: "2021",
    year: "2021",
    quarter: "Q1 - Inception",
    fullDate: "January 2021",
    location: "Bhandup, Mumbai",
    subtitle: "Company Headquarters",
    category: "HVAC Engineering",
    title: "Foundation & HVAC Specialization",
    description:
      "Samarth Air Technologies was established in Bhandup, Mumbai with a clear mission: to deliver uncompromising quality, energy-efficient HVAC design, and precision climate control engineering for residential and commercial establishments.",
    achievements: [
      "Founded in Bhandup, Mumbai with core engineering team",
      "Completed 50+ high-efficiency residential & commercial HVAC projects",
      "Formed rapid-response emergency breakdown & repair wing",
    ],
    metric: {
      value: "50+",
      label: "Initial Projects Delivered",
    },
    icon: PiWindLight,
    badgeColor: "bg-emerald-600 text-white",
    gradientPill: "from-emerald-600 to-teal-600 shadow-emerald-600/30",
    accentBg: "from-emerald-50 to-teal-50/40",
    tag: "Company Inception",
  },
  {
    id: "2022",
    year: "2022",
    quarter: "Q2 - Expansion",
    fullDate: "April 2022",
    location: "MMR Region",
    subtitle: "Industrial Infrastructure",
    category: "Electrical & AMC",
    title: "Electrical Infrastructure & Comprehensive AMCs",
    description:
      "Responding to client demand for single-window contracting, we scaled operations to provide turnkey low-voltage & high-voltage electrical installations, smart power distribution, and dedicated Annual Maintenance Contracts (AMC).",
    achievements: [
      "Launched full-scale commercial & industrial electrical engineering",
      "Secured 120+ long-term AMC contracts across Mumbai & MMR region",
      "Implemented 24/7 preventative maintenance monitoring routines",
    ],
    metric: {
      value: "120+",
      label: "Active AMC Contracts",
    },
    icon: HiOutlineBolt,
    badgeColor: "bg-amber-600 text-white",
    gradientPill: "from-amber-500 to-orange-600 shadow-amber-500/30",
    accentBg: "from-amber-50 to-orange-50/40",
    tag: "Power & Maintenance",
  },
  {
    id: "2023",
    year: "2023",
    quarter: "Q3 - Safety Standards",
    fullDate: "August 2023",
    location: "Turnkey MEP Wing",
    subtitle: "Safety & Compliance Hub",
    category: "Fire Safety & Turnkey MEP",
    title: "Certified Fire Protection & Integrated MEP",
    description:
      "Achieved major statutory certifications for advanced fire detection, sprinkler hydrants, and suppression systems. Solidified our position as a true turnkey MEP contractor trusted by industrial complexes and corporate hubs.",
    achievements: [
      "Integrated certified Fire Alarm, Hydrant & Suppression systems",
      "Delivered integrated MEP solutions for large commercial complexes",
      "Achieved 100% statutory safety audit compliance across all client sites",
    ],
    metric: {
      value: "99.8%",
      label: "Statutory Compliance Rate",
    },
    icon: HiOutlineShieldCheck,
    badgeColor: "bg-rose-600 text-white",
    gradientPill: "from-rose-600 to-red-600 shadow-rose-600/30",
    accentBg: "from-rose-50 to-red-50/40",
    tag: "Safety & Compliance",
  },
  {
    id: "2024",
    year: "2024",
    quarter: "Q1 - Sustainability",
    fullDate: "January 2024",
    location: "Solar EPC Division",
    subtitle: "Clean Energy Hub",
    category: "Solar Energy & Smart Tech",
    title: "Solar EPC Solutions & IoT Automation",
    description:
      "Embracing renewable energy and green building initiatives, we inaugurated our Rooftop Solar EPC vertical and integrated smart IoT energy monitoring sensors into HVAC control plants for optimal energy reduction.",
    achievements: [
      "Commissioned 1.5+ MW cumulative rooftop solar energy systems",
      "Integrated IoT climate controllers reducing energy consumption by up to 28%",
      "Surpassed the landmark milestone of 500+ successfully completed installations",
    ],
    metric: {
      value: "1.5+ MW",
      label: "Solar Capacity Installed",
    },
    icon: PiSunLight,
    badgeColor: "bg-primary text-white",
    gradientPill: "from-primary to-emerald-700 shadow-primary/30",
    accentBg: "from-green-50 to-emerald-50/40",
    tag: "Green Transition",
  },
  {
    id: "2025",
    year: "2025+",
    quarter: "Present & Ahead",
    fullDate: "Present & 2025+",
    location: "Maharashtra State",
    subtitle: "Regional Expansion",
    category: "Future Horizons",
    title: "Smart Sustainable Engineering & Regional Scale",
    description:
      "Driving the next chapter of growth with predictive AI maintenance, smart building automation, and strategic green MEP partnerships across Maharashtra for sustainable, net-zero emissions infrastructure.",
    achievements: [
      "Rolled out predictive maintenance algorithms for industrial HVAC & Solar",
      "Expanded engineering field teams across key industrial corridors in Maharashtra",
      "Aiming for 1000+ happy clients and 5+ MW clean energy installations by 2026",
    ],
    metric: {
      value: "500+",
      label: "Total Projects & Growing",
    },
    icon: HiOutlineSparkles,
    badgeColor: "bg-emerald-700 text-white",
    gradientPill: "from-emerald-700 to-teal-800 shadow-emerald-700/30",
    accentBg: "from-emerald-50 to-teal-50/40",
    tag: "Next-Gen Engineering",
  },
];

const summaryStats = [
  {
    icon: HiOutlineCalendarDays,
    value: "5+ Years",
    label: "Industry Experience",
  },
  {
    icon: HiOutlineBuildingOffice2,
    value: "120+",
    label: "Projects Completed",
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    value: "150+",
    label: "Active AMCs",
  },
  {
    icon: HiOutlineTrophy,
    value: "100%",
    label: "Safety & Compliance",
  },
];

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>(
    {},
  );
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.entries(itemRefs.current).forEach(([id, element]) => {
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({ ...prev, [id]: true }));
          }
        },
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
      );
      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [selectedYear]);

  const filteredMilestones =
    selectedYear === "all"
      ? milestones
      : milestones.filter((m) => m.year.startsWith(selectedYear));

  return (
    <section
      className="relative overflow-hidden bg-slate-50/80 py-24 sm:py-32"
      id="timeline"
    >
      {/* Decorative ambient background glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 -z-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-10 -z-10 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-light/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            OUR JOURNEY & GROWTH
          </div>

          {/* Main Title */}
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Milestones of Innovation & Trust
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            From our founding in Bhandup in 2021 to emerging as a premier
            integrated MEP, Solar & Fire Safety engineering partner — explore
            our key milestones of consistent quality and growth.
          </p>

          {/* Year Filter Tabs */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-white p-1.5 shadow-sm border border-slate-200">
            <button
              onClick={() => setSelectedYear("all")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                selectedYear === "all"
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              All Years (2021 - Present)
            </button>
            {milestones.map((m) => {
              const baseYear = m.year.replace("+", "");
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedYear(baseYear)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    selectedYear === baseYear
                      ? "bg-primary text-white shadow-md shadow-primary/25"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {m.year}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Structure */}
        <div className="relative mt-20">
          {/* Center Vertical Timeline Line (Desktop) & Left Line (Mobile) */}
          <div
            className="absolute top-4 bottom-4 left-6 w-0.5 bg-gradient-to-b from-primary via-emerald-400 to-primary-dark lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />

          {/* Milestones list */}
          <div className="space-y-16 lg:space-y-24">
            {filteredMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              const isVisible = visibleItems[item.id] ?? true;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[item.id] = el;
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative flex flex-col transition-all duration-700 ease-out lg:flex-row lg:items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  {/* Center Node / Icon Beacon */}
                  <div className="absolute left-6 z-20 flex -translate-x-1/2 items-center justify-center lg:left-1/2">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.badgeColor} shadow-lg shadow-primary/30 transition-transform duration-300 ${
                        hoveredIndex === index
                          ? "scale-110 rotate-3"
                          : "scale-100"
                      }`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {/* Pulsing ring */}
                    <div
                      className="pointer-events-none absolute -inset-2 rounded-2xl bg-primary/20 animate-ping opacity-75"
                      style={{ animationDuration: "3s" }}
                    />
                  </div>

                  {/* 1. Main Content Box (Left or Right on desktop, right side on mobile) */}
                  <div
                    className={`ml-16 w-auto lg:ml-0 lg:w-1/2 ${
                      isEven ? "lg:pr-16" : "lg:pl-16"
                    }`}
                  >
                    <div
                      className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-8 ${
                        hoveredIndex === index ? "ring-2 ring-primary/20" : ""
                      }`}
                    >
                      {/* Top subtle gradient accent line */}
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-teal-500" />

                      {/* Header tags: Year & Category */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center rounded-full bg-primary-light px-3.5 py-1 text-sm font-extrabold text-primary">
                            {item.year}
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            {item.quarter}
                          </span>
                        </div>

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                          {item.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {item.description}
                      </p>

                      {/* Key Achievements Checklist */}
                      <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Key Achievements
                        </div>
                        {item.achievements.map((ach, aIdx) => (
                          <div
                            key={aIdx}
                            className="flex items-start gap-2.5 text-xs text-slate-700 sm:text-sm"
                          >
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <HiOutlineCheck className="h-3 w-3 stroke-[3]" />
                            </span>
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Metric Card Footer */}
                      <div className="mt-6 flex items-center justify-between rounded-2xl bg-gradient-to-r from-slate-50 to-primary-light/30 p-4 border border-slate-100">
                        <div>
                          <div className="text-2xl font-black text-primary sm:text-3xl">
                            {item.metric.value}
                          </div>
                          <div className="text-xs font-medium text-slate-600">
                            {item.metric.label}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                          <span>{item.category}</span>
                          <HiOutlineArrowTrendingUp className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2. OPPOSITE SIDE (Desktop view - matching reference image) */}
                  <div
                    className={`hidden lg:flex lg:w-1/2 flex-col justify-center relative ${
                      isEven
                        ? "lg:pl-16 items-start text-left"
                        : "lg:pr-16 items-end text-right"
                    }`}
                  >
                    {/* Background faint SVG watermark illustration */}
                    <div
                      className={`pointer-events-none absolute -z-10 opacity-10 transition-transform duration-500 ${
                        hoveredIndex === index
                          ? "scale-110 opacity-15"
                          : "scale-100"
                      } ${isEven ? "left-12" : "right-12"}`}
                    >
                      <Icon className="h-44 w-44 text-slate-800" />
                    </div>

                    {/* Milestone Title & Location (Above Date Pill) */}
                    <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xl sm:text-2xl">
                      {!isEven && (
                        <span className="text-sm font-semibold text-primary">
                          ({item.location})
                        </span>
                      )}
                      <span>{item.subtitle}</span>
                      {isEven && (
                        <span className="text-sm font-semibold text-primary">
                          ({item.location})
                        </span>
                      )}
                    </div>

                    {/* Location Badge with Icon */}
                    <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      <HiOutlineMapPin className="h-3.5 w-3.5 text-primary" />
                      <span>{item.location}</span>
                    </div>

                    {/* Prominent Gradient Date Pill (as in reference image) */}
                    <div
                      className={`mt-4 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r ${item.gradientPill} px-7 py-3 text-base sm:text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 cursor-default`}
                    >
                      <HiOutlineCalendarDays className="h-5 w-5 text-white/90" />
                      <span>{item.fullDate}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Impact Summary Strip */}
        <div className="mt-20 rounded-3xl bg-primary-dark p-8 text-white shadow-2xl sm:p-10 lg:mt-28">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:divide-x lg:divide-emerald-700/60">
            {summaryStats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center ${
                    idx !== 0 ? "lg:pl-8" : ""
                  }`}
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-primary-light">
                    <StatIcon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-emerald-200/90 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
