"use client";

import { motion } from "motion/react";
import { AppWindow, Cpu, Workflow, CheckCircle2 } from "lucide-react";

// Per brand guide:
// AI → Purple #9950FF  |  Software → Blue #4D70FF  |  Automation → Cyan #16B8D4
const pillars = [
  {
    id: "ai-products",
    icon: AppWindow,
    title: "AI Products & Mobile Apps",
    badge: "User Experience & Mobile",
    description: "AI-powered web applications and mobile apps designed around real business use cases.",
    sectionBg: "#FAF7FF",        // soft purple — AI section
    accentColor: "#9950FF",
    accentBg: "rgba(153,80,255,0.08)",
    accentBorder: "rgba(153,80,255,0.2)",
    badgeBg: "#F0E7FF",
    badgeText: "#7B3FE4",
    items: [
      "iOS & Android AI Mobile Apps",
      "AI Assistants & Agents",
      "RAG Knowledge-Base Apps",
      "AI Customer Support Portals",
      "AI Document Processing Systems",
      "Internal Business Dashboards",
    ],
  },
  {
    id: "ai-engineering",
    icon: Cpu,
    title: "AI Engineering",
    badge: "Backend & Systems",
    description: "Production-ready AI systems integrated into web and mobile applications.",
    sectionBg: "#F5F7FF",        // soft blue — software section
    accentColor: "#4D70FF",
    accentBg: "rgba(77,112,255,0.08)",
    accentBorder: "rgba(77,112,255,0.2)",
    badgeBg: "#E8EDFF",
    badgeText: "#3456D3",
    items: [
      "LLM Integrations & APIs",
      "Vector Search & Hybrid RAG",
      "Tool Calling & Agentic Logic",
      "Structured Data Output Schemas",
      "Mobile AI SDKs & Backend Services",
      "Prompt Engineering & Evals",
    ],
  },
  {
    id: "business-automation",
    icon: Workflow,
    title: "Business Automation",
    badge: "Operations & Workflows",
    description: "Automate repetitive operations using AI, APIs, software integrations, and custom workflows.",
    sectionBg: "#F2FCFE",        // soft cyan — automation section
    accentColor: "#16B8D4",
    accentBg: "rgba(22,184,212,0.08)",
    accentBorder: "rgba(22,184,212,0.2)",
    badgeBg: "#DDF8FC",
    badgeText: "#087F94",
    items: [
      "Social Media & Content Workflows",
      "WhatsApp, Slack & Telegram Bots",
      "CRM & Email Automation Pipelines",
      "Lead Qualification & Routing",
      "Scheduled Data Sync & Reporting",
      "Multi-Step Approval Workflows",
    ],
  },
];

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="py-20 lg:py-28 border-b border-[#E5E8F0] dark:border-white/10 bg-[#F7F8FC] dark:bg-[#0c1024]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          {/* Section badge */}
          <div
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 border"
            style={{ background: "rgba(153,80,255,0.08)", borderColor: "rgba(153,80,255,0.25)", color: "#9950FF" }}
          >
            Core Pillars
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 text-[#151A2E] dark:text-white">
            What We Build
          </h2>
          <p className="text-[#4F5870] dark:text-[#AAB1C5] text-base sm:text-lg leading-relaxed">
            We combine AI Engineering, Web &amp; Mobile Product Development, and Workflow Automation
            to deliver practical systems that drive real business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <article
                  className="relative h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl bg-white dark:bg-[#191F3D] border-[#E5E8F0] dark:border-white/10"
                  style={{
                    boxShadow: "0 8px 30px rgba(21,26,46,0.06)",
                  }}
                >
                  {/* Top color stripe */}
                  <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${pillar.accentColor}, transparent)` }} />

                  <div className="p-6">
                    {/* Header row */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-11 h-11 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: pillar.accentBg, borderColor: pillar.accentBorder }}
                      >
                        <Icon className="h-5 w-5" style={{ color: pillar.accentColor }} aria-hidden="true" />
                      </div>
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                        style={{ background: pillar.badgeBg, color: pillar.badgeText }}
                      >
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#151A2E] dark:text-white mb-2">{pillar.title}</h3>
                    <p className="text-sm text-[#4F5870] dark:text-[#AAB1C5] leading-relaxed mb-5">{pillar.description}</p>

                    <div className="h-px w-full mb-5 bg-[#E5E8F0] dark:bg-white/10" />

                    <ul className="space-y-2.5" role="list">
                      {pillar.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#151A2E] dark:text-[#E9ECF7]">
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: pillar.accentColor }} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
