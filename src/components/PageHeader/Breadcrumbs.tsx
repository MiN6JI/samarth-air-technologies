// src/components/UI/Breadcrumb.tsx
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbProps {
  currentLabel: string;
}

const Breadcrumb = ({ currentLabel }: BreadcrumbProps) => {
  const location = useLocation();

  // Build intermediate crumbs from the path, if nested (e.g. /services/solar)
  const segments = location.pathname.split("/").filter(Boolean);
  const crumbs = segments.slice(0, -1).map((seg, idx) => {
    const path = "/" + segments.slice(0, idx + 1).join("/");
    return {
      label: seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " "),
      path,
    };
  });

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm md:text-base">
        <li className="flex items-center gap-2">
          <Link
            to="/"
            className="font-medium text-white transition-colors hover:text-green-400"
          >
            Home
          </Link>
        </li>

        {crumbs.map((crumb) => (
          <li key={crumb.path} className="flex items-center gap-2">
            <span className="text-green-500">|</span>
            <Link
              to={crumb.path}
              className="font-medium text-white transition-colors hover:text-green-400"
            >
              {crumb.label}
            </Link>
          </li>
        ))}

        <li className="flex items-center gap-2">
          <span className="text-green-500">|</span>
          <span className="font-medium text-green-500">{currentLabel}</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
