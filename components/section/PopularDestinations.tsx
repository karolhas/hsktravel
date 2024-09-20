// hooks
import Image, { StaticImageData } from "next/image";

// images
import egypt_hurghada from "@/public/assets/popular_destinations_egypt_hurghada.webp";
import greece_santorini from "@/public/assets/popular_destinations_greece_santorini.jpeg";
import turkey_alanya from "@/public/assets/popular_destinations_turkey_alanya.webp";

// icons
import { LuMapPin } from "react-icons/lu";

interface DestinationCardProps {
  name: string;
  image: StaticImageData;
}

// Separate Component for Destination Card
const DestinationCard: React.FC<DestinationCardProps> = ({ name, image }) => (
  <div className="relative group overflow-hidden rounded-lg shadow-md">
    <Image
      src={image}
      alt={name}
      width={600}
      height={400}
      className="h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      priority={true}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="flex items-center mt-2">
        <LuMapPin className="mr-1 h-4 w-4" /> Explore now
      </p>
    </div>
  </div>
);

const popularDestinations = [
  {
    name: "Hurghada, Egypt",
    image: egypt_hurghada,
  },
  {
    name: "Santorini, Greece",
    image: greece_santorini,
  },
  {
    name: "Alanya, Turkey",
    image: turkey_alanya,
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
          {popularDestinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              name={destination.name}
              image={destination.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
