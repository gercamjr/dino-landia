import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  // All supported locales
  locales,

  // Default locale when none matches
  defaultLocale: "en",

  // Use locale prefix for all locales (recommended for public sites)
  localePrefix: "as-needed",

  // Optional: pathnames for translated URLs later if needed
  // pathnames: { ... }
});

// Lightweight wrappers around Next.js' navigation APIs
// that consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);