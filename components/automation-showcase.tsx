"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Share2, MessageSquareText, Slack, UserCheck, FileText, Workflow as WorkflowIcon, CheckCircle2, ArrowRight,
} from "lucide-react";

// Brand map: each scenario maps to a brand color
// Social / Content → Purple (AI content generation)
// WhatsApp → Cyan (automation/communication)
// Slack → Blue (software/integration)
// Lead → Purple (AI scoring)
// Research → Blue
// Custom → Cyan (automation)

interface FlowStep { name: string; detail: string; }
interface AutomationScenario {
  id: string; title: string; icon: React.ElementType; description: string;
  steps: FlowStep[];
  accent: { color: string; bg: string; border: string; badgeBg: string; badgeText: string; };
}

const scenarios: AutomationScenario[] = [
  {
    id: "social-media", title: "Social Media Automation", icon: Share2,
    accent: { color: "#9950FF", bg: "rgba(153,80,255,0.06)", border: "rgba(153,80,255,0.2)", badgeBg: "#F0E7FF", badgeText: "#7B3FE4" },
    description: "Automate social content pipeline from topic discovery to multi-platform publishing.",
    steps: [
      { name: "Content Idea", detail: "Topic input or automated RSS feed trigger" },
      { name: "AI Generation", detail: "LLM drafts posts tailored per platform" },
      { name: "Human Review", detail: "Slack approval button or dashboard edit" },
      { name: "Scheduling", detail: "Automated queue schedules release times" },
      { name: "Publishing", detail: "Direct API posting to LinkedIn/X/Meta" },
      { name: "Analytics", detail: "Performance metrics synced back to CRM" },
    ],
  },
  {
    id: "whatsapp", title: "WhatsApp AI Bot", icon: MessageSquareText,
    accent: { color: "#16B8D4", bg: "rgba(22,184,212,0.06)", border: "rgba(22,184,212,0.2)", badgeBg: "#DDF8FC", badgeText: "#087F94" },
    description: "24/7 intelligent customer interactions over WhatsApp connected to your business databases.",
    steps: [
      { name: "Customer Message", detail: "Inbound message via WhatsApp API" },
      { name: "API Gateway", detail: "Secure webhook receives payload" },
      { name: "AI Bot Engine", detail: "RAG lookup over company knowledge base" },
      { name: "Business Logic", detail: "Check inventory or order status in DB" },
      { name: "CRM Update", detail: "Sync conversation log to client record" },
      { name: "Human Escalation", detail: "Hand off to agent if threshold reached" },
    ],
  },
  {
    id: "slack", title: "Slack Internal Assistant", icon: Slack,
    accent: { color: "#4D70FF", bg: "rgba(77,112,255,0.06)", border: "rgba(77,112,255,0.2)", badgeBg: "#E8EDFF", badgeText: "#3456D3" },
    description: "Empower internal teams to query documents, generate reports, and trigger workflows inside Slack.",
    steps: [
      { name: "Team Request", detail: "@Mirainetics bot command in Slack" },
      { name: "Slack Event", detail: "Webhook triggers secure backend service" },
      { name: "AI Agent", detail: "Parses request & selects appropriate tools" },
      { name: "Internal Systems", detail: "Executes database or API query" },
      { name: "Response Formatter", detail: "Structures findings into clean Slack blocks" },
      { name: "Instant Reply", detail: "Delivers result in thread within seconds" },
    ],
  },
  {
    id: "lead-automation", title: "Lead Qualification & Routing", icon: UserCheck,
    accent: { color: "#7B5CFF", bg: "rgba(123,92,255,0.06)", border: "rgba(123,92,255,0.2)", badgeBg: "#EEE8FF", badgeText: "#5B3FE4" },
    description: "Qualify inbound site visitors instantly, update CRM records, and alert key sales reps automatically.",
    steps: [
      { name: "Website Lead", detail: "Visitor submits contact form" },
      { name: "Form Webhook", detail: "Instant JSON payload sent to API" },
      { name: "AI Qualification", detail: "LLM scores lead intent & company size" },
      { name: "CRM Enrichment", detail: "Create/update contact in CRM with tags" },
      { name: "Notification", detail: "Urgent Slack alert to assigned account rep" },
      { name: "Automated Follow-up", detail: "Personalized email dispatch via Resend" },
    ],
  },
  {
    id: "content-automation", title: "Content & Research Pipeline", icon: FileText,
    accent: { color: "#4778FF", bg: "rgba(71,120,255,0.06)", border: "rgba(71,120,255,0.2)", badgeBg: "#E8EDFF", badgeText: "#3456D3" },
    description: "Automated research summaries, SEO drafting, and editorial approval workflows.",
    steps: [
      { name: "Research Topic", detail: "Scheduled topic input or keyword monitor" },
      { name: "AI Web Research", detail: "Scrapes & extracts facts from target web" },
      { name: "Content Generation", detail: "Drafts comprehensive article or newsletter" },
      { name: "Editorial Approval", detail: "Notification sent to editor for review" },
      { name: "CMS Publishing", detail: "Pushes approved post to blog or CMS" },
    ],
  },
  {
    id: "business-workflow", title: "Custom Business Workflow", icon: WorkflowIcon,
    accent: { color: "#16B8D4", bg: "rgba(22,184,212,0.06)", border: "rgba(22,184,212,0.2)", badgeBg: "#DDF8FC", badgeText: "#087F94" },
    description: "Seamlessly link legacy business software, databases, webhooks, and modern AI endpoints.",
    steps: [
      { name: "Event Trigger", detail: "Database event, webhook, or cron schedule" },
      { name: "Workflow Orchestrator", detail: "Controls branching logic & retries" },
      { name: "AI Inference", detail: "Document OCR, extraction, or classification" },
      { name: "API Synchronization", detail: "Pushes structured data to multiple endpoints" },
      { name: "Database Persistence", detail: "Logs transaction in central audit database" },
      { name: "Notification Alert", detail: "Sends confirmation email or SMS" },
    ],
  },
];

export default function AutomationShowcase() {
  const [activeTab, setActiveTab] = useState<string>("social-media");
  const active = scenarios.find((s) => s.id === activeTab) || scenarios[0];
  const { accent } = active;

  return (
    <section id="automation-showcase" className="py-20 lg:py-28 border-b border-[#E5E8F0] dark:border-white/10 bg-[#F2FCFE] dark:bg-[#0c1328]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 border"
            style={{ background: "rgba(22,184,212,0.08)", borderColor: "rgba(22,184,212,0.3)", color: "#16B8D4" }}
          >
            Interactive Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 text-[#151A2E] dark:text-white">
            What Can We Automate?
          </h2>
          <p className="text-[#4F5870] dark:text-[#AAB1C5] text-base sm:text-lg leading-relaxed">
            From customer channels and internal messaging to lead scoring and complex data syncs —
            explore practical automation workflows we design and build.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Automation scenarios">
          {scenarios.map((scenario) => {
            const Icon = scenario.icon;
            const isActive = activeTab === scenario.id;
            return (
              <motion.button
                key={scenario.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${scenario.id}`}
                onClick={() => setActiveTab(scenario.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? ""
                    : "bg-white dark:bg-[#191F3D] border-[#E5E8F0] dark:border-white/10 text-[#4F5870] dark:text-[#AAB1C5] hover:bg-[#F7F8FC] dark:hover:bg-white/5"
                }`}
                style={
                  isActive
                    ? { background: scenario.accent.bg, borderColor: scenario.accent.border, color: scenario.accent.color }
                    : undefined
                }
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{scenario.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`panel-${activeTab}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-2xl p-6 sm:p-8 border bg-white dark:bg-[#191F3D] border-[#E5E8F0] dark:border-white/10"
            style={{ boxShadow: "0 8px 30px rgba(21,26,46,0.07)" }}
          >
            <div className="mb-6 pb-5 border-b border-[#E5E8F0] dark:border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0" style={{ background: accent.bg, borderColor: accent.border }}>
                  <active.icon className="h-5 w-5" style={{ color: accent.color }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#151A2E] dark:text-white">{active.title}</h3>
                  <p className="text-sm text-[#4F5870] dark:text-[#AAB1C5] mt-0.5 leading-relaxed">{active.description}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
              {active.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.25 }}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className="relative rounded-xl p-3.5 flex flex-col cursor-default border transition-shadow hover:shadow-md dark:bg-white/5"
                  style={{ background: accent.bg, borderColor: accent.border }}
                >
                  <span className="text-[10px] font-mono font-bold mb-1.5" style={{ color: accent.color }}>0{idx + 1}</span>
                  <div className="text-xs sm:text-sm font-bold text-[#151A2E] dark:text-white mb-1">{step.name}</div>
                  <div className="text-[11px] text-[#7B8499] dark:text-[#AAB1C5] leading-snug">{step.detail}</div>
                  {idx < active.steps.length - 1 && (
                    <div className="hidden xl:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10" aria-hidden="true">
                      <ArrowRight className="h-3.5 w-3.5 text-[#D8DCEC] dark:text-white/20" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Positioning statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 rounded-2xl p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 border bg-white dark:bg-[#191F3D] border-[#E5E8F0] dark:border-white/10"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider" style={{ color: "#9950FF" }}>
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              Pragmatic Engineering Principle
            </div>
            <p className="text-sm sm:text-base font-medium text-[#151A2E] dark:text-white leading-relaxed">
              &ldquo;When a workflow can be solved with standard API automation, we connect it. When the problem
              requires custom engineering or AI infrastructure, we build it.&rdquo;
            </p>
          </div>
          <div className="rounded-xl px-4 py-3 text-xs text-[#4F5870] dark:text-[#AAB1C5] shrink-0 max-w-xs border bg-[#F7F8FC] dark:bg-[#10152E] border-[#E5E8F0] dark:border-white/10">
            <span className="font-semibold text-[#151A2E] dark:text-white block mb-1">AI + APIs + Custom Software</span>
            We select tools based on performance, maintainability, and scalability — not dogma.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
