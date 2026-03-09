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
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MiraiNeticsAI",
              url: "https://mirainetics.ai",
              logo: "https://mirainetics.ai/logo.png",
              description:
                "MiraiNeticsAI builds intelligent automation systems, software development solutions, and data analytics platforms for enterprise operations.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "miraineticsai@gmail.com",
                telephone: "+91-8446049402",
                contactType: "sales",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              sameAs: [
                "https://twitter.com/miraineticsai",
                "https://linkedin.com/company/miraineticsai",
                "https://github.com/miraineticsai",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
