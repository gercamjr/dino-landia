"use client";

import { getAllDinosaurs } from "@/data/dinosaurs";
import Link from "next/link";
import { useLocale } from "next-intl";

const dinosaurs = getAllDinosaurs();

export default function TimelinePage() {
  const currentLocale = useLocale();

  // Simple timeline data
  const timeline = [
    { period: "Jurassic", years: "201–145 million years ago", color: "#A8C5A2" },
    { period: "Cretaceous", years: "145–66 million years ago", color: "#E8B86D" },
  ];

  const jurassicDinos = dinosaurs.filter(d => d.period === "jurassic");
  const cretaceousDinos = dinosaurs.filter(d => d.period === "cretaceous");

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-semibold tracking-tight">Dinosaur Timeline</h1>
        <p className="mt-3 text-xl text-[#5C5146]">
          See when these amazing creatures lived
        </p>
      </div>

      {/* Timeline Line */}
      <div className="relative">
        {/* Jurassic Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-4 w-4 rounded-full" style={{ backgroundColor: timeline[0].color }} />
            <div>
              <div className="text-2xl font-semibold">Jurassic Period</div>
              <div className="text-[#6B5F52]">{timeline[0].years}</div>
            </div>
          </div>

          <div className="ml-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jurassicDinos.map((dino) => {
              const content = dino.content[currentLocale as keyof typeof dino.content] || dino.content.en;
              return (
                <Link
                  key={dino.id}
                  href={`/${currentLocale}/dinosaurs/${dino.slug}`}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#EDE6D9] hover:shadow-md transition"
                >
                  <div className="font-semibold text-xl mb-1">{content.name}</div>
                  <div className="text-sm text-[#6B5F52]">{content.shortDescription}</div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Cretaceous Section */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-4 w-4 rounded-full" style={{ backgroundColor: timeline[1].color }} />
            <div>
              <div className="text-2xl font-semibold">Cretaceous Period</div>
              <div className="text-[#6B5F52]">{timeline[1].years}</div>
            </div>
          </div>

          <div className="ml-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cretaceousDinos.map((dino) => {
              const content = dino.content[currentLocale as keyof typeof dino.content] || dino.content.en;
              return (
                <Link
                  key={dino.id}
                  href={`/${currentLocale}/dinosaurs/${dino.slug}`}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#EDE6D9] hover:shadow-md transition"
                >
                  <div className="font-semibold text-xl mb-1">{content.name}</div>
                  <div className="text-sm text-[#6B5F52]">{content.shortDescription}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
