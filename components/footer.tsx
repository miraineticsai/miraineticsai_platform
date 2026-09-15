import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = [
  {
    title: "Solutions",
    links: [
      { name: "Advanced Automation", href: "/solutions/advanced-automation" },
      { name: "Web & Mobile Development", href: "/solutions/web-mobile-development" },
      { name: "Revenue Management", href: "/solutions/revenue-cycle-management" },
      { name: "Data Analytics", href: "/solutions/data-analytics" },
    ],
  },
  {
    title: "Industries",
    links: [
      { name: "Healthcare", href: "/industries#healthcare" },
      { name: "Finance", href: "/industries#finance" },
      { name: "Insurance", href: "/industries#insurance" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const socials = [
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "GitHub", href: "https://github.com", icon: Github },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-accent py-12 lg:py-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2.5">
              <Image
                src="/logo.svg"
                alt="Mirainetics Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Mirainetics
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Automating the Future of Intelligent Workflows. We build
              enterprise-grade AI systems that unlock operational efficiency.
            </p>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <p>contact@mirainetics.com</p>
              <p>Pune, Maharashtra, India</p>
            </div>
            <div className="flex space-x-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.name}
                    href={s.href}
                    aria-label={`Visit our ${s.name} page`}
                    className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-wider text-foreground">
                {column.title}
              </p>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mirainetics Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
