import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { CursorProvider } from "@/hooks/use-cursor";
import { CustomCursor } from "@/components/custom-cursor";
import { NoiseOverlay } from "@/components/noise-overlay";
import { LoadingScreen } from "@/components/loading-screen";
import { Navigation } from "@/components/navigation";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { FloatingEnquire } from "@/components/floating-enquire";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhavinesh Bharathan Photography | Luxury Wedding & Commercial Photographer in Kerala",
  description:
    "Bhavinesh Bharathan is a luxury wedding and commercial photographer based in Kerala, India. Specializing in cinematic wedding photography, model portfolios, commercial campaigns, and drone cinematography.",
  keywords: [
    "Wedding Photographer Kerala",
    "Luxury Wedding Photography Kerala",
    "Commercial Photographer Kerala",
    "Drone Photography Kerala",
    "Model Portfolio Photographer Kerala",
    "Bhavinesh Bharathan",
    "Kerala Wedding Photography",
    "Destination Wedding Photographer India",
    "Film Photography Kerala",
  ],
  openGraph: {
    title: "Bhavinesh Bharathan Photography",
    description: "Luxury Wedding & Commercial Photographer based in Kerala",
    type: "website",
    locale: "en_IN",
    siteName: "Bhavinesh Bharathan Photography",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavinesh Bharathan Photography",
    description: "Luxury Wedding & Commercial Photographer based in Kerala",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body className="bg-primary text-[#e8e4df] antialiased">
        <CursorProvider>
          <LenisProvider>
            <LoadingScreen />
            <CustomCursor />
            <Navigation />
            <NoiseOverlay />
            <FloatingEnquire />
            <WhatsAppButton />
            <main>{children}</main>
          </LenisProvider>
        </CursorProvider>
      </body>
    </html>
  );
}
