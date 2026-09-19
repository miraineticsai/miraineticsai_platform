import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Mirainetics Terms of Service.",
  alternates: {
    canonical: "https://mirainetics.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
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

          <h1 className="text-4xl font-display font-bold mb-8">Terms of Service</h1>

          <div className="prose dark:prose-invert max-w-none text-muted-foreground text-sm leading-relaxed space-y-6">
            <p>
              Last updated: September 15, 2026.
            </p>
            <p>
              By accessing or using the website at mirainetics.com operated by Mirainetics, you agree to comply with and be bound by these Terms of Service.
            </p>

            <h2 className="text-xl font-bold text-foreground pt-4">1. Use of Website</h2>
            <p>
              You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use of the website.
            </p>

            <h2 className="text-xl font-bold text-foreground pt-4">2. Intellectual Property</h2>
            <p>
              All content, code, branding, graphics, and materials on this site are the intellectual property of Mirainetics unless otherwise noted.
            </p>

            <h2 className="text-xl font-bold text-foreground pt-4">3. Limitation of Liability</h2>
            <p>
              In no event shall Mirainetics be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use this website.
            </p>

            <h2 className="text-xl font-bold text-foreground pt-4">4. Contact Information</h2>
            <p>
              For any questions regarding these Terms, please reach out to <a href="mailto:contact@mirainetics.com" className="text-primary hover:underline">contact@mirainetics.com</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
