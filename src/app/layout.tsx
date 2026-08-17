import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://hashchat.uk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "hashChat — WhatsApp CRM for teams",
    template: "%s — hashChat",
  },
  description:
    "Ek shared WhatsApp inbox jise poori team chala sake. Contacts, sales pipelines, broadcasts aur automations — sab ek jagah.",
  keywords: [
    "WhatsApp CRM",
    "shared WhatsApp inbox",
    "WhatsApp Business API",
    "WhatsApp broadcast",
    "CRM Pakistan",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "hashChat",
    title: "hashChat — WhatsApp CRM for teams",
    description:
      "Ek shared WhatsApp inbox jise poori team chala sake. Contacts, pipelines, broadcasts aur automations — sab ek jagah.",
    // A static file, not a generated route: social scrapers fetch once
    // and do not retry, so an OG endpoint that is cold or erroring at
    // the moment a link is first shared costs you the preview for good.
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "hashChat — poori team ka ek WhatsApp inbox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "hashChat — WhatsApp CRM for teams",
    description: "Ek shared WhatsApp inbox jise poori team chala sake.",
    images: ["/og.png"],
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#080a12",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Font variables go on <html>, not <body>. Tailwind v4 resolves
    // @theme tokens against :root, so a variable declared on <body> is
    // out of scope by the time --font-display is computed and the whole
    // page silently falls back to system sans.
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
