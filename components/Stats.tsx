"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/data/portfolio";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="frosted rounded-3xl px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/8">
            {STATS.map(({ value, label }, i) => (
              <motion.div key={label}
                initial={{ opacity:0, y:24 }}
                animate={inView ? { opacity:1, y:0 } : {}}
                transition={{ delay:i*0.1, duration:0.5, ease:[0.22,1,0.36,1] }}
                className="text-center md:px-8">
                <div className="text-4xl md:text-5xl font-black text-white mb-1">{value}</div>
                <div className="text-white/40 text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
