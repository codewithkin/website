import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

// Configure the primary font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://propainters.co.zw"),
  title: {
    default: "Propainters | Painting, Decorating & Signwriting in Zimbabwe",
    template: "%s | Propainters",
  },
  description:
    "Propainters offers professional painting, decorating, and signwriting services across Zimbabwe. Residential, commercial, and industrial projects delivered with premium quality and craftsmanship.",
  keywords: [
    "Propainters",
    "painting",
    "decorating",
    "signwriting",
    "Zimbabwe",
    "Harare",
    "residential painting",
    "commercial painting",
    "industrial painting",
  ],
  authors: [{ name: "Propainters" }],
  creator: "Propainters",
  publisher: "Propainters",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Propainters | Zimbabwe's Painting, Decorating & Signwriting Experts",
    description:
      "Premium quality painting, decorating and signwriting services for homes and businesses across Zimbabwe.",
    url: "https://propainters.co.zw",
    siteName: "Propainters",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Propainters website preview",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Propainters | Painting, Decorating & Signwriting in Zimbabwe",
    description:
      "Professional painting, decorating and signwriting services for residential, commercial and industrial projects across Zimbabwe.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased`}
      >
        {/* ThemeProvider from shadcn/ui */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
