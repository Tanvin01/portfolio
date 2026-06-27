"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { EXPERIENCE } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="mt-14 relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-blue-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-6 top-5 w-4 h-4 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full border-2 border-slate-950 shadow-lg shadow-violet-500/30 hidden md:block z-10" />

                <div className="bg-slate-900/80 border border-slate-700/60 rounded-2xl p-6 hover:border-violet-500/30 transition-all group">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-violet-400 font-medium flex items-center gap-1.5 mt-0.5">
                        <Briefcase className="w-3.5 h-3.5" /> {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-400 flex items-center gap-1.5 justify-end">
                        <Calendar className="w-3.5 h-3.5" /> {exp.period}
                      </p>
                      <p className="text-xs text-slate-500 flex items-center gap-1 justify-end mt-0.5">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.description.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-1.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
