import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Mirainetics Privacy Policy and data protection terms.",
  alternates: {
    canonical: "https://mirainetics.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>

          <div className="prose dark:prose-invert max-w-none text-muted-foreground text-sm leading-relaxed space-y-6">
            <p>
              Last updated: September 15, 2026.
            </p>
            <p>
              Mirainetics (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at mirainetics.com or communicate with us regarding our AI products and business automation services.
            </p>

            <h2 className="text-xl font-bold text-foreground pt-4">1. Information We Collect</h2>
            <p>
              We collect information you voluntarily provide to us when submitting inquiries through our contact form, including your name, work email address, company name, current tools used, and project details.
            </p>

            <h2 className="text-xl font-bold text-foreground pt-4">2. How We Use Your Information</h2>
            <p>
              We use the collected information solely to evaluate your technical requirements, respond to your inquiries, deliver requested technical advice, and improve our services. We do not sell, rent, or trade your personal information to third parties.
            </p>

            <h2 className="text-xl font-bold text-foreground pt-4">3. Data Security</h2>
            <p>
              We implement industry-standard administrative and technical security measures to protect your personal information against unauthorized access, disclosure, or destruction.
            </p>

            <h2 className="text-xl font-bold text-foreground pt-4">4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@mirainetics.com" className="text-primary hover:underline">contact@mirainetics.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
