import { HiPhone } from "react-icons/hi";
import Button from "../../../components/UI/Button";
import Container from "../../../components/UI/Container";

export default function AcHero() {
  return (
    <section className="relative w-full min-h-[640px] overflow-hidden bg-zinc-900">
      {/* Background image */}
      <img
        src="https://demo.awaikenthemes.com/coolify/demo2/wp-content/uploads/2025/07/hero-img.jpg"
        alt="Technician servicing an air conditioning unit"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-zinc-950/10" />

      {/* Content */}
      <Container className="relative z-10 flex h-full min-h-[640px] flex-col justify-center py-24">
        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-white">
          <span className="h-2 w-2 rounded-full bg-primary" />
          WELCOME TO SAMARTH AIR TECHNOLOGY
        </div>

        {/* Headline */}
        <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          Reliable air conditioning services you can trust
        </h1>

        {/* Subcopy */}
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
          Experience year-round comfort with our trusted air conditioning
          solutions. From expert installation to fast repairs and regular
          maintenance.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Button className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-white transition hover:bg-primary-dark">
            Request a Quote
          </Button>

          <Button className="flex items-center gap-3 text-sm font-bold text-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-dark">
              <HiPhone className="ml-0.5 h-4 w-4 fill-current" />
            </span>
            +91 73047 39002
          </Button>
        </div>
      </Container>
    </section>
  );
}
