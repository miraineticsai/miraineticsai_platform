"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Bot, Share2, UserCheck, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";

interface DemoProject {
  id: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  borderGlow: string;
  title: string;
  subtitle: string;
  badge: string;
  image?: string | null;
  architecture: string;
  description: string;
  features: string[];
  tags: string[];
}

const demos: DemoProject[] = [
  {
    id: "demo-support",
    icon: Bot,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    borderGlow: "hover:border-blue-500/30",
    title: "AI Customer Support Assistant",
    subtitle: "Omnichannel customer resolution with RAG knowledge retrieval",
    badge: "Demo Project",
    image: "/Customer_Support.jpg",
    architecture: "Website / WhatsApp → AI Agent → Knowledge Base → RAG → Human Escalation",
    description:
      "Sample implementation of a multi-channel support assistant that uses vector embeddings to answer technical customer inquiries accurately and hand off unresolved edge cases to human agents.",
    features: [
      "Vector document indexing for product catalogs & FAQs",
      "Deterministic escalation rules for complex billing issues",
      "Unified chat widget + WhatsApp Cloud API gateway",
    ],
    tags: ["RAG", "WhatsApp API", "Vector Search", "Human-in-loop"],
  },
  {
    id: "demo-social",
    icon: Share2,
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    borderGlow: "hover:border-indigo-500/30",
    title: "Social Media Automation System",
    subtitle: "Automated content pipeline with human-in-the-loop review",
    badge: "Demo Project",
    image: "/Social_Media_Automation.jpg",
    architecture: "Content Topic → AI Research → Post Generation → Approval → Publishing",
    description:
      "Sample project demonstrating an end-to-end automated social media engine that drafts platform-adapted posts, presents approval buttons in Slack, and publishes on schedule.",
    features: [
      "RSS and topic web scraping for trending industry news",
      "Slack webhook integration for one-click approval",
      "Automated queue worker with token refresh for social APIs",
    ],
    tags: ["LLM", "Slack Webhook", "Social APIs", "Queue Worker"],
  },
  {
    id: "demo-lead",
    icon: UserCheck,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    borderGlow: "hover:border-emerald-500/30",
    title: "AI Lead Qualification System",
    subtitle: "Instant lead scoring, CRM enrichment, and follow-up routing",
    badge: "Demo Project",
    image: null,
    architecture: "Inbound Form → AI Scoring → CRM Sync → Slack Alert → Email Follow-up",
    description:
      "Demonstration of an intelligent lead processing engine that parses contact form submissions, evaluates buyer fit using structured output, updates CRM contacts, and dispatches personalized emails.",
    features: [
      "Structured JSON schema extraction from open text inquiries",
      "Instant Slack notification with lead intent score",
      "Resend email dispatch tailored to visitor industry",
    ],
    tags: ["Structured Output", "CRM Sync", "Slack", "Resend Email"],
  },
  {
    id: "demo-knowledge",
    icon: BookOpen,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    borderGlow: "hover:border-purple-500/30",
    title: "Internal AI Knowledge Assistant",
    subtitle: "Secure enterprise document search for internal company teams",
    badge: "Demo Project",
    image: "/Internal_Knowledge_AI.jpg",
    architecture: "Company Docs → Text Chunking → Embeddings → Vector DB → RAG Query",
    description:
      "Sample knowledge-base search app enabling internal employees to securely query internal policies, technical documentation, and project archives in plain natural language.",
    features: [
      "PDF, Markdown, and Google Docs document ingestion pipeline",
      "Hybrid keyword + semantic vector search for high precision",
      "Strict role-based document access controls",
    ],
    tags: ["Hybrid RAG", "Vector DB", "RBAC", "Document Ingestion"],
  },
];

export default function DemoProjects() {
  return (
    <section id="demo-projects" className="py-20 lg:py-28 border-b border-border bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <Badge variant="demo" className="mb-4">Capabilities Showcase</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            What We&apos;ve Built
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Explore technical demo projects and sample implementations showing how we architect
            AI products and automation systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {demos.map((demo, idx) => {
            const Icon = demo.icon;
            return (
              <motion.article
                key={demo.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                className={`group bg-card border border-border/70 ${demo.borderGlow} rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/5 transition-all duration-300`}
              >
                {/* Visual Preview Header */}
                {demo.image ? (
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden border-b border-border/60 bg-muted/20">
                    <Image
                      src={demo.image}
                      alt={demo.title}
                      width={1344}
                      height={768}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden border-b border-border/60 bg-secondary/30 p-5 font-mono text-[11px] flex flex-col justify-center">
                    <div className="bg-card/90 rounded-xl p-4 border border-border/60 shadow-sm space-y-2.5">
                      <div className="flex items-center justify-between text-[10px] text-muted-foreground pb-1.5 border-b border-border/40">
                        <span className="text-emerald-500 font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          LIVE INFERENCE
                        </span>
                        <span>schema: structured-v2</span>
                      </div>
                      <div className="text-foreground font-semibold text-xs">{`"lead_intent": "Enterprise CRM Automation"`}</div>
                      <div className="flex items-center gap-2.5 text-[10px]">
                        <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">Fit Score: 96/100</span>
                        <span className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">Auto-Enriched</span>
                      </div>
                      <div className="text-muted-foreground text-[10px]">{`"dispatch": "Slack #leads-vip + Resend trigger"`}</div>
                    </div>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl ${demo.iconBg} border flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 ${demo.iconColor}`} aria-hidden="true" />
                    </div>
                    <Badge variant="demo">{demo.badge}</Badge>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1">{demo.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium mb-4">{demo.subtitle}</p>

                  {/* Architecture flow */}
                  <div className="bg-secondary/50 border border-border/50 rounded-lg p-3 text-xs font-mono text-foreground/80 mb-4 flex items-start gap-2">
                    <Layers className={`h-3.5 w-3.5 ${demo.iconColor} shrink-0 mt-0.5`} aria-hidden="true" />
                    <span className="leading-relaxed">{demo.architecture}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {demo.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2 text-xs text-foreground/85 mb-4" role="list">
                    {demo.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className={`h-3.5 w-3.5 ${demo.iconColor} shrink-0 mt-0.5`} aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40 mt-auto">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-secondary/70 border border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
