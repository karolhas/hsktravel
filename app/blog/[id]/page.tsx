//hooks
import Image from "next/image";
import { notFound } from "next/navigation";

//components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/components/section/blog/BlogPosts";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id.toString() === params.id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-700">{post.title}</h1>
        <p className="text-muted-foreground mb-4">
          {post.date} - {post.location}
        </p>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="my-6"
        />
        <div className="text-gray-700">{post.content}</div>
      </div>
      <Footer />
    </>
  );
}
