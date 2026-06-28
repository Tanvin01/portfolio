"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";
import ProjectCarousel from "./ui/ProjectCarousel";

const ease = [0.22, 1, 0.36, 1];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = PROJECTS.filter(p => p.featured);
  const rest = PROJECTS.filter(p => !p.featured);
  const visible = showAll ? [...featured, ...rest] : featured;

  return (
    <section id="projects" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(20,100,40,0.7), transparent 70%)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Live Projects" subtitle="Real client work" />
        <motion.p initial={{ opacity:0, y:16 }} animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ delay:0.12, duration:0.5 }}
          className="text-white/35 text-sm mt-2 mb-14">
          Production applications built and shipped for clients globally.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          <AnimatePresence>
            {visible.map((project, i) => (
              <motion.article key={project.title}
                data-animate
                initial={{ opacity:0, y:40 }}
                animate={inView ? { opacity:1, y:0 } : {}}
                exit={{ opacity:0, y:20 }}
                transition={{ delay:i*0.09, duration:0.55, ease }}
                whileHover={{ y:-5 }}
                style={{ willChange:"transform, opacity" }}
                className="group frosted frosted-hover rounded-3xl overflow-hidden flex flex-col">

                <div className="relative">
                  <ProjectCarousel images={project.images} title={project.title} />
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background:"rgba(6,14,6,0.5)", backdropFilter:"blur(3px)" }}>
                    <span className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5 rounded-full">
                      <ExternalLink className="w-4 h-4" /> View Live
                    </span>
                  </a>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-black text-white text-lg group-hover:text-[#a3e635] transition-colors">{project.title}</h3>
                      <p className="text-[#a3e635]/75 text-xs font-bold uppercase tracking-wider mt-0.5">{project.subtitle}</p>
                    </div>
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="shrink-0 w-8 h-8 frosted-green rounded-lg flex items-center justify-center text-[#a3e635] ml-3">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <motion.div initial={{ opacity:0, y:16 }} animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ delay:0.5 }} className="text-center mt-10">
          <button onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 btn-glass px-6 py-2.5 rounded-full text-sm font-semibold">
            {showAll ? "Show Less" : `Show All ${PROJECTS.length} Projects`}
            <motion.span animate={{ rotate: showAll ? 90:0 }} transition={{ duration:0.2 }}>
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
