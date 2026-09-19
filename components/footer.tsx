import Link from "next/link";
import Image from "next/image";

const footerNav = [
  {
    title: "Navigation",
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

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/logo.svg"
                alt="Mirainetics Logo"
                width={36}
                height={36}
                className="w-9 h-9 transition-transform group-hover:scale-105"
              />
              <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 tracking-tight">
                Mirainetics
              </span>
            </Link>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-sm">
              Build AI Products. Automate Your Business. We design and build practical AI-powered software, intelligent agents, and workflow business automations.
            </p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>Email: <a href="mailto:contact@mirainetics.com" className="text-primary hover:underline font-medium">contact@mirainetics.com</a></p>
              <p>Location: Pune, Maharashtra, India</p>
            </div>
          </div>

          {/* Links Columns */}
          {footerNav.map((col) => (
            <div key={col.title} className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                {col.title}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <p>&copy; {new Date().getFullYear()} Mirainetics. All rights reserved.</p>
          <p className="font-mono text-[11px]">AI Engineering + Product Studio</p>
        </div>
      </div>
    </footer>
  );
}
