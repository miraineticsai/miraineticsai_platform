import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github, Cpu } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-accent py-12 lg:py-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
  <Image
    src="/logo.svg"
    alt="Mirainetics Logo"
    width={48}
    height={48}
    className="animate-pulse"
  />
  <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
    Mirainetics
  </span>
</Link>
            <p className="text-muted-foreground max-w-sm">
              Automating the Future of Intelligent Workflows. We build enterprise-grade AI systems that unlock operational efficiency.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: contact@mirainetics.com</p>
              <p>Phone: +91 8446049402 | +91 83780 36177</p>
              <p>Pune, Maharashtra, India</p>
            </div>
          <div className="flex space-x-4">
  <Link
    href="https://twitter.com"
    aria-label="Visit our Twitter page"
    className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
  >
    <Twitter className="h-5 w-5" aria-hidden="true" />
    <span className="sr-only">Twitter</span>
  </Link>

  <Link
    href="https://linkedin.com"
    aria-label="Visit our LinkedIn page"
    className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
  >
    <Linkedin className="h-5 w-5" aria-hidden="true" />
    <span className="sr-only">LinkedIn</span>
  </Link>

  <Link
    href="https://github.com"
    aria-label="Visit our GitHub repository"
    className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
  >
    <Github className="h-5 w-5" aria-hidden="true" />
    <span className="sr-only">GitHub</span>
  </Link>
</div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
             <p className="text-sm font-bold uppercase tracking-wider text-foreground">
  {column.title}
</p>
              <ul className="space-y-2">
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
            © {new Date().getFullYear()} Mirainetics Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
