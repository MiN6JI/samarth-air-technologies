// src/components/About/AboutSection.tsx
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FaPlay } from "react-icons/fa";
import { HiOutlineShieldCheck, HiOutlineCog6Tooth } from "react-icons/hi2";

import Container from "../../../components/UI/Container";

const features = [
  {
    icon: HiOutlineShieldCheck,
    title: "Expertise You Can Trust",
    description:
      "Our team consists certified with professionals hands-on experience.",
  },
  {
    icon: HiOutlineCog6Tooth,
    title: "Customized Solar Solutions",
    description:
      "That's why design tailor solar system that maximize efficiency, perform.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image collage */}
          <div className="relative">
            {/* Top-left large image */}
            <div className="relative w-[85%] overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/38302669/pexels-photo-38302669.jpeg"
                alt="Team reviewing solar plans"
                className="h-[340px] w-full object-cover"
              />
            </div>

            {/* Rotating badge */}
            <div className="absolute right-0 top-[38%] flex h-28 w-28 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 md:h-32 md:w-32">
              <svg
                viewBox="0 0 100 100"
                className="absolute h-full w-full animate-[spin_12s_linear_infinite]"
              >
                <defs>
                  <path
                    id="badgeCircle"
                    d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  />
                </defs>
                <text className="fill-white text-[9px] font-semibold uppercase tracking-widest">
                  <textPath href="#badgeCircle" startOffset="0%">
                    Contact Us • Contact Us •
                  </textPath>
                </text>
              </svg>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900">
                <HiOutlineArrowUpRight className="h-5 w-5 text-white" />
              </span>
            </div>

            {/* Bottom-right image, overlapping */}
            <div className="absolute bottom-0 right-0 w-[62%] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/35134561/pexels-photo-35134561.jpeg"
                alt="Solar technicians walking on site"
                className="h-[280px] w-full object-cover"
              />
            </div>

            {/* Stats card */}
            <div className="mt-6 w-[42%] rounded-2xl bg-gray-900 px-6 py-6 text-center">
              <p className="text-4xl font-extrabold text-white">25+</p>
              <p className="mt-1 text-sm text-gray-300">Years Of Experience</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              About Our Company
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
              Building a blue tomorrow through clean energy
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-gray-500">
              We are committed to delivering reliable, efficient, and
              sustainable solar solutions that help homes and businesses reduce
              energy costs.
            </p>

            {/* Features */}
            <div className="mt-8 divide-y divide-gray-200 border-t border-gray-200">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-5 py-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-500">{feature.description}</p>
                  </div>
                  {feature.title === "Customized Solar Solutions" && (
                    <img
                      src="https://images.pexels.com/photos/25751713/pexels-photo-25751713.jpeg"
                      alt="Technicians installing solar panels"
                      className="ml-auto hidden h-24 w-32 shrink-0 rounded-xl object-cover md:block"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex items-center gap-6 border-t border-gray-200 pt-8">
              <button className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                Contact Us
                <HiOutlineArrowUpRight className="h-4 w-4" />
              </button>

              <button className="flex items-center gap-3 text-sm font-semibold text-gray-900">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900">
                  <FaPlay className="ml-0.5 h-3.5 w-3.5 text-white" />
                </span>
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
