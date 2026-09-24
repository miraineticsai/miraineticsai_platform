import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { organizationJsonLd, websiteJsonLd, serviceJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mirainetics.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  title: {
    default: "Mirainetics — AI Products & Business Automation Studio",
    template: "%s | Mirainetics",
  },
  description:
    "Mirainetics is an AI engineering and product studio that builds AI-powered products, intelligent agents, RAG applications, and business automations. Custom LLM integrations, WhatsApp bots, Slack assistants, and workflow automation.",
  keywords: [
    "AI Products",
    "AI Product Development",
    "AI Engineering Studio",
    "Business Automation",
    "RAG Applications",
    "Custom AI Agents",
    "WhatsApp AI Bot",
    "Slack AI Assistant",
    "Social Media Automation",
    "Lead Qualification Automation",
    "LLM Integration Services",
    "Mirainetics",
    "AI Startup India",
    "AI Agency Pune",
  ],
  category: "technology",
  authors: [{ name: "Mirainetics", url: "https://mirainetics.com" }],
  publisher: "Mirainetics",
  creator: "Mirainetics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Mirainetics — AI Products & Business Automation Studio",
    description:
      "We design and build AI-powered products, intelligent agents, RAG applications, and business automations that reduce repetitive work and help teams move faster.",
    url: "https://mirainetics.com",
    siteName: "Mirainetics",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mirainetics — AI Products & Business Automation Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirainetics — AI Products & Business Automation Studio",
    description:
      "We design and build AI-powered products, intelligent agents, RAG applications, and business automations.",
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
    <html
      lang="en"
      className={cn(inter.variable, spaceGrotesk.variable)}
      suppressHydrationWarning
    >
      <body
        className="font-sans antialiased bg-background text-foreground min-h-screen"
        suppressHydrationWarning
      >
        <ThemeProvider>
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(serviceJsonLd()),
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
