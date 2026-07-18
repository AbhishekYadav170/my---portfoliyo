"use client";

import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";

const tech = [
  { name: "React", x: "8%", y: "18%" },
  { name: "Next.js", x: "78%", y: "15%" },
  { name: "GSAP", x: "12%", y: "70%" },
  { name: "Node.js", x: "82%", y: "72%" },
  { name: "MongoDB", x: "45%", y: "82%" },
  { name: "Tailwind", x: "62%", y: "34%" },
];

export default function FloatingTech() {
  const refs = useRef([]);

  useGSAP(() => {
    refs.current.forEach((item, i) => {
      if (!item) return;

      gsap.to(item, {
        y: "+=20",
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(item, {
        x: "+=10",
        duration: 5 + i,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    });
  });

  return (
    <>
      {tech.map((item, index) => (
        <div
          key={item.name}
          ref={(el) => (refs.current[index] = el)}
          style={{
            left: item.x,
            top: item.y,
          }}
          className="
            absolute
            z-10
            rounded-full
            border
            border-neutral-300
            bg-white/70
            backdrop-blur-xl
            px-5
            py-2
            text-sm
            text-neutral-700
            shadow-lg
            pointer-events-none
          "
        >
          {item.name}
        </div>
      ))}
    </>
  );
}