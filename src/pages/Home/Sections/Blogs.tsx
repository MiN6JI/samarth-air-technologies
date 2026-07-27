import BlogCard from "./Blogs/BlogCard";
import { blogs } from "./Blogs/BlogData";

export default function BlogsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-5xl font-bold">Latest Blogs</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
