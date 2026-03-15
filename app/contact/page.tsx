"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                Get in <br />
                <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Ready to transform your operations? Our experts are here to help you navigate the future of intelligent workflows.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email</p>
                    <p className="text-lg font-medium text-primary">contact@mirainetics.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-secondary/10 rounded-2xl text-secondary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Phone</p>
                    <p className="text-lg font-medium">+91 8446049402 | +91 83780 36177</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-white/5 rounded-2xl text-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Offices</p>
                    <p className="text-lg font-medium">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 lg:p-12 rounded-[2.5rem] border-white/10">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <Send className="h-16 w-16 text-primary mx-auto mb-6 animate-bounce" />
        <h3 className="text-2xl font-display font-bold mb-4">Message Sent!</h3>
        <p className="text-muted-foreground">Thank you for reaching out. We will get back to you at contact@mirainetics.com shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-8 text-primary font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Full Name</label>
          <input 
            name="name"
            type="text" 
            required
            placeholder="John Doe"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Work Email</label>
          <input 
            name="email"
            type="email" 
            required
            placeholder="john@company.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Company</label>
        <input 
          name="company"
          type="text" 
          placeholder="Mirainetics"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">How can we help?</label>
        <select name="help" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors">
          <option value="Demo" className="bg-accent">Solution Demo</option>
          <option value="Inquiry" className="bg-accent">Commercial Inquiry</option>
          <option value="Partnership" className="bg-accent">Partnership</option>
          <option value="Other" className="bg-accent">Other</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Message</label>
        <textarea 
          name="message"
          rows={4} 
          required
          placeholder="Tell us about your automation needs..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
        ></textarea>
      </div>
      <button 
        disabled={status === "loading"}
        className="w-full py-4 rounded-xl bg-primary text-accent font-bold text-lg hover:scale-[1.02] transition-transform animate-glow flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-center text-red-400 text-sm mt-4">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
