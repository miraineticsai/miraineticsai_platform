import ContactForm from "./contact-form";
import { CheckCircle2, Mail } from "lucide-react";

const perks = [
  "Direct technical consultation with founders",
  "Clear architectural roadmap & tool selection",
  "Zero sales pressure — pragmatic engineering advice",
];

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 lg:py-28 border-b border-[#E5E8F0] dark:border-white/10 overflow-hidden bg-white dark:bg-[#10152E]">
      {/* Gradient glow */}
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[120px]" style={{ background: "rgba(153,80,255,0.08)" }} />
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full blur-[120px]" style={{ background: "rgba(22,184,212,0.06)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: Messaging */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border"
              style={{ background: "rgba(153,80,255,0.08)", borderColor: "rgba(153,80,255,0.25)", color: "#9950FF" }}
            >
              Start Building
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight text-[#151A2E] dark:text-white">
              Have an AI or Automation Idea?
            </h2>

            <p className="text-[#4F5870] dark:text-[#AAB1C5] text-base sm:text-lg leading-relaxed">
              Tell us what you&apos;re trying to build or automate. We&apos;ll help you figure out the best
              technical approach — no jargon, no fluff.
            </p>

            <div className="pt-4 space-y-3.5 border-t border-[#E5E8F0] dark:border-white/10">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "#16B8D4" }} aria-hidden="true" />
                  <span className="text-sm text-[#4F5870] dark:text-[#AAB1C5]">{perk}</span>
                </div>
              ))}
            </div>

            <div className="pt-1 flex items-center gap-2.5 text-sm text-[#4F5870] dark:text-[#AAB1C5]">
              <Mail className="h-4 w-4 shrink-0" style={{ color: "#9950FF" }} aria-hidden="true" />
              <span>
                Prefer email?{" "}
                <a
                  href="mailto:contact@mirainetics.com"
                  className="font-semibold hover:underline underline-offset-2"
                  style={{ color: "#4D70FF" }}
                >
                  contact@mirainetics.com
                </a>
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
