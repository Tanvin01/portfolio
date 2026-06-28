"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Download, MapPin, Phone } from "lucide-react";
import { PERSON } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(30,100,15,0.7), transparent 70%)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="About Me" subtitle="Who I am" />

        <div className="grid lg:grid-cols-5 gap-8 items-start mt-12">
          {/* Bio card */}
          <motion.div className="lg:col-span-3"
            data-animate
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6, ease }}
            style={{ willChange: "transform, opacity" }}>
            <div className="frosted rounded-3xl p-7 mb-5">
              <div className="flex flex-wrap gap-4 mb-5 text-sm text-white/45">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#a3e635]" />{PERSON.location}
                </span>
                <a href={`tel:${PERSON.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#a3e635]" />{PERSON.phone}
                </a>
                <a href={`mailto:${PERSON.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#a3e635]" />{PERSON.email}
                </a>
              </div>
              {PERSON.bio.split("\n\n").map((p, i) => (
                <p key={i} className="text-white/55 leading-relaxed mb-4 text-[15px]">{p.trim()}</p>
              ))}
              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/8">
                <a href={PERSON.resume} download="Tanvin_Kheni_Full_Stack.pdf"
                  className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-full text-sm">
                  <Download className="w-4 h-4" /> Download Resume
                </a>
                {[
                  { href: PERSON.social.github, Icon: Github, label: "GitHub" },
                  { href: PERSON.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
                ].filter(s => s.href).map(({ href, Icon, label }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="btn-glass flex items-center gap-2 px-5 py-2.5 rounded-full text-sm">
                    <Icon className="w-4 h-4" /> {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick info cards */}
          <motion.div className="lg:col-span-2 grid grid-cols-2 gap-4"
            data-animate
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6, ease }}
            style={{ willChange: "transform, opacity" }}>
            {[
              { label: "Current Role", value: "Full Stack Tech Lead", sub: "Sky Infoway" },
              { label: "Experience", value: "7+ Years", sub: "Full Stack" },
              { label: "Location", value: "Surat, India", sub: "Open to remote" },
              { label: "Education", value: "B.Tech CSE", sub: "GTU — 8.5 CGPA" },
            ].map(({ label, value, sub }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.45, ease }}
                whileHover={{ y: -5 }}
                className="frosted frosted-hover rounded-2xl p-4">
                <p className="text-xs text-white/30 mb-1 uppercase tracking-wide font-medium">{label}</p>
                <p className="text-white font-bold text-sm leading-tight">{value}</p>
                <p className="text-[#a3e635]/75 text-xs mt-0.5">{sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
