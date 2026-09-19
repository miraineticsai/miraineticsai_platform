"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Bot, Cpu, Database, MessageSquare, Workflow, Zap, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";

const typingPhrases = [
  "Build AI Products.",
  "Automate Workflows.",
  "Deploy AI Agents.",
  "Streamline Operations.",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text.length + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-28 overflow-hidden border-b border-border bg-background">
      {/* Background Glow Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none opacity-50">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-blue-600/15 blur-[140px] rounded-full" />
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl lg:max-w-5xl mx-auto text-center mb-14"
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-8 cursor-default shadow-sm"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>AI Engineering + Product Studio</span>
          </motion.div>

          {/* Large Hero Headline with Enhanced Font Style & Typing Effect */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-foreground tracking-tight leading-[1.06] mb-8 min-h-[4rem] sm:min-h-[5.5rem] lg:min-h-[7rem]">
            <span className="text-foreground font-black">{text}</span>
            <span className="inline-block w-1.5 h-10 sm:h-14 lg:h-20 ml-1.5 bg-primary animate-pulse align-middle rounded-sm" />
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 block mt-2 font-black">
              Automate Your Business.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto font-normal">
            We design and build AI-powered products, intelligent workflows and business automations that reduce repetitive work and help teams move faster.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto text-base px-8 py-6 shadow-xl shadow-primary/25 font-bold">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Discuss Your Idea
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 py-6 font-semibold">
                <Link href="#automation">See What We Build</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Technical AI + Automation Workflow Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 max-w-5xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-primary/40">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono font-semibold uppercase text-muted-foreground tracking-wider">
                  Live AI & Automation Workflow Architecture
                </span>
              </div>
              <span className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-0.5 rounded-full font-medium border border-primary/20">
                End-to-End Pipeline
              </span>
            </div>

            {/* Workflow Pipeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3 sm:gap-4 relative">
              {[
                { step: "1. User Trigger", detail: "WhatsApp / Slack / Web", icon: MessageSquare, color: "text-blue-500" },
                { step: "2. AI Agent", detail: "RAG / Intent / LLM", icon: Bot, color: "text-indigo-500" },
                { step: "3. Business Logic", detail: "Rules & Validation", icon: Cpu, color: "text-cyan-500" },
                { step: "4. Automation Engine", detail: "Orchestration & Webhooks", icon: Workflow, color: "text-amber-500" },
                { step: "5. APIs & Tools", detail: "REST / GraphQL / Services", icon: Zap, color: "text-emerald-500" },
                { step: "6. System Action", detail: "CRM / DB / Notification", icon: Database, color: "text-violet-500" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-secondary/60 border border-border hover:border-primary/40 rounded-xl p-4 flex flex-col items-center text-center transition-all cursor-default"
                  >
                    <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-foreground mb-3 shadow-sm">
                      <Icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div className="text-xs font-semibold text-foreground">{item.step}</div>
                    <div className="text-[11px] text-muted-foreground mt-1">{item.detail}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Visual Footer Note */}
            <div className="mt-6 pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Deterministic reliability + LLM intelligence</span>
              </div>
              <span className="font-mono text-[11px]">Production ready architecture</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
