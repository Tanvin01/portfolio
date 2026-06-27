"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "from-violet-500 to-purple-500",
  Backend: "from-blue-500 to-cyan-500",
  Databases: "from-emerald-500 to-teal-500",
  "DevOps & Cloud": "from-orange-500 to-amber-500",
  "AI & Tooling": "from-pink-500 to-rose-500",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <SectionHeading title="Tech Stack" subtitle="Technologies I work with" />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-slate-900/80 border border-slate-700/60 rounded-2xl p-6 hover:border-slate-600 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-6 rounded-full bg-gradient-to-b ${CATEGORY_COLORS[group.category] ?? "from-slate-400 to-slate-600"}`} />
                <h3 className="font-semibold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.1 + j * 0.04 }}
                    className="bg-slate-800/80 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm px-3 py-1.5 rounded-lg transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
