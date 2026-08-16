import React from "react";
import { FiCheck, FiWind, FiZap, FiSun, FiAlertTriangle } from "react-icons/fi";
import Container from "../../components/UI/Container";

/**
 * ServiceCatalog
 * ----------------
 * Renders the four Samarth Air Technologies service pillars
 * (HVAC & Refrigeration, Electrical & Infrastructure,
 * Solar Energy & AMC, Fire Alarm & Safety Systems) as a
 * responsive card grid, plus an "About / Vision" intro block.
 *
 * All copy lives in the `serviceCategories` array below so
 * content can be edited without touching markup.
 */

interface ServiceItem {
  label: string;
  detail?: string; // optional bolded lead-in, e.g. "Consultancy:"
}

interface ServiceCategory {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accent: "green" | "teal";
  items: ServiceItem[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "HVAC & Refrigeration",
    subtitle: "Comprehensive Climate & Cooling Solutions",
    icon: FiWind,
    accent: "green",
    items: [
      { label: "Chiller Maintenance & Precision Repair" },
      { label: "Screw Compressor Overhauling & Repair" },
      { label: "Descaling Heat Exchangers" },
      { label: "L.V. Industrial Motor Rewinding & Servicing" },
      { label: "Industrial Pump Repair & Overhauling" },
      { label: "L.V. Industrial Switchgears & Control Panel Maintenance" },
      { label: "HVAC Low Side Maintenance & Air Distribution Repairs" },
      { label: "VFD & Soft Starter Repairs and Maintenance" },
    ],
  },
  {
    title: "Electrical & Infrastructure",
    subtitle: "End-to-End Electrical Contracting & Audits",
    icon: FiZap,
    accent: "teal",
    items: [
      {
        detail: "Consultancy:",
        label: "Load Calculation, BOQ, Energy Audits, Fire Safety Audits",
      },
      {
        detail: "Contracting:",
        label: "HT/LT Cabling, Panels, Wiring, UPS & DG Set Solutions",
      },
      {
        detail: "Maintenance:",
        label: "AMC, Preventive & Breakdown Services, Retrofitting",
      },
      {
        detail: "Liasoning:",
        label: "TATA Power, Adani, B.E.S.T., DISCOM & Statutory Bodies",
      },
      {
        detail: "Network Contracting:",
        label: "IT Solutions, LAN Networking, CCTV & Biometrics",
      },
    ],
  },
  {
    title: "Solar Energy Solutions & AMC",
    subtitle: "Sustainable Power & Energy Management",
    icon: FiSun,
    accent: "green",
    items: [
      { label: "Rooftop & Ground-Mounted Solar Systems" },
      { label: "System Design, Installation & Net Metering" },
      { label: "Solar AMC & Performance Monitoring" },
      { label: "Subsidy & Statutory Compliance Support" },
      { label: "Energy Efficiency Audits & Cost Reduction Planning" },
    ],
  },
  {
    title: "Fire Alarm & Safety Systems",
    subtitle: "Life-Safety & Statutory Compliance",
    icon: FiAlertTriangle,
    accent: "teal",
    items: [
      { label: "Fire Alarm & Advanced Detection Systems" },
      { label: "Installation, Testing & Certification" },
      { label: "Annual Maintenance Contracts (AMC)" },
      { label: "Fire Audit & Statutory Compliance Support" },
      { label: "Safety Equipment Maintenance & Emergency Readiness" },
    ],
  },
];

const accentClasses: Record<
  ServiceCategory["accent"],
  { border: string; icon: string; text: string }
> = {
  green: {
    border: "border-t-primary",
    icon: "text-primary",
    text: "text-primary",
  },
  teal: {
    border: "border-t-primary",
    icon: "text-primary",
    text: "text-primary",
  },
};

const ServiceCategoryCard: React.FC<{ category: ServiceCategory }> = ({
  category,
}) => {
  const accent = accentClasses[category.accent];
  const Icon = category.icon;

  return (
    <div
      className={`rounded-xl bg-white shadow-sm border-t-4 ${accent.border} p-6`}
    >
      <div className="flex items-center gap-2 mb-1">
        <Icon className={`w-5 h-5 ${accent.icon}`} aria-hidden="true" />
        <h3 className={`text-lg font-bold ${accent.text} tracking-tight`}>
          {category.title}
        </h3>
      </div>
      <p className="text-sm text-gray-500 italic mb-4">{category.subtitle}</p>
      <hr className="border-gray-100 mb-4" />
      <ul className="space-y-2.5">
        {category.items.map((item) => (
          <li
            key={item.label}
            className="flex items-start gap-2 text-sm text-gray-700"
          >
            <FiCheck
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${accent.text}`}
              aria-hidden="true"
            />
            <span>
              {item.detail && (
                <span className="font-semibold text-gray-900">
                  {item.detail}{" "}
                </span>
              )}
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServiceCatalog: React.FC = () => {
  return (
    <section className="bg-[#F4F8F6] py-16">
      <Container>
        {/* Service categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceCategories.map((category) => (
            <ServiceCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceCatalog;
