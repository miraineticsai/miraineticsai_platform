"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Bot, Cpu, Database, MessageSquare, Workflow, Zap, ChevronDown } from "lucide-react";

const typingPhrases = [
  "Build AI Products.",
  "Automate Workflows.",
  "Deploy AI Agents.",
  "Streamline Operations.",
];

const pipelineSteps = [
  { step: "User Trigger",    detail: "WhatsApp / Slack / Web",     icon: MessageSquare, colorStyle: { color: "#4D70FF",  bg: "rgba(77,112,255,0.08)",  border: "rgba(77,112,255,0.25)" } },
  { step: "AI Agent",        detail: "RAG / Intent / LLM",          icon: Bot,           colorStyle: { color: "#9950FF",  bg: "rgba(153,80,255,0.08)", border: "rgba(153,80,255,0.25)" } },
  { step: "Business Logic",  detail: "Rules & Validation",           icon: Cpu,           colorStyle: { color: "#7B5CFF",  bg: "rgba(123,92,255,0.08)", border: "rgba(123,92,255,0.25)" } },
  { step: "Automation",      detail: "Orchestration & Webhooks",     icon: Workflow,      colorStyle: { color: "#16B8D4",  bg: "rgba(22,184,212,0.08)", border: "rgba(22,184,212,0.25)" } },
  { step: "APIs & Tools",    detail: "REST / GraphQL",               icon: Zap,           colorStyle: { color: "#4778FF",  bg: "rgba(71,120,255,0.08)", border: "rgba(71,120,255,0.25)" } },
  { step: "System Action",   detail: "CRM / DB / Notify",            icon: Database,      colorStyle: { color: "#9950FF",  bg: "rgba(153,80,255,0.08)", border: "rgba(153,80,255,0.25)" } },
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState(typingPhrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const currentPhrase = typingPhrases[phraseIndex];
    const speed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = currentPhrase.substring(0, text.length + 1);
        setText(next);
        if (next === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        const next = currentPhrase.substring(0, text.length - 1);
        setText(next);
        if (next === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, isMounted]);

  return (
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-[#E5E8F0] dark:border-white/10 bg-white dark:bg-[#10152E]" aria-label="Hero">

      {/* Subtle dot-grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none -z-10" aria-hidden="true" />

      {/* Brand gradient glow orbs — very subtle per brand guide */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-[15%] w-[600px] h-[600px] rounded-full blur-[140px]" style={{ background: "rgba(153,80,255,0.08)" }} />
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full blur-[140px]" style={{ background: "rgba(77,112,255,0.06)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] rounded-full blur-[100px]" style={{ background: "rgba(22,184,212,0.05)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl lg:max-w-5xl mx-auto text-center mb-12 lg:mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-semibold mb-8 cursor-default"
            style={{
              background: "rgba(153,80,255,0.08)",
              borderColor: "rgba(153,80,255,0.25)",
              color: "#9950FF",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#9950FF" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#9950FF" }} />
            </span>
            AI Engineering + Product Studio
          </motion.div>

          {/* H1 — Build. Automate. Grow. */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-display font-black tracking-tight leading-[1.05] mb-6 text-[#151A2E] dark:text-white">
            {/* Typing line */}
            <span className="block min-h-[1.1em]" aria-live="polite" aria-label={typingPhrases[phraseIndex]}>
              <span className="text-[#151A2E] dark:text-white">
                {isMounted ? text : typingPhrases[0]}
              </span>
              <span
                className="animate-blink inline-block w-[3px] h-[0.85em] ml-1 align-middle rounded-[1px]"
                style={{ background: "#9950FF" }}
                aria-hidden="true"
              />
            </span>

            {/* Static gradient line — the hero's most important design element */}
            <span
              className="block mt-2 animate-gradient-shift"
              style={{
                background: "linear-gradient(100deg, #9950FF 0%, #7B5CFF 30%, #4D70FF 70%, #16B8D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% 200%",
              }}
            >
              Automate Your Business.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto font-normal text-[#4F5870] dark:text-[#AAB1C5]"
          >
            We design and build AI-powered products, intelligent workflows, and business
            automations that eliminate repetitive work and help teams move faster.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary — full brand gradient CTA */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto text-base px-8 py-4 rounded-xl font-bold text-white shadow-xl transition-all duration-200 hover:opacity-90"
                style={{
                  background: "linear-gradient(100deg, #9950FF 0%, #7B5CFF 30%, #4D70FF 70%, #16B8D4 100%)",
                  boxShadow: "0 8px 32px rgba(153,80,255,0.28)",
                }}
              >
                Discuss Your Idea
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            {/* Secondary — blue outline */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                href="#automation"
                className="flex items-center justify-center w-full sm:w-auto text-base px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-200 hover:bg-[#F5F7FF] dark:hover:bg-white/5"
                style={{ borderColor: "#4D70FF", color: "#4D70FF" }}
              >
                See What We Build
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Pipeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div
            className="rounded-2xl p-5 sm:p-7 border bg-white dark:bg-[#191F3D] border-[#E5E8F0] dark:border-white/10"
            style={{ boxShadow: "0 8px 40px rgba(21,26,46,0.08)" }}
          >
            {/* Card header */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#E5E8F0] dark:border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: "#16B8D4" }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "#16B8D4" }} />
                </span>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#7B8499] dark:text-[#AAB1C5]">
                  Live AI & Automation Workflow Architecture
                </span>
              </div>
              <span
                className="hidden sm:inline text-[11px] font-mono font-semibold px-3 py-1 rounded-full border"
                style={{ background: "rgba(153,80,255,0.08)", borderColor: "rgba(153,80,255,0.25)", color: "#9950FF" }}
              >
                End-to-End Pipeline
              </span>
            </div>

            {/* 3D Visual Architecture Canvas */}
            <div className="relative rounded-xl overflow-hidden mb-6 border border-[#E5E8F0] dark:border-white/10 group shadow-md bg-black">
              <Image
                src="/herobackground.jpg"
                alt="Mirainetics AI & Automation Workflow Engine Architecture"
                width={1344}
                height={768}
                className="w-full h-48 sm:h-64 md:h-80 object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono text-[10px] sm:text-[11px] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 font-medium">
                  AI Orchestration Core · Neural Pipeline
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-cyan-300 bg-cyan-950/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyan-500/40 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Active System Canvas
                </span>
              </div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3">
              {pipelineSteps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, transition: { duration: 0.18 } }}
                    className="relative"
                  >
                    <div
                      className="rounded-xl p-3.5 flex flex-col items-center text-center cursor-default transition-all duration-200 hover:shadow-md h-full border"
                      style={{ background: item.colorStyle.bg, borderColor: item.colorStyle.border }}
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/80 dark:bg-white/10 flex items-center justify-center mb-2.5 shadow-sm">
                        <Icon className="h-4 w-4" style={{ color: item.colorStyle.color }} aria-hidden="true" />
                      </div>
                      <span className="text-[10px] font-mono font-bold mb-0.5" style={{ color: item.colorStyle.color }}>
                        0{idx + 1}
                      </span>
                      <div className="text-xs font-semibold text-[#151A2E] dark:text-white leading-tight">{item.step}</div>
                      <div className="text-[10px] text-[#7B8499] dark:text-[#AAB1C5] mt-1 leading-snug">{item.detail}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-[#E5E8F0] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#7B8499] dark:text-[#AAB1C5] gap-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#9950FF" }} />
                <span>Deterministic reliability + LLM intelligence</span>
              </div>
              <span className="font-mono opacity-70">Production-ready architecture</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center mt-10"
          aria-hidden="true"
        >
          <a
            href="#solutions"
            className="flex flex-col items-center gap-1.5 transition-colors group"
            style={{ color: "#7B8499" }}
            tabIndex={-1}
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Explore</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
