import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Sales & Technical Consultation",
  description:
    "Get in touch with Mirainetics for AI automation, software development, and data analytics solutions. Request a demo or send us a commercial inquiry.",
  alternates: {
    canonical: "https://mirainetics.com/contact",
  },
  openGraph: {
    title: "Contact Us — Sales & Technical Consultation | Mirainetics",
    description:
      "Get in touch with Mirainetics for AI automation, software development, and data analytics solutions.",
    url: "https://mirainetics.com/contact",
    siteName: "Mirainetics",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Mirainetics" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Sales & Technical Consultation | Mirainetics",
    description:
      "Get in touch with Mirainetics for AI automation and software solutions.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
