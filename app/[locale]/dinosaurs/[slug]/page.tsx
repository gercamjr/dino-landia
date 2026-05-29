import { notFound } from "next/navigation";
import Image from "next/image";
import { getDinosaurBySlug } from "@/data/dinosaurs";
import { PronunciationButton } from "@/components/PronunciationButton";
import { FavoriteButton } from "@/components/FavoriteButton";
import { SizeComparison } from "@/components/SizeComparison";

interface DinosaurPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function DinosaurDetailPage({ params }: DinosaurPageProps) {
  const { locale, slug } = await params;

  const dinosaur = getDinosaurBySlug(slug);

  if (!dinosaur) {
    notFound();
  }

  const content = dinosaur.content[locale as keyof typeof dinosaur.content] || dinosaur.content.en;

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      {/* Hero Section */}
      <div className="relative mb-8 overflow-hidden rounded-3xl bg-[#F4EDE3] shadow-sm">
        <div className="aspect-video w-full">
          <Image
            src={dinosaur.media.heroImage}
            alt={content.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight text-[#2C2522]">
            {content.name}
          </h1>
          {content.scientificName && (
            <p className="mt-1 text-xl italic text-[#6B5F52]">
              {content.scientificName}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <PronunciationButton text={content.pronunciation} />
          <FavoriteButton slug={dinosaur.slug} />
        </div>
      </div>

      {/* Video */}
      {dinosaur.media.video && (
        <div className="mb-10 overflow-hidden rounded-3xl bg-black shadow-sm">
          <video
            controls
            className="w-full"
            poster={dinosaur.media.heroImage}
          >
            <source src={dinosaur.media.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Description */}
      <div className="mb-10">
        <p className="text-2xl leading-relaxed text-[#2C2522]">
          {content.shortDescription}
        </p>
      </div>

      {/* Fun Facts */}
      <div className="mb-10">
        <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[#2C2522]">
          Fun Facts
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {content.funFacts.map((fact, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#EDE6D9]"
            >
              <div className="text-3xl mb-3">✨</div>
              <p className="text-lg text-[#2C2522]">{fact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#EDE6D9]">
          <div className="text-sm font-semibold text-[#6B5F52] mb-1">LIVED WHEN</div>
          <div className="text-xl font-medium text-[#2C2522]">{content.livedWhen}</div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#EDE6D9]">
          <div className="text-sm font-semibold text-[#6B5F52] mb-1">HABITAT</div>
          <div className="text-xl font-medium text-[#2C2522]">{content.habitat}</div>
        </div>
      </div>

      {/* Visual Size Comparison */}
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#EDE6D9] mb-10">
        <h2 className="text-3xl font-semibold tracking-tight mb-6 text-[#2C2522]">
          Size Comparison
        </h2>
        <SizeComparison 
          lengthMeters={dinosaur.lengthMeters} 
          heightMeters={dinosaur.heightMeters} 
        />
      </div>
    </div>
  );
}
