import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Mirainetics",
  description:
    "Get in touch with Mirainetics for AI automation, software development, and data analytics solutions. Request a demo or send us a commercial inquiry.",
  alternates: {
    canonical: "https://mirainetics.com/contact",
  },
  openGraph: {
    title: "Contact Us | Mirainetics",
    description:
      "Get in touch with Mirainetics for AI automation, software development, and data analytics solutions.",
    url: "https://mirainetics.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
