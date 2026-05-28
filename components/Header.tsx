"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Header() {
  const t = useTranslations("nav");

  const navItems = [
    { href: "/explore", label: t("explore") },
    { href: "/timeline", label: t("timeline") },
    { href: "/quiz", label: t("quiz") },
    { href: "/collection", label: t("collection") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#EDE6D9] bg-[#F8F5F0]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-[#2C2522] hover:opacity-80 transition-opacity"
        >
          <span className="text-3xl">🦕</span>
          <span>Dino Landia</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#4A4038] hover:text-[#2C2522] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          {/* Mobile nav will be added later */}
        </div>
      </div>
    </header>
  );
}