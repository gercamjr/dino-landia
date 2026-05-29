"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { locales } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as (typeof locales)[number] });
  };

  return (
    <div className="relative inline-block">
      <select
        value={locale}
        onChange={(e) => onSelectChange(e.target.value)}
        className="appearance-none bg-white border border-[#D9D0C0] text-[#4A4038] text-sm rounded-full px-4 py-1.5 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C17E4A] hover:border-[#C17E4A] transition-all"
        aria-label="Select language"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {l === "en" ? "🇺🇸 English" : "🇪🇸 Español"}
          </option>
        ))}
      </select>
    </div>
  );
}