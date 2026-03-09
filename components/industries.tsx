"use client";

import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Banknote, 
  ShieldCheck, 
  ShoppingBag, 
  Truck, 
  Factory, 
  Globe, 
  Headphones 
} from "lucide-react";

const industries = [
  { name: "Healthcare", icon: <Stethoscope className="h-6 w-6" />, color: "text-blue-400" },
  { name: "Finance", icon: <Banknote className="h-6 w-6" />, color: "text-green-400" },
  { name: "Insurance", icon: <ShieldCheck className="h-6 w-6" />, color: "text-purple-400" },
  { name: "Retail", icon: <ShoppingBag className="h-6 w-6" />, color: "text-orange-400" },
  { name: "Logistics", icon: <Truck className="h-6 w-6" />, color: "text-cyan-400" },
  { name: "Manufacturing", icon: <Factory className="h-6 w-6" />, color: "text-red-400" },
  { name: "Enterprise SaaS", icon: <Globe className="h-6 w-6" />, color: "text-indigo-400" },
  { name: "Customer Ops", icon: <Headphones className="h-6 w-6" />, color: "text-pink-400" },
];

export default function Industries() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Built for Every Industry
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our solutions are domain-agnostic, designed to tackle complexity across diverse enterprise sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-6 rounded-2xl border-white/5 hover:border-primary/40 transition-all flex flex-col items-center justify-center text-center group cursor-default"
            >
              <div className={`mb-4 p-4 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors ${industry.color}`}>
                {industry.icon}
              </div>
              <h3 className="font-display font-medium text-white">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
