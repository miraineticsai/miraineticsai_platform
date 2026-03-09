import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mirainetics.ai"),
  title: "MiraiNeticsAI | Automating the Future of Intelligent Workflows",
  description: "MiraiNeticsAI builds intelligent automation systems that eliminate manual workflows across industries using AI, automation, and data intelligence.",
  keywords: ["AI Automation", "Workflow Intelligence", "Enterprise AI", "Robotic Process Automation", "MiraiNeticsAI"],
  openGraph: {
    title: "MiraiNeticsAI",
    description: "Automating the Future of Intelligent Workflows",
    url: "https://mirainetics.ai",
    siteName: "MiraiNeticsAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MiraiNeticsAI",
    description: "Automating the Future of Intelligent Workflows",
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
      >
        {children}
      </body>
    </html>
  );
}
