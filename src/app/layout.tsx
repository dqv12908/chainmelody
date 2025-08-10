import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AppLoader from "@/components/AppLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChainMelody – The Future of Music Streaming on Blockchain",
  description:
    "ChainMelody is a decentralized music streaming & creator economy platform on Polygon. Powering fair royalties, NFT music collectibles, and community curation with the $MELO token.",
  keywords: [
    "decentralized music streaming",
    "blockchain music platform",
    "NFT music collectibles",
    "creator economy",
    "Polygon blockchain",
    "MELO token",
    "music royalties",
    "independent artists",
    "Web3 music",
    "decentralized music publishing"
  ],
  authors: [{ name: "ChainMelody Team" }],
  creator: "ChainMelody",
  publisher: "ChainMelody",
  metadataBase: new URL("https://chainmelody.app"),
  openGraph: {
    title: "ChainMelody – The Future of Music Streaming on Blockchain",
    description:
      "Decentralized music streaming, fair royalties, and a creator-first economy on Polygon. Powered by $MELO.",
    type: "website",
    url: "https://chainmelody.app",
    siteName: "ChainMelody",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "ChainMelody Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChainMelody – The Future of Music Streaming on Blockchain",
    description: "Decentralized music streaming, fair royalties, and a creator-first economy on Polygon. Powered by $MELO.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <AppLoader />
        <Navbar />
        <div className="mt-[50px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
