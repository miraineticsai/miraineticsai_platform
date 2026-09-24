"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Badge } from "./ui/badge";

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 border-b border-border bg-card/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge variant="default" className="mb-4">Common Questions</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Everything you need to know about our AI product engineering and automation capabilities.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-2"
          role="list"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              role="listitem"
            >
              <div
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  openIndex === idx
                    ? "border-primary/40 bg-card shadow-sm shadow-primary/5"
                    : "border-border/60 bg-card/50 hover:border-border hover:bg-card"
                }`}
              >
                <button
                  id={`faq-btn-${idx}`}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${idx}`}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 gap-4 group"
                >
                  <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="shrink-0"
                    aria-hidden="true"
                  >
                    <ChevronDown className={`h-4 w-4 transition-colors ${openIndex === idx ? "text-primary" : "text-muted-foreground"}`} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === idx && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-border/40">
                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
