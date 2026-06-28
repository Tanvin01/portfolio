"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Star, Award } from "lucide-react";
import { EDUCATION } from "@/data/portfolio";
import SectionHeading from "./ui/SectionHeading";

const ease = [0.22, 1, 0.36, 1];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="education" ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Education" subtitle="Academic background" />
        <div className="mt-10 max-w-2xl">
          {EDUCATION.map((edu, i) => (
            <motion.div key={i}
              data-animate
              initial={{ opacity:0, x:-40 }}
              animate={inView ? { opacity:1, x:0 } : {}}
              transition={{ delay:0.15, duration:0.55, ease }}
              whileHover={{ x:6 }}
              style={{ willChange:"transform, opacity" }}
              className="frosted frosted-hover rounded-2xl p-6 flex items-start gap-5">
              <motion.div
                initial={{ scale:0, rotate:-90 }}
                animate={inView ? { scale:1, rotate:0 } : {}}
                transition={{ delay:0.3, duration:0.4, ease:"backOut" }}
                className="w-14 h-14 frosted-green rounded-2xl flex items-center justify-center shrink-0">
                <GraduationCap className="w-7 h-7 text-[#a3e635]" />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-black text-white text-xl mb-0.5">{edu.degree}</h3>
                <p className="text-[#a3e635] font-semibold text-sm mb-3">{edu.institution}</p>
                <div className="flex flex-wrap gap-3 text-sm text-white/45">
                  <span className="flex items-center gap-1.5 frosted rounded-full px-3 py-1">
                    <Calendar className="w-3.5 h-3.5 text-[#a3e635]/70" />{edu.period}
                  </span>
                  <span className="flex items-center gap-1.5 frosted-green rounded-full px-3 py-1">
                    <Star className="w-3.5 h-3.5 text-[#a3e635]" />
                    <span className="text-[#a3e635] font-semibold">{edu.grade}</span>
                  </span>
                </div>
              </div>
              <Award className="w-7 h-7 text-[#a3e635]/25 shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
