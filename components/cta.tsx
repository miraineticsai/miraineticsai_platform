import ContactForm from "./contact-form";
import { Badge } from "./ui/badge";

export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Messaging */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="default">Start Building</Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-tight leading-tight">
              Have an AI or Automation Idea?
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Tell us what you&apos;re trying to build or automate. We&apos;ll help you figure out the best technical approach.
            </p>

            <div className="pt-4 space-y-4 border-t border-border text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Direct technical consultation with founders</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Clear architectural roadmap & tool selection</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>Zero sales pressure — pragmatic engineering advice</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-muted-foreground">
              Prefer email? Reach us directly at{" "}
              <a href="mailto:contact@mirainetics.com" className="text-primary font-semibold hover:underline">
                contact@mirainetics.com
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
