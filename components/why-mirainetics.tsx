"use client";

import { motion } from "motion/react";
import { Cpu, Workflow, Target, Layers } from "lucide-react";
import { Badge } from "./ui/badge";

const strengths = [
  {
    title: "AI + Product Engineering",
    icon: Cpu,
    description: "We understand both the backend AI algorithms and the end-user product UX required to make AI intuitive and functional.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    title: "Automation + Custom Code",
    icon: Workflow,
    description: "We combine workflow orchestration and API automation tools with custom TypeScript/Python engineering when default tools fall short.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    gradient: "from-indigo-500/10 to-transparent",
  },
  {
    title: "Practical AI Focus",
    icon: Target,
    description: "We focus exclusively on high-utility business applications that eliminate manual labor — no fluff, gimmicks, or technology for its own sake.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    gradient: "from-emerald-500/10 to-transparent",
  },
  {
    title: "End-to-End Execution",
    icon: Layers,
    description: "From initial architecture and prototype design to backend integration, database setup, and production deployment — we build the full stack.",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    gradient: "from-purple-500/10 to-transparent",
  },
];

export default function WhyMirainetics() {
  return (
    <section className="py-20 lg:py-28 border-b border-border bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <Badge variant="default" className="mb-4">Our Advantage</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            Why Mirainetics
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Founded by product engineers who combine AI engineering with real-world workflow automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {strengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.09 }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                className="group"
              >
                <div className="bg-card border border-border/70 hover:border-primary/30 rounded-2xl p-6 h-full cursor-default transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5 overflow-hidden relative">
                  {/* Subtle gradient corner */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.gradient} rounded-bl-full pointer-events-none`} aria-hidden="true" />

                  <div className={`w-11 h-11 rounded-xl ${item.bg} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`h-5 w-5 ${item.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
