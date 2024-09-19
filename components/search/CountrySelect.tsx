"use client";

//hooks
import { useState } from "react";

//components
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

//icons
import { MapPin } from "lucide-react";

type Country = {
  value: string;
  label: string;
};

const countries: Country[] = [
  { value: "anywhere", label: "Anywhere" },
  { value: "egypt", label: "Egypt" },
  { value: "greece", label: "Greece" },
  { value: "spain", label: "Spain" },
  { value: "tunisia", label: "Tunisia" },
  { value: "turkey", label: "Turkey" },
  { value: "canary_islands", label: "Canary Islands" },
];

export default function CountrySelect() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleCountryChange = (value: string) => {
    setSelectedCountries((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((country) => country !== value)
        : [...prevSelected, value]
    );
  };

  const displaySelectedCountries = () => {
    switch (selectedCountries.length) {
      case 0:
        return "Where to?";
      case 1:
        return countries.find((c) => c.value === selectedCountries[0])?.label;
      default:
        return `${selectedCountries.length} destinations`;
    }
  };

  const handleClear = () => {
    setSelectedCountries([]);
  };

  const renderCountryList = () =>
    countries.map((country) => (
      <div key={country.value} className="flex items-center">
        <Checkbox
          checked={selectedCountries.includes(country.value)}
          onCheckedChange={() => handleCountryChange(country.value)}
          id={country.value}
          aria-label={country.label}
        />
        <label htmlFor={country.value} className="ml-2">
          {country.label}
        </label>
      </div>
    ));

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal text-gray-400 py-5"
          aria-label="Select Country"
        >
          <MapPin className="mr-2 h-4 w-4" />
          {displaySelectedCountries()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="p-4">
          <p className="font-semibold mb-2">Popular Destinations</p>
          <div className="grid gap-2">{renderCountryList()}</div>
          <div className="mt-4 border-t">
            <div className="mt-4 flex justify-center items-center gap-8">
              <Button variant="outline" onClick={handleClear}>
                Clear
              </Button>
              <Button onClick={() => setIsOpen(false)}>Save</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
