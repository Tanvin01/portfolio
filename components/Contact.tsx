"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import { PERSON } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";

const ease = [0.22, 1, 0.36, 1];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const items = [
    { icon: Mail, label: "Primary Email", value: PERSON.email, href: `mailto:${PERSON.email}` },
    { icon: Mail, label: "Alternate Email", value: PERSON.emailAlt, href: `mailto:${PERSON.emailAlt}` },
    { icon: Phone, label: "Phone", value: PERSON.phone, href: `tel:${PERSON.phone}` },
    { icon: MapPin, label: "Location", value: PERSON.location, href: null },
  ];

  return (
    <section id="contact" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[150px] opacity-18 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(50,130,10,0.6), transparent 70%)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12, duration: 0.5 }}
          className="text-white/45 text-base leading-relaxed mb-12 max-w-xl mt-4">
          Open to senior roles, freelance projects, or just a conversation.
          I respond within <span className="text-[#a3e635] font-semibold">24 hours</span>.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {items.map(({ icon: Icon, label, value, href }, i) => (
            <motion.div key={label}
              data-animate
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease }}
              whileHover={{ y: -5 }}
              style={{ willChange: "transform, opacity" }}>
              {href ? (
                <a href={href} className="group frosted frosted-hover rounded-2xl p-5 flex flex-col gap-3 h-full block">
                  <div className="w-10 h-10 frosted-green rounded-xl flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#a3e635]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5 uppercase tracking-wide font-medium">{label}</p>
                    <p className="text-white/70 group-hover:text-[#a3e635] transition-colors text-sm font-semibold break-all">{value}</p>
                  </div>
                </a>
              ) : (
                <div className="frosted rounded-2xl p-5 flex flex-col gap-3 h-full">
                  <div className="w-10 h-10 frosted-green rounded-xl flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#a3e635]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5 uppercase tracking-wide font-medium">{label}</p>
                    <p className="text-white/70 text-sm font-semibold">{value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-wrap items-center gap-4">
          {[
            { href: PERSON.social.github, icon: Github, label: "GitHub", handle: "Tanvin01" },
            { href: PERSON.social.linkedin, icon: Linkedin, label: "LinkedIn", handle: "tanvin-kheni" },
          ].filter(s => s.href).map(({ href, icon: Icon, label, handle }) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="group frosted frosted-hover rounded-2xl px-5 py-3 flex items-center gap-3">
              <Icon className="w-4 h-4 text-white/40 group-hover:text-[#a3e635] transition-colors" />
              <div>
                <p className="text-xs text-white/25 font-medium">{label}</p>
                <p className="text-white/65 group-hover:text-white text-sm font-bold transition-colors">{handle}</p>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#a3e635] transition-colors ml-1" />
            </motion.a>
          ))}

          <motion.a href={`mailto:${PERSON.email}`}
            whileHover={{ scale: 1.03, y: -2 }}
            className="btn-primary flex items-center gap-2 px-6 py-3 rounded-full text-sm ml-auto">
            <Mail className="w-4 h-4" /> Send Email <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
