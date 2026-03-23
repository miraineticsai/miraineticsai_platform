import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import {
  Database,
  ArrowRight,
  BarChart3,
  GitMerge,
  LineChart,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Analytics Services | Mirainetics",
  description:
    "Enterprise data analytics and integration services including predictive analytics, real-time dashboards, legacy system integration, and AI-driven business intelligence.",
  alternates: {
    canonical: "https://mirainetics.com/solutions/data-analytics",
  },
  openGraph: {
    title: "Data Analytics Services | Mirainetics",
    description:
      "Enterprise data analytics and integration services including predictive analytics, real-time dashboards, and AI-driven business intelligence.",
    url: "https://mirainetics.com/solutions/data-analytics",
  },
};

const capabilities = [
  {
    title: "Data Integration",
    description:
      "Connect fragmented data silos across your organization. Our integration layer supports databases, APIs, flat files, and legacy enterprise systems with automated ETL pipelines.",
    icon: <GitMerge className="h-6 w-6" />,
  },
  {
    title: "Predictive Analytics",
    description:
      "Machine learning models trained on your operational data to forecast revenue, detect anomalies, predict resource needs, and identify optimization opportunities.",
    icon: <LineChart className="h-6 w-6" />,
  },
  {
    title: "Real-Time Dashboards",
    description:
      "Interactive business intelligence dashboards that provide real-time visibility into KPIs, operational metrics, and financial performance across departments.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: "Data Pipeline Architecture",
    description:
      "Scalable data pipeline design using modern tools and cloud-native architecture. Built for high-volume data ingestion, transformation, and storage with fault tolerance.",
    icon: <Layers className="h-6 w-6" />,
  },
];

const faqs = [
  {
    question: "What types of data sources can you integrate?",
    answer:
      "We integrate with relational databases (PostgreSQL, MySQL, SQL Server), NoSQL databases (MongoDB, DynamoDB), REST and SOAP APIs, flat files (CSV, Excel), and legacy ERP/CRM systems. Our connectors support both batch and real-time data syncing.",
  },
  {
    question: "How do you handle data security and compliance?",
    answer:
      "All data is encrypted at rest and in transit using AES-256. We implement role-based access controls, audit logging, and support compliance frameworks including HIPAA, SOC2, and GDPR depending on the client's requirements.",
  },
  {
    question: "Can analytics integrate with existing BI tools?",
    answer:
      "Yes. Our analytics platform can export to and integrate with tools like Tableau, Power BI, Looker, and custom dashboards. We also provide our own real-time dashboard solution for clients who prefer an integrated approach.",
  },
];

export default function DataAnalyticsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Data Analytics Services",
    provider: {
      "@type": "Organization",
      name: "Mirainetics",
      url: "https://mirainetics.com",
    },
    description:
      "Enterprise data analytics and integration services including predictive analytics, real-time dashboards, legacy system integration, and AI-driven business intelligence.",
    serviceType: "Data Analytics",
    url: "https://mirainetics.com/solutions/data-analytics",
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
              Data <span className="text-primary">Analytics</span> Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We connect fragmented data silos and transform raw data into
              actionable business intelligence. Our platform combines AI-driven
              analytics with enterprise-grade integration to power data-informed
              decision making.
            </p>
          </div>
        </section>

        {/* Capabilities */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-display font-bold mb-16">
            Analytics Capabilities
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

        {/* Integration Approach */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-display font-bold mb-8">
              Integration Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              Our data integration layer connects to legacy and modern systems
              through pre-built connectors, custom APIs, and automated ETL
              pipelines. We design data architectures that scale with your
              organization&apos;s growth while maintaining data integrity and
              governance standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Database className="h-4 w-4 text-primary" />
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
            Our analytics platform serves healthcare, finance, insurance, and
            logistics industries. Each deployment is tailored to the data
            compliance requirements, reporting needs, and operational workflows
            of the specific industry.
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
