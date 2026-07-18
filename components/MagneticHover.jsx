"use client";

import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";

export default function MagneticHover({
  children,
  strength = 40,
  className = "",
}) {
  const wrapperRef = useRef(null);

  useGSAP(() => {
    const element = wrapperRef.current;

    const xTo = gsap.quickTo(element, "x", {
      duration: 0.5,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(element, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    const handleMove = (e) => {
      const rect = element.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

    //   xTo(x * 0.35);
    //   yTo(y * 0.35);

    const factor = strength / 100;

       xTo(x * factor);
       yTo(y * factor);
    };

    const handleLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}