import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import {
  BarChart3,
  ArrowRight,
  FileCheck2,
  ShieldCheck,
  TrendingUp,
  CreditCard,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Revenue Cycle Management Services | MiraiNeticsAI",
  description:
    "AI-powered revenue cycle management services including automated eligibility verification, claims processing, denial management, and payment reconciliation.",
  alternates: {
    canonical: "https://mirainetics.ai/solutions/revenue-cycle-management",
  },
  openGraph: {
    title: "Revenue Cycle Management Services | MiraiNeticsAI",
    description:
      "AI-powered revenue cycle management services including automated eligibility verification, claims processing, and denial management.",
    url: "https://mirainetics.ai/solutions/revenue-cycle-management",
  },
};

const capabilities = [
  {
    title: "Eligibility Verification",
    description:
      "Automated real-time eligibility checks against payer databases. Reduces manual verification time and catches coverage issues before claims submission.",
    icon: <FileCheck2 className="h-6 w-6" />,
  },
  {
    title: "Claims Processing",
    description:
      "End-to-end claims lifecycle management from charge capture to submission. Automated scrubbing, coding validation, and electronic submission to payers.",
    icon: <CreditCard className="h-6 w-6" />,
  },
  {
    title: "Denial Management",
    description:
      "AI-driven denial prediction identifies high-risk claims before submission. Automated appeal workflows and root cause analysis reduce denial rates systematically.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    title: "Payment Reconciliation",
    description:
      "Unified reconciliation across all payment channels and payer contracts. Automated posting, variance detection, and financial reporting dashboards.",
    icon: <TrendingUp className="h-6 w-6" />,
  },
];

const faqs = [
  {
    question: "What is Revenue Cycle Management?",
    answer:
      "Revenue Cycle Management (RCM) covers the entire financial process of a healthcare or service organization — from patient registration and eligibility verification through claims processing, payment posting, and collections. Effective RCM ensures accurate, timely reimbursement.",
  },
  {
    question: "How does AI improve the revenue cycle?",
    answer:
      "AI automates repetitive tasks like eligibility checks and claim scrubbing, predicts denials before submission by analyzing historical patterns, and identifies underpayments through contract compliance analysis. This reduces manual effort and accelerates cash flow.",
  },
  {
    question: "Which industries benefit from your RCM services?",
    answer:
      "Our RCM solutions primarily serve healthcare providers, medical billing companies, and insurance organizations. The automation framework is also applied to financial services for payment reconciliation and compliance workflows.",
  },
];

export default function RevenueCycleManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Revenue Cycle Management Services",
    provider: {
      "@type": "Organization",
      name: "MiraiNeticsAI",
      url: "https://mirainetics.ai",
    },
    description:
      "AI-powered revenue cycle management services including automated eligibility verification, claims processing, denial management, and payment reconciliation.",
    serviceType: "Revenue Cycle Management",
    url: "https://mirainetics.ai/solutions/revenue-cycle-management",
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
              Revenue Cycle{" "}
              <span className="text-primary">Management</span> Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We automate the entire revenue lifecycle from patient intake to
              payment reconciliation. Our AI-driven platform reduces denials,
              accelerates cash flow, and provides real-time visibility into
              financial performance.
            </p>
          </div>
        </section>

        {/* Capabilities */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-display font-bold mb-16">
            RCM Capabilities
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

        {/* Technology Integration */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-display font-bold mb-8">
              Technology Integration
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              Our RCM platform integrates with major EMR/EHR systems, practice
              management software, clearinghouses, and payer portals. The
              integration layer supports HL7, FHIR, X12 EDI, and custom API
              formats for seamless data exchange.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <BarChart3 className="h-4 w-4 text-primary" />
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
            Our RCM solutions are primarily deployed in healthcare organizations
            including hospitals, physician practices, and medical billing
            companies. We also serve finance and insurance companies with revenue
            optimization workflows.
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
