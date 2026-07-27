// src/components/WhatWeDo/WhatWeDoSection.tsx
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FaPlay, FaStar } from "react-icons/fa";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

import Container from "../../../components/UI/Container";

const WhatWeDoSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              What We Do
            </div>

            {/* Heading */}
            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
              Complete solar services built for performance
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-md text-gray-500">
              Our team provides end-to-end solar solutions including site
              assessment, custom system design, professional installation, and
              ongoing maintenance.
            </p>

            {/* Video thumbnail */}
            <div className="relative mt-8 flex-1 overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/4320449/pexels-photo-4320449.jpeg"
                alt="Engineers reviewing solar site with wind turbines"
                className="h-[340px] w-full object-cover md:h-full"
              />

              {/* Rotating "Watch Video" badge */}
              <button
                type="button"
                aria-label="Watch video"
                className="group absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="absolute h-full w-full animate-[spin_12s_linear_infinite]"
                >
                  <defs>
                    <path
                      id="watchVideoCircle"
                      d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    />
                  </defs>
                  <text className="fill-white text-[9px] font-semibold uppercase tracking-widest">
                    <textPath href="#watchVideoCircle" startOffset="0%">
                      Watch Video • Watch Video •
                    </textPath>
                  </text>
                </svg>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors group-hover:bg-white/30">
                  <FaPlay className="ml-1 h-5 w-5 text-white" />
                </span>
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col">
            {/* Hero image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/8853499/pexels-photo-8853499.jpeg"
                alt="Technicians installing solar panels in a jungle setting"
                className="h-[380px] w-full object-cover"
              />
            </div>

            {/* Feature row + rating */}
            <div className="mt-6 flex items-start justify-between gap-6 border-b border-gray-200 pb-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600">
                  <HiOutlineCog6Tooth className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Complete Solar Solutions
                  </h3>
                  <p className="mt-1 max-w-xs text-gray-500">
                    We provide end-to-end solar services from site assessment
                    &amp; system design.
                  </p>
                </div>
              </div>

              <div className="shrink-0 border-l border-gray-200 pl-6 text-right">
                <p className="flex items-center justify-end gap-1.5 text-2xl font-extrabold text-gray-900">
                  4.9
                  <span className="text-sm font-medium text-gray-400">
                    /5.0
                  </span>
                  <FaStar className="h-4 w-4 text-blue-600" />
                </p>
                <p className="mt-1 whitespace-nowrap text-sm font-medium text-gray-500">
                  Average Website Ratings
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                Learn More
                <HiOutlineArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDoSection;
