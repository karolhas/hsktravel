//components
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/section/HeroBanner";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen bg-orange-50">
      <Navbar />
      <Hero />
    </div>
  );
}
