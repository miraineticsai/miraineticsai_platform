import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";

export const metadata: Metadata = {
  title: "About Mirainetics | Our Mission & Values",
  description:
    "Learn about Mirainetics — an AI automation and software development company focused on eliminating manual workflows through intelligent systems.",
  alternates: {
    canonical: "https://mirainetics.com/about",
  },
  openGraph: {
    title: "About Mirainetics | Our Mission & Values",
    description:
      "Learn about Mirainetics — an AI automation and software development company focused on eliminating manual workflows.",
    url: "https://mirainetics.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              Our <span className="text-primary">Mission</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Mirainetics builds intelligent automation systems that eliminate manual workflows across industries using AI, automation, and data intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
            <div className="glass p-12 rounded-[2.5rem] border-white/10">
              <h2 className="text-3xl font-display font-bold mb-6">More Than Just Automation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Mirainetics combines deep expertise with AI-driven solutions to optimize business operations and revenue systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From intelligent automation to strategic AI consulting, we help organizations navigate the future of operational efficiency with confidence.
              </p>
            </div>
            <div className="glass aspect-[4/3] rounded-[2.5rem] border-white/10 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="text-center p-8">
                     <p className="text-4xl font-display font-bold text-primary mb-2">Billion Dollar</p>
                     <p className="text-muted-foreground uppercase tracking-[0.2em] font-bold text-sm">Vision</p>
                </div>
            </div>
          </div>

          <div className="space-y-12 mb-32">
             <div className="text-center mb-12">
                <h2 className="text-4xl font-display font-bold">Our Values</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Innovation", desc: "Pushing the boundaries of what AI can achieve in the enterprise." },
                  { title: "Integrity", desc: "Building systems that are transparent, secure, and reliable." },
                  { title: "Impact", desc: "Focusing on delivering measurable value to our partners." }
                ].map((val) => (
                    <div key={val.title} className="glass p-8 rounded-2xl border-white/5 text-center">
                        <h3 className="text-xl font-bold text-primary mb-4">{val.title}</h3>
                        <p className="text-muted-foreground text-sm">{val.desc}</p>
                    </div>
                ))}
             </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
