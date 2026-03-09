import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import { Cpu, Zap, Layers, ShieldCheck, Database, Repeat } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Technology Architecture | MiraiNeticsAI",
  description:
    "Explore the multi-layered AI technology architecture powering MiraiNeticsAI — including our automation engine, AI decision layer, and enterprise integration APIs.",
  alternates: {
    canonical: "https://mirainetics.ai/technology",
  },
  openGraph: {
    title: "AI Technology Architecture | MiraiNeticsAI",
    description:
      "Explore the multi-layered AI technology architecture powering MiraiNeticsAI.",
    url: "https://mirainetics.ai/technology",
  },
};

const techStack = [
  {
    title: "Automation Engine",
    description: "Built on high-performance infrastructure, our engine handles 300+ checks per minute with 98% accuracy.",
    icon: <Repeat className="h-6 w-6" />,
  },
  {
    title: "AI Decision Layer",
    description: "Proprietary models trained on domain-specific data to make intelligent decisions in real-time.",
    icon: <Cpu className="h-6 w-6" />,
  },
  {
    title: "Integration APIs",
    description: "Seamlessly connect with any enterprise system through our robust, modular API layer.",
    icon: <Layers className="h-6 w-6" />,
  },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                Our AI <br />
                <span className="text-primary">Technology Architecture</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The MiraiNeticsAI platform is built on a multi-layered architecture designed for speed, accuracy, and enterprise-grade security.
              </p>
              <div className="space-y-6">
                {techStack.map((tech) => (
                  <div key={tech.title} className="flex items-start gap-4 glass p-6 rounded-2xl border-white/5">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{tech.title}</h3>
                      <p className="text-muted-foreground text-sm">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/10 blur-[120px] rounded-full" />
              <div className="glass p-1 rounded-[3rem] border-white/10 overflow-hidden">
                <div className="aspect-square bg-accent/50 rounded-[2.8rem] flex flex-col items-center justify-center p-12 space-y-8">
                  {/* Visualizing layers */}
                  <div className="w-full h-16 glass border-primary/30 rounded-xl flex items-center justify-center font-bold text-primary">User Interface</div>
                  <div className="w-full h-1 bg-white/10" />
                  <div className="w-full h-16 glass border-primary/30 rounded-xl flex items-center justify-center font-bold text-primary">Automation Engine</div>
                  <div className="w-full h-1 bg-white/10" />
                  <div className="w-full h-16 glass border-secondary/30 rounded-xl flex items-center justify-center font-bold text-secondary">AI Decision Layer</div>
                  <div className="w-full h-1 bg-white/10" />
                  <div className="w-full h-16 glass border-white/30 rounded-xl flex items-center justify-center font-bold">Integration APIs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-accent/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <h2 className="text-4xl font-display font-bold mb-4">Security & Reliability</h2>
                <p className="text-muted-foreground">Enterprise-grade infrastructure you can trust.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass p-8 rounded-2xl text-center">
                    <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-bold mb-4">SOC2 Type II</h3>
                    <p className="text-sm text-muted-foreground">Fully compliant with industry standards for data security and privacy.</p>
                </div>
                <div className="glass p-8 rounded-2xl text-center">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-bold mb-4">99.99% Uptime</h3>
                    <p className="text-sm text-muted-foreground">Mission-critical reliability for your most important workflows.</p>
                </div>
                <div className="glass p-8 rounded-2xl text-center">
                    <Database className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-bold mb-4">End-to-End Encryption</h3>
                    <p className="text-sm text-muted-foreground">Your data is encrypted at rest and in transit using AES-256.</p>
                </div>
             </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
