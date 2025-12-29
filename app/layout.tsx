import type { Metadata } from "next";
import { Geist, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Entrümpelung & Umzug | Professioneller Service",
  description: "Professionelle Entrümpelung und Umzüge in Ihrer Nähe. Schnell, zuverlässig und zum fairen Preis. Fordern Sie jetzt Ihr unverbindliches Angebot an.",
  keywords: ["Entrümpelung", "Umzug", "Haushaltsauflösung", "Wohnungsauflösung", "Entsorgung"],
  authors: [{ name: "Entrümpelung Service" }],
  openGraph: {
    title: "Entrümpelung & Umzug | Professioneller Service",
    description: "Professionelle Entrümpelung und Umzüge in Ihrer Nähe. Schnell, zuverlässig und zum fairen Preis.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
