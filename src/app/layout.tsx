import Footer from "@/components/footer";
import Nav from "@/components/nav";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AsyncMuseum",
  description:
    "AsyncMuseum est une plateforme numérique innovante qui rend l&apos;art accessible à tous.",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏛️</text></svg>",
  openGraph: {
    title: "AsyncMuseum",
    description:
      "AsyncMuseum est une plateforme numérique innovante qui rend l&apos;art accessible à tous.",
    images: [
      "https://images.metmuseum.org/CRDImages/dp/web-large/DP889132.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AsyncMuseum",
    description:
      "AsyncMuseum est une plateforme numérique innovante qui rend l&apos;art accessible à tous.",
    images: [
      "https://images.metmuseum.org/CRDImages/dp/web-large/DP889132.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
