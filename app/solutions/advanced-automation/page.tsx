import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import {
  Cpu,
  ArrowRight,
  Workflow,
  BrainCircuit,
  Activity,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Advanced Automation Services | Mirainetics",
  description:
    "Enterprise automation services using AI-driven process orchestration, intelligent data extraction, and self-healing bot infrastructure for complex workflows.",
  alternates: {
    canonical: "https://mirainetics.com/solutions/advanced-automation",
  },
  openGraph: {
    title: "Advanced Automation Services | Mirainetics",
    description:
      "Enterprise automation services using AI-driven process orchestration, intelligent data extraction, and self-healing bot infrastructure.",
    url: "https://mirainetics.com/solutions/advanced-automation",
  },
};

const capabilities = [
  {
    title: "Intelligent Data Extraction",
    description:
      "Extract structured data from unstructured documents, emails, and forms using AI-powered recognition models. Supports PDFs, images, and multi-format inputs.",
    icon: <BrainCircuit className="h-6 w-6" />,
  },
  {
    title: "Process Orchestration",
    description:
      "Design and deploy end-to-end automated workflows with human-in-the-loop validation checkpoints. Supports conditional logic, branching, and escalation paths.",
    icon: <Workflow className="h-6 w-6" />,
  },
  {
    title: "Self-Healing Bots",
    description:
      "Automation bots that detect failures, adapt to UI changes, and self-correct in real time. Reduces maintenance overhead and increases reliability.",
    icon: <Activity className="h-6 w-6" />,
  },
  {
    title: "System Integration",
    description:
      "Connect to ERP, CRM, and legacy systems through pre-built connectors and custom API integrations. Supports REST, SOAP, and database-level connections.",
    icon: <Layers className="h-6 w-6" />,
  },
];

const faqs = [
  {
    question: "What types of processes can be automated?",
    answer:
      "We automate data entry, document processing, eligibility verification, claims processing, reconciliation, and other repetitive enterprise workflows that follow rule-based or AI-assisted decision logic.",
  },
  {
    question: "How does AI-driven automation differ from traditional RPA?",
    answer:
      "Traditional RPA follows rigid, rule-based scripts. AI-driven automation uses machine learning models to handle unstructured data, adapt to variations, and make context-aware decisions during execution.",
  },
  {
    question: "What systems can your automation integrate with?",
    answer:
      "Our platform integrates with major ERP systems, CRM platforms, EMR/EHR systems, and custom-built applications via REST APIs, SOAP services, and direct database connections.",
  },
];

export default function AdvancedAutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Advanced Automation Services",
    provider: {
      "@type": "Organization",
      name: "Mirainetics",
      url: "https://mirainetics.com",
    },
    description:
      "Enterprise automation services using AI-driven process orchestration, intelligent data extraction, and self-healing bot infrastructure.",
    serviceType: "AI Automation",
    url: "https://mirainetics.com/solutions/advanced-automation",
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
              Advanced{" "}
              <span className="text-primary">Automation</span> Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We build intelligent automation systems that go beyond traditional
              RPA. Our AI-driven platform handles complex enterprise processes
              including data extraction, workflow orchestration, and real-time
              decision making.
            </p>
          </div>
        </section>

        {/* Capabilities */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-display font-bold mb-16">
            Automation Capabilities
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
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              Our automation platform is built on a multi-layered architecture
              designed for reliability, scalability, and enterprise-grade
              security. The stack includes AI decision engines, integration APIs,
              and real-time monitoring infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Cpu className="h-4 w-4 text-primary" />
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
            Our automation solutions are deployed across healthcare, finance,
            insurance, and logistics. Each implementation is customized to the
            specific regulatory and operational requirements of the industry.
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
