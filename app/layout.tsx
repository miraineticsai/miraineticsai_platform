import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mirainetics.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.svg",
  },
  title: {
    default: "Mirainetics | Automating the Future of Intelligent Workflows",
    template: "%s | Mirainetics",
  },
  description:
    "Mirainetics builds intelligent automation systems that eliminate manual workflows across industries using AI, automation, and data intelligence.",
  keywords: [
    "AI Automation",
    "Workflow Intelligence",
    "Enterprise AI Solutions",
    "Robotic Process Automation",
    "Intelligent Workflows",
    "Data Analytics Platform",
    "Revenue Cycle Management Automation",
    "Custom Software Engineering",
    "Mirainetics",
  ],
  category: "technology",
  authors: [{ name: "Mirainetics", url: "https://mirainetics.com" }],
  publisher: "Mirainetics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    title: "Mirainetics | Automating the Future of Intelligent Workflows",
    description:
      "Mirainetics builds intelligent automation systems that eliminate manual workflows across industries.",
    url: "https://mirainetics.com",
    siteName: "Mirainetics",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mirainetics — AI Automation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirainetics | Automating the Future of Intelligent Workflows",
    description:
      "Mirainetics builds intelligent automation systems that eliminate manual workflows across industries.",
    site: "@mirainetics",
    creator: "@mirainetics",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased mesh-background min-h-screen text-foreground`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
