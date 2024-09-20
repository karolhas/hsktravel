//components
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/section/HeroBanner";
import PopularDestinations from "@/components/section/PopularDestinations";
import WhyChooseUs from "@/components/section/WhyChooseUs";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <PopularDestinations />
      <WhyChooseUs />
    </div>
  );
}
