// src/components/Advantages/AdvantagesSection.tsx
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";

import Container from "../../../components/UI/Container";

const tags = [
  "Renewable Energy",
  "Residential Solar",
  "Sustainable Energy",
  "Solar Battery Storage",
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        {/* Header */}
        <div className="relative mx-auto max-w-xl text-center">
          {/* Decorative dot */}
          <span className="absolute -left-4 top-16 hidden  md:block" />

          {/* Eyebrow */}
          <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Our Advantages
          </div>

          {/* Heading with inline image */}
          <h3 className="mt-5 text-4xl font-semibold leading-[1.4] tracking-tight text-gray-900 md:text-4xl">
            Smart solar benefits designed to deliver performance,{" "}
            <img
              src="https://images.pexels.com/photos/6729421/pexels-photo-6729421.jpeg"
              alt=""
              className="mx-1 inline-block h-11 w-20 -translate-y-1 rounded-full object-cover align-middle md:h-14 md:w-28"
            />{" "}
            saving, &amp; long term reliability
          </h3>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl bg-gray-50 p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">
              {/* swap for your own icon if you have one matching the screenshot */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-white"
              >
                <rect
                  x="3"
                  y="3"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.5 10L14 4L20.5 4L17.5 10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <circle
                  cx="6.5"
                  cy="17.5"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M15 15H21M15 20H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <p className="mt-8 text-4xl font-extrabold text-gray-900 md:text-5xl">
              24*7
            </p>
            <p className="mt-2 text-lg text-gray-800">Support Availability</p>

            <p className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-500">
              Dedicated service team to ensure smooth operation and quick
              assistance whenever needed.
            </p>
          </div>

          {/* Middle image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.pexels.com/photos/4254169/pexels-photo-4254169.jpeg"
              alt="Team reviewing a solar panel installation"
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-gray-50 p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">
              <HiOutlineGlobeAlt className="h-6 w-6 text-white" />
            </span>

            <p className="mt-8 text-4xl font-extrabold text-gray-900 md:text-5xl">
              2000+
            </p>
            <p className="mt-2 text-lg text-gray-800">Projects Completed</p>

            <p className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-500">
              Successfully installed solar systems across residential,
              commercial, and industrial areas.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2 text-sm font-medium text-gray-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              {tag}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-gray-900">
          <span>4.9/5</span>
          <span className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className="h-4 w-4 text-blue-600" />
            ))}
          </span>
          <span>Over 4200 Reviews</span>
        </div>
      </Container>
    </section>
  );
};

export default AdvantagesSection;
