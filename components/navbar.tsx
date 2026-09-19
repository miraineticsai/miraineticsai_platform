"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Solutions", href: "/#solutions" },
  { name: "Automation", href: "/#automation" },
  { name: "Demo Projects", href: "/#demo-projects" },
  { name: "Technology", href: "/#technology" },
  { name: "About", href: "/#about" },
  { name: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 border-b ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border shadow-md py-3"
          : "bg-background/80 backdrop-blur-sm border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo.svg"
              alt="Mirainetics Logo"
              width={36}
              height={36}
              className="w-9 h-9 transition-transform group-hover:scale-105"
              priority
            />
            <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 tracking-tight">
              Mirainetics
            </span>
          </Link>

          {/* Desktop Single Page Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="sm">
                <Link href="/contact">Discuss Your Idea</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 text-foreground/80 hover:text-foreground rounded-lg hover:bg-secondary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-card px-4 pt-3 pb-6 space-y-3 mt-3 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-semibold text-foreground hover:bg-secondary rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-border">
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Discuss Your Idea
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
