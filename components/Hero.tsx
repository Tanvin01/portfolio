"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, ArrowDown, Sparkles, MapPin } from "lucide-react";
import { PERSON } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-sm text-violet-300 mb-6"
          >
            {PERSON.available && <><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />Open to new opportunities</>}
            {!PERSON.available && <><Sparkles className="w-3.5 h-3.5" />{PERSON.tagline}</>}
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">{PERSON.name.split(" ")[0]}</span>
            <br />
            <span className="text-white">{PERSON.name.split(" ")[1]}</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl font-medium text-slate-300 mb-3 h-12"
          >
            <TypeAnimation
              sequence={[
                "Senior Full Stack Engineer",
                2000,
                "Next.js & React Specialist",
                2000,
                "Node.js & API Architect",
                2000,
                "AI Product Builder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-1.5 text-slate-500 text-sm mb-8"
          >
            <MapPin className="w-3.5 h-3.5" /> {PERSON.location} · 8+ Years Experience
          </motion.p>

          {/* Bio excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-10"
          >
            I build scalable full-stack products — from real-time systems and AI-powered tools to e-commerce platforms.
            Currently at <span className="text-white font-medium">Sky Infoways</span>, open to senior and lead roles globally.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#projects"
              className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40">
              View My Work
            </a>
            <a href="#contact"
              className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 text-white font-medium px-6 py-3 rounded-xl transition-all">
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-5"
          >
            {[
              { href: PERSON.social.github, icon: Github, label: "GitHub" },
              { href: PERSON.social.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${PERSON.email}`, icon: Mail, label: "Email" },
            ].filter(s => s.href).map(({ href, icon: Icon, label }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 flex items-center justify-center bg-slate-800/80 hover:bg-violet-500/20 border border-slate-700 hover:border-violet-500/50 rounded-lg text-slate-400 hover:text-violet-400 transition-all"
                aria-label={label}>
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
        <ArrowDown className="w-5 h-5 text-slate-500 hover:text-slate-300 transition-colors" />
      </motion.a>
    </section>
  );
}
