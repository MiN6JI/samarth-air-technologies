import Container from "../../../components/UI/Container";

interface Logo {
  name: string;
  src: string;
}

interface LogoSliderProps {
  logos: Logo[];
  title?: string;
  speed?: number; // seconds for one full loop
}

const LogoSlider = ({
  logos,
  title = "Trusted by industry leaders",
  speed = 30,
}: LogoSliderProps) => {
  // Duplicate the list so the marquee loops seamlessly
  const items = [...logos, ...logos];

  return (
    <section className="bg-primary/5 py-12">
      <Container>
        {title && (
          <h3 className="text-center text-lg font-medium text-primary mb-8">
            {title}
          </h3>
        )}

        <div className="relative overflow-hidden">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          <div
            className="flex w-max animate-logo-scroll"
            style={{ animationDuration: `${speed}s` }}
          >
            {items.map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex items-center justify-center mx-8 shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-auto object-contain grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LogoSlider;  