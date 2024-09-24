//components
import { BlogCard } from "@/components/cards/BlogCard";
import { blogPosts } from "@/components/section/blog/BlogPosts";

export function BlogSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
