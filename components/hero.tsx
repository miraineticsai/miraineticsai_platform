"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Cpu, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-8">
            Next-Gen AI Automation
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight">
            Automating the Future of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
              Intelligent Workflows
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            AI-powered automation systems that eliminate manual processes and unlock operational efficiency for enterprise-scale operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/solutions"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-accent font-bold flex items-center justify-center group hover:scale-105 transition-transform animate-glow"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full glass font-bold flex items-center justify-center hover:bg-white/10 transition-colors">
              <Play className="mr-2 h-4 w-4 fill-current" />
              Book Demo
            </button>
          </div>
        </motion.div>

        {/* Dashboard Preview / Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative"
        >
          <div className="relative glass rounded-2xl p-2 border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-accent/80 rounded-xl overflow-hidden aspect-[16/9] flex items-center justify-center border border-white/5">
              {/* Symbolic Dashboard */}
              <div className="w-full h-full p-4 md:p-8 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Cpu className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">Automation Engine</h4>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">v2.4.0 High-Active</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-glow" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 flex-grow">
                  <div className="col-span-2 space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="flex justify-between items-end mb-4">
                        <p className="text-[10px] text-muted-foreground font-bold uppercase">Efficiency Index</p>
                        <p className="text-xl font-display font-bold text-primary">+34%</p>
                      </div>
                      <div className="flex items-end gap-1 h-20">
                        {[30, 60, 45, 90, 65, 80, 50, 85, 40, 70, 55, 95].map((h, i) => (
                          <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.05 + 0.5, duration: 1 }}
                            className="flex-1 bg-gradient-to-t from-primary/10 to-primary rounded-t-sm"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <TrendingUp className="h-4 w-4 text-secondary mb-2" />
                        <p className="text-[10px] text-muted-foreground font-bold uppercase">Checks</p>
                        <p className="text-lg font-display font-bold">384,102</p>
                      </div>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                        <Clock className="h-4 w-4 text-primary mb-2" />
                        <p className="text-[10px] text-muted-foreground font-bold uppercase">Uptime</p>
                        <p className="text-lg font-display font-bold">99.98%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl border border-white/5 p-4 flex flex-col">
                    <p className="text-[10px] text-muted-foreground font-bold uppercase mb-4">AI Decision Log</p>
                    <div className="space-y-3 flex-grow overflow-hidden">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="flex items-center gap-3 border-b border-white/5 pb-2">
                           <div className="w-1 h-1 rounded-full bg-primary" />
                           <div className="flex-grow h-1 bg-white/10 rounded-full" />
                           <div className="w-4 h-1 bg-primary/40 rounded-full" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/10 text-center">
                        <p className="text-[10px] font-bold text-primary">SCANNING SECURE_CORE...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent/80" />
            </div>
          </div>
          
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass p-4 rounded-xl border-white/20 hidden md:block"
          >
            <div className="text-left">
              <p className="text-[10px] text-primary font-bold uppercase">Accuracy</p>
              <p className="text-2xl font-display font-bold">99.8%</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-10 -left-10 glass p-4 rounded-xl border-white/20 hidden md:block"
          >
            <div className="text-left">
              <p className="text-[10px] text-secondary font-bold uppercase">Processed</p>
              <p className="text-2xl font-display font-bold">1.2M+</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
