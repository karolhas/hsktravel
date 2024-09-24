//components
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ExoticDestinationsSection from "@/components/section/destinations/ExoticDestinationsSection";
import PopularDestinationsSection from "@/components/section/destinations/PopularDestinationsSection";

export default function DestinationsPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 py-12">
        <h1 className="text-4xl font-bold mb-8 md:my-8 text-gray-700">
          Where to go on vacation? Get inspired!
        </h1>
        <PopularDestinationsSection />
        <ExoticDestinationsSection />
      </div>
      <Footer />
    </>
  );
}
