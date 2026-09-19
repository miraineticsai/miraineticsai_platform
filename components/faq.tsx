"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Accordion, AccordionItem } from "./ui/accordion";
import { Badge } from "./ui/badge";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
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

  return (
    <section id="faq" className="py-20 lg:py-28 border-b border-border bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="default" className="mb-4">
            Common Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Everything you need to know about our AI product engineering and automation capabilities.
          </p>
        </motion.div>

        <Accordion>
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              title={faq.q}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {faq.a}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
