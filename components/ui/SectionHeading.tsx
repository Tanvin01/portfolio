"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props { title: string; subtitle: string; }

export default function SectionHeading({ title, subtitle }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
      <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-2">{subtitle}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {title}
        <span className="text-violet-400">.</span>
      </h2>
    </motion.div>
  );
}
