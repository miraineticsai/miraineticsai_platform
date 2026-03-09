"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "MiraiNeticsAI transformed our operations. What used to take weeks now takes hours. Their AI-driven approach is truly revolutionary.",
    author: "Dr. Sarah Chen",
    role: "Healthcare CIO",
    company: "Global Health Systems",
  },
  {
    quote: "The automation platform improved our revenue efficiency dramatically. We've seen a 25% increase in bottom-line revenue since implementation.",
    author: "Marcus Thorne",
    role: "Finance Director",
    company: "Apex Capital Ventures",
  },
  {
    quote: "The AI-driven analytics helped reduce claim processing time by 60%. It's the most enterprise-ready automation tool we've ever used.",
    author: "Elena Rodriguez",
    role: "Insurance VP",
    company: "SecureLink Assurance",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Trusted by Industry Leaders
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border-white/5 relative flex flex-col h-full"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              <p className="text-foreground/90 italic mb-8 flex-grow">"{t.quote}"</p>
              <div>
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-xs text-primary font-medium tracking-wider uppercase">{t.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
