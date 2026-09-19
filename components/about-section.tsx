"use client";

import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 border-b border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="default" className="mb-4">
            Our Studio & Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            Practical AI Products. Real Business Automation.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Mirainetics is a technical studio founded by an AI Product Engineer and an AI Engineer. We build functional AI products and automate business operations using modern software, APIs, and custom AI architecture.
          </p>
        </motion.div>

        {/* Founders & Core DNA Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-8 space-y-6 shadow-lg"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-md">
              <ShieldCheck className="h-4 w-4" />
              FOUNDING TEAM
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Engineers First, Not Consultants
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We don&apos;t just consult or talk about AI in the abstract. Our team brings hands-on experience designing user interfaces, training & evaluating LLM prompts, building vector search pipelines, and crafting complex automation flows.
            </p>
            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-foreground">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>AI Product Engineer:</strong> Focuses on UI/UX, product design, Next.js frontend, and end-user AI interaction patterns.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>AI Engineer:</strong> Focuses on LLM backend services, RAG vector pipelines, Python microservices, and tool calling.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Workflow Automation Mastery:</strong> Expert orchestration linking APIs, webhooks, CRMs, and custom scripts seamlessly.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 space-y-6 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-md mb-4">
                OPERATIONAL PHILOSOPHY
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Honest Capabilities & Demo Transparency
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                We believe in technical transparency. We never invent fake clients, fake revenue stats, or dummy testimonials. Instead, we demonstrate exactly what we can build through production-grade demo implementations and sample projects.
              </p>
            </div>

            <div className="bg-secondary/70 border border-border rounded-xl p-4 space-y-2">
              <span className="text-xs font-bold text-foreground block">Our Commitment:</span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                When you work with Mirainetics, you communicate directly with the engineers building your system.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
