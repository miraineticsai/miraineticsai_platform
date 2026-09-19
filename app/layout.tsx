import type { Metadata, Viewport } from "next";
import "./globals.css";
import { organizationJsonLd, websiteJsonLd, serviceJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

export const viewport: Viewport = {
  themeColor: "#030712",
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
    default: "Mirainetics | Build AI Products. Automate Your Business.",
    template: "%s | Mirainetics — AI Products & Automation",
  },
  description:
    "Mirainetics builds AI-powered products, intelligent agents, RAG applications, and business automations. From WhatsApp bots and social media workflows to custom LLM engineering.",
  keywords: [
    "AI Products",
    "AI Product Development",
    "AI Engineering",
    "Business Automation Studio",
    "RAG Applications",
    "Custom AI Agents",
    "WhatsApp AI Bot",
    "Slack AI Assistant",
    "Social Media Automation Workflow",
    "Lead Qualification Automation",
    "LLM Integration Services",
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
    title: "Mirainetics | Build AI Products. Automate Your Business.",
    description:
      "Mirainetics builds AI-powered products, intelligent agents, RAG applications, and business automations.",
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
    title: "Mirainetics | Build AI Products. Automate Your Business.",
    description:
      "Mirainetics builds AI-powered products, intelligent agents, RAG applications, and business automations.",
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
    <html lang="en" className={cn("dark", "font-sans")} suppressHydrationWarning>
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
