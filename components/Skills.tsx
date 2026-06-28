"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";

const ease = [0.22, 1, 0.36, 1];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="skills" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background:"radial-gradient(ellipse, rgba(60,150,20,0.6), transparent 70%)" }} />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Tech Stack" subtitle="What I work with" />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((group, i) => (
            <motion.div key={group.category}
              data-animate
              initial={{ opacity:0, y:35 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay:i*0.08, duration:0.5, ease }}
              whileHover={{ y:-6 }}
              style={{ willChange:"transform, opacity" }}
              className="frosted frosted-hover rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-6 rounded-full bg-[#a3e635]"
                  style={{ boxShadow:"0 0 8px rgba(163,230,53,0.55)" }} />
                <h3 className="font-bold text-white text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map(skill => (
                  <span key={skill} className="tech-tag cursor-default">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
