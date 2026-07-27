import { FiArrowRight } from "react-icons/fi";

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

export default function BlogCard({
  image,
  category,
  date,
  title,
  description,
}: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] backdrop-blur">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <p className="text-sm text-gray-500">{date}</p>

        <h3 className="line-clamp-2 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="line-clamp-3 text-gray-600">
          {description}
        </p>

        <button className="flex items-center gap-2 font-semibold text-[#2734D8] transition group-hover:gap-3">
          Read More
          <FiArrowRight />
        </button>
      </div>
    </article>
  );
}