import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://mirainetics.com",
  },
};

const Hero = dynamic(() => import("@/components/hero"), {
  loading: () => <div className="min-h-screen" />,
});
const Impact = dynamic(() => import("@/components/impact"));
const Technology = dynamic(() => import("@/components/technology"));
const Industries = dynamic(() => import("@/components/industries"));
const Testimonials = dynamic(() => import("@/components/testimonials"));
const CTA = dynamic(() => import("@/components/cta"));

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <section aria-label="Impact Metrics">
          <Impact />
        </section>
        <section aria-label="Technology Overview">
          <Technology />
        </section>
        <section aria-label="Industries We Serve">
          <Industries />
        </section>
        <section aria-label="Client Testimonials">
          <Testimonials />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
