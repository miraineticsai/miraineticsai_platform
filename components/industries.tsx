"use client";

import { motion } from "motion/react";
import {
  Stethoscope,
  Banknote,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Factory,
  Globe,
  Headphones,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Industry {
  name: string;
  icon: LucideIcon;
  color: string;
  bgHover: string;
}

const industries: Industry[] = [
  { name: "Healthcare", icon: Stethoscope, color: "text-blue-400", bgHover: "group-hover:bg-blue-500/10" },
  { name: "Finance", icon: Banknote, color: "text-green-400", bgHover: "group-hover:bg-green-500/10" },
  { name: "Insurance", icon: ShieldCheck, color: "text-purple-400", bgHover: "group-hover:bg-purple-500/10" },
  { name: "Retail", icon: ShoppingBag, color: "text-orange-400", bgHover: "group-hover:bg-orange-500/10" },
  { name: "Logistics", icon: Truck, color: "text-cyan-400", bgHover: "group-hover:bg-cyan-500/10" },
  { name: "Manufacturing", icon: Factory, color: "text-red-400", bgHover: "group-hover:bg-red-500/10" },
  { name: "Enterprise SaaS", icon: Globe, color: "text-indigo-400", bgHover: "group-hover:bg-indigo-500/10" },
  { name: "Customer Ops", icon: Headphones, color: "text-pink-400", bgHover: "group-hover:bg-pink-500/10" },
];

export default function Industries() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight"
          >
            Built for Every Industry
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our solutions are domain-agnostic, designed to tackle complexity across diverse enterprise sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                className={`glass glass-hover p-6 rounded-2xl flex flex-col items-center justify-center text-center group cursor-default ${industry.bgHover} transition-colors`}
              >
                <div className={`mb-4 p-4 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform duration-300 ${industry.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-medium text-white text-sm">{industry.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
