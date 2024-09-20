//hooks
import Image from "next/image";

//components
import { Button } from "@/components/ui/button";
import CountrySelect from "../search/CountrySelect";
import DatePicker from "../search/DatePicker";
import TravelerSelect from "../search/PassengerSelect";

//images
import saychellesBackground from "@/public/assets/saychelles_background.jpg";

//icons
import { LuSearch } from "react-icons/lu";

export default function HeroBanner() {
  return (
    <section className="relative p-6 h-[70vh] flex items-center justify-center text-gray-700">
      <BackgroundImage />
      <Overlay />
      <Content />
    </section>
  );
}

const BackgroundImage = () => (
  <Image
    src={saychellesBackground}
    alt="Beautiful travel destination"
    layout="fill"
    objectFit="cover"
  />
);

const Overlay = () => (
  <div className="absolute inset-0 bg-black bg-opacity-60" />
);

const Content = () => (
  <div className="relative z-10 text-center text-white">
    <Title />
    <Subtitle />
    <SearchForm />
  </div>
);

const Title = () => (
  <h1 className="text-4xl md:text-6xl font-bold mb-4">
    Start Your Next Adventure Today
  </h1>
);

const Subtitle = () => (
  <p className="text-lg md:text-2xl mb-8 font-light">
    Uncover stunning destinations and book unforgettable experiences with ease.
  </p>
);

const SearchForm = () => (
  <div className="container mx-auto bg-white rounded-lg p-4 md:p-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
      <CountrySelect />
      <DatePicker />
      <TravelerSelect />
      <SearchButton />
    </div>
  </div>
);

const SearchButton = () => (
  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
    <LuSearch className="mr-2 h-4 w-4" /> Search
  </Button>
);
