import DestinationCard from "@/components/cards/DestinationCard";
import turkey_photo from "@/public/assets/turkey-photo.webp";
import greece_photo from "@/public/assets/greece-photo.webp";
import canaryislands_photo from "@/public/assets/canaryislands-photo.webp";
import albania_photo from "@/public/assets/albania-photo.webp";
import egypt_photo from "@/public/assets/egypt-photo.webp";

const popularDestinations = [
  {
    name: "Turkey",
    image: turkey_photo,
    temperature: 29,
  },
  {
    name: "Greece",
    image: greece_photo,
    temperature: 28,
  },
  {
    name: "Canary Islands",
    image: canaryislands_photo,
    temperature: 27,
  },
  {
    name: "Albania",
    image: albania_photo,
    temperature: 26,
  },
  {
    name: "Egypt",
    image: egypt_photo,
    temperature: 31,
  },
];

export default function PopularDestinationsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">
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
