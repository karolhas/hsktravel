//components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BlogSection } from "@/components/section/blog/BlogSection";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-700">
          Our Travel Inspirations
        </h2>
        <BlogSection />
      </div>
      <Footer />
    </>
  );
}
