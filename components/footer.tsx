import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github, Mail, MapPin } from "lucide-react";

const footerNav = [
  {
    title: "Product",
    links: [
      { name: "Solutions", href: "/#solutions" },
      { name: "Automation", href: "/#automation" },
      { name: "Demo Projects", href: "/#demo-projects" },
      { name: "Technology", href: "/#technology" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/#about" },
      { name: "How We Work", href: "/#process" },
      { name: "FAQ", href: "/#faq" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

const socials = [
  { icon: Twitter, href: "https://twitter.com/mirainetics", label: "Follow Mirainetics on Twitter/X" },
  { icon: Linkedin, href: "https://linkedin.com/company/mirainetics", label: "Mirainetics on LinkedIn" },
  { icon: Github, href: "https://github.com/mirainetics", label: "Mirainetics on GitHub" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0C1024" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 lg:pt-16 lg:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-3 space-y-5">
            <Link href="/" className="flex items-center space-x-2.5 group w-fit" aria-label="Mirainetics home">
              <Image
                src="/logo.svg"
                alt="Mirainetics Logo"
                width={32}
                height={32}
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
              />
              <span
                className="text-[1.05rem] font-display font-bold tracking-tight"
                style={{
                  background: "linear-gradient(100deg, #9950FF 0%, #7B5CFF 30%, #4D70FF 70%, #16B8D4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Mirainetics
              </span>
            </Link>

            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#AAB1C5" }}>
              Build AI Products. Automate Your Business. We design and build practical AI-powered software,
              intelligent agents, and workflow automations for modern businesses.
            </p>

            <div className="space-y-2 text-xs" style={{ color: "#AAB1C5" }}>
              <a
                href="mailto:contact@mirainetics.com"
                className="flex items-center gap-2 hover:text-white transition-colors w-fit"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                contact@mirainetics.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Pune, Maharashtra, India
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#AAB1C5" }}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.title} className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FFFFFF" }}>
                {col.title}
              </p>
              <ul className="space-y-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-[#16B8D4]"
                      style={{ color: "#DCE1F0" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "#AAB1C5" }}
        >
          <p>&copy; {new Date().getFullYear()} Mirainetics. All rights reserved.</p>
          <p className="font-mono text-[10px] tracking-wider opacity-60">
            AI Engineering + Product Studio · Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
}
