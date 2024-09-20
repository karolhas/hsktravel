//hooks
import Image from "next/image";

//components
import { Button } from "../ui/button";

//images
import summer from "@/public/assets/special_offer_summer.webp";
import citybreak from "@/public/assets/special_offer_citybreak.webp";
import adventure from "@/public/assets/special_offer_adventure.webp";

export default function SpecialOffers() {
  return (
    <section className="py-16 text-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Summer in Paradise",
              discount: "20% OFF",
              image: summer,
            },
            {
              title: "City Break Deals",
              discount: "15% OFF",
              image: citybreak,
            },
            {
              title: "Adventure Package",
              discount: "10% OFF",
              image: adventure,
            },
          ].map((offer) => (
            <div
              key={offer.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={offer.image}
                alt={offer.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-orange-500 font-bold mb-4">
                  {offer.discount}
                </p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
