"use client";

import { motion } from "motion/react";
import { Lightbulb, Layout, Cpu, Server, Bot, Workflow, Layers, Rocket } from "lucide-react";
import { Badge } from "./ui/badge";

export default function ProductPipeline() {
  const steps = [
    { name: "Idea", icon: Lightbulb, desc: "Clarify objective & user intent" },
    { name: "Product Design", icon: Layout, desc: "UI/UX & feature scope" },
    { name: "AI Architecture", icon: Cpu, desc: "Model choice, RAG & vector design" },
    { name: "Backend", icon: Server, desc: "Node/Python microservices & DB" },
    { name: "AI / LLM", icon: Bot, desc: "Prompts, tools & evaluation" },
    { name: "Automation", icon: Workflow, desc: "API & event orchestration" },
    { name: "Integration", icon: Layers, desc: "Connect CRMs, APIs & software" },
    { name: "Production", icon: Rocket, desc: "Deploy, monitor & scale" },
  ];

  return (
    <section className="py-20 lg:py-28 border-b border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="default" className="mb-4">
            End-to-End Delivery
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            From AI Idea to Working Product
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            We take raw concepts or manual operations and transform them into robust, production-ready AI software and automated business systems.
          </p>
        </motion.div>

        {/* Pipeline Steps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card border border-border hover:border-primary/50 rounded-xl p-4 flex flex-col items-center text-center transition-colors group cursor-default shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase font-bold mb-1">
                  Step 0{idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-bold text-foreground mb-1 leading-tight">
                  {step.name}
                </span>
                <span className="text-[11px] text-muted-foreground leading-snug">
                  {step.desc}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
