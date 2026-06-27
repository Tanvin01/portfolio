"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/data/portfolio";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="border-y border-slate-800/60 bg-slate-900/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-1">{value}</div>
              <div className="text-slate-400 text-sm">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
