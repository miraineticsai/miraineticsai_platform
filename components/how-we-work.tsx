"use client";

import { motion } from "motion/react";
import { Search, Compass, Code, Layers, LineChart } from "lucide-react";

// Brand map per brand guide process:
// Understand (research) → Blue
// Design → Purple (AI/creative)
// Build → Blue (software)
// Integrate → Cyan (automation/connections)
// Launch → Purple (innovation/product)
const steps = [
  { num: "01", title: "Understand",      icon: Search,    color: "#4D70FF", bg: "rgba(77,112,255,0.08)",  border: "rgba(77,112,255,0.2)"  },
  { num: "02", title: "Design",          icon: Compass,   color: "#9950FF", bg: "rgba(153,80,255,0.08)", border: "rgba(153,80,255,0.2)" },
  { num: "03", title: "Build",           icon: Code,      color: "#4778FF", bg: "rgba(71,120,255,0.08)", border: "rgba(71,120,255,0.2)" },
  { num: "04", title: "Integrate",       icon: Layers,    color: "#16B8D4", bg: "rgba(22,184,212,0.08)", border: "rgba(22,184,212,0.2)" },
  { num: "05", title: "Launch & Improve",icon: LineChart,  color: "#7B5CFF", bg: "rgba(123,92,255,0.08)", border: "rgba(123,92,255,0.2)" },
];

const descriptions = [
  "Understand the business problem, current manual bottlenecks, data inputs, and expected outcomes.",
  "Design the product UX, AI architecture, prompt schemas, and API automation workflows.",
  "Develop AI models/APIs, frontend UI, backend services, vector search indexes, and workflow orchestration.",
  "Connect business tools, CRMs, WhatsApp, Slack, webhooks, and legacy databases securely.",
  "Deploy to production, monitor execution logs, optimize prompt latency, and refine workflow steps.",
];

export default function HowWeWork() {
  return (
    <section id="process" className="py-20 lg:py-28 border-b border-[#E5E8F0] dark:border-white/10 bg-white dark:bg-[#10152E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 border"
            style={{ background: "rgba(77,112,255,0.08)", borderColor: "rgba(77,112,255,0.25)", color: "#4D70FF" }}
          >
            Structured Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 text-[#151A2E] dark:text-white">
            How We Work
          </h2>
          <p className="text-[#4F5870] dark:text-[#AAB1C5] text-base sm:text-lg leading-relaxed">
            A practical 5-step engineering methodology to take your AI product concept or business
            automation from plan to production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.09 }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                className="group"
              >
                <div
                  className="rounded-2xl p-5 h-full flex flex-col cursor-default transition-all duration-200 hover:shadow-md border"
                  style={{ background: step.bg, borderColor: step.border }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-white dark:bg-white/10"
                      style={{ color: step.color, boxShadow: "0 1px 4px rgba(0,0,0,0.07)" }}
                    >
                      {step.num}
                    </span>
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/70 dark:bg-white/10"
                      style={{ border: `1px solid ${step.border}` }}
                    >
                      <Icon className="h-4 w-4" style={{ color: step.color }} aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#151A2E] dark:text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-[#4F5870] dark:text-[#AAB1C5] leading-relaxed">{descriptions[idx]}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Animated brand gradient progress bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
          className="hidden lg:block mt-6 h-0.5 origin-left rounded-full"
          style={{ background: "linear-gradient(90deg, #4D70FF, #9950FF, #7B5CFF, #4778FF, #16B8D4)" }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
