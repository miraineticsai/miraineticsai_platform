"use client";

import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { ShieldCheck, CheckCircle2, Code2, MessageCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 border-b border-border bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <Badge variant="default" className="mb-4">Our Studio &amp; Team</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            Practical AI Products. Real Business Automation.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Mirainetics is a technical studio founded by an AI Product Engineer and an AI Engineer. We build
            functional AI products and automate business operations using modern software, APIs, and custom AI architecture.
          </p>
        </motion.div>

        {/* Core cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 mb-10">
          {/* Founding Team card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border/70 hover:border-blue-500/30 rounded-2xl p-7 space-y-5 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <ShieldCheck className="h-4.5 w-4.5 text-blue-400" aria-hidden="true" />
              </div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                Founding Team
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground">Engineers First, Not Consultants</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We don&apos;t just consult or talk about AI in the abstract. Our team brings hands-on experience designing
              user interfaces, training &amp; evaluating LLM prompts, building vector search pipelines, and crafting
              complex automation flows.
            </p>
            <ul className="space-y-3 pt-2" role="list">
              {[
                {
                  label: "AI Product Engineer",
                  desc: "Focuses on UI/UX, product design, Next.js frontend, and end-user AI interaction patterns.",
                },
                {
                  label: "AI Engineer",
                  desc: "Focuses on LLM backend services, RAG vector pipelines, Python microservices, and tool calling.",
                },
                {
                  label: "Workflow Automation Mastery",
                  desc: "Expert orchestration linking APIs, webhooks, CRMs, and custom scripts seamlessly.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">{item.label}:</strong>{" "}
                    <span className="text-muted-foreground">{item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Philosophy card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border/70 hover:border-indigo-500/30 rounded-2xl p-7 flex flex-col transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/5"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <Code2 className="h-4.5 w-4.5 text-indigo-400" aria-hidden="true" />
              </div>
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                Operational Philosophy
              </span>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-4">
              Honest Capabilities &amp; Demo Transparency
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
              We believe in technical transparency. We never invent fake clients, fake revenue stats, or dummy testimonials.
              Instead, we demonstrate exactly what we can build through production-grade demo implementations and sample
              projects.
            </p>

            <div className="bg-secondary/50 border border-border/50 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-indigo-400" aria-hidden="true" />
                <span className="text-xs font-bold text-foreground">Our Commitment</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                When you work with Mirainetics, you communicate directly with the engineers building your system —
                no account managers, no handoffs.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Direct Access", "Technical Clarity", "No Fluff"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
