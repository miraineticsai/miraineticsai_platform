"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const inputClass =
  "w-full bg-secondary/50 border border-border/70 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-all duration-200 placeholder:text-muted-foreground/50 hover:border-border";

const buildOptions = [
  "AI Mobile App (iOS / Android)",
  "AI Assistant / Support Bot",
  "RAG Knowledge-Base App",
  "Custom AI Agentic Workflow",
  "Internal AI Dashboard / Tool",
  "Custom LLM Integration",
  "Exploring Options",
];

const automateOptions = [
  "Customer Support (WhatsApp/Slack)",
  "Social Media & Content Workflows",
  "Lead Qualification & CRM Routing",
  "Internal Team Operations",
  "Data Sync & Reporting Pipeline",
  "Full End-to-End Operation",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      name: data.name,
      email: data.email,
      company: data.company || "Not specified",
      help: `Build: ${data.buildChoice || "N/A"} | Automate: ${data.automateChoice || "N/A"}`,
      message: `
What to build: ${data.buildChoice || "None selected"}
What to automate: ${data.automateChoice || "None selected"}
Current tools: ${data.currentTools || "Not specified"}
Additional Details: ${data.details || "No additional details provided."}
      `.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to submit. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-card border border-border/70 rounded-2xl p-10 sm:p-12 text-center shadow-lg"
          role="status"
          aria-live="polite"
        >
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="h-7 w-7 text-emerald-400" aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Message Received!</h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed mb-7">
            Thank you for sharing your project details. We&apos;ll review your requirements and reach out
            within 24 hours to discuss the best technical approach.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStatus("idle")}
            className="rounded-xl"
          >
            Submit Another Inquiry
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="bg-card border border-border/70 rounded-2xl p-6 sm:p-8 shadow-xl space-y-5"
          noValidate
          aria-label="Contact form"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-foreground/90">
                Full Name <span className="text-red-400" aria-label="required">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Alex Vance"
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-foreground/90">
                Work Email <span className="text-red-400" aria-label="required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="alex@company.com"
                className={inputClass}
              />
            </div>
          </div>

          {/* Company */}
          <div className="space-y-1.5">
            <label htmlFor="company" className="text-xs font-semibold text-foreground/90">
              Company Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Acme Corp"
              className={inputClass}
            />
          </div>

          {/* Build + Automate selects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="buildChoice" className="text-xs font-semibold text-foreground/90">
                What would you like to build?
              </label>
              <select id="buildChoice" name="buildChoice" className={inputClass}>
                {buildOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="automateChoice" className="text-xs font-semibold text-foreground/90">
                What to automate?
              </label>
              <select id="automateChoice" name="automateChoice" className={inputClass}>
                {automateOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Current tools */}
          <div className="space-y-1.5">
            <label htmlFor="currentTools" className="text-xs font-semibold text-foreground/90">
              Current Tools / Software Used
            </label>
            <input
              id="currentTools"
              name="currentTools"
              type="text"
              placeholder="e.g. Slack, WhatsApp, HubSpot, PostgreSQL, Salesforce"
              className={inputClass}
            />
          </div>

          {/* Details */}
          <div className="space-y-1.5">
            <label htmlFor="details" className="text-xs font-semibold text-foreground/90">
              Additional Details / Goals
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              placeholder="Briefly describe the product concept, mobile app requirements, or integration target..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full shadow-lg shadow-primary/15 rounded-xl font-semibold"
              size="lg"
              aria-busy={status === "loading"}
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Discuss Your Idea
                </span>
              )}
            </Button>
          </motion.div>

          {/* Error state */}
          <AnimatePresence>
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2.5 text-xs text-red-400 bg-red-500/8 border border-red-500/20 p-3.5 rounded-xl"
                role="alert"
                aria-live="assertive"
              >
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{errorMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
