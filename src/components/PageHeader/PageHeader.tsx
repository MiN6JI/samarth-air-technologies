// src/components/PageHeader/PageHeader.tsx
import { useLocation } from "react-router-dom";
import Breadcrumb from "./Breadcrumbs";
import Container from "../UI/Container";

export interface PageHeaderConfig {
  title: string;
  image: string;
}

export const pageHeaderData: Record<string, PageHeaderConfig> = {
  "/about": {
    title: "About Us",
    image: "/images/headers/about.jpg",
  },
  "/services": {
    title: "Our Services",
    image: "/images/headers/services.jpg",
  },
  "/contact": {
    title: "Contact Us",
    image: "/images/headers/contact.jpg",
  },
};

export const defaultPageHeader: PageHeaderConfig = {
  title: "GK India",
  image: "/images/headers/default.jpg",
};

export const PageHeader = () => {
  const location = useLocation();
  const path = location.pathname;

  // Find config for current path, fallback to default
  const config = pageHeaderData[path] || defaultPageHeader;

  return (
    <div className="relative overflow-hidden bg-slate-900 py-16 text-white md:py-24">
      {/* Background Decor - Radial gradients for modern premium look */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[10%] h-[150%] w-[60%] rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="absolute -bottom-[40%] -right-[10%] h-[150%] w-[60%] rounded-full bg-emerald-600/15 blur-[120px]" />
        
        {/* Optional background image overlay */}
        {config.image && (
          <img
            src={config.image}
            alt={config.title}
            onError={(e) => {
              // Hide image if it fails to load (e.g. 404)
              e.currentTarget.style.display = "none";
            }}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-30 mix-blend-overlay transition-opacity duration-700"
          />
        )}
        
        {/* Dark theme overlay mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-900/40 to-slate-950/60" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
          {/* Breadcrumbs Wrapper */}
          <div className="inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 backdrop-blur-md border border-white/10 shadow-inner">
            <Breadcrumb currentLabel={config.title} />
          </div>

          {/* Heading */}
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-md">
            {config.title}
          </h1>
          
          {/* Accent decoration bar */}
          <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
        </div>
      </Container>
    </div>
  );
};