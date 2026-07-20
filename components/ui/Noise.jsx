"use client";

export default function Noise() {
  return (
    <div
      className="
      pointer-events-none
      absolute
      inset-0
      opacity-[0.035]
      mix-blend-soft-light
      "
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, black 1px, transparent 1px),
          radial-gradient(circle at 80% 70%, black 1px, transparent 1px),
          radial-gradient(circle at 40% 80%, black 1px, transparent 1px)
        `,
        backgroundSize: "18px 18px",
      }}
    />
  );
}