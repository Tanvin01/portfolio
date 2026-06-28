"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { EXPERIENCE } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";

// Smooth easing — no blur, only transform+opacity
const ease = [0.22, 1, 0.36, 1];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] rounded-full blur-[160px] opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(60,140,10,0.7), transparent 70%)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Experience" subtitle="Professional journey" />
        <div className="mt-14 relative max-w-3xl">
          <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden md:block" />
          <div className="space-y-5">
            {EXPERIENCE.map((exp, i) => (
              <motion.div key={i}
                data-animate
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.55, ease }}
                className="relative md:pl-20">

                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.12 + 0.2, duration: 0.35, ease: "backOut" }}
                  className="absolute left-[26px] top-6 w-4 h-4 rounded-full hidden md:block z-10"
                  style={{ background: "#a3e635", boxShadow: "0 0 14px rgba(163,230,53,0.7)" }} />

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="frosted frosted-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-0.5">{exp.role}</h3>
                      <p className="text-[#a3e635] font-semibold text-sm flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" /> {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-white/40 flex items-center gap-1.5 justify-end">
                        <Calendar className="w-3.5 h-3.5 text-[#a3e635]/60" /> {exp.period}
                      </p>
                      <p className="text-xs text-white/25 flex items-center gap-1 justify-end mt-1">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((d, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-white/55 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-[#a3e635]" />{d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
