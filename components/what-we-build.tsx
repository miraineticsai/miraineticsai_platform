"use client";

import { motion } from "motion/react";
import { AppWindow, Cpu, Workflow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export default function WhatWeBuild() {
  const pillars = [
    {
      id: "ai-products",
      icon: AppWindow,
      title: "AI Products & Mobile Apps",
      badge: "User Experience & Mobile",
      description: "AI-powered web applications and mobile apps designed around real business use cases.",
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

  return (
    <section id="what-we-build" className="py-20 lg:py-28 border-b border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="default" className="mb-4">
            Core Pillars
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            What We Build
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            We combine AI Engineering, Web & Mobile Product Development, and Workflow Automation to deliver practical systems that drive business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group h-full shadow-lg">
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline">{pillar.badge}</Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {pillar.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-0 flex-grow flex flex-col justify-between">
                    <ul className="space-y-2.5 my-4 border-t border-border pt-4 text-xs sm:text-sm text-foreground/90">
                      {pillar.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
