import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

// Redirect root URL to the default locale (English)
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
