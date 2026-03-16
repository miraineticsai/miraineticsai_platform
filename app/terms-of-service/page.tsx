import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Mirainetics',
  description: 'Terms of Service for Mirainetics - Enterprise AI and Automation Services.',
};

export default function TermsOfService() {
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
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/10 blur-[100px] rounded-full -z-10" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full -z-10" />

          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12 border-b border-white/10 pb-6">
            Last Updated: {lastUpdated}
          </p>

          <div className="space-y-8 text-white/80 leading-relaxed font-light">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the website and services offered by Mirainetics ("Company", "we", "us", "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not access or use our Website or Services.
              </p>
              <p>
                These Terms apply to all visitors, users, clients, and others who access the Website or engage us for our service offerings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">2. Description of Services</h2>
              <p>
                Mirainetics provides specialized technology solutions, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Enterprise-grade AI systems and automation engines</li>
                <li>Web and mobile application development</li>
                <li>Revenue cycle management optimization</li>
                <li>Data analytics and predictive intelligence</li>
              </ul>
              <p>
                Specific engagements for these services are generally governed by separate, detailed Master Service Agreements (MSAs) or Statements of Work (SOWs) which take precedence over these general Website Terms of Service in the event of a conflict.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">3. User Obligations</h2>
              <p>When using our Website and Services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate, current, and complete information when contacting us or requesting a demo.</li>
                <li>Use the Website only for lawful purposes and in an honorable manner.</li>
                <li>Not engage in any activity that interferes with or disrupts the operation of the Website or the servers and networks connected to it.</li>
                <li>Not attempt to gain unauthorized access to any portion of the Website or our internal AI infrastructure.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">4. Intellectual Property Rights</h2>
              <p>
                The Website and its entire contents, features, and functionality (including but not limited to all information, software, algorithms, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Mirainetics, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p>
                You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website, except as incidental to normal web browsing.
              </p>
            </section>

             <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">5. AI and Automation Disclaimers</h2>
              <p>
                While Mirainetics strives to implement highly accurate and efficient AI and automation workflows (as indicated by our targets of 99.8% accuracy), AI systems are probabilistic by nature. We do not warrant that the output of our AI systems will be perfectly error-free in every instance. Our services are intended to augment human decision-making and operational efficiency, not necessarily to replace critical human oversight unless explicitly defined in a separate Service Level Agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">6. Limitation of Liability</h2>
              <p>
                IN NO EVENT WILL MIRAINETICS, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE, OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">7. Governing Law and Jurisdiction</h2>
              <p>
                All matters relating to the Website and these Terms of Service, and any dispute or claim arising therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be governed by and construed in accordance with the internal laws of India without giving effect to any choice or conflict of law provision or rule.
              </p>
              <p>
                Any legal suit, action, or proceeding arising out of, or related to, these Terms of Service or the Website shall be instituted exclusively in the courts located in Pune, Maharashtra, India.
              </p>
            </section>

            <section className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 mt-12">
              <h2 className="text-2xl font-bold text-white tracking-tight">8. Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns about these Terms of Service, please contact us at:
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
