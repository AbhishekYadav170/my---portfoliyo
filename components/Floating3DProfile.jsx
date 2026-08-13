"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Floating3DProfile() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const glow = glowRef.current;

    if (!container || !image) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();

      const mouseX = e.clientX - (rect.left + rect.width / 2);
      const mouseY = e.clientY - (rect.top + rect.height / 2);

      const rotateY = (mouseX / rect.width) * 24;
      const rotateX = -(mouseY / rect.height) * 18;

      const moveX = (mouseX / rect.width) * 18;
      const moveY = (mouseY / rect.height) * 18;

      gsap.to(image, {
        rotateX,
        rotateY,
        x: moveX,
        y: moveY,
        duration: 0.6,
        ease: "power3.out",
        overwrite: true,
      });

      if (glow) {
        gsap.to(glow, {
          x: moveX * 1.5,
          y: moveY * 1.5,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true,
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      if (glow) {
        gsap.to(glow, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        relative
        flex
        h-[420px]
        w-full
        items-center
        justify-center
        [perspective:1200px]
      "
    >
      {/* Glow */}

      <div
        ref={glowRef}
        className="
          absolute
          h-[280px]
          w-[280px]
          rounded-full
          bg-fuchsia-500/20
          blur-[100px]
        "
      />

      {/* 3D Card */}

      <div
        ref={imageRef}
        className="
          relative
          h-[360px]
          w-[280px]
          overflow-hidden
          rounded-[32px]
          border
          border-white/40
          bg-white/20
          shadow-[0_35px_80px_rgba(0,0,0,0.25)]
          backdrop-blur-sm
          [transform-style:preserve-3d]
          will-change-transform
        "
      >
        <img
          src="/profile.jpg"
          alt="Abhishek Yadav"
          className="
            h-full
            w-full
            object-cover
            object-top
            select-none
            pointer-events-none
          "
        />

        {/* Glass overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-tr
            from-fuchsia-500/10
            via-transparent
            to-cyan-400/20
          "
        />

        {/* Bottom gradient */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-1
            w-full
            bg-gradient-to-r
            from-fuchsia-500
            via-cyan-400
            to-emerald-400
          "
        />

        {/* 3D depth layer */}

        <div
          className="
            pointer-events-none
            absolute
            inset-4
            rounded-[24px]
            border
            border-white/20
            [transform:translateZ(25px)]
          "
        />
      </div>
    </div>
  );
}