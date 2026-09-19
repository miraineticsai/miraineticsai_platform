import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, ArrowLeft } from "lucide-react";
import { contactPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact & Discuss Your Idea",
  description:
    "Discuss your AI product or business automation idea with Mirainetics engineers. We'll help evaluate the best technical approach.",
  alternates: {
    canonical: "https://mirainetics.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageJsonLd()),
        }}
      />
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="default">Get in Touch</Badge>

              <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight">
                Have an AI or <br />
                <span className="text-primary">Automation Idea?</span>
              </h1>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Tell us what you&apos;re trying to build or automate. We&apos;ll help you figure out the best technical approach.
              </p>

              <div className="space-y-6 pt-4 border-t border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      Direct Email
                    </p>
                    <a
                      href="mailto:contact@mirainetics.com"
                      className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      contact@mirainetics.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-xl text-foreground border border-border shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      Location
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/70 border border-border rounded-xl p-5 space-y-2 text-xs text-muted-foreground">
                <span className="font-bold text-foreground block text-sm">Direct Founder Communication</span>
                <p>You work directly with our AI product and automation engineers — no sales reps or middle layers.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
