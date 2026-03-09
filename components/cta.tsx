"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass p-12 lg:p-20 rounded-[3rem] border-white/10 text-center overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full animate-pulse delay-700" />
          
          <div className="relative z-10">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-8 animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Ready to Automate <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Your Operations?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the future of intelligent workflows. Our systems eliminate manual processes and drive exponential growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-primary text-accent font-bold text-lg hover:scale-105 transition-transform animate-glow flex items-center justify-center group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-5 rounded-full glass font-bold text-lg hover:bg-white/10 transition-colors"
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
