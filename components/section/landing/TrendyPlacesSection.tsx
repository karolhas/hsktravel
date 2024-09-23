//components
import DestinationCard from "@/components/cards/DestinationCard";

// images
import egypt_hurghada from "@/public/assets/popular_destinations_egypt_hurghada.webp";
import greece_santorini from "@/public/assets/popular_destinations_greece_santorini.jpeg";
import turkey_alanya from "@/public/assets/popular_destinations_turkey_alanya.webp";

const trendyPlaces = [
  { name: "Hurghada, Egypt", image: egypt_hurghada },
  { name: "Santorini, Greece", image: greece_santorini },
  { name: "Alanya, Turkey", image: turkey_alanya },
];

export default function TrendyPlacesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">
          Trendy Places
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
          {trendyPlaces.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
