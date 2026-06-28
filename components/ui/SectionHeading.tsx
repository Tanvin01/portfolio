"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props { title: string; subtitle: string; }

export default function SectionHeading({ title, subtitle }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "transform, opacity" }}>
      <p className="text-[#a3e635] text-xs font-bold uppercase tracking-[0.22em] mb-2 flex items-center gap-2">
        <span className="w-6 h-px bg-[#a3e635]" />{subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-black text-white">
        {title}<span className="text-[#a3e635]" style={{ textShadow: "0 0 18px rgba(163,230,53,0.45)" }}>.</span>
      </h2>
    </motion.div>
  );
}
