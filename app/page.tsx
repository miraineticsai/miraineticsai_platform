import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Impact from "@/components/impact";
import Technology from "@/components/technology";
import Industries from "@/components/industries";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Technology />
        <Industries />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
