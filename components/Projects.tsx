"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);
  const visible = showAll ? [...featured, ...rest] : featured;

  return (
    <section id="projects" ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading title="Projects" subtitle="Things I've built" />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {visible.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-slate-900/60 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-violet-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-black text-slate-700/30 group-hover:text-slate-700/50 transition-colors select-none">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  {/* Links overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-600 text-white text-sm px-4 py-2 rounded-xl hover:border-violet-500 transition-colors"
                      onClick={e => e.stopPropagation()}>
                      <Github className="w-3.5 h-3.5" /> Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-violet-600/90 text-white text-sm px-4 py-2 rounded-xl hover:bg-violet-500 transition-colors"
                        onClick={e => e.stopPropagation()}>
                        <ExternalLink className="w-3.5 h-3.5" /> Live
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="font-bold text-white text-lg group-hover:text-violet-300 transition-colors">{project.title}</h3>
                    <p className="text-violet-400 text-sm font-medium">{project.subtitle}</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-slate-800/80 border border-slate-700 text-slate-300 text-xs px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 border border-slate-700 hover:border-violet-500/50 text-slate-300 hover:text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-violet-500/5"
          >
            {showAll ? "Show Less" : `Show All ${PROJECTS.length} Projects`}
            <motion.span animate={{ rotate: showAll ? 90 : 0 }}>
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
