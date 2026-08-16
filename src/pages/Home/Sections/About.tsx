import Button from "../../../components/UI/Button";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import Container from "../../../components/UI/Container";

export default function About() {
  return (
    <Container className="py-26">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Left: text content */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-slate-500">
            <span className="h-2 w-2 rounded-full bg-primary" />
            COOLING EXPERTS
          </div>
          {/* Heading */}
          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            About Us
          </h2>
          {/* Subcopy */}
          <p className="mt-6 max-w-md text-slate-500">
            Established in 2019 and based in Thane, CraftInnove Services (I)
            Pvt. Ltd. (CISPL) is a trusted provider of Electrical, HVAC, Solar,
            Fire Alarm, CCTV, and Painting solutions. Our mission is to deliver
            reliable, energy-efficient, and cost-effective services with
            professionalism and precision.
          </p>
          <p className="mt-6 max-w-md text-slate-500">
            With a team of qualified engineers and skilled technicians, we take
            pride in executing projects of every scale — from residential
            buildings to large commercial facilities. We focus on safety,
            long-term performance, and complete customer satisfaction.
          </p>
          {/* Feature rows
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary">
                  <PiSquaresFourBold className="h-6 w-6 text-slate-900" />
                </div>
                <p className="pt-3 font-semibold text-slate-900">
                  Delivering energy-efficient air conditioning solutions
                  tailored to every home and business.
                </p>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary">
                  <PiStackBold className="h-6 w-6 text-slate-900" />
                </div>
                <p className="pt-3 font-semibold text-slate-900">
                  Trusted by families and businesses for fast, reliable, and
                  affordable cooling services.
                </p>
              </div>
            </div> */}
          <hr className="mt-10 border-slate-200" />
          {/* Checklist */}
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <div className="flex items-center gap-2 text-slate-600">
              <HiOutlineCheckCircle className="h-5 w-5 shrink-0 rounded-full bg-primary p-0.5 text-white" />
              Expert service in HVAC, Solar, and Electrical installations
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <HiOutlineCheckCircle className="h-5 w-5 shrink-0 rounded-full bg-primary p-0.5 text-white" />
              Reliable AMC & maintenance contracts ensuring system longevity
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <HiOutlineCheckCircle className="h-5 w-5 shrink-0 rounded-full bg-primary p-0.5 text-white" />
              Client-centric approach backed by professional integrity
            </div>
          </div>
          {/* CTA */}
          <Button className="mt-8 bg-primary px-8 py-4 text-sm font-bold text-white transition hover:bg-primary-dark">
            Read More
          </Button>
        </div>

        {/* Right: image collage */}
        <div className="relative grid grid-cols-2 gap-5">
          {/* Decorative dot grid, top right */}
          <div
            className="pointer-events-none absolute -top-6 right-8 hidden grid-cols-6 gap-1.5 sm:grid"
            aria-hidden="true"
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-primary" />
            ))}
          </div>

          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop"
            alt="Technician installing an outdoor AC unit on a brick wall"
            className="col-span-1 h-80 w-full rounded-2xl object-cover"
          />
          <img
            src="https://demo.awaikenthemes.com/coolify/demo2/wp-content/uploads/2025/07/about-image-3.jpg"
            alt="Technician servicing an outdoor AC unit"
            className="col-span-1 mt-10 h-60 w-full rounded-2xl object-cover"
          />
          <img
            src="https://demo.awaikenthemes.com/coolify/demo2/wp-content/uploads/2025/07/about-image-4.jpg"
            alt="Two technicians installing a wall-mounted AC unit"
            className="col-span-1 h-60 w-full rounded-2xl object-cover"
          />
          <img
            src="https://demo.awaikenthemes.com/coolify/demo2/wp-content/uploads/2025/07/about-image-2.jpg"
            alt="Technician servicing a ceiling-mounted AC unit"
            className="col-span-1 mt-4 h-72 w-full rounded-2xl object-cover"
          />

          {/* Decorative dot grid, bottom left */}
          <div
            className="pointer-events-none absolute -bottom-6 left-8 grid grid-cols-6 gap-1.5"
            aria-hidden="true"
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
