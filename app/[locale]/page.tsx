import Link from "next/link";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: t("heroTitle"),
  };
}

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EDE6D9] px-4 py-1 text-sm text-[#6B5F52]">
          🦕 7 Amazing Dinosaurs
        </div>

        <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter text-[#2C2522] mb-6">
          {t("heroTitle")}
        </h1>

        <p className="mx-auto max-w-2xl text-xl text-[#5C5146] leading-relaxed">
          {t("heroSubtitle")}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/explore"
            className="inline-flex items-center justify-center rounded-2xl bg-[#C17E4A] px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#A66A3A] active:bg-[#8F5830] transition-all"
          >
            {t("ctaExplore")}
          </Link>
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center rounded-2xl border-2 border-[#C17E4A] px-8 py-4 text-lg font-semibold text-[#C17E4A] hover:bg-[#C17E4A] hover:text-white transition-all"
          >
            {t("ctaQuiz")}
          </Link>
        </div>
      </div>

      {/* Fun Stats / Teaser */}
      <div className="bg-white border-t border-[#EDE6D9] py-12">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { emoji: "🦖", label: "7 Dinosaurs", sub: "Ready to meet them?" },
            { emoji: "🌍", label: "2 Languages", sub: "English + Español" },
            { emoji: "🎮", label: "Fun Activities", sub: "Quiz, Timeline & More" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-5xl mb-3">{item.emoji}</div>
              <div className="font-semibold text-xl text-[#2C2522]">{item.label}</div>
              <div className="text-[#6B5F52] mt-1">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Preview */}
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold tracking-tight mb-4 text-[#2C2522]">
          Ready to start your adventure?
        </h2>
        <p className="text-lg text-[#5C5146] mb-8">
          Jump into the dinosaur world with beautiful illustrations and real facts made for kids.
        </p>
        <Link
          href="/explore"
          className="inline-flex items-center justify-center rounded-full bg-[#2C2522] px-6 py-3 text-white font-medium hover:bg-black transition-colors"
        >
          Explore the Dinosaurs →
        </Link>
      </div>
    </div>
  );
}
