// // "use client";

// // export default function Story() {
// //   return (
// //     <section className="min-h-screen flex items-center px-8 md:px-16 lg:px-24">

// //       <div className="max-w-6xl">

// //         <h2 className="text-[4rem] md:text-[7rem] lg:text-[9rem] leading-[0.95] font-light">
// //           I DON'T JUST
// //           <br />
// //           BUILD WEBSITES.
// //           <br />
// //           I CREATE
// //           <br />
// //           EXPERIENCES.
// //         </h2>

// //         <div className="mt-20 max-w-2xl ml-auto">

// //           <p className="text-xl leading-10 text-neutral-600">
// //             I enjoy creating digital experiences that combine
// //             beautiful design, smooth animations and clean code.
// //             Every project is an opportunity to build something
// //             memorable.
// //           </p>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }







// "use client";

// import TextReveal from "@/components/TextReveal";

// export default function Story() {
//   return (
//     <section className="bg-[#f5f5f5] text-[#010101] py-40">

//       <div className="max-w-7xl mx-auto px-8 md:px-16">

//         {/* Top */}

//         <div className="flex justify-between items-center mb-24">

//           <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
//             02 / Story
//           </p>

//           <div className="h-px bg-neutral-300 flex-1 ml-10" />

//         </div>

//         {/* Main Text */}

//         <div className="max-w-6xl">

//           <TextReveal splitBy="words">

//             <h2 className="text-[3.5rem] md:text-[6rem] lg:text-[8rem] leading-[0.92] font-light">

//               I DON'T BUILD

//               <br />

//               WEBSITES.

//               <br />
//               <br />

//               I BUILD

//               <br />

//               DIGITAL

//               <br />

//               EXPERIENCES.

//               <br />
//               <br />

//               THAT PEOPLE

//               <br />

//               REMEMBER.

//             </h2>

//           </TextReveal>

//         </div>

//         {/* Bottom */}

//         <div className="grid md:grid-cols-2 gap-16 mt-32 border-t border-neutral-300 pt-12">

//           <div>

//             <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
//               Philosophy
//             </p>

//           </div>

//           <div>

//             <p className="text-xl leading-10 text-neutral-600">

//               Every website I create combines
//               clean code, thoughtful design,
//               smooth animation and user-focused
//               experiences. My goal is not just
//               to build websites, but to create
//               products that people enjoy using.

//             </p>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }





// "use client";

// import { useRef } from "react";
// import gsap, { ScrollTrigger, useGSAP } from "@/libs/gsap";

// import TextReveal from "@/components/TextReveal";

// const lines = [
//   "I DON'T BUILD",
//   "WEBSITES.",
//   "",
//   "I BUILD",
//   "DIGITAL",
//   "EXPERIENCES.",
//   "",
//   "THAT PEOPLE",
//   "REMEMBER.",
// ];

// export default function Story() {
//   return (
//     <section className="relative bg-[#f5f5f5] text-[#010101] py-40 overflow-hidden">

//       <div className="max-w-7xl mx-auto px-8 md:px-16">

//         {/* Top */}

//         <div className="flex items-center justify-between mb-24">

//           <span className="uppercase tracking-[0.35em] text-xs text-neutral-500">
//             02 / STORY
//           </span>

//           <div className="flex-1 h-px bg-neutral-300 ml-10" />

//         </div>

//         {/* Main Story */}

//         <div className="space-y-6">

//           {lines.map((line, index) =>

//             line === "" ? (

//               <div key={index} className="h-12" />

//             ) : (

//               <TextReveal
//                 key={index}
//                 trigger="scroll"
//                 splitBy="words"
//                 duration={0.9}
//                 stagger={0.08}
//               >
//                 <h2
//                   className="
//                   story-line
//                   text-[3rem]
//                   md:text-[5rem]
//                   lg:text-[7rem]
//                   xl:text-[8rem]
//                   font-light
//                   leading-[0.9]
//                   tracking-[-0.05em]
//                   cursor-default
//                   transition-all
//                   duration-300
//                   "
//                 >
//                   {line}
//                 </h2>
//               </TextReveal>

//             )

//           )}

//         </div>

//         {/* Bottom */}

//         <div className="grid md:grid-cols-2 gap-16 mt-40 border-t border-neutral-300 pt-12">

//           <div>

//             <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">

//               Philosophy

//             </p>

//           </div>

//           <div>

//             <p className="text-xl leading-10 text-neutral-600 max-w-xl">

//               Every project I build focuses on
//               performance, accessibility,
//               animation and user experience.
//               My goal is to create interfaces
//               that feel smooth, modern and
//               memorable.

//             </p>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }









// "use client";

// import { useRef } from "react";
// import gsap, { ScrollTrigger, useGSAP } from "@/libs/gsap";

// const lines = [
//   "I DON'T BUILD",
//   "WEBSITES.",
//   "I BUILD",
//   "DIGITAL",
//   "EXPERIENCES.",
//   "THAT PEOPLE",
//   "REMEMBER."
// ];

// export default function Story() {

//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const lineRefs = useRef([]);
//   const philosophyRef = useRef(null);


//   useGSAP(() => {

//     const lines = lineRefs.current.filter(Boolean);

//     gsap.set(lines, {
//         yPercent: 120,
//         opacity: 0,
//     });

//     gsap.set(philosophyRef.current, {
//         opacity: 0,
//         y: 80,
//     });

//     gsap.set(titleRef.current, {
//         opacity: 0,
//         x: -40,
//     });

//     const tl = gsap.timeline({

//         scrollTrigger: {

//             trigger: sectionRef.current,

//             start: "top top",

//             end: "+=220%",

//             scrub: 1,

//             pin: true,

//             anticipatePin: 1,

//         },

//     });

//     // Heading

//     tl.to(titleRef.current, {

//         opacity: 1,

//         x: 0,

//         duration: 0.5,

//         ease: "power3.out",

//     });

//     // Story Lines

//     tl.to(lines, {

//         yPercent: 0,

//         opacity: 1,

//         stagger: 0.25,

//         ease: "power4.out",

//         duration: 1,

//     });

//     // Philosophy

//     tl.to(philosophyRef.current, {

//         opacity: 1,

//         y: 0,

//         duration: 0.8,

//         ease: "power3.out",

//     }, "-=0.2");

// }, { scope: sectionRef });

//   return (

//     <section
//       ref={sectionRef}
//       className="relative h-screen overflow-hidden bg-[#f5f5f5] text-[#010101]"
//     >

//       {/* Background Grid */}

//       <div className="absolute inset-0 opacity-[0.04] pointer-events-none">

//         <div
//           className="
//           absolute
//           inset-0
//           bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)]
//           bg-[size:28px_28px]
//           "
//         />

//       </div>

//       {/* Blur Circle */}

//       <div
//         className="
//         absolute
//         -top-52
//         right-0
//         h-[500px]
//         w-[500px]
//         rounded-full
//         bg-neutral-300/20
//         blur-[120px]
//         "
//       />

//       {/* Main Container */}

//       <div
//         className="
//         relative
//         z-10
//         max-w-7xl
//         mx-auto
//         px-8
//         md:px-16
//         min-h-screen
//         flex
//         flex-col
//         justify-center
//         "
//       >

//         {/* Top */}

//         <div className="flex items-center gap-8 mb-24">

//           <div
//             ref={titleRef}
//             className="
//             uppercase
//             tracking-[0.35em]
//             text-xs
//             text-neutral-500
//             whitespace-nowrap
//             "
//           >
//             02 / STORY
//           </div>

//           <div className="flex-1 h-px bg-neutral-300" />

//         </div>

//         {/* Story */}

//         <div className="space-y-4">

//           {lines.map((line, index) => (

//             <div
//               key={index}
//               className="overflow-hidden"
//             >

//               <h2

//                 ref={(el) => lineRefs.current[index] = el}

//                 className="
//                 story-line

//                 text-[3.2rem]

//                 md:text-[5rem]

//                 lg:text-[7rem]

//                 xl:text-[8rem]

//                 2xl:text-[9rem]

//                 font-light

//                 tracking-[-0.06em]

//                 leading-[0.88]

//                 cursor-default

//                 select-none
//                 "

//               >

//                 {line}

//               </h2>

//             </div>

//           ))}

//         </div>

//         {/* Bottom */}

//         <div

//           ref={philosophyRef}

//           className="
//           mt-32
//           grid
//           lg:grid-cols-2
//           gap-20
//           border-t
//           border-neutral-300
//           pt-12
//           "

//         >

//           <div>

//             <p
//               className="
//               uppercase
//               tracking-[0.35em]
//               text-xs
//               text-neutral-500
//               "
//             >
//               Philosophy
//             </p>

//           </div>

//           <div>

//             <p
//               className="
//               text-lg
//               md:text-xl
//               leading-9
//               text-neutral-600
//               max-w-xl
//               "
//             >

//               I believe great digital products are
//               created by combining thoughtful design,
//               smooth animation, accessibility and
//               performance. Every interaction should
//               feel effortless and memorable.

//             </p>

//           </div>

//         </div>

//       </div>

//     </section>

//   );

// }








"use client";

import { useRef } from "react";
import gsap, { ScrollTrigger, useGSAP } from "@/libs/gsap";
import MagneticHover from "@/components/MagneticHover";
import MouseGlow from "@/components/MouseGlow";


const storyLines = [
  "I DON'T BUILD",
  "WEBSITES.",
  "I BUILD",
  "DIGITAL",
  "EXPERIENCES.",
  "THAT PEOPLE",
  "REMEMBER.",
];

export default function Story() {

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const philosophyRef = useRef(null);
  const lineRefs = useRef([]);
  const glowRef = useRef(null);

  
  useGSAP(() => {

    const ctx = gsap.context(() => {

        const lines = lineRefs.current.filter(Boolean);

        // Initial State
        gsap.set(titleRef.current, {
            opacity: 0,
            y: -30,
        });

        gsap.set(lines, {
            opacity: 0,
            yPercent: 120,
        });

        gsap.set(philosophyRef.current, {
            opacity: 0,
            y: 80,
        });

        gsap.to(glowRef.current, {

    x: 120,

    y: -80,

    duration: 8,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut",

});

        // Timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=250%",
                pin: true,
                scrub: 1.2,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        // Header
        tl.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power3.out",
        });

        // Story Lines
        tl.to(lines, {
            opacity: 1,
            yPercent: 0,
            stagger: 0.25,
            duration: 1,
            ease: "power4.out",
        });

        // Philosophy
        tl.to(
            philosophyRef.current,
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            },
            "-=0.2"
        );

    }, sectionRef);

    return () => ctx.revert();

}, { scope: sectionRef });
  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#f5f5f5]"
    >
  {/* ================= Mouse Glow ================= */}
  <MouseGlow />

  {/* ================= Background ================= */}
  <div className="absolute inset-0 z-0">

    {/* Grid */}
    <div
      className="
      absolute
      inset-0
      opacity-[0.03]
      bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)]
      bg-[size:26px_26px]
      "
    />

    {/* Static Glow */}
    <div
      ref={glowRef}
      className="
      absolute
      left-1/2
      top-1/2
      h-[600px]
      w-[600px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#d8cfc4]/35
      blur-[140px]
      "
    />

  </div>

  {/* ================= Content ================= */}
  <div
    className="
    relative
    z-20
    mx-auto
    flex
    h-full
    max-w-[1700px]
    flex-col
    justify-center
    px-8
    md:px-16
    "
  >

    {/* Header */}
    <div className="mb-24 flex items-center gap-8">

      <span
        ref={titleRef}
        className="
        text-xs
        uppercase
        tracking-[0.35em]
        text-neutral-500
        "
      >
        02 / STORY
      </span>

      <div className="h-px flex-1 bg-neutral-300" />

    </div>

    {/* Story */}
    <div className="space-y-1">

      {storyLines.map((line, index) => (

        <div
          key={index}
          className="overflow-hidden"
        >
          <MagneticHover strength={35}>

            <h2
              ref={(el) => (lineRefs.current[index] = el)}
              className="
              story-line
              cursor-default
              select-none
              font-extralight
              leading-[0.82]
              tracking-[-0.08em]
              text-[4rem]
              md:text-[6rem]
              lg:text-[8rem]
              xl:text-[9rem]
              2xl:text-[10rem]
              "
            >
              {line}
            </h2>

          </MagneticHover>
        </div>

      ))}

    </div>

    {/* Bottom */}
    <div
      ref={philosophyRef}
      className="
      mt-24
      grid
      gap-16
      border-t
      border-[#E5E2DC]
      pt-10
      lg:grid-cols-2
      "
    >

      <p
        className="
        text-xs
        uppercase
        tracking-[0.35em]
        text-neutral-500
        "
      >
        Philosophy
      </p>

      <div
        className="
        rounded-3xl
        border
        border-neutral-300
        bg-white/40
        backdrop-blur-md
        p-8
        shadow-sm
        "
      >
        <p
          className="
          text-lg
          leading-9
          text-neutral-600
          md:text-xl
          "
        >
          I design and develop digital experiences that combine
          performance, interaction, accessibility and modern motion.
        </p>
      </div>

    </div>

  </div>

  {/* ================= Scroll Hint ================= */}
  <div
    className="
    absolute
    bottom-10
    left-1/2
    z-30
    -translate-x-1/2
    text-xs
    uppercase
    tracking-[0.4em]
    text-neutral-400
    "
  >
    <span>Scroll</span>

    <div className="mt-3 flex justify-center animate-bounce text-lg">
      ↓
    </div>
  </div>

</section>

  );

}
