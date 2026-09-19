"use client";

import { motion } from "motion/react";
import { Cpu, Workflow, Target, Layers } from "lucide-react";
import { Badge } from "./ui/badge";

export default function WhyMirainetics() {
  const strengths = [
    {
      title: "AI + Product Engineering",
      icon: Cpu,
      description: "We understand both the backend AI algorithms and the end-user product UX required to make AI intuitive and functional.",
    },
    {
      title: "Automation + Custom Code",
      icon: Workflow,
      description: "We combine workflow orchestration and API automation tools with custom TypeScript/Python engineering when default tools fall short.",
    },
    {
      title: "Practical AI Focus",
      icon: Target,
      description: "We focus exclusively on high-utility business applications that eliminate manual labor — no fluff, gimmicks, or technology for its own sake.",
    },
    {
      title: "End-to-End Execution",
      icon: Layers,
      description: "From initial architecture and prototype design to backend integration, database setup, and production deployment — we build the full stack.",
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
            Our Advantage
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            Why Mirainetics
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Founded by product engineers who combine AI engineering with real-world workflow automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card border border-border hover:border-primary/50 rounded-xl p-6 flex flex-col justify-between transition-colors shadow-sm cursor-default"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
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
