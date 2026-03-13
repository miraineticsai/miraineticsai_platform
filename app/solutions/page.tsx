import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import { Cpu, BarChart3, Database, ArrowRight, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Solutions | Mirainetics",
  description:
    "Enterprise technology solutions including advanced automation, web & mobile development, revenue cycle management, and data analytics services.",
  alternates: {
    canonical: "https://mirainetics.com/solutions",
  },
  openGraph: {
    title: "Technology Solutions | Mirainetics",
    description:
      "Enterprise technology solutions including advanced automation, web & mobile development, revenue cycle management, and data analytics services.",
    url: "https://mirainetics.com/solutions",
  },
};

const solutions = [
  {
    id: "advanced-automation",
    title: "Advanced Automation",
    description:
      "Our automation engine uses AI models to handle complex enterprise processes that traditional RPA cannot address.",
    icon: <Cpu className="h-10 w-10 text-primary" />,
    href: "/solutions/advanced-automation",
    details: [
      "Intelligent Data Extraction from unstructured sources.",
      "End-to-end process orchestration with human-in-the-loop validation.",
      "Real-time performance monitoring and self-healing bots.",
    ],
  },
  {
    id: "web-mobile-development",
    title: "Web & Mobile Development",
    description:
      "We deliver web and mobile application development services, creating scalable digital experiences across all platforms.",
    icon: <Globe className="h-10 w-10 text-secondary" />,
    href: "/solutions/web-mobile-development",
    details: [
      "Custom Web Applications tailored for enterprise scalability.",
      "Native Mobile Apps engineered for high performance.",
      "UI/UX Excellence driving user engagement.",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Integration",
    description:
      "Connect fragmented data silos and transform raw data into actionable business intelligence using our AI integration layer.",
    icon: <Database className="h-10 w-10 text-primary" />,
    href: "/solutions/data-analytics",
    details: [
      "Seamless integration with legacy enterprise systems.",
      "Predictive analytics for operational forecasting.",
      "Interactive AI-driven dashboards for real-time insights.",
    ],
  },
  {
    id: "revenue-cycle-management",
    title: "Revenue Cycle Management",
    description:
      "Automate the entire revenue lifecycle from intake to reconciliation, reducing denials and accelerating cash flow.",
    icon: <BarChart3 className="h-10 w-10 text-secondary" />,
    href: "/solutions/revenue-cycle-management",
    details: [
      "Automated eligibility and claims processing.",
      "AI-driven denial prediction and remediation.",
      "Unified payment reconciliation across all channels.",
    ],
  },
];

export default function SolutionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Technology Solutions",
    description:
      "Enterprise technology solutions including advanced automation, web & mobile development, revenue cycle management, and data analytics services.",
    url: "https://mirainetics.com/solutions",
    provider: {
      "@type": "Organization",
      name: "Mirainetics",
      url: "https://mirainetics.com",
    },
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-32">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Technology <span className="text-primary">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep expertise combined with cutting-edge AI to solve your most
            complex operational challenges.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-32">
          {solutions.map((sol, index) => (
            <div
              key={sol.id}
              id={sol.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="lg:w-1/2 glass p-12 rounded-[2.5rem] border-white/10">
                <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl">
                  {sol.icon}
                </div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  {sol.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {sol.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {sol.details.map((detail) => (
                    <li key={detail} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                      <span className="text-foreground/80">{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={sol.href}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                >
                  Learn More About {sol.title}{" "}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="lg:w-1/2 w-full aspect-square lg:aspect-video glass rounded-[2.5rem] border-white/10 flex items-center justify-center relative overflow-hidden p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className="relative z-10 w-full h-full bg-accent/40 rounded-2xl border border-white/10 flex flex-col p-6 overflow-hidden">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse" />
                    <div className="h-32 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 animate-bounce" />
                        <div className="w-12 h-12 rounded-lg bg-secondary/20 animate-bounce delay-100" />
                        <div className="w-12 h-12 rounded-lg bg-primary/20 animate-bounce delay-200" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-12 bg-white/5 rounded-lg" />
                      <div className="h-12 bg-white/5 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
