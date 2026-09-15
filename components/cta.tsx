"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative glass p-12 lg:p-20 rounded-[3rem] border-white/10 text-center overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/15 blur-[100px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/15 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <Sparkles className="h-10 w-10 text-primary mb-8" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight leading-tight">
              Ready to Automate{" "}
              <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Your Operations?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the future of intelligent workflows. Our systems eliminate
              manual processes and drive exponential growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-primary text-accent font-bold text-lg hover:scale-[1.03] active:scale-[0.98] transition-transform animate-glow flex items-center justify-center gap-2 group"
              >
                Schedule Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-full glass glass-hover font-bold text-lg transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
