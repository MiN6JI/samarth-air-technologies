import { FiChevronRight, FiHome } from "react-icons/fi";
import Container from "../UI/Container";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  backgroundImage: string;
  pageName: string;
  breadcrumbs: BreadcrumbItem[];
}

const PageHeader = ({
  backgroundImage,
  pageName,
  breadcrumbs,
}: PageHeaderProps) => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-zinc-950/10" />

      {/* grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container>
        <div className="relative py-20 md:py-28">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {pageName}
          </h1>

          <nav className="mt-4 flex items-center flex-wrap gap-1 text-sm md:text-base text-gray-200">
            <a
              href="/"
              className="flex items-center gap-1 hover:text-primary-light transition-colors"
            >
              <FiHome className="w-4 h-4" />
              Home
            </a>

            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <span key={index} className="flex items-center gap-1">
                  <FiChevronRight className="w-4 h-4 text-gray-400" />
                  {item.href && !isLast ? (
                    <a
                      href={item.href}
                      className="hover:text-primary-light transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-White font-medium">{item.label}</span>
                  )}
                </span>
              );
            })}
          </nav>
        </div>
      </Container>
    </section>
  );
};

export default PageHeader;
