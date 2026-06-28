"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, ArrowDown, MapPin, Phone, Download, Code2, Zap } from "lucide-react";
import Image from "next/image";
import { PERSON } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Static background blobs — no scroll parallax (performance) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[600px] h-[600px] rounded-full blur-[140px] animate-float"
          style={{ background:"radial-gradient(circle, rgba(80,160,20,0.5), transparent 70%)" }} />
        <div className="absolute top-40 right-20 w-[400px] h-[400px] rounded-full blur-[120px] animate-float-delayed"
          style={{ background:"radial-gradient(circle, rgba(20,120,60,0.35), transparent 70%)" }} />
        <div className="absolute bottom-20 left-1/3 w-[500px] h-[300px] rounded-full blur-[100px]"
          style={{ background:"radial-gradient(ellipse, rgba(163,230,53,0.1), transparent 70%)" }} />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="container mx-auto px-6 pt-28 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
              className="text-[#a3e635] font-bold text-sm tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-[#a3e635]" />Hello, I'm {PERSON.name.split(" ")[0]}
            </motion.p>

            <motion.h1
              initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:0.3, duration:0.9, ease:[0.22,1,0.36,1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-5 tracking-tight">
              Senior<br />
              <span className="text-[#a3e635]" style={{ filter:"drop-shadow(0 0 30px rgba(163,230,53,0.5))" }}>
                Full Stack
              </span><br />
              Engineer<span className="text-[#a3e635]">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.55 }}
              className="text-white/50 font-medium mb-6 h-7 text-base">
              <TypeAnimation sequence={[
                "Next.js & React Specialist",2000,"Node.js API Architect",2000,
                "MERN Stack Expert",2000,"TypeScript Engineer",2000,"AI Product Builder",2000,
              ]} wrapper="span" speed={50} repeat={Infinity} />
            </motion.div>

            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.65 }}
              className="flex flex-wrap gap-4 text-sm text-white/50 mb-6">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#a3e635]" />{PERSON.location}</span>
              <a href={`tel:${PERSON.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#a3e635]" />{PERSON.phone}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.7 }}
              className="text-white/50 text-[15px] leading-relaxed max-w-lg mb-8">
              {PERSON.bio.split("\n\n")[0].slice(0,165)}...
            </motion.p>

            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.85 }}
              className="flex flex-wrap gap-3 mb-8">
              <a href="#projects" className="btn-primary px-6 py-3 rounded-full text-sm">
                View Projects
              </a>
              <a href={PERSON.resume} download="Tanvin_Kheni_Full_Stack.pdf"
                className="btn-glass flex items-center gap-2 px-6 py-3 rounded-full text-sm">
                <Download className="w-4 h-4" /> Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1 }}
              className="flex items-center gap-3">
              {[
                { href:PERSON.social.github, icon:Github, label:"GitHub" },
                { href:PERSON.social.linkedin, icon:Linkedin, label:"LinkedIn" },
                { href:`mailto:${PERSON.email}`, icon:Mail, label:"Email" },
              ].filter(s=>s.href).map(({ href, icon:Icon, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale:1.1, y:-2 }}
                  className="w-10 h-10 frosted rounded-xl flex items-center justify-center text-white/50 hover:text-[#a3e635] transition-colors"
                  aria-label={label}><Icon className="w-4 h-4" /></motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity:0, x:60, scale:0.9 }}
            animate={{ opacity:1, x:0, scale:1 }}
            transition={{ delay:0.4, duration:1, ease:[0.22,1,0.36,1] }}
            className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-8 rounded-3xl blur-3xl opacity-30 animate-float"
                style={{ background:"radial-gradient(circle, rgba(100,200,20,0.6), transparent 70%)" }} />

              {/* Photo card — frosted glass frame */}
              <div className="relative w-72 h-80 md:w-80 md:h-[420px] rounded-3xl overflow-hidden gradient-border neon-ring"
                style={{ background:"rgba(255,255,255,0.06)", backdropFilter:"blur(20px)" }}>
                <Image src={PERSON.photo} alt={PERSON.name} fill sizes="320px"
                  className="object-cover object-top" priority unoptimized
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity="0"; }} />
                <div className="absolute inset-0 -z-10 flex items-center justify-center"
                  style={{ background:"rgba(20,50,10,0.7)", backdropFilter:"blur(20px)" }}>
                  <span className="text-8xl font-black gradient-text select-none">TK</span>
                </div>
                {/* Bottom frosted overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 frosted rounded-b-3xl">
                  <p className="text-white font-bold text-sm">{PERSON.name}</p>
                  <p className="text-[#a3e635] text-xs">{PERSON.role}</p>
                </div>
              </div>

              {/* Mini cards — like the screenshot bottom cards */}
              <motion.div
                animate={{ y:[0,-6,0] }} transition={{ repeat:Infinity, duration:3 }}
                className="absolute -bottom-6 -right-6 frosted-green rounded-2xl px-4 py-3"
                style={{ boxShadow:"0 8px 24px rgba(0,0,0,0.3)" }}>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#a3e635]" />
                  <div>
                    <p className="text-xs text-white/50">Experience</p>
                    <p className="text-white font-bold text-sm">7+ Years</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y:[0,-8,0] }} transition={{ repeat:Infinity, duration:4, delay:1 }}
                className="absolute -top-4 -right-8 frosted rounded-2xl px-4 py-3"
                style={{ boxShadow:"0 8px 24px rgba(0,0,0,0.3)" }}>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#a3e635]" />
                  <div>
                    <p className="text-xs text-white/50">Projects</p>
                    <p className="text-white font-bold text-sm">50+ Done</p>
                  </div>
                </div>
              </motion.div>

              {PERSON.available && (
                <motion.div
                  animate={{ y:[0,-5,0] }} transition={{ repeat:Infinity, duration:3.5 }}
                  className="absolute -left-6 top-1/2 frosted rounded-2xl px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3e635] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a3e635]" />
                    </span>
                    <span className="text-xs text-white font-semibold">Available</span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom frosted feature cards — like the screenshot */}
        <motion.div
          initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:1.1, duration:0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { icon:Code2, title:"Full Stack", desc:"MERN, Next.js, TypeScript" },
            { icon:Zap, title:"Real-Time Apps", desc:"Socket.io, WebRTC, WebSockets" },
            { icon:Mail, title:"Cloud & DevOps", desc:"AWS, Docker, Kubernetes" },
            { icon:Github, title:"Open Source", desc:"9 repos on GitHub" },
          ].map(({ icon:Icon, title, desc }, i) => (
            <motion.div key={title}
              initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:1.2+i*0.08 }}
              className="frosted rounded-2xl p-4 frosted-hover">
              <Icon className="w-5 h-5 text-[#a3e635] mb-2" />
              <p className="text-white font-semibold text-sm">{title}</p>
              <p className="text-white/40 text-xs mt-0.5">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.a href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y:[0,8,0] }} transition={{ repeat:Infinity, duration:2 }}>
        <div className="frosted rounded-full px-4 py-2 flex items-center gap-2 text-white/50 text-xs hover:text-white transition-colors">
          <ArrowDown className="w-3.5 h-3.5" /> Scroll down
        </div>
      </motion.a>
    </section>
  );
}
