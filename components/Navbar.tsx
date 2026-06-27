"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { PERSON } from "@/data/portfolio";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60 shadow-xl shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a href="#" className="text-xl font-bold gradient-text" whileHover={{ scale: 1.05 }}>
          {PERSON.name.split(" ")[0]}<span className="text-white">.</span>
        </motion.a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="text-sm text-slate-400 hover:text-white transition-colors relative group">
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-violet-400 to-blue-400 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a href={PERSON.resume} download
              className="flex items-center gap-1.5 text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg transition-colors font-medium">
              <Download className="w-3.5 h-3.5" /> Resume
            </a>
          </li>
        </ul>

        {/* Mobile */}
        <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800"
          >
            <ul className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} onClick={() => setOpen(false)}
                    className="block text-slate-300 hover:text-white py-2 transition-colors">{label}</a>
                </li>
              ))}
              <li>
                <a href={PERSON.resume} download className="flex items-center gap-2 text-violet-400 py-2">
                  <Download className="w-4 h-4" /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
