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
  title: {
    default: "BUHORA — Data Analytics & Business Intelligence Paraguay",
    template: "%s | BUHORA"
  },
  description: "Data analytics and business intelligence consulting in Paraguay. We help organizations turn complex data into clear, actionable insights for strategic decision-making.",
  keywords: [
    "data analytics paraguay",
    "business intelligence paraguay",
    "data analysis paraguay",
    "analytics consulting paraguay",
    "strategic analytics",
    "data insights paraguay",
    "business analytics paraguay",
    "data consulting paraguay",
    "analytics services paraguay",
    "data science paraguay",
    "data analytics asuncion",
    "BI consulting paraguay",
    "data visualization paraguay",
    "executive dashboards paraguay",
    "decision support analytics",
    "data strategy paraguay",
    "business intelligence asuncion",
    "analytics firm paraguay",
    "data consultancy paraguay",
  ],
  authors: [{ name: "BUHORA" }],
  creator: "BUHORA",
  publisher: "BUHORA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://buhora.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "es": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buhora.com",
    siteName: "BUHORA",
    title: "BUHORA — Data Analytics & Business Intelligence Paraguay",
    description: "Data analytics and business intelligence consulting in Paraguay. We help organizations turn complex data into clear, actionable insights.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUHORA — Data Analytics & Business Intelligence Paraguay",
    description: "Data analytics and business intelligence consulting in Paraguay.",
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
  verification: {
    // Add when you have Google Search Console verification
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
