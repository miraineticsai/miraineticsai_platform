"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-[#10152E]/95 backdrop-blur-xl border-b border-[#E5E8F0] dark:border-white/10 shadow-sm py-3"
            : "bg-white/80 dark:bg-transparent backdrop-blur-sm border-b border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2.5 group" aria-label="Mirainetics home">
              <Image
                src="/logo.svg"
                alt="Mirainetics Logo"
                width={32}
                height={32}
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                priority
              />
              <span
                className="text-[1.1rem] font-display font-bold tracking-tight"
                style={{
                  background: "var(--mn-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Mirainetics
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-0.5" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-[#4F5870] hover:text-[#151A2E] dark:text-[#AAB1C5] dark:hover:text-white hover:bg-[#F7F8FC] dark:hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-2.5">
              <ThemeToggle />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="sm"
                  className="font-semibold rounded-lg shadow-md"
                  style={{ background: "var(--mn-gradient)", border: "none", color: "#fff" }}
                >
                  <Link href="/contact">Discuss Your Idea</Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center space-x-1.5">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="p-2 text-[#4F5870] hover:text-[#151A2E] dark:text-[#AAB1C5] dark:hover:text-white rounded-lg hover:bg-[#F7F8FC] dark:hover:bg-white/5 transition-colors"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[3.75rem] left-0 right-0 z-50 md:hidden bg-white dark:bg-[#10152E] border-b border-[#E5E8F0] dark:border-white/10 shadow-xl"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center px-4 py-3 text-base font-semibold text-[#151A2E] dark:text-[#E9ECF7] hover:text-[#9950FF] hover:bg-[#FAF7FF] dark:hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 pb-1 border-t border-[#E5E8F0] dark:border-white/10 mt-2">
                <Button
                  asChild
                  className="w-full font-semibold"
                  style={{ background: "var(--mn-gradient)", border: "none", color: "#fff" }}
                >
                  <Link href="/contact" onClick={closeMenu}>
                    Discuss Your Idea
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
