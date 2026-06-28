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
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
    >
      {/* Pill navbar — exactly like the screenshot */}
      <div className={`mx-auto max-w-5xl frosted rounded-full px-6 h-12 flex items-center justify-between transition-all duration-300 ${scrolled ? "shadow-lg shadow-black/30" : ""}`}>
        <motion.a href="#" whileHover={{ scale: 1.05 }}
          className="text-lg font-black tracking-tight">
          <span className="text-[#a3e635]">{PERSON.name.split(" ")[0]}</span>
          <span className="text-white/50">.</span>
        </motion.a>

        {/* Desktop — centered links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="text-sm text-white/60 hover:text-white transition-colors font-medium relative group">
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#a3e635] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={PERSON.resume} download="Tanvin_Kheni_Full_Stack.pdf"
            className="frosted-green text-[#a3e635] text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-[rgba(163,230,53,0.18)] transition-all">
            <Download className="w-3.5 h-3.5" /> CV
          </a>
        </div>

        <button className="md:hidden text-white/60 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:-10, scale:0.97 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:-10, scale:0.97 }}
            transition={{ duration:0.2 }}
            className="mx-auto max-w-5xl mt-2 frosted rounded-2xl px-6 py-4">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} onClick={() => setOpen(false)}
                    className="block text-white/70 hover:text-white py-1.5 transition-colors font-medium">{label}</a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <a href={PERSON.resume} download="Tanvin_Kheni_Full_Stack.pdf"
                  className="flex items-center gap-2 text-[#a3e635] py-1.5 font-semibold">
                  <Download className="w-4 h-4" /> Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
