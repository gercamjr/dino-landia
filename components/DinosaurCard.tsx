"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import type { Dinosaur } from "@/data/dinosaurs";
import { FavoriteButton } from "./FavoriteButton";

interface DinosaurCardProps {
  dinosaur: Dinosaur;
}

export function DinosaurCard({ dinosaur }: DinosaurCardProps) {
  const locale = useLocale();
  const content = dinosaur.content[locale as keyof typeof dinosaur.content];

  return (
    <Link
      href={`/${locale}/dinosaurs/${dinosaur.slug}`}
      className="group block overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#EDE6D9] transition-all hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F4EDE3]">
        <Image
          src={dinosaur.media.cardImage}
          alt={content.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold tracking-tight text-[#2C2522]">
            {content.name}
          </h3>
          <span className="text-2xl">
            {dinosaur.diet === "carnivore" ? "🦖" : "🦕"}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 text-base text-[#5C5146]">
          {content.shortDescription}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-[#F4EDE3] px-3 py-1 text-xs font-medium text-[#6B5F52]">
              {dinosaur.period.charAt(0).toUpperCase() + dinosaur.period.slice(1)}
            </span>
            <span className="rounded-full bg-[#F4EDE3] px-3 py-1 text-xs font-medium text-[#6B5F52]">
              {dinosaur.diet.charAt(0).toUpperCase() + dinosaur.diet.slice(1)}
            </span>
          </div>
          <FavoriteButton slug={dinosaur.slug} size="sm" />
        </div>
      </div>
    </Link>
  );
}
