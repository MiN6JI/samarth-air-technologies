import { FiChevronRight, FiHome } from "react-icons/fi";
import Container from "../UI/Container";
import AnimateIn from "../UI/AnimateIn";

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
      className="relative bg-cover bg-center overflow-hidden"
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
          <AnimateIn variant="fade-down" delay={100}>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              {pageName}
            </h1>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={250}>
            <nav className="mt-4 flex items-center flex-wrap gap-1.5 text-sm md:text-base text-gray-200">
              <a
                href="/"
                className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 group"
              >
                <FiHome className="w-4 h-4 text-primary-light transition-transform duration-200 group-hover:scale-110" />
                <span className="hover:underline underline-offset-4">Home</span>
              </a>

              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <span key={index} className="flex items-center gap-1.5">
                    <FiChevronRight className="w-4 h-4 text-gray-400" />
                    {item.href && !isLast ? (
                      <a
                        href={item.href}
                        className="hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-white font-medium">
                        {item.label}
                      </span>
                    )}
                  </span>
                );
              })}
            </nav>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
};

export default PageHeader;
