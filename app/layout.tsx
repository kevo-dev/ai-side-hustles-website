// Signal / Shelf direction: the App Router shell is intentionally quiet so the
// page can own the dark editorial stage, paper surfaces, and cobalt signals.
import type { Metadata } from "next";
import "../client/src/index.css";

export const metadata: Metadata = {
  title: "AI SIDE HUSTLES — The No-Budget Product Sprint",
  description:
    "A practical field guide for turning one useful idea into a sellable digital product.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
