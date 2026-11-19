"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: { button: "h-7 w-7", icon: "h-3 w-3", text: "w-6 text-sm" },
  md: { button: "h-9 w-9", icon: "h-4 w-4", text: "w-8 text-base" },
  lg: { button: "h-11 w-11", icon: "h-5 w-5", text: "w-10 text-lg" },
};

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
  size = "md",
}: QuantitySelectorProps) {
  const classes = sizeClasses[size];

  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className={classes.button}
        onClick={handleDecrement}
        disabled={value <= min}
      >
        <Minus className={classes.icon} />
        <span className="sr-only">Decrease quantity</span>
      </Button>
      <span className={`text-center font-medium ${classes.text}`}>{value}</span>
      <Button
        variant="outline"
        size="icon"
        className={classes.button}
        onClick={handleIncrement}
        disabled={value >= max}
      >
        <Plus className={classes.icon} />
        <span className="sr-only">Increase quantity</span>
      </Button>
    </div>
  );
}
