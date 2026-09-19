"use client";

import { motion } from "motion/react";
import { Search, Compass, Code, Layers, LineChart } from "lucide-react";
import { Badge } from "./ui/badge";

export default function HowWeWork() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      icon: Search,
      description: "Understand the business problem, current manual bottlenecks, data inputs, and expected outcomes.",
    },
    {
      num: "02",
      title: "Design",
      icon: Compass,
      description: "Design the product UX, AI architecture, prompt schemas, and API automation workflows.",
    },
    {
      num: "03",
      title: "Build",
      icon: Code,
      description: "Develop AI models/APIs, frontend UI, backend services, vector search indexes, and workflow orchestration.",
    },
    {
      num: "04",
      title: "Integrate",
      icon: Layers,
      description: "Connect business tools, CRMs, WhatsApp, Slack, webhooks, and legacy databases securely.",
    },
    {
      num: "05",
      title: "Launch & Improve",
      icon: LineChart,
      description: "Deploy to production, monitor execution logs, optimize prompt latency, and refine workflow steps.",
    },
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
            Structured Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            A practical 5-step engineering methodology to take your AI product concept or business automation from plan to production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card border border-border hover:border-primary/50 rounded-xl p-6 flex flex-col justify-between transition-colors shadow-sm cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                      {step.num}
                    </span>
                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
