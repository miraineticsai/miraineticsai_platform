"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";

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

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border rounded-2xl p-8 sm:p-10 text-center shadow-lg"
      >
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Message Received!</h3>
        <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed mb-6">
          Thank you for sharing your project details. We&apos;ll review your requirements and reach out to you within 24 hours to discuss the best technical approach.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Submit Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-foreground">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Alex Vance"
            className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors placeholder:text-muted-foreground/60"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-foreground">
            Work Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="alex@company.com"
            className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors placeholder:text-muted-foreground/60"
          />
        </div>
      </div>

      {/* Company */}
      <div className="space-y-1.5">
        <label htmlFor="company" className="text-xs font-semibold text-foreground">
          Company Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Corp"
          className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors placeholder:text-muted-foreground/60"
        />
      </div>

      {/* What are you looking to build? */}
      <div className="space-y-1.5">
        <label htmlFor="buildChoice" className="text-xs font-semibold text-foreground">
          What are you looking to build?
        </label>
        <select
          id="buildChoice"
          name="buildChoice"
          className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
        >
          <option value="AI Mobile App (iOS/Android)">AI Mobile App (iOS / Android)</option>
          <option value="AI Assistant / Bot">AI Assistant / Support Bot</option>
          <option value="RAG Application">RAG Knowledge-Base App</option>
          <option value="AI Agentic Workflow">Custom AI Agentic Workflow</option>
          <option value="Internal AI Tool">Internal AI Dashboard / Tool</option>
          <option value="Custom LLM Integration">Custom LLM Integration</option>
          <option value="Not Sure / Exploring">Exploring Options</option>
        </select>
      </div>

      {/* What would you like to automate? */}
      <div className="space-y-1.5">
        <label htmlFor="automateChoice" className="text-xs font-semibold text-foreground">
          What would you like to automate?
        </label>
        <select
          id="automateChoice"
          name="automateChoice"
          className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
        >
          <option value="Customer Support Channel">Customer Support (WhatsApp/Slack)</option>
          <option value="Social Media & Content">Social Media & Content Workflows</option>
          <option value="Lead Qualification & CRM">Lead Qualification & CRM Routing</option>
          <option value="Internal Team Operations">Internal Team Operations</option>
          <option value="Data Sync & Reporting">Data Sync & Reporting Pipeline</option>
          <option value="Full Business Operations">Full End-to-End Operation</option>
        </select>
      </div>

      {/* Current tools */}
      <div className="space-y-1.5">
        <label htmlFor="currentTools" className="text-xs font-semibold text-foreground">
          Current Tools / Software Used
        </label>
        <input
          id="currentTools"
          name="currentTools"
          type="text"
          placeholder="e.g. Slack, WhatsApp, HubSpot, PostgreSQL, Salesforce, APIs"
          className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors placeholder:text-muted-foreground/60"
        />
      </div>

      {/* Additional Details */}
      <div className="space-y-1.5">
        <label htmlFor="details" className="text-xs font-semibold text-foreground">
          Additional Details / Goals
        </label>
        <textarea
          id="details"
          name="details"
          rows={3}
          placeholder="Briefly describe the product concept, mobile app requirements, or integration target..."
          className="w-full bg-secondary border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none placeholder:text-muted-foreground/60"
        />
      </div>

      {/* Submit Button */}
      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
        <Button type="submit" disabled={status === "loading"} className="w-full shadow-lg shadow-primary/20" size="lg">
          {status === "loading" ? (
            "Sending Inquiry..."
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Send className="h-4 w-4" />
              Discuss Your Idea
            </span>
          )}
        </Button>
      </motion.div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-xs text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </form>
  );
}
