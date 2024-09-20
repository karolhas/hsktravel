//components
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/section/HeroBanner";
import PopularDestinations from "@/components/section/PopularDestinations";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <PopularDestinations />
    </div>
  );
}
