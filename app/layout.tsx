import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PostHogProvider from "@/components/PostHogProvider";
import PostHogPageView from "@/components/PostHogPageView";
import CookieConsent from "@/components/CookieConsent";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const DESCRIPTION =
  "Prestron is a technology product house built from Uganda — building and owning its own products, and partnering selectively to build custom systems where it can bring exceptional value.";

export const metadata: Metadata = {
  metadataBase: new URL("https://prestron.com"),
  title: {
    default: "Prestron — Technology Product House, Kampala",
    template: "%s | Prestron",
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Prestron — Technology Product House",
    description: DESCRIPTION,
    type: "website",
    url: "https://prestron.com",
    siteName: "Prestron",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestron — Technology Product House",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body>
        <PostHogProvider>
          <PostHogPageView />
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <CookieConsent />
        </PostHogProvider>
      </body>
    </html>
  );
}