"use client";

import { motion } from "motion/react";
import { Bot, Share2, UserCheck, BookOpen, Layers, CheckCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function DemoProjects() {
  const demos = [
    {
      id: "demo-support",
      icon: Bot,
      title: "AI Customer Support Assistant",
      subtitle: "Omnichannel customer resolution with RAG knowledge retrieval",
      badge: "Demo Project",
      architecture: "Website / WhatsApp → AI Agent → Knowledge Base → RAG → Human Escalation",
      description: "Sample implementation of a multi-channel support assistant that uses vector embeddings to answer technical customer inquiries accurately and hand off unresolved edge cases to human agents.",
      features: [
        "Vector document indexing for product catalogs & FAQs",
        "Deterministic escalation rules for complex billing issues",
        "Unified chat widget + WhatsApp Cloud API gateway",
      ],
    },
    {
      id: "demo-social",
      icon: Share2,
      title: "Social Media Automation System",
      subtitle: "Automated content pipeline with human-in-the-loop review",
      badge: "Demo Project",
      architecture: "Content Topic → AI Research → Post Generation → Approval → Publishing",
      description: "Sample project demonstrating an end-to-end automated social media engine that drafts platform-adapted posts, presents approval buttons in Slack, and publishes on schedule.",
      features: [
        "RSS and topic web scraping for trending industry news",
        "Slack webhook integration for one-click approval",
        "Automated queue worker with token refresh for social APIs",
      ],
    },
    {
      id: "demo-lead",
      icon: UserCheck,
      title: "AI Lead Qualification System",
      subtitle: "Instant lead scoring, CRM enrichment, and follow-up routing",
      badge: "Demo Project",
      architecture: "Inbound Form → AI Scoring → CRM Sync → Slack Alert → Email Follow-up",
      description: "Demonstration of an intelligent lead processing engine that parses contact form submissions, evaluates buyer fit using structured output, updates CRM contacts, and dispatches personalized emails.",
      features: [
        "Structured JSON schema extraction from open text inquiries",
        "Instant Slack notification with lead intent score",
        "Resend email dispatch tailored to visitor industry",
      ],
    },
    {
      id: "demo-knowledge",
      icon: BookOpen,
      title: "Internal AI Knowledge Assistant",
      subtitle: "Secure enterprise document search for internal company teams",
      badge: "Demo Project",
      architecture: "Company Docs → Text Chunking → Embeddings → Vector DB → RAG Query",
      description: "Sample knowledge-base search app enabling internal employees to securely query internal policies, technical documentation, and project archives in plain natural language.",
      features: [
        "PDF, Markdown, and Google Docs document ingestion pipeline",
        "Hybrid keyword + semantic vector search for high precision",
        "Strict role-based document access controls",
      ],
    },
  ];

  return (
    <section id="demo-projects" className="py-20 lg:py-28 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="demo" className="mb-4">
            Capabilities Showcase
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            What We&apos;ve Built
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Explore technical demo projects and sample implementations showing how we architect AI products and automation systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {demos.map((demo, idx) => {
            const Icon = demo.icon;
            return (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 flex flex-col justify-between h-full shadow-lg">
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="demo">{demo.badge}</Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {demo.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground font-medium">
                      {demo.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Architecture flow box */}
                      <div className="bg-secondary/60 border border-border rounded-lg p-3 text-xs font-mono text-foreground mb-4 flex items-center gap-2">
                        <Layers className="h-4 w-4 text-primary shrink-0" />
                        <span className="truncate">{demo.architecture}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                        {demo.description}
                      </p>

                      <ul className="space-y-2 text-xs text-foreground/90">
                        {demo.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
