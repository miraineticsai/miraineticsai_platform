import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import {
  Globe,
  ArrowRight,
  Smartphone,
  Code2,
  Palette,
  Cloud,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web & Mobile Development Services | Mirainetics",
  description:
    "Custom web and mobile development services including scalable web applications, modern frontend architectures, native mobile apps, and cloud-based systems.",
  alternates: {
    canonical: "https://mirainetics.com/solutions/web-mobile-development",
  },
  openGraph: {
    title: "Web & Mobile Development Services | Mirainetics",
    description:
      "Custom web and mobile development services including scalable web applications, modern frontend architectures, and cloud-based systems.",
    url: "https://mirainetics.com/solutions/web-mobile-development",
  },
};

const capabilities = [
  {
    title: "Custom Web Applications",
    description:
      "Full-stack web application development using modern frameworks like Next.js, React, and Node.js. Built for enterprise scalability with server-side rendering and API-first architecture.",
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    title: "Native Mobile Development",
    description:
      "iOS and Android application development with native performance. We build mobile experiences optimized for speed, offline capability, and platform-specific UX patterns.",
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    title: "UI/UX Engineering",
    description:
      "Design systems, component libraries, and user interfaces built for accessibility and engagement. We follow WCAG guidelines and modern design principles.",
    icon: <Palette className="h-6 w-6" />,
  },
  {
    title: "Cloud Architecture",
    description:
      "Cloud-native deployment strategies using containerization, CI/CD pipelines, and infrastructure-as-code. We architect systems for high availability and horizontal scaling.",
    icon: <Cloud className="h-6 w-6" />,
  },
];

const faqs = [
  {
    question: "What technology stack do you use for web development?",
    answer:
      "We primarily work with Next.js, React, TypeScript, and Node.js for web applications. For backend services, we use Node.js, Python, and Go depending on the use case. Infrastructure is managed on AWS, GCP, or Azure.",
  },
  {
    question: "Do you build cross-platform or native mobile apps?",
    answer:
      "We build both. For projects requiring maximum performance and platform-specific features, we develop native applications. For teams looking for faster time-to-market with shared codebases, we use React Native.",
  },
  {
    question: "How do you handle project delivery and communication?",
    answer:
      "We follow agile methodology with sprint-based delivery. Teams receive regular updates, demo sessions, and have direct access to developers and project leads throughout the engagement.",
  },
];

export default function WebMobileDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web & Mobile Development Services",
    provider: {
      "@type": "Organization",
      name: "Mirainetics",
      url: "https://mirainetics.com",
    },
    description:
      "Custom web and mobile development services including scalable web applications, modern frontend architectures, native mobile apps, and cloud-based systems.",
    serviceType: "Software Development",
    url: "https://mirainetics.com/solutions/web-mobile-development",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className="pt-32">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              ← Back to Solutions
            </Link>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              Web & Mobile{" "}
              <span className="text-primary">Development</span> Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We build custom web applications and native mobile apps using
              modern technology stacks. Our development process focuses on
              scalability, performance, and long-term maintainability for
              enterprise clients.
            </p>
          </div>
        </section>

        {/* Development Approach */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-display font-bold mb-16">
            Development Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="glass p-8 rounded-2xl border-white/5"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit mb-6">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{cap.title}</h3>
                <p className="text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-display font-bold mb-8">
              Modern Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              We use production-proven frameworks and tools: Next.js and React
              for frontend, Node.js and Python for backend services, PostgreSQL
              and MongoDB for data, and AWS/GCP for cloud infrastructure. All
              projects include CI/CD pipelines, automated testing, and
              infrastructure-as-code from day one.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Globe className="h-4 w-4 text-primary" />
                View Our Technology Architecture
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-display font-bold mb-8">
            Industries We Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            We develop software solutions for healthcare, finance, insurance,
            logistics, and SaaS companies. Each project is built with
            industry-specific compliance and operational requirements in mind.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              View All Industries <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-display font-bold mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8 max-w-3xl">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
