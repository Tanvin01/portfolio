"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  title: string;
}

export default function ProjectCarousel({ images, title }: Props) {
  const [current, setCurrent] = useState(0);
  const [errored, setErrored] = useState<Set<number>>(new Set());

  const prev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  if (!images.length) {
    return (
      <div className="relative h-48 flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #1a0808, #0f0404)" }}>
        <div className="absolute inset-0 bg-grid opacity-30" />
        <span className="text-7xl font-black text-red-950/40 select-none relative z-10">
          {title.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-48 overflow-hidden bg-[#120808] group/carousel">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {errored.has(i) ? (
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #1a0808, #0f0404)" }}>
              <span className="text-6xl font-black text-red-950/40 select-none">{title.charAt(0)}</span>
            </div>
          ) : (
            <Image
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
              priority={i === 0}
              unoptimized
              onError={() => setErrored(prev => new Set(prev).add(i))}
            />
          )}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(10,5,5,0.9) 100%)" }} />
        </div>
      ))}

      {images.length > 1 && (
        <>
          <button onClick={prev} aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity"
            style={{ background: "rgba(10,5,5,0.85)", border: "1px solid rgba(239,68,68,0.35)" }}>
            <ChevronLeft className="w-3.5 h-3.5 text-white" />
          </button>
          <button onClick={next} aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity"
            style={{ background: "rgba(10,5,5,0.85)", border: "1px solid rgba(239,68,68,0.35)" }}>
            <ChevronRight className="w-3.5 h-3.5 text-white" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {images.map((_, i) => (
              <button key={i} aria-label={`Slide ${i + 1}`}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? "w-5 bg-[#a3e635]" : "w-1.5 bg-white/25 hover:bg-white/50"
                }`} />
            ))}
          </div>
          <div className="absolute top-2 right-2 z-20 text-xs text-white/50 px-2 py-0.5 rounded-full font-medium"
            style={{ background: "rgba(10,5,5,0.75)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {current + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}
