// "use client";

// const skills = [
//   "JavaScript",
//   "React",
//   "Next.js",
//   "TypeScript",
//   "Tailwind CSS",
//   "Node.js",
//   "Express.js",
//   "MongoDB",
//   "JWT",
//   "Docker",
//   "GSAP",
//   "Three.js",
//   "Framer Motion",
// ];

// export default function SkillsMarquee() {
//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-[var(--bg)]
//         py-12
//         text-[var(--text)]
//         transition-colors
//         duration-500
//         sm:py-14
//         md:py-16
//       "
//     >
//       {/* TOP LINE */}

//       <div
//         className="
//           mx-auto
//           mb-8
//           flex
//           max-w-7xl
//           items-center
//           gap-4
//           px-6
//           sm:px-8
//           md:px-10
//           lg:px-16
//         "
//       >
//         <span
//           className="
//             text-[9px]
//             uppercase
//             tracking-[0.35em]
//             text-neutral-400
//           "
//         >
//           Skills
//         </span>

//         <div className="h-px flex-1 bg-[var(--border)]" />
//       </div>

//       {/* MARQUEE */}

//       <div className="relative flex overflow-hidden">

//         <div className="animate-marquee flex w-max items-center">

//           {[...skills, ...skills, ...skills].map((skill, index) => {

//             const floatClass = `skill-float-${index % 6}`;

//             return (
//               <div
//                 key={`${skill}-${index}`}
//                 className="
//                   group
//                   flex
//                   items-center
//                   px-3
//                   sm:px-4
//                   md:px-5
//                 "
//               >

//                 {/* SKILL */}

//                 <div className={floatClass}>

//                   <h2
//                     className="
//                       skill-text
//                       text-4xl
//                       font-light
//                       tracking-[-0.05em]
//                       transition-all
//                       duration-500
//                       sm:text-5xl
//                       md:text-6xl
//                       lg:text-7xl
//                       group-hover:scale-[1.04]
//                     "
//                   >
//                     {skill}
//                   </h2>

//                 </div>

//                 {/* DOT */}

//                 <span
//                   className="
//                     mx-7
//                     text-2xl
//                     text-neutral-300
//                     transition-colors
//                     duration-500
//                     dark:text-neutral-700
//                     sm:mx-9
//                     sm:text-3xl
//                     md:mx-11
//                     md:text-4xl
//                   "
//                 >
//                   •
//                 </span>

//               </div>
//             );
//           })}

//         </div>
//       </div>

//       {/* SOFT EDGE FADE */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-y-0
//           left-0
//           z-10
//           w-20
//           bg-gradient-to-r
//           from-[var(--bg)]
//           to-transparent
//           sm:w-32
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-y-0
//           right-0
//           z-10
//           w-20
//           bg-gradient-to-l
//           from-[var(--bg)]
//           to-transparent
//           sm:w-32
//         "
//       />

//     </section>
//   );
// }



// "use client";

// const skills = [
//   "JavaScript",
//   "React",
//   "Next.js",
//   "TypeScript",
//   "Tailwind CSS",
//   "Node.js",
//   "Express.js",
//   "MongoDB",
//   "JWT",
//   "Docker",
//   "GSAP",
//   "Three.js",
//   "Framer Motion",
//   "LangChain",
//   "Gemini AI",
// ];

// export default function SkillsMarquee() {
//   return (
//     <section
//       id="skills"
//       className="
//         relative
//         overflow-hidden
//         bg-[var(--bg)]
//         text-[var(--text)]
//         py-16
//         sm:py-20
//         md:py-24
//       "
//     >
//       <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

//         {/* TOP LABEL */}

//         <div className="flex items-center gap-4">
//           <span
//             className="
//               whitespace-nowrap
//               text-[9px]
//               uppercase
//               tracking-[0.35em]
//               text-neutral-500
//               sm:text-xs
//             "
//           >
//             05 / SKILLS
//           </span>

//           <div className="h-px flex-1 bg-[var(--border)]" />
//         </div>

//         {/* SKILLS */}

//         <div className="mt-12 overflow-hidden sm:mt-14">

//           <div className="relative flex whitespace-nowrap">

//             <div className="animate-marquee flex items-center">

//               {[...skills, ...skills, ...skills].map(
//                 (skill, index) => {

//                   const offset =
//                     Math.sin(index * 0.9) * 12;

//                   return (
//                     <div
//                       key={index}
//                       className="flex items-center"
//                     >
//                       <h2
//                         className="
//                           text-4xl
//                           font-light
//                           tracking-[-0.04em]
//                           sm:text-5xl
//                           md:text-6xl
//                           lg:text-7xl
//                         "
//                         style={{
//                           transform: `translateY(${offset}px)`,
//                         }}
//                       >
//                         {skill}
//                       </h2>

//                       <span
//                         className="
//                           mx-7
//                           text-2xl
//                           text-neutral-400
//                           sm:mx-9
//                           sm:text-3xl
//                           md:mx-11
//                           md:text-4xl
//                         "
//                         style={{
//                           transform: `translateY(${-offset}px)`,
//                         }}
//                       >
//                         •
//                       </span>
//                     </div>
//                   );
//                 }
//               )}

//             </div>
//           </div>

//         </div>

//         {/* EDUCATION */}

//         <div className="mt-20 sm:mt-24 md:mt-28">

//           <div className="flex items-center gap-4">
//             <span
//               className="
//                 whitespace-nowrap
//                 text-[9px]
//                 uppercase
//                 tracking-[0.35em]
//                 text-neutral-500
//                 sm:text-xs
//               "
//             >
//               EDUCATION
//             </span>

//             <div className="h-px flex-1 bg-[var(--border)]" />
//           </div>

//           <div
//             className="
//               mt-8
//               rounded-[24px]
//               p-[1.5px]
//               bg-[linear-gradient(
//                 90deg,
//                 #ff00cc,
//                 #7928ff,
//                 #00e5ff,
//                 #00ff88,
//                 #ffe600,
//                 #ff4d00,
//                 #ff00cc
//               )]
//               bg-[length:400%_400%]
//               animate-gradient
//             "
//           >
//             <div
//               className="
//                 rounded-[22px]
//                 bg-[var(--surface)]
//                 p-6
//                 sm:p-8
//                 md:p-10
//               "
//             >

//               <div
//                 className="
//                   flex
//                   flex-col
//                   gap-6
//                   md:flex-row
//                   md:items-center
//                   md:justify-between
//                 "
//               >

//                 <div>

//                   <p
//                     className="
//                       text-[9px]
//                       uppercase
//                       tracking-[0.3em]
//                       text-neutral-400
//                       sm:text-xs
//                     "
//                   >
//                     Bachelor&apos;s Degree
//                   </p>

//                   <h3
//                     className="
//                       mt-3
//                       text-2xl
//                       font-light
//                       tracking-[-0.04em]
//                       sm:text-3xl
//                       md:text-4xl
//                     "
//                   >
//                     BCA — Bachelor of Computer Applications
//                   </h3>

//                   <p
//                     className="
//                       mt-3
//                       text-sm
//                       text-neutral-500
//                       sm:text-base
//                     "
//                   >
//                     Veer Bahadur Singh Purvanchal University
//                   </p>

//                 </div>

//                 <div
//                   className="
//                     shrink-0
//                     text-left
//                     md:text-right
//                   "
//                 >
//                   <p
//                     className="
//                       text-[9px]
//                       uppercase
//                       tracking-[0.3em]
//                       text-neutral-400
//                       sm:text-xs
//                     "
//                   >
//                     Graduated
//                   </p>

//                   <p
//                     className="
//                       mt-2
//                       text-xl
//                       font-light
//                       sm:text-2xl
//                     "
//                   >
//                     2025
//                   </p>
//                 </div>

//               </div>

//             </div>
//           </div>

//         </div>

//         {/* BOTTOM */}

//         <div
//           className="
//             mt-12
//             border-t
//             border-[var(--border)]
//             pt-5
//             text-[9px]
//             uppercase
//             tracking-[0.25em]
//             text-neutral-400
//             sm:mt-14
//             sm:text-xs
//           "
//         >
//           Frontend • Backend • AI • Creative Development
//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";

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
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".skill-item");

      items.forEach((item, index) => {
        const direction = index % 2 === 0 ? 1 : -1;

        gsap.to(item, {
          y: direction * 10,
          duration: 1.8 + (index % 4) * 0.25,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.08,
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[var(--bg)]
        py-12
        text-[var(--text)]
        sm:py-14
        md:py-16
      "
    >
      {/* TOP LINE */}

      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-8 flex items-center gap-4">
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-neutral-500
              sm:text-xs
            "
          >
            03 / SKILLS
          </span>

          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
      </div>

      {/* MARQUEE */}

      <div className="relative flex overflow-hidden whitespace-nowrap">

        <div className="animate-marquee flex items-center">

          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill}-${index}`}
              className="
                skill-item
                flex
                items-center
                will-change-transform
              "
            >

              {/* SKILL */}

              <h2
                className="
                  bg-gradient-to-r
                  from-[var(--text)]
                  via-neutral-400
                  to-[var(--text)]
                  bg-clip-text
                  text-4xl
                  font-light
                  tracking-[-0.04em]
                  text-transparent
                  transition-opacity
                  duration-500
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  dark:via-neutral-500
                "
              >
                {skill}
              </h2>

              {/* DOT */}

              <span
                className="
                  mx-7
                  text-2xl
                  text-neutral-400
                  sm:mx-9
                  sm:text-3xl
                  md:mx-11
                  md:text-4xl
                "
              >
                •
              </span>

            </div>
          ))}

        </div>
      </div>

      {/* BOTTOM FADE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          w-16
          bg-gradient-to-r
          from-[var(--bg)]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          w-16
          bg-gradient-to-l
          from-[var(--bg)]
          to-transparent
        "
      />
    </section>
  );
}