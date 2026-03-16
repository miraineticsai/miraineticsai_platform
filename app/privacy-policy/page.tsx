import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Mirainetics',
  description: 'Privacy Policy for Mirainetics - Automating the Future of Intelligent Workflows.',
};

export default function PrivacyPolicy() {
  const lastUpdated = "March 14, 2026";

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="glass rounded-2xl p-8 md:p-12 border-white/10 shadow-2xl relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full -z-10" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 blur-[100px] rounded-full -z-10" />

          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12 border-b border-white/10 pb-6">
            Last Updated: {lastUpdated}
          </p>

          <div className="space-y-8 text-white/80 leading-relaxed font-light">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">1. Introduction</h2>
              <p>
                Welcome to Mirainetics ("Company", "we", "our", "us"). We respect your privacy and are committed to protecting it through our compliance with this policy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI automation, web & mobile development, revenue cycle management, and data analytics services (collectively, the "Services").
              </p>
              <p>
                Please read this policy carefully. If you do not agree with our policies and practices, your choice is not to use our Services. By accessing or using this Website, you agree to this Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">2. Information We Collect</h2>
              <p>We collect several types of information from and about users of our Services, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-white/90">Personal Identification Information:</strong> Name, email address, postal address, telephone number, and business details when you contact us, request a demo, or engage our Services.</li>
                <li><strong className="text-white/90">Technical Data:</strong> Internet Protocol (IP) address, browser type and version, time zone setting, operating system, and platform used to access the Website.</li>
                <li><strong className="text-white/90">Usage Data:</strong> Details of your visits to our Website, including traffic data, location data, logs, and other communication data and the resources that you access and use.</li>
                <li><strong className="text-white/90">Client Operational Data:</strong> When providing enterprise AI automation and analytics, we may process specific datasets provided by you. This data is handled strictly under separate Non-Disclosure Agreements (NDAs) and Service Level Agreements (SLAs).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">3. How We Use Your Information</h2>
              <p>We use information that we collect about you or that you provide to us:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To present our Website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To execute and manage our enterprise AI workflows, automation services, and consulting.</li>
                <li>To fulfill any other purpose for which you provide it (e.g., booking a demo).</li>
                <li>To notify you about changes to our Services or any products we offer.</li>
                <li>To improve our Website, marketing, and customer relationships.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">4. Disclosure of Your Information</h2>
              <p>We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To our subsidiaries and affiliates.</li>
                <li>To contractors, service providers, and other third parties we use to support our business (e.g., cloud hosting providers necessary for our AI infrastructure).</li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>To comply with any court order, law, or legal process, including responding to any government or regulatory request.</li>
                <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Mirainetics, our customers, or others.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">5. Data Security</h2>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. Given the nature of our business in deploying enterprise-grade AI systems, we leverage advanced security protocols, encryption, and secure cloud infrastructures.
              </p>
              <p>
                Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
              </p>
            </section>

             <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">6. Third-Party Links</h2>
              <p>
                Our Website may contain links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">7. Changes to Our Privacy Policy</h2>
              <p>
                It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page or via email. The date the privacy policy was last revised is identified at the top of the page.
              </p>
            </section>

            <section className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 mt-12">
              <h2 className="text-2xl font-bold text-white tracking-tight">8. Contact Information</h2>
              <p className="mb-4">
                To ask questions or comment about this privacy policy and our privacy practices, please contact us at:
              </p>
              <div className="space-y-1 text-muted-foreground font-medium">
                <p>Mirainetics</p>
                <p>Pune, Maharashtra, India</p>
                <p>Email: <a href="mailto:contact@mirainetics.com" className="text-primary hover:underline">contact@mirainetics.com</a></p>
                
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
