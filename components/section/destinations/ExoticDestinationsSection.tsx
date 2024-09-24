//components
import { DestinationCard } from "@/components/cards/DestinationCard";

//data
import { exoticDestinations } from "@/data/exoticDestinations";

export default function ExoticDestinationsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Exotic destinations
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4">
        <DestinationCard destination={exoticDestinations[0]} isLarge={true} />
        {exoticDestinations.slice(1).map((destination) => (
          <DestinationCard key={destination.name} destination={destination} />
        ))}
      </div>
    </section>
  );
}
