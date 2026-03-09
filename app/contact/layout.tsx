import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MiraiNeticsAI",
  description:
    "Get in touch with MiraiNeticsAI for AI automation, software development, and data analytics solutions. Request a demo or send us a commercial inquiry.",
  alternates: {
    canonical: "https://miraineticsai.com/contact",
  },
  openGraph: {
    title: "Contact Us | MiraiNeticsAI",
    description:
      "Get in touch with MiraiNeticsAI for AI automation, software development, and data analytics solutions.",
    url: "https://miraineticsai.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
