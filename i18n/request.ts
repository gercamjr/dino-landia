import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming locale is valid
  const locale = await requestLocale;

  // Ensure that the incoming `locale` is valid
  const validLocale = routing.locales.includes(locale as any)
    ? (locale as (typeof routing.locales)[number])
    : routing.defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});