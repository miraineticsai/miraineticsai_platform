"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Share2, 
  MessageSquareText, 
  Slack, 
  UserCheck, 
  FileText, 
  Workflow as WorkflowIcon,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Badge } from "./ui/badge";

interface FlowStep {
  name: string;
  detail: string;
}

interface AutomationScenario {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  steps: FlowStep[];
}

export default function AutomationShowcase() {
  const scenarios: AutomationScenario[] = [
    {
      id: "social-media",
      title: "Social Media Automation",
      icon: Share2,
      description: "Automate social content pipeline from topic discovery to multi-platform publishing and analytics.",
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
      id: "whatsapp",
      title: "WhatsApp AI Bot",
      icon: MessageSquareText,
      description: "24/7 intelligent customer interactions over WhatsApp connected directly to your business databases.",
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
      id: "slack",
      title: "Slack Internal Assistant",
      icon: Slack,
      description: "Empower internal teams to query documents, generate reports, and trigger software workflows inside Slack.",
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
      id: "lead-automation",
      title: "Lead Qualification & Routing",
      icon: UserCheck,
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
      id: "content-automation",
      title: "Content & Research Pipeline",
      icon: FileText,
      description: "Automated research summaries, SEO drafting, and editorial approval workflows.",
      steps: [
        { name: "Research Topic", detail: "Scheduled topic input or keyword monitor" },
        { name: "AI Web Research", detail: "Scrapes & extracts facts from target web sources" },
        { name: "Content Generation", detail: "Drafts comprehensive article or newsletter" },
        { name: "Editorial Approval", detail: "Notification sent to editor for review" },
        { name: "CMS Publishing", detail: "Pushes approved post to blog or CMS" },
      ],
    },
    {
      id: "business-workflow",
      title: "Custom Business Workflow",
      icon: WorkflowIcon,
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

  const [activeTab, setActiveTab] = useState<string>("social-media");
  const activeScenario = scenarios.find((s) => s.id === activeTab) || scenarios[0];

  return (
    <section id="automation-showcase" className="py-20 lg:py-28 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <Badge variant="default" className="mb-4">
            Interactive Showcase
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            What Can We Automate?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            From customer channels and internal messaging to lead scoring and complex data syncs — explore practical automation workflows we design and build.
          </p>
        </motion.div>

        {/* Tab Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {scenarios.map((scenario) => {
            const Icon = scenario.icon;
            const isActive = activeTab === scenario.id;
            return (
              <motion.button
                key={scenario.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab(scenario.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{scenario.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Scenario Display with Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <div className="mb-6 pb-4 border-b border-border">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                <activeScenario.icon className="h-6 w-6 text-primary" />
                {activeScenario.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                {activeScenario.description}
              </p>
            </div>

            {/* Step-by-Step Flow Visualization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              {activeScenario.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-secondary/50 border border-border hover:border-primary/40 rounded-xl p-4 flex flex-col justify-between relative group transition-colors cursor-default"
                >
                  <div>
                    <div className="text-[11px] font-mono text-primary font-bold mb-1">
                      0{idx + 1}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-foreground mb-1">
                      {step.name}
                    </div>
                    <div className="text-[11px] text-muted-foreground leading-snug">
                      {step.detail}
                    </div>
                  </div>
                  {idx < activeScenario.steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-muted-foreground/60">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Positioning Statement Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
              <CheckCircle2 className="h-4 w-4" />
              <span>Pragmatic Engineering Principle</span>
            </div>
            <p className="text-sm sm:text-base font-medium text-foreground leading-relaxed">
              &ldquo;When a workflow can be solved with standard API automation, we connect it. When the problem requires custom engineering or AI infrastructure, we build it.&rdquo;
            </p>
          </div>
          <div className="bg-secondary border border-border rounded-xl px-4 py-3 text-xs text-muted-foreground shrink-0 max-w-xs">
            <span className="font-semibold text-foreground block mb-1">AI + APIs + Custom Software</span>
            We select tools based on performance, maintainability, and scalability — not dogma.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
