"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Download, MapPin, Building2 } from "lucide-react";
import { PERSON } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading title="About Me" subtitle="Who I am and what I do" />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-14">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden gradient-border glow-md">
                <Image
                  src={PERSON.photo}
                  alt={PERSON.name}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 shadow-xl"
              >
                <p className="text-xs text-slate-400">Currently at</p>
                <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-violet-400" /> Sky Infoways
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <MapPin className="w-4 h-4 text-violet-400" /> {PERSON.location}
            </div>

            {PERSON.bio.split("\n\n").map((para, i) => (
              <p key={i} className="text-slate-300 leading-relaxed mb-4 text-[15px]">{para.trim()}</p>
            ))}

            <div className="flex flex-wrap gap-3 mt-6">
              <a href={PERSON.resume} download
                className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20">
                <Download className="w-4 h-4" /> Download Resume
              </a>
              {[
                { href: PERSON.social.github, Icon: Github, label: "GitHub" },
                { href: PERSON.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${PERSON.email}`, Icon: Mail, label: "Email" },
              ].filter(s => s.href).map(({ href, Icon, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 px-5 py-2.5 rounded-xl text-sm transition-all">
                  <Icon className="w-4 h-4" /> {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
