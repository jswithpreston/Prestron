import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PostHogProvider from "@/components/PostHogProvider";
import PostHogPageView from "@/components/PostHogPageView";

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

export const metadata: Metadata = {
  title: {
    default: "Prestron — Technology Product House, Kampala",
    template: "%s | Prestron",
  },
  description:
    "Prestron is a technology product house built from Uganda — building and owning its own products, and partnering selectively to build custom systems where it can bring exceptional value.",
  metadataBase: new URL("https://prestron.com"),
  openGraph: {
    title: "Prestron — Technology Product House",
    description:
      "A technology product house built from Uganda — building and owning its own products, and partnering selectively to build custom systems where it can bring exceptional value.",
    type: "website",
    url: "https://prestron.com",
    siteName: "Prestron",
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
        </PostHogProvider>
      </body>
    </html>
  );
}
