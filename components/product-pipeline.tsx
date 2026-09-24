"use client";

import { motion } from "motion/react";
import { Lightbulb, Layout, Cpu, Server, Bot, Workflow, Layers, Rocket } from "lucide-react";
import { Badge } from "./ui/badge";

const steps = [
  { name: "Idea", icon: Lightbulb, desc: "Clarify objective & user intent", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  { name: "Product Design", icon: Layout, desc: "UI/UX & feature scope", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { name: "AI Architecture", icon: Cpu, desc: "Model choice, RAG & vector design", color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
  { name: "Backend", icon: Server, desc: "Node/Python microservices & DB", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
  { name: "AI / LLM", icon: Bot, desc: "Prompts, tools & evaluation", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
  { name: "Automation", icon: Workflow, desc: "API & event orchestration", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { name: "Integration", icon: Layers, desc: "Connect CRMs, APIs & software", color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20" },
  { name: "Production", icon: Rocket, desc: "Deploy, monitor & scale", color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
];

export default function ProductPipeline() {
  return (
    <section className="py-20 lg:py-28 border-b border-border bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <Badge variant="default" className="mb-4">End-to-End Delivery</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            From AI Idea to Working Product
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            We take raw concepts or manual operations and transform them into robust,
            production-ready AI software and automated business systems.
          </p>
        </motion.div>

        {/* Pipeline steps */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                className="group relative"
              >
                <div className={`${step.bg} border rounded-xl p-4 flex flex-col items-center text-center cursor-default h-full hover:shadow-md transition-all duration-200`}>
                  <div className="w-10 h-10 rounded-xl bg-background/70 border border-border/50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <Icon className={`h-4.5 w-4.5 ${step.color}`} aria-hidden="true" />
                  </div>
                  <span className="text-[9px] font-mono text-muted-foreground/60 uppercase font-bold mb-1 tracking-wider">
                    Step {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-bold text-foreground mb-1.5 leading-tight">{step.name}</span>
                  <span className="text-[10px] text-muted-foreground leading-snug">{step.desc}</span>
                </div>

                {/* Connector */}
                {idx < steps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute -right-1.5 top-1/2 -translate-y-1/2 z-10"
                    aria-hidden="true"
                  >
                    <div className="w-3 h-px bg-border/60" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Progress bar visual */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="mt-8 hidden lg:block h-0.5 bg-gradient-to-r from-amber-500/40 via-indigo-500/40 via-violet-500/40 to-orange-500/40 rounded-full origin-left"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
