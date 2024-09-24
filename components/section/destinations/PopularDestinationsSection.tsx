//components
import { DestinationCard } from "@/components/cards/DestinationCard";

//data
import { popularDestinations } from "@/data/popularDestinations";

export default function PopularDestinationsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Popular destinations for September vacations
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4">
        <DestinationCard destination={popularDestinations[0]} isLarge={true} />
        {popularDestinations.slice(1).map((destination) => (
          <DestinationCard key={destination.name} destination={destination} />
        ))}
      </div>
    </section>
  );
}
