//components
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/section/HeroBanner";
import Newsletter from "@/components/section/Newsletter";
import PopularDestinations from "@/components/section/PopularDestinations";
import SpecialOffers from "@/components/section/SpecialOffers";
import WhyChooseUs from "@/components/section/WhyChooseUs";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <PopularDestinations />
      <WhyChooseUs />
      <SpecialOffers />
      <Newsletter />
      <Footer />
    </div>
  );
}
