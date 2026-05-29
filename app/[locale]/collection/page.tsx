"use client";

import { useFavoritesStore } from "@/stores/useFavoritesStore";
import { getAllDinosaurs } from "@/data/dinosaurs";
import { DinosaurCard } from "@/components/DinosaurCard";
import Link from "next/link";

const allDinosaurs = getAllDinosaurs();

export default function CollectionPage() {
  const { favorites } = useFavoritesStore();

  const favoritedDinosaurs = allDinosaurs.filter((dino) =>
    favorites.includes(dino.slug)
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-10">
        <h1 className="text-5xl font-semibold tracking-tight text-[#2C2522]">
          My Dino Collection
        </h1>
        <p className="mt-3 text-xl text-[#5C5146]">
          Your favorite dinosaurs saved in one place.
        </p>
      </div>

      {favoritedDinosaurs.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favoritedDinosaurs.map((dino) => (
            <DinosaurCard key={dino.id} dinosaur={dino} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-3xl bg-white py-16 text-center ring-1 ring-[#EDE6D9]">
          <div className="text-6xl mb-4">🦕</div>
          <h2 className="text-2xl font-semibold mb-2">No dinosaurs yet!</h2>
          <p className="max-w-md text-[#5C5146] mb-6">
            Start exploring and tap the heart on any dinosaur you love to save it here.
          </p>
          <Link
            href="/explore"
            className="rounded-2xl bg-[#C17E4A] px-8 py-3 font-semibold text-white hover:bg-[#A66A3A]"
          >
            Explore Dinosaurs
          </Link>
        </div>
      )}
    </div>
  );
}
