//hooks
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Destination {
  name: string;
  image: StaticImageData;
  temperature?: number;
}

interface DestinationCardProps {
  destination: Destination;
  isLarge?: boolean;
}

export default function DestinationCard({
  destination,
  isLarge = false,
}: DestinationCardProps) {
  const href = `/destination/${destination.name.toLowerCase()}`;

  const linkClassName = `relative group overflow-hidden rounded-lg ${
    isLarge ? "col-span-full md:col-span-2 md:row-span-2 h-full" : "col-span-1"
  }`;

  const imageWrapperClassName = "relative w-full pb-[66%]";

  const imageSizes = isLarge
    ? "(max-width: 768px) 100vw, 50vw"
    : "(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw";

  return (
    <Link href={href} className={linkClassName}>
      <div className={imageWrapperClassName}>
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes={imageSizes}
          className="transition-transform duration-300 group-hover:scale-110 object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
      <h3 className="absolute bottom-4 left-4 text-white text-sm lg:text-xl font-bold">
        {destination.name}
      </h3>
      {destination.temperature && (
        <span className="absolute top-4 left-4 bg-white bg-opacity-80 text-black text-xs lg:text-sm font-semibold px-2 py-1 rounded">
          {`${destination.temperature}°C`}
        </span>
      )}
    </Link>
  );
}
