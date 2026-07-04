import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://tanmaychoudhary.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tanmay Choudhary — Systems & Spatial Intelligence",
  description:
    "I build systems that survive contact with reality. RAG, GIS, autonomous agents, trading pipelines, and infrastructure for people who need the thing to actually work.",
  applicationName: "Tanmay Choudhary",
  authors: [{ name: "Tanmay Choudhary", url: siteUrl }],
  creator: "Tanmay Choudhary",
  publisher: "Tanmay Choudhary",
  category: "technology",
  keywords: [
    "Tanmay Choudhary",
    "AI systems",
    "RAG",
    "GIS",
    "spatial intelligence",
    "automation",
    "VPS infrastructure",
    "freelance developer",
    "urban planning",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: {
    title: "Tanmay Choudhary — Systems & Spatial Intelligence",
    description: "I build systems that survive contact with reality. RAG, GIS, autonomous agents, trading pipelines.",
    url: siteUrl,
    siteName: "Tanmay Choudhary",
    type: "website",
    locale: "en_US",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay Choudhary — Systems & Spatial Intelligence",
    description: "I build systems that survive contact with reality.",
    creator: "@0x9T9",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#060605",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}