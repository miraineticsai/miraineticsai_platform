"use client";

import { motion } from "motion/react";
import { Bot, Code2, Workflow, Database } from "lucide-react";
import { Badge } from "./ui/badge";

const techCategories = [
  {
    title: "AI & ML Systems",
    icon: Bot,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    items: [
      { label: "LLM Integrations", tier: "core" },
      { label: "RAG Pipelines", tier: "core" },
      { label: "AI Agents & Tool Calling", tier: "core" },
      { label: "Vector Search", tier: "infra" },
      { label: "AI APIs & Evals", tier: "ops" },
    ],
  },
  {
    title: "Web & Mobile Development",
    icon: Code2,
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    items: [
      { label: "Next.js & React", tier: "core" },
      { label: "React Native & Expo", tier: "core" },
      { label: "TypeScript", tier: "core" },
      { label: "Node.js & Python APIs", tier: "infra" },
      { label: "iOS & Android", tier: "ops" },
    ],
  },
  {
    title: "Workflow Automation",
    icon: Workflow,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    items: [
      { label: "Workflow Orchestration", tier: "core" },
      { label: "Custom Webhooks", tier: "core" },
      { label: "API Integrations", tier: "infra" },
      { label: "Cron & Scheduled Tasks", tier: "infra" },
      { label: "Event-Driven Logic", tier: "ops" },
    ],
  },
  {
    title: "Cloud & Data Infrastructure",
    icon: Database,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    items: [
      { label: "AWS Cloud Services", tier: "core" },
      { label: "PostgreSQL", tier: "core" },
      { label: "DynamoDB", tier: "infra" },
      { label: "Vector DBs (Pinecone/Qdrant)", tier: "infra" },
      { label: "Docker Containers", tier: "ops" },
    ],
  },
];

const tierColors: Record<string, string> = {
  core:  "bg-primary/10 text-primary border-primary/20",
  infra: "bg-secondary text-muted-foreground border-border/60",
  ops:   "bg-secondary/60 text-muted-foreground/80 border-border/40",
};

export default function Technology() {
  return (
    <section id="technology" className="py-20 lg:py-28 border-b border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <Badge variant="default" className="mb-4">Tech Stack</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            Technologies We Master &amp; Build With
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            We build with proven, modern technologies across web, mobile, AI engineering, and cloud
            data platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                className="bg-card border border-border/70 hover:border-primary/30 rounded-2xl p-6 flex flex-col transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5 cursor-default"
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${cat.iconBg} border flex items-center justify-center mb-4`}>
                  <Icon className={`h-5 w-5 ${cat.iconColor}`} aria-hidden="true" />
                </div>

                <h3 className="text-base font-bold text-foreground mb-4">{cat.title}</h3>

                {/* Tech items as badges/pills */}
                <div className="flex flex-wrap gap-1.5" role="list">
                  {cat.items.map((item, i) => (
                    <span
                      key={i}
                      role="listitem"
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-lg border ${tierColors[item.tier]} transition-colors`}
                    >
                      {item.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
