import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import WhatWeBuild from "@/components/what-we-build";
import AutomationShowcase from "@/components/automation-showcase";
import ProductPipeline from "@/components/product-pipeline";
import DemoProjects from "@/components/demo-projects";
import Technology from "@/components/technology";
import AboutSection from "@/components/about-section";
import HowWeWork from "@/components/how-we-work";
import WhyMirainetics from "@/components/why-mirainetics";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://mirainetics.com",
  },
};

const homeFaqs = [
  {
    q: "What kind of AI products can you build?",
    a: "We build custom AI assistants, agentic workflows, RAG knowledge-base tools, document processing applications, AI customer support systems, and internal operational dashboards powered by custom LLM integrations.",
  },
  {
    q: "What business processes can you automate?",
    a: "We automate repetitive business workflows including lead qualification, customer support routing, social media generation & scheduling, Slack/WhatsApp bot queries, data synchronization across tools, and multi-step reporting.",
  },
  {
    q: "Can you build WhatsApp bots?",
    a: "Yes. We build intelligent WhatsApp bots using the official WhatsApp Cloud API, connecting conversational AI with your CRM, inventory databases, and human escalation channels.",
  },
  {
    q: "Can you automate social media?",
    a: "Yes. We create automated social media workflows that discover content ideas, generate platform-tailored post drafts, present human review buttons in Slack, and publish automatically via official APIs.",
  },
  {
    q: "Can you build Slack or Telegram bots?",
    a: "Yes. We build custom Slack and Telegram bots that enable internal teams or customers to trigger database actions, query internal documentation, and receive automated system alerts directly inside chat.",
  },
  {
    q: "How do you build business automations?",
    a: "We combine workflow orchestration engines, API gateways, custom Python/TypeScript microservices, and AI models depending on your security and scale needs.",
  },
  {
    q: "Can you integrate with our existing software?",
    a: "Yes. We integrate with your existing CRMs (HubSpot, Salesforce, Zoho), databases (PostgreSQL, MongoDB, DynamoDB), webhooks, and REST/GraphQL APIs without disrupting your current operations.",
  },
  {
    q: "Can you build custom AI agents?",
    a: "Yes. We design autonomous and semi-autonomous AI agents equipped with tool-calling capabilities, structured data outputs, and deterministic guardrails for specific business tasks.",
  },
  {
    q: "Can you build RAG applications?",
    a: "Yes. We build Retrieval-Augmented Generation (RAG) systems that connect LLMs securely to your company's internal PDFs, policy documents, codebases, and databases using vector search.",
  },
  {
    q: "How does a project start?",
    a: "Every project starts with an initial discovery discussion where we evaluate your goals, review existing manual bottlenecks or product ideas, and recommend a clear technical scope and architecture plan.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(homeFaqs)),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <section id="solutions">
          <WhatWeBuild />
        </section>
        <section id="automation">
          <AutomationShowcase />
        </section>
        <ProductPipeline />
        <section id="demo-projects">
          <DemoProjects />
        </section>
        <section id="technology">
          <Technology />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="process">
          <HowWeWork />
        </section>
        <WhyMirainetics />
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <CTA />
        </section>
      </main>
      <Footer />
    </div>
  );
}
