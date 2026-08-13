"use client";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JWT",
  "Docker",
  "GSAP",
  "Three.js",
  "Framer Motion",
];

export default function SkillsMarquee() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--bg)]
        py-12
        text-[var(--text)]
        transition-colors
        duration-500
        sm:py-14
        md:py-16
      "
    >
      {/* TOP LINE */}

      <div
        className="
          mx-auto
          mb-8
          flex
          max-w-7xl
          items-center
          gap-4
          px-6
          sm:px-8
          md:px-10
          lg:px-16
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-neutral-400
          "
        >
          Skills
        </span>

        <div className="h-px flex-1 bg-[var(--border)]" />
      </div>

      {/* MARQUEE */}

      <div className="relative flex overflow-hidden">

        <div className="animate-marquee flex w-max items-center">

          {[...skills, ...skills, ...skills].map((skill, index) => {

            const floatClass = `skill-float-${index % 6}`;

            return (
              <div
                key={`${skill}-${index}`}
                className="
                  group
                  flex
                  items-center
                  px-3
                  sm:px-4
                  md:px-5
                "
              >

                {/* SKILL */}

                <div className={floatClass}>

                  <h2
                    className="
                      skill-text
                      text-4xl
                      font-light
                      tracking-[-0.05em]
                      transition-all
                      duration-500
                      sm:text-5xl
                      md:text-6xl
                      lg:text-7xl
                      group-hover:scale-[1.04]
                    "
                  >
                    {skill}
                  </h2>

                </div>

                {/* DOT */}

                <span
                  className="
                    mx-7
                    text-2xl
                    text-neutral-300
                    transition-colors
                    duration-500
                    dark:text-neutral-700
                    sm:mx-9
                    sm:text-3xl
                    md:mx-11
                    md:text-4xl
                  "
                >
                  •
                </span>

              </div>
            );
          })}

        </div>
      </div>

      {/* SOFT EDGE FADE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-10
          w-20
          bg-gradient-to-r
          from-[var(--bg)]
          to-transparent
          sm:w-32
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-10
          w-20
          bg-gradient-to-l
          from-[var(--bg)]
          to-transparent
          sm:w-32
        "
      />

    </section>
  );
}