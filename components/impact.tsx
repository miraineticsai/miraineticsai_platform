"use client";

import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, Zap, ShieldAlert } from "lucide-react";

const metrics = [
  {
    label: "Reduction in cost to collect",
    value: "50%",
    icon: <TrendingDown className="h-6 w-6 text-primary" />,
    description: "Significant overhead reduction through intelligent automation.",
  },
  {
    label: "Increase in bottom line revenue",
    value: "25%",
    icon: <TrendingUp className="h-6 w-6 text-secondary" />,
    description: "Optimized collection flows and revenue cycle management.",
  },
  {
    label: "Increase in daily payments",
    value: "25%",
    icon: <Zap className="h-6 w-6 text-primary" />,
    description: "Faster processing times and seamless payment integrations.",
  },
  {
    label: "Decrease in bad debt write-offs",
    value: "20%",
    icon: <ShieldAlert className="h-6 w-6 text-secondary" />,
    description: "AI-driven predictive analytics for risk mitigation.",
  },
];

export default function Impact() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Our Impact
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering measurable operational efficiency and financial growth through domain-agnostic AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="mb-6 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                {metric.icon}
              </div>
              <p className="text-4xl font-display font-bold text-white mb-2">{metric.value}</p>
              <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
                {metric.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
