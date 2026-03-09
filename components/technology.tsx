"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Database, BarChart3, Zap, Layers } from "lucide-react";

const technologies = [
  {
    title: "Advanced Automation",
    description: "MiraiNeticsAI leverages cutting-edge AI systems and robotic process automation to eliminate manual workflows and increase operational efficiency.",
    icon: <Cpu className="h-6 w-6 text-primary" />,
    features: ["Intelligent Extraction", "Process Optimization", "Scalable Infrastructure"],
  },
  {
    title: "Revenue Cycle Management",
    description: "We optimize operational workflows by automating complex revenue processes, improving resource utilization, and reducing overhead.",
    icon: <BarChart3 className="h-6 w-6 text-secondary" />,
    features: ["Automated Reconciliation", "Denial Management", "Resource Optimization"],
  },
  {
    title: "Data Analytics & Integration",
    description: "We connect fragmented systems and transform data into actionable intelligence using proprietary integration technologies.",
    icon: <Database className="h-6 w-6 text-primary" />,
    features: ["Actionable Insights", "Proprietary Connectors", "Unified Dashboard"],
  },
];

export default function Technology() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              The Architecture of <br />
              <span className="text-primary">Next-Gen Intelligence</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg mb-8">
              Through advanced automation and powerful analytics, organizations gain scalability, cost efficiency, and intelligent reporting that outpaces traditional manual systems.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Cloud-Native</span>
              </div>
              <div className="flex items-center space-x-3">
                <Layers className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Modular API</span>
              </div>
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Predictive Insights</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10" />
            <div className="glass p-8 rounded-2xl border-white/10 relative overflow-hidden">
                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                        <div className="flex items-center space-x-4">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-sm font-medium">Automation Engine Active</span>
                        </div>
                        <span className="text-xs text-muted-foreground">99.9% Uptime</span>
                    </div>
                    <div className="h-40 bg-white/5 rounded-xl flex items-end p-4 space-x-2">
                        {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ delay: i * 0.05 }}
                                className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm"
                            />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                            <p className="text-xs text-muted-foreground mb-1">Checks / Min</p>
                            <p className="text-2xl font-display font-bold text-primary">300+</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                            <p className="text-xs text-muted-foreground mb-1">Accuracy</p>
                            <p className="text-2xl font-display font-bold text-secondary">98%</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col h-full border-white/10 hover:border-primary/30 transition-all group"
            >
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl group-hover:bg-primary/20 transition-colors">
                {tech.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-white uppercase tracking-tight">
                {tech.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                {tech.description}
              </p>
              <ul className="space-y-2">
                {tech.features.map(feature => (
                  <li key={feature} className="text-xs flex items-center text-foreground/80">
                    <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
