import DestinationCard from "@/components/cards/DestinationCard";
import zanzibar_photo from "@/public/assets/zanzibar-photo.webp";
import madagascar_photo from "@/public/assets/madagascar-photo.webp";
import malaysia_photo from "@/public/assets/malaysia-photo.webp";
import mauritius_photo from "@/public/assets/mauritius-photo.webp";
import thailand_photo from "@/public/assets/thailand-photo.webp";

const exoticDestinations = [
  { name: "Zanzibar", image: zanzibar_photo },
  { name: "Madagascar", image: madagascar_photo },
  { name: "Malaysia", image: malaysia_photo },
  { name: "Mauritius", image: mauritius_photo },
  { name: "Thailand", image: thailand_photo },
];

export default function ExoticDestinationsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Exotic destinations</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4">
        <DestinationCard destination={exoticDestinations[0]} isLarge={true} />
        {exoticDestinations.slice(1).map((destination) => (
          <DestinationCard key={destination.name} destination={destination} />
        ))}
      </div>
    </section>
  );
}
