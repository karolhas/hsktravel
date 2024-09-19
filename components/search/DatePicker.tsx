"use client";

//hooks
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";

//components
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

//icons
import { CalendarIcon } from "lucide-react";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDate(date: Date | undefined) {
  if (!date) return "";
  return `${date.getDate()} ${monthNames[date.getMonth()]}`;
}

function formatDateRange(range: DateRange | undefined) {
  if (range?.from && range?.to) {
    return `${formatDate(range.from)} - ${formatDate(range.to)}`;
  }
  return "When?";
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}

export default function DateSelect() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal text-gray-400 py-5"
          aria-label="Select Date Range"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {formatDateRange(dateRange)}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-2"
        align="start"
        side={isMobile ? "bottom" : "right"}
        sideOffset={8}
      >
        <div className="flex flex-col items-center justify-center">
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
            showOutsideDays={false}
            disabled={{ before: new Date() }}
          />
        </div>

        <div
          className={`p-4 border-t flex items-center ${
            dateRange?.from && dateRange?.to ? "justify-between" : "justify-end"
          }`}
        >
          {dateRange?.from && dateRange?.to && (
            <p className="text-[12px] pr-4">
              From:{" "}
              <span className="font-semibold">
                {formatDate(dateRange.from)}
              </span>{" "}
              | To:{" "}
              <span className="font-semibold">{formatDate(dateRange.to)}</span>
            </p>
          )}
          <Button onClick={() => setIsOpen(false)}>Save</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
