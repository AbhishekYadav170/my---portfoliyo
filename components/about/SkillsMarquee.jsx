"use client";

const skills = [
  "React",
  "Next.js",
  "GSAP",
  "Three.js",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Framer Motion",
];

export default function SkillsMarquee() {
  return (
    <section className="overflow-hidden bg-[#111111] py-20 text-white">

      <div className="relative flex whitespace-nowrap">

        <div className="animate-marquee flex items-center gap-14">

          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-14"
            >
              <h2 className="text-5xl md:text-7xl font-light tracking-tight">
                {skill}
              </h2>

              <span className="text-5xl text-neutral-500">•</span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}