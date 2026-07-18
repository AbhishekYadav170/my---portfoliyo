"use client";

import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";

export default function MouseGlow() {
  const glowRef = useRef(null);

  useGSAP(() => {
    const xTo = gsap.quickTo(glowRef.current, "x", {
      duration: 0.6,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(glowRef.current, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    const move = (e) => {
      xTo(e.clientX - 250);
      yTo(e.clientY - 250);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
     className="
     pointer-events-none
     fixed
     left-0
     top-0
     z-10
     mix-blend-multiply
    opacity-70
    ...
    "
      
    />
  );
}