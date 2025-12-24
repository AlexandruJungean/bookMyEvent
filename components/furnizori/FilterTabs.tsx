"use client";

import { cn } from "@/lib/utils";
import { CATEGORII_SERVICII } from "@/lib/constants";

interface FilterTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function FilterTabs({ activeCategory, onCategoryChange }: FilterTabsProps) {
  const allCategories = [
    { id: "toate", nume: "Toate" },
    ...CATEGORII_SERVICII,
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {allCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
            activeCategory === category.id
              ? "bg-brown-800 text-white shadow-lg"
              : "bg-cream-100 text-brown-600 hover:bg-cream-200 border border-cream-200"
          )}
        >
          {category.nume}
        </button>
      ))}
    </div>
  );
}

