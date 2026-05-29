"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { getAllDinosaurs } from "@/data/dinosaurs";
import { DinosaurCard } from "@/components/DinosaurCard";

const allDinosaurs = getAllDinosaurs();

const periods = ["jurassic", "cretaceous"] as const;
const diets = ["herbivore", "carnivore"] as const;
const sizes = ["small", "medium", "large", "huge"] as const;

export default function ExplorePage() {
  const t = useTranslations("explore");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriods, setSelectedPeriods] = useState<string[]>([]);
  const [selectedDiets, setSelectedDiets] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const filteredDinosaurs = allDinosaurs.filter((dino) => {
    const content = dino.content["en"]; // fallback for search

    const matchesSearch =
      !searchTerm ||
      content.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPeriod =
      selectedPeriods.length === 0 || selectedPeriods.includes(dino.period);

    const matchesDiet =
      selectedDiets.length === 0 || selectedDiets.includes(dino.diet);

    const matchesSize =
      selectedSizes.length === 0 || selectedSizes.includes(dino.sizeCategory);

    return matchesSearch && matchesPeriod && matchesDiet && matchesSize;
  });

  const toggleFilter = (
    value: string,
    selected: string[],
    setSelected: (values: string[]) => void
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-10">
        <h1 className="text-5xl font-semibold tracking-tight text-[#2C2522]">
          {t("title") || "Explore the Dinosaurs"}
        </h1>
        <p className="mt-3 max-w-2xl text-xl text-[#5C5146]">
          {t("subtitle") ||
            "Discover amazing creatures that roamed the Earth millions of years ago."}
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder={t("searchPlaceholder") || "Search dinosaurs..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-2xl border border-[#D9D0C0] bg-white px-6 py-4 text-lg placeholder:text-[#9A8C7B] focus:border-[#C17E4A] focus:outline-none focus:ring-2 focus:ring-[#C17E4A]/20"
        />
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-6">
        {/* Period */}
        <div>
          <div className="mb-2 text-sm font-semibold tracking-wider text-[#6B5F52] uppercase">
            When did they live?
          </div>
          <div className="flex flex-wrap gap-2">
            {periods.map((period) => (
              <button
                key={period}
                onClick={() =>
                  toggleFilter(period, selectedPeriods, setSelectedPeriods)
                }
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  selectedPeriods.includes(period)
                    ? "bg-[#C17E4A] text-white"
                    : "bg-white text-[#4A4038] ring-1 ring-[#D9D0C0] hover:bg-[#F4EDE3]"
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Diet */}
        <div>
          <div className="mb-2 text-sm font-semibold tracking-wider text-[#6B5F52] uppercase">
            What did they eat?
          </div>
          <div className="flex flex-wrap gap-2">
            {diets.map((diet) => (
              <button
                key={diet}
                onClick={() =>
                  toggleFilter(diet, selectedDiets, setSelectedDiets)
                }
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  selectedDiets.includes(diet)
                    ? "bg-[#C17E4A] text-white"
                    : "bg-white text-[#4A4038] ring-1 ring-[#D9D0C0] hover:bg-[#F4EDE3]"
                }`}
              >
                {diet.charAt(0).toUpperCase() + diet.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Size */}
        <div>
          <div className="mb-2 text-sm font-semibold tracking-wider text-[#6B5F52] uppercase">
            How big were they?
          </div>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() =>
                  toggleFilter(size, selectedSizes, setSelectedSizes)
                }
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  selectedSizes.includes(size)
                    ? "bg-[#C17E4A] text-white"
                    : "bg-white text-[#4A4038] ring-1 ring-[#D9D0C0] hover:bg-[#F4EDE3]"
                }`}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDinosaurs.length > 0 ? (
          filteredDinosaurs.map((dino) => (
            <DinosaurCard key={dino.id} dinosaur={dino} />
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <p className="text-xl text-[#6B5F52]">
              No dinosaurs match your filters. Try removing some!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
