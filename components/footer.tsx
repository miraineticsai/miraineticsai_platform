import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github, Cpu } from "lucide-react";

const footerLinks = [
  {
    title: "Solutions",
    links: [
      { name: "Advanced Automation", href: "/solutions#automation" },
      { name: "Revenue Management", href: "/solutions#rcm" },
      { name: "Data Analytics", href: "/solutions#analytics" },
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
              <Cpu className="h-8 w-8 text-primary" />
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                MiraiNeticsAI
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Automating the Future of Intelligent Workflows. We build enterprise-grade AI systems that unlock operational efficiency.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: miraineticsai@gmail.com</p>
              <p>Phone: +91 8446049402 | +91 83780 36177</p>
              <p>Pune, Maharashtra, India</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
                {column.title}
              </h4>
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
            © {new Date().getFullYear()} MiraiNeticsAI Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
