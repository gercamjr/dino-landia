// This root layout is intentionally minimal.
// All locale-aware layout logic lives in app/[locale]/layout.tsx
// We still need a root layout for Next.js.

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
