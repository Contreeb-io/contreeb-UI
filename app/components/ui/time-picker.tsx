import { Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

// Time Picker Component
export default function TimePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (time: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0"),
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0"),
  );

  const [selectedHour, selectedMinute] = value.split(":");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal"
        >
          <Clock className="mr-2 h-4 w-4" />
          {value || "Select time"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex gap-2 p-3">
          {/* Hours */}
          <div className="flex h-48 flex-col gap-1 overflow-y-auto">
            {hours.map((hour) => (
              <button
                key={hour}
                onClick={() => {
                  onChange(`${hour}:${selectedMinute || "00"}:00`);
                  setOpen(false);
                }}
                className={`hover:bg-accent rounded px-3 py-1 text-sm ${
                  hour === selectedHour ? "bg-accent font-medium" : ""
                }`}
              >
                {hour}
              </button>
            ))}
          </div>
          <div className="text-2xl font-light">:</div>
          {/* Minutes */}
          <div className="flex h-48 flex-col gap-1 overflow-y-auto">
            {minutes.map((minute) => (
              <button
                key={minute}
                onClick={() => {
                  onChange(`${selectedHour || "00"}:${minute}:00`);
                  setOpen(false);
                }}
                className={`hover:bg-accent rounded px-3 py-1 text-sm ${
                  minute === selectedMinute ? "bg-accent font-medium" : ""
                }`}
              >
                {minute}
              </button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
