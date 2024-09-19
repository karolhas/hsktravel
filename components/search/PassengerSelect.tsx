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

//icons
import { Users } from "lucide-react";

const MIN_ADULTS = 1;
const MIN_CHILDREN = 0;

interface CounterProps {
  label: string;
  value: number;
  increment: () => void;
  decrement: () => void;
  disableDecrement: boolean;
}

function Counter({
  label,
  value,
  increment,
  decrement,
  disableDecrement,
}: CounterProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm font-medium">{label}</div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={decrement}
          disabled={disableDecrement}
          aria-label={`Decrement ${label}`}
        >
          -
        </Button>
        <span className="w-8 text-center">{value}</span>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={increment}
          aria-label={`Increment ${label}`}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default function PassengerSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(MIN_ADULTS);
  const [children, setChildren] = useState(MIN_CHILDREN);

  const handleIncrement = (
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setter((prev) => prev + 1);
  };

  const handleDecrement = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    min: number
  ) => {
    setter((prev) => Math.max(min, prev - 1));
  };

  const totalTravelers = adults + children;

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal text-gray-400 py-5"
        >
          <Users className="mr-2 h-4 w-4" />
          <span>
            {totalTravelers} {totalTravelers === 1 ? "traveler" : "travelers"}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <Counter
            label="Adults"
            value={adults}
            increment={() => handleIncrement(setAdults)}
            decrement={() => handleDecrement(setAdults, MIN_ADULTS)}
            disableDecrement={adults <= MIN_ADULTS}
          />
          <Counter
            label="Children (0 - 17 years)"
            value={children}
            increment={() => handleIncrement(setChildren)}
            decrement={() => handleDecrement(setChildren, MIN_CHILDREN)}
            disableDecrement={children <= MIN_CHILDREN}
          />
        </div>
        <Button className="mt-4 w-full" onClick={() => setIsOpen(false)}>
          Save
        </Button>
      </PopoverContent>
    </Popover>
  );
}
