import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import { ArrowRight, CheckCircle2, TrendingUp, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | Mirainetics",
  description:
    "Real-world case studies showing how Mirainetics automation and AI solutions have transformed operations in healthcare, finance, and insurance.",
  alternates: {
    canonical: "https://miraineticsai.com/case-studies",
  },
  openGraph: {
    title: "Case Studies | Mirainetics",
    description:
      "Real-world case studies showing how Mirainetics solutions have transformed enterprise operations.",
    url: "https://miraineticsai.com/case-studies",
  },
};

const caseStudies = [
  {
    title: "Revolutionizing Healthcare Intake",
    client: "St. Jude's Medical Center",
    domain: "Healthcare",
    challenge: "Manual patient eligibility verification was leading to a 15% denial rate and long wait times.",
    solution: "Implemented Mirainetics's Advanced Automation engine for real-time eligibility checks.",
    impact: "75% reduction in denials and $2M annual savings in administrative overhead.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    metrics: ["98% Accuracy", "Instant Processing", "SOC2 Compliant"]
  },
  {
    title: "AI-Driven Revenue Recognition",
    client: "NextGen FinTech Solutions",
    domain: "Finance",
    challenge: "Complex reconciliation across 12 different payment channels took weeks each month.",
    solution: "Deployed our Data Analytics & Integration layer with proprietary legacy connectors.",
    impact: "Reconciliation time reduced from 14 days to 4 hours. 25% increase in bottom-line visibility.",
    icon: <TrendingUp className="h-8 w-8 text-secondary" />,
    metrics: ["25% Rev Increase", "Real-time Dashboards", "Zero Errors"]
  },
  {
    title: "Automating Claims Adjudication",
    client: "SecureGuard Insurance",
    domain: "Insurance",
    challenge: "Processing high-volume small claims manually was inefficient and prone to human error.",
    solution: "Used our AI Decision Layer to automate valid claim approvals and flag fraud.",
    impact: "60% faster processing time and 100% processing of backlog within the first month.",
    icon: <Clock className="h-8 w-8 text-primary" />,
    metrics: ["60% Faster", "Fraud Detection", "24/7 Operation"]
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Success <span className="text-primary">Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world impact across diverse domains. See how Mirainetics transforms enterprise operations.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-16">
          {caseStudies.map((cs, index) => (
            <div 
              key={cs.client}
              className="glass p-8 lg:p-16 rounded-[3rem] border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/5 rounded-xl">
                      {cs.icon}
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-secondary">{cs.domain}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{cs.title}</h2>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase mb-2">The Challenge</p>
                      <p className="text-lg text-foreground/80">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase mb-2">The Solution</p>
                      <p className="text-lg text-foreground/80">{cs.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="bg-accent/50 p-8 rounded-3xl border border-white/10 mb-8">
                     <p className="text-sm font-bold text-primary uppercase mb-4">Measured Impact</p>
                     <p className="text-2xl font-display font-bold mb-8">{cs.impact}</p>
                     <div className="grid grid-cols-2 gap-4">
                        {cs.metrics.map(m => (
                            <div key={m} className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-secondary" />
                                <span className="text-sm font-medium">{m}</span>
                            </div>
                        ))}
                     </div>
                  </div>
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                    Read Full Case Study <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
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
