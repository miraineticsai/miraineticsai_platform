import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MiraiNeticsAI",
  description:
    "Get in touch with MiraiNeticsAI for AI automation, software development, and data analytics solutions. Request a demo or send us a commercial inquiry.",
  alternates: {
    canonical: "https://mirainetics.ai/contact",
  },
  openGraph: {
    title: "Contact Us | MiraiNeticsAI",
    description:
      "Get in touch with MiraiNeticsAI for AI automation, software development, and data analytics solutions.",
    url: "https://mirainetics.ai/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
