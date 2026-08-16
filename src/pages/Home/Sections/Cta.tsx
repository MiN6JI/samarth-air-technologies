import Container from "../../../components/UI/Container";
import Button from "../../../components/UI/Button";

interface HeroCTAProps {
  backgroundImage: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Cta = ({
  backgroundImage,
  heading = "Reliable Service from Start to Finish",
  description = "We follow a streamlined process to ensure every air conditioning and HVAC repair is handled efficiently and with care. From your first call to the final inspection.",
  buttonText = "Chat With Us",
  onButtonClick,
}: HeroCTAProps) => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

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
        <div className="relative py-32 md:py-40 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {heading}
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed">
            {description}
          </p>

          <Button
            onClick={onButtonClick}
            className="mt-8 px-6 py-3 bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
          >
            {buttonText}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
