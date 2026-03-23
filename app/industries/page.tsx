import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import { Stethoscope, Banknote, ShieldCheck, Truck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Mirainetics",
  description:
    "AI automation and software solutions for healthcare, finance, insurance, and logistics industries. Domain-specific systems built for enterprise scale.",
  alternates: {
    canonical: "https://mirainetics.com/industries",
  },
  openGraph: {
    title: "Industries We Serve | Mirainetics",
    description:
      "AI automation and software solutions for healthcare, finance, insurance, and logistics industries.",
    url: "https://mirainetics.com/industries",
  },
};

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: <Stethoscope className="h-10 w-10" />,
    color: "text-blue-400",
    description: "AI-driven patient eligibility verification and intelligent claims processing systems that reduce administrative burden.",
    features: ["Automated Patient Intake", "Eligibility Accuracy (98%)", "Claims Denial Remediation"]
  },
  {
    id: "finance",
    name: "Finance",
    icon: <Banknote className="h-10 w-10" />,
    color: "text-green-400",
    description: "Intelligent reconciliation and automated compliance workflows to optimize revenue and reduce manual oversight.",
    features: ["Real-time Reconciliation", "Compliance Automation", "Revenue Leakage Detection"]
  },
  {
    id: "insurance",
    name: "Insurance",
    icon: <ShieldCheck className="h-10 w-10" />,
    color: "text-purple-400",
    description: "Claims intake automation and fraud detection systems that accelerate processing times by up to 60%.",
    features: ["Fraud Prediction", "Automated Adjudication", "Claim Lifecycle Visibility"]
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: <Truck className="h-10 w-10" />,
    color: "text-cyan-400",
    description: "Route optimization and warehouse automation intelligence to drive supply chain efficiency.",
    features: ["Dynamic Routing", "Inventory Intelligence", "Shipment Tracking Bot"]
  }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Global <span className="text-secondary">Industries</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our domain-agnostic AI systems are built to scale across the world&apos;s most complex enterprise sectors.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-32">
          {industries.map((ind) => (
            <div 
              key={ind.id} 
              id={ind.id}
              className={`flex flex-col lg:flex-row items-center gap-16 p-12 glass rounded-[3rem] border-white/5 scroll-mt-32`}
            >
              <div className="lg:w-1/3">
                <div className={`mb-8 p-6 bg-white/5 w-fit rounded-[2rem] ${ind.color}`}>
                  {ind.icon}
                </div>
                <h2 className="text-4xl font-display font-bold mb-4">{ind.name}</h2>
                <p className="text-lg text-muted-foreground mb-8">{ind.description}</p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                {ind.features.map((feat) => (
                  <div key={feat} className="flex items-center p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-primary/50 transition-colors">
                    <ArrowRight className="h-5 w-5 text-primary mr-4" />
                    <span className="font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
