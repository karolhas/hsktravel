//components
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/section/landing/HeroSection";
import Newsletter from "@/components/section/landing/NewsletterSection";
import SpecialOffers from "@/components/section/landing/SpecialOffersSection";
import TrendyPlace from "@/components/section/landing/TrendyPlacesSection";
import WhyChooseUs from "@/components/section/landing/WhyChooseUsSection";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <TrendyPlace />
      <WhyChooseUs />
      <SpecialOffers />
      <Newsletter />
      <Footer />
    </div>
  );
}
