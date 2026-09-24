// "use client";

// import Image from "next/image";
// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// export default function AboutIntro() {
//   const sectionRef = useRef(null);

//   useGSAP(() => {
//     gsap.from(".intro-reveal", {
//       y: 40,
//      // opacity: 0,
//       duration: 0.8,
//       stagger: 0.08,
//       ease: "power4.out",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 80%",
//         once: true,
//       },
//     });
//   }, { scope: sectionRef });

//   return (
//     <section
//       ref={sectionRef}
//       className="
//       py-16
//       md:py-20
//       lg:py-24
//       bg-[var(--bg)]
//       text-[var(--text)]
//       "
//     >
//       <div
//         className="
//         max-w-7xl
//         mx-auto
//         px-6
//         md:px-10
//         lg:px-16
//         "
//       >
//         {/* Section Label */}

//         <p
//           className="
//           intro-reveal
//           uppercase
//           tracking-[0.45em]
//           text-xs
//           text-neutral-500
//           "
//         >
//           ABOUT ME
//         </p>

//         {/* Heading */}

//         <h2
//           className="
//           intro-reveal
//           mt-8
//           text-5xl
//           md:text-7xl
//           lg:text-[7rem]
//           font-light
//           leading-[0.9]
//           tracking-[-0.08em]
//           max-w-5xl
//           "
//         >
//           I BUILD
//           <br />
//           DIGITAL
//           <br />
//           EXPERIENCES
//           <br />
//           PEOPLE REMEMBER.
//         </h2>

//         {/* Main Layout */}

//         <div
//           className="
//           mt-24
//           grid
//           grid-cols-1
//           lg:grid-cols-2
//           gap-16
//           items-center
//           "
//         >
//           {/* Image */}

//           <div className="intro-reveal relative">

//             <div
//               className="
//               overflow-hidden
//               rounded-[36px]
//               border
//               border-[var(--border)]
//               "
//             >
//               <Image
//                 src="/profile.jpg"
//                 alt="Abhishek Yadav"
//                 width={900}
//                 height={1100}
//                 priority
//                 className="
//                 h-[480px]
//                 sm:h-[540px]
//                 lg:h-[600px]
//                 w-full
//                 object-cover
//                 transition-transform
//                 duration-700
//                 hover:scale-105
//                 "
//               />
//             </div>

//             {/* Floating Card */}

//             <div
//               className="
//               absolute
//               bottom-8
//               left-8
//               rounded-3xl
//               bg-white/90
//               dark:bg-neutral-900/90
//               backdrop-blur-xl
//               px-7
//               py-5
//               shadow-xl
//               "
//             >
//               <p
//                 className="
//                 text-xs
//                 uppercase
//                 tracking-[0.3em]
//                 text-neutral-500
//                 "
//               >
//                 Creative Developer
//               </p>

//               <h3
//                 className="
//                 mt-2
//                 text-2xl
//                 font-light
//                 "
//               >
//                 Design.
//                 <br />
//                 Development.
//                 <br />
//                 Experience.
//               </h3>
//             </div>
//           </div>

//           {/* Right Side */}

//           <div className="intro-reveal">

//             <p
//               className="
//               text-2xl
//               leading-relaxed
//               text-neutral-500
//               "
//             >
//               Hi, I'm <strong className="text-[var(--text)]">Abhishek Yadav</strong>,
//               a Full Stack Developer passionate about creating
//               modern, fast and immersive web experiences.
//             </p>

//             <p
//               className="
//               mt-8
//               text-lg
//               leading-9
//               text-neutral-500
//               "
//             >
//               My journey started with curiosity and has grown into a passion
//               for building products that combine clean architecture,
//               thoughtful user experience and smooth animations.

//               <br />
//               <br />

//               I specialize in React, Next.js, Node.js, MongoDB,
//               GSAP and modern frontend engineering.
//             </p>

//           </div>

//         </div>

//         {/* ================= INFO CARDS ================= */}

//         <div
//            className="
//            mt-16
//            md:mt-20
//            grid
//            grid-cols-1
//            sm:grid-cols-2
//            xl:grid-cols-4
//            gap-6
//            "
//         >

//         {[
//            {
//               title: "Location",
//               value: "Jaunpur, UP",
//               icon: "📍",
//             },
//            {
//               title: "Education",
//               value: "BCA Graduate",
//               icon: "🎓",
//             },
//            {
//               title: "Speciality",
//              value: "MERN + AI",
//              icon: "💻",
//            },
//           {
//               title: "Status",
//               value: "Open To Work",
//               icon: "🚀",
//           },
//         ].map((item) => (

//         <div
//            key={item.title}
//            className="
//             intro-reveal
//            rounded-[28px]
//            border
//            border-[var(--border)]
//            bg-[var(--surface)]
//            p-8
//           transition-all
//           duration-500
//           hover:-translate-y-4
//           hover:scale-[1.02]
//         hover:border-black
//          hover:shadow-[0_30px_80px_rgba(0,0,0,.12)]
//         "
//         >

//          <div className="text-4xl">
//             {item.icon}
//          </div>

//         <p
//           className="
//           mt-5
//           text-xs
//           uppercase
//           tracking-[0.35em]
//           text-neutral-500
//         "
//         >
//           {item.title}
//       </p>

//        <h3
//           className="
//           mt-4
//           text-2xl
//           font-light
//           leading-snug
//          "
//         >
//         {item.value}
//       </h3>

//      </div>

//     ))}

//    </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { ArrowUpRight, Code2, MapPin, Sparkles, UserRound } from "lucide-react";
// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// export default function AboutIntro() {
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       gsap.from(".about-reveal", {
//         opacity: 0,
//         y: 60,
//         duration: 1,
//         stagger: 0.12,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 78%",
//           once: true,
//         },
//       });
//     },
//     { scope: sectionRef },
//   );

//   return (
//     <section
//       ref={sectionRef}
//       id="about"
//       className="relative w-full overflow-hidden py-24 md:py-32"
//     >
//       <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
//         {/* HEADER */}
//         <div className="about-reveal">
//           <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
//             02 / ABOUT ME
//           </p>

//           <div className="mt-5 h-[3px] w-24 bg-black" />
//         </div>

//         {/* MAIN GRID */}
//         {/* MAIN GRID */}
//         <div className="mt-16 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
//           {/* LEFT IMAGE */}
//           <div className="about-reveal lg:col-span-4 flex flex-col">
//             <div className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-100">
//               {/* Image */}
//               <div className="relative aspect-[4/5] overflow-hidden">
//                 <img
//                   src="/profile.jpg"
//                   alt="Abhishek Yadav"
//                   className="
//             h-full
//             w-full
//             object-cover
//             grayscale-[10%]
//             transition-all
//             duration-700
//             group-hover:scale-105
//             group-hover:grayscale-0
//           "
//                 />

//                 <div
//                   className="
//             absolute
//             inset-0
//             bg-gradient-to-t
//             from-black/40
//             via-transparent
//             to-transparent
//             opacity-70
//           "
//                 />
//               </div>

//               {/* Name */}
//               <div className="relative bg-neutral-200 px-5 py-4 text-center">
//                 <h3
//                   className="
//             text-lg
//             font-semibold
//             uppercase
//             tracking-[0.16em]
//             text-neutral-900
//           "
//                 >
//                   Abhishek Yadav
//                 </h3>
//               </div>
//             </div>

//             {/* Resume Buttons */}
//             <div className="mt-4 flex flex-wrap gap-2">
//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 className="
//           inline-flex
//           items-center
//           gap-2
//           rounded-full
//           border
//           border-neutral-300
//           px-5
//           py-2.5
//           text-xs
//           transition-all
//           duration-300
//           hover:bg-black
//           hover:text-white
//         "
//               >
//                 View Resume
//                 <ArrowUpRight size={14} />
//               </a>

//               <a
//                 href="/resume.pdf"
//                 download
//                 className="
//           inline-flex
//           items-center
//           gap-2
//           rounded-full
//           bg-black
//           px-5
//           py-2.5
//           text-xs
//           text-white
//           transition-all
//           duration-300
//           hover:scale-105
//         "
//               >
//                 Download Resume
//               </a>
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="lg:col-span-8 flex flex-col justify-between">
//             {/* BIG HEADING */}
//             <div className="about-reveal">
//               <h2
//                 className="
//           max-w-4xl
//           text-[2.4rem]
//           font-medium
//           leading-[1.02]
//           tracking-[-0.05em]
//           text-neutral-900
//           md:text-[3.4rem]
//           lg:text-[3.8rem]
//         "
//               >
//                 <span
//                   className="
//             text-transparent
//             [-webkit-text-stroke:0.5px_#171717]
//           "
//                 >
//                   Crafting high-performance digital experiences
//                 </span>

//                 <br />

//                 <span
//                   className="
//             text-transparent
//             [-webkit-text-stroke:0.5px_#171717]
//           "
//                 >
//                   from backend architecture to pixel-perfect design.
//                 </span>
//               </h2>
//             </div>

//             {/* DESCRIPTION */}
//             <div className="about-reveal mt-6 max-w-4xl space-y-3">
//               <p className="text-sm leading-6 text-neutral-600 md:text-base">
//                 <strong className="text-neutral-900">
//                   Hello! I'm Abhishek Yadav,
//                 </strong>{" "}
//                 a passionate Full-Stack Developer focused on building modern,
//                 scalable and user-friendly web applications.
//               </p>

//               <p className="text-sm leading-6 text-neutral-600 md:text-base">
//                 I work with React, Next.js, Node.js, Express.js and MongoDB,
//                 while also exploring AI-powered applications and intelligent
//                 workflows.
//               </p>
//             </div>

//             {/* SMALL COLOR ACCENTS */}
//             <div className="about-reveal mt-6 flex gap-2">
//               <span className="h-3 w-10 rounded-full bg-fuchsia-500" />
//               <span className="h-3 w-10 rounded-full bg-emerald-400" />
//               <span className="h-3 w-10 rounded-full bg-orange-500" />
//             </div>

//             {/* INFO CARDS */}
//             <div
//               className="
//         about-reveal
//         mt-5
//         grid
//         grid-cols-1
//         gap-3
//         sm:grid-cols-2
//       "
//             >
//               {/* CARD 1 */}
//               <div
//                 className="
//           group
//           relative
//           overflow-hidden
//           rounded-xl
//           border
//           border-neutral-200
//           bg-white
//           px-4
//           py-4
//           transition-all
//           duration-500
//           hover:-translate-y-1
//           hover:shadow-[0_15px_40px_rgba(0,0,0,.07)]
//         "
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-50 text-yellow-500">
//                     <UserRound size={17} />
//                   </div>

//                   <ArrowUpRight
//                     size={17}
//                     className="
//               text-neutral-400
//               transition-transform
//               duration-300
//               group-hover:translate-x-1
//               group-hover:-translate-y-1
//             "
//                   />
//                 </div>

//                 <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
//                   Role
//                 </p>

//                 <h3 className="mt-1 text-sm font-medium text-neutral-900">
//                   Full-Stack Developer
//                 </h3>
//               </div>

//               {/* CARD 2 */}
//               <div
//                 className="
//           group
//           relative
//           overflow-hidden
//           rounded-xl
//           border
//           border-neutral-200
//           bg-white
//           px-4
//           py-4
//           transition-all
//           duration-500
//           hover:-translate-y-1
//           hover:shadow-[0_15px_40px_rgba(0,0,0,.07)]
//         "
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-500">
//                     <Code2 size={17} />
//                   </div>

//                   <ArrowUpRight
//                     size={17}
//                     className="
//               text-neutral-400
//               transition-transform
//               duration-300
//               group-hover:translate-x-1
//               group-hover:-translate-y-1
//             "
//                   />
//                 </div>

//                 <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
//                   Focus
//                 </p>

//                 <h3 className="mt-1 text-sm font-medium text-neutral-900">
//                   React, Next.js & Node.js
//                 </h3>
//               </div>

//               {/* CARD 3 */}
//               <div
//                 className="
//           group
//           relative
//           overflow-hidden
//           rounded-xl
//           border
//           border-neutral-200
//           bg-white
//           px-4
//           py-4
//           transition-all
//           duration-500
//           hover:-translate-y-1
//           hover:shadow-[0_15px_40px_rgba(0,0,0,.07)]
//         "
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-fuchsia-50 text-fuchsia-500">
//                     <Sparkles size={17} />
//                   </div>

//                   <ArrowUpRight
//                     size={17}
//                     className="
//               text-neutral-400
//               transition-transform
//               duration-300
//               group-hover:translate-x-1
//               group-hover:-translate-y-1
//             "
//                   />
//                 </div>

//                 <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
//                   Expertise
//                 </p>

//                 <h3 className="mt-1 text-sm font-medium text-neutral-900">
//                   AI & RAG Applications
//                 </h3>
//               </div>

//               {/* CARD 4 */}
//               <div
//                 className="
//           group
//           relative
//           overflow-hidden
//           rounded-xl
//           border
//           border-neutral-200
//           bg-white
//           px-4
//           py-4
//           transition-all
//           duration-500
//           hover:-translate-y-1
//           hover:shadow-[0_15px_40px_rgba(0,0,0,.07)]
//         "
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-cyan-500">
//                     <MapPin size={17} />
//                   </div>

//                   <ArrowUpRight
//                     size={17}
//                     className="
//               text-neutral-400
//               transition-transform
//               duration-300
//               group-hover:translate-x-1
//               group-hover:-translate-y-1
//             "
//                   />
//                 </div>

//                 <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
//                   Availability
//                 </p>

//                 <h3 className="mt-1 text-sm font-medium text-neutral-900">
//                   Open to Opportunities
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import {
//   ArrowUpRight,
//   Code2,
//   MapPin,
//   Sparkles,
//   UserRound,
// } from "lucide-react";
// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// export default function AboutIntro() {
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       gsap.from(".about-reveal", {
//         opacity: 0,
//         y: 50,
//         duration: 0.9,
//         stagger: 0.1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 78%",
//           once: true,
//         },
//       });
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       id="about"
//       className="
//         relative
//         w-full
//         overflow-hidden
//         bg-white
//         py-20
//         text-neutral-900
//         transition-colors
//         duration-500
//         dark:bg-[#0a0a0a]
//         dark:text-white
//         md:py-24
//       "
//     >
//       <div
//         className="
//           mx-auto
//           max-w-[1400px]
//           px-5
//           sm:px-7
//           md:px-10
//           lg:px-14
//         "
//       >
//         {/* ================= HEADER ================= */}

//         <div className="about-reveal">
//           <p
//             className="
//               text-[10px]
//               font-medium
//               uppercase
//               tracking-[0.4em]
//               text-neutral-500
//               dark:text-neutral-400
//             "
//           >
//             02 / ABOUT ME
//           </p>

//           <div
//             className="
//               mt-4
//               h-[2px]
//               w-20
//               bg-gradient-to-r
//               from-fuchsia-500
//               via-cyan-400
//               to-emerald-400
//               animate-gradient
//             "
//           />
//         </div>

//         {/* ================= MAIN GRID ================= */}

//         <div
//           className="
//             mt-14
//             grid
//             grid-cols-1
//             gap-10
//             lg:grid-cols-12
//             lg:items-stretch
//             lg:gap-12
//           "
//         >
//           {/* ================================================= */}
//           {/* LEFT IMAGE */}
//           {/* ================================================= */}

//           <div
//             className="
//               about-reveal
//               flex
//               flex-col
//               lg:col-span-4
//               lg:h-[540px]
//             "
//           >
//             {/* IMAGE GRADIENT BORDER */}

//             <div
//               className="
//                 gradient-border
//                 relative
//                 rounded-[26px]
//                 p-[2px]
//               "
//             >
//               <div
//                 className="
//                   overflow-hidden
//                   rounded-[24px]
//                   bg-neutral-100
//                   dark:bg-[#111111]
//                 "
//               >
//                 <div
//                   className="
//                     relative
//                     aspect-[4/5]
//                     overflow-hidden
//                   "
//                 >
//                   <img
//                     src="/profile.jpg"
//                     alt="Abhishek Yadav"
//                     className="
//                       h-full
//                       w-full
//                       object-cover
//                       grayscale-[8%]
//                       transition-all
//                       duration-700
//                       hover:scale-105
//                       hover:grayscale-0
//                     "
//                   />

//                   {/* IMAGE OVERLAY */}

//                   <div
//                     className="
//                       pointer-events-none
//                       absolute
//                       inset-0
//                       bg-gradient-to-t
//                       from-black/50
//                       via-transparent
//                       to-transparent
//                     "
//                   />

//                   {/* IMAGE COLOR GLOW */}

//                   <div
//                     className="
//                       pointer-events-none
//                       absolute
//                       bottom-0
//                       left-0
//                       h-1
//                       w-full
//                       bg-gradient-to-r
//                       from-fuchsia-500
//                       via-cyan-400
//                       to-emerald-400
//                       animate-gradient
//                     "
//                   />
//                 </div>

//                 {/* NAME */}

//                 <div
//                   className="
//                     bg-neutral-100
//                     px-5
//                     py-4
//                     text-center
//                     dark:bg-[#151515]
//                   "
//                 >
//                   <h3
//                     className="
//                       text-base
//                       font-semibold
//                       uppercase
//                       tracking-[0.16em]
//                       text-neutral-900
//                       dark:text-white
//                       md:text-lg
//                     "
//                   >
//                     Abhishek Yadav
//                   </h3>
//                 </div>
//               </div>
//             </div>

//             {/* ================= RESUME BUTTONS ================= */}

//             <div className="mt-5 flex flex-wrap gap-3">
//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-neutral-300
//                   bg-white
//                   px-5
//                   py-2.5
//                   text-xs
//                   font-medium
//                   text-neutral-800
//                   transition-all
//                   duration-300
//                   hover:bg-black
//                   hover:text-white
//                   dark:border-neutral-700
//                   dark:bg-[#111111]
//                   dark:text-white
//                   dark:hover:bg-white
//                   dark:hover:text-black
//                 "
//               >
//                 View Resume
//                 <ArrowUpRight size={15} />
//               </a>

//               <a
//                 href="/resume.pdf"
//                 download
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   bg-black
//                   px-5
//                   py-2.5
//                   text-xs
//                   font-medium
//                   text-white
//                   transition-all
//                   duration-300
//                   hover:scale-105
//                   dark:bg-white
//                   dark:text-black
//                 "
//               >
//                 Download Resume
//               </a>
//             </div>
//           </div>

//           {/* ================================================= */}
//           {/* RIGHT CONTENT */}
//           {/* ================================================= */}

//           <div
//             className="
//               about-reveal
//               flex
//               flex-col
//               lg:col-span-8
//               lg:h-[540px]
//               lg:overflow-hidden
//             "
//           >
//             {/* ================= SMALL HEADING ================= */}

//             <div>
//               <h2
//                 className="
//                   max-w-4xl
//                   text-[2.2rem]
//                   font-medium
//                   leading-[1]
//                   tracking-[-0.055em]
//                   text-neutral-900
//                   dark:text-white
//                   sm:text-[2.7rem]
//                   md:text-[3.2rem]
//                   lg:text-[3.6rem]
//                 "
//               >
//                 <span
//                   className="
//                     bg-gradient-to-r
//                     from-fuchsia-500
//                     via-cyan-400
//                     to-emerald-400
//                     bg-clip-text
//                     text-transparent
//                     animate-gradient
//                   "
//                   style={{ backgroundSize: "200% 200%" }}
//                 >
//                   Crafting digital experiences
//                 </span>

//                 <br />

//                 <span className="text-neutral-800 dark:text-neutral-200">
//                   that people remember.
//                 </span>
//               </h2>
//             </div>

//             {/* ================= DESCRIPTION ================= */}

//             <div
//               className="
//                 mt-5
//                 max-w-3xl
//                 space-y-3
//               "
//             >
//               <p
//                 className="
//                   text-sm
//                   leading-6
//                   text-neutral-600
//                   dark:text-neutral-300
//                   md:text-[15px]
//                   md:leading-6
//                 "
//               >
//                 <strong className="text-neutral-950 dark:text-white">
//                   Hello! I'm Abhishek Yadav,
//                 </strong>{" "}
//                 a passionate Full-Stack Developer focused on building modern,
//                 scalable and user-friendly web applications.
//               </p>

//               <p
//                 className="
//                   text-sm
//                   leading-6
//                   text-neutral-600
//                   dark:text-neutral-300
//                   md:text-[15px]
//                   md:leading-6
//                 "
//               >
//                 I work with React, Next.js, Node.js, Express.js and MongoDB,
//                 while also exploring AI-powered applications and intelligent
//                 workflows.
//               </p>
//             </div>

//             {/* ================= COLOR ACCENTS ================= */}

//             <div className="mt-6 flex gap-2">
//               <span
//                 className="
//                   h-2
//                   w-12
//                   rounded-full
//                   bg-gradient-to-r
//                   from-fuchsia-500
//                   to-purple-500
//                   animate-gradient
//                 "
//               />

//               <span
//                 className="
//                   h-2
//                   w-12
//                   rounded-full
//                   bg-gradient-to-r
//                   from-emerald-400
//                   to-cyan-400
//                   animate-gradient
//                 "
//               />

//               <span
//                 className="
//                   h-2
//                   w-12
//                   rounded-full
//                   bg-gradient-to-r
//                   from-orange-400
//                   to-pink-500
//                   animate-gradient
//                 "
//               />
//             </div>

//             {/* ================================================= */}
//             {/* INFO CARDS */}
//             {/* ================================================= */}

//             <div
//               className="
//                 mt-6
//                 grid
//                 grid-cols-1
//                 gap-3
//                 sm:grid-cols-2
//               "
//             >
//               {/* ROLE */}

//               <InfoCard
//                 icon={<UserRound size={19} />}
//                 label="Role"
//                 value="Full-Stack Developer"
//                 iconColor="text-yellow-400"
//                 gradient="from-yellow-400 via-orange-400 to-pink-500"
//               />

//               {/* FOCUS */}

//               <InfoCard
//                 icon={<Code2 size={19} />}
//                 label="Focus"
//                 value="React / Next.js / Node.js"
//                 iconColor="text-emerald-400"
//                 gradient="from-emerald-400 via-cyan-400 to-blue-500"
//               />

//               {/* EXPERTISE */}

//               <InfoCard
//                 icon={<Sparkles size={19} />}
//                 label="Expertise"
//                 value="AI & RAG Applications"
//                 iconColor="text-fuchsia-400"
//                 gradient="from-fuchsia-500 via-purple-500 to-pink-500"
//               />

//               {/* AVAILABILITY */}

//               <InfoCard
//                 icon={<MapPin size={19} />}
//                 label="Availability"
//                 value="Open to Opportunities"
//                 iconColor="text-cyan-400"
//                 gradient="from-cyan-400 via-blue-500 to-violet-500"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================================================= */
// /* INFO CARD */
// /* ========================================================= */

// function InfoCard({
//   icon,
//   label,
//   value,
//   iconColor,
//   gradient,
// }) {
//   return (
//     <div
//       className="
//         gradient-border
//         rounded-2xl
//         p-[1.5px]
//       "
//     >
//       <div
//         className="
//           group
//           relative
//           h-full
//           overflow-hidden
//           rounded-[15px]
//           bg-white
//           p-4
//           transition-all
//           duration-500
//           hover:-translate-y-1
//           dark:bg-[#111111]
//         "
//       >
//         <div className="flex items-start justify-between">
//           {/* ICON */}

//           <div
//             className={`
//               flex
//               h-9
//               w-9
//               items-center
//               justify-center
//               rounded-xl
//               bg-neutral-100
//               ${iconColor}
//               dark:bg-[#1a1a1a]
//             `}
//           >
//             {icon}
//           </div>

//           {/* ARROW */}

//           <ArrowUpRight
//             size={17}
//             className="
//               text-neutral-400
//               transition-all
//               duration-300
//               group-hover:-translate-y-1
//               group-hover:translate-x-1
//               dark:text-neutral-500
//             "
//           />
//         </div>

//         {/* LABEL */}

//         <p
//           className="
//             mt-4
//             text-[9px]
//             font-semibold
//             uppercase
//             tracking-[0.25em]
//             text-neutral-400
//             dark:text-neutral-500
//           "
//         >
//           {label}
//         </p>

//         {/* VALUE */}

//         <h3
//           className="
//             mt-1.5
//             text-sm
//             font-medium
//             text-neutral-900
//             dark:text-white
//             md:text-[15px]
//           "
//         >
//           <span
//             className="
//               bg-gradient-to-r
//               from-neutral-900
//               via-neutral-600
//               to-neutral-900
//               bg-clip-text
//               text-transparent
//               dark:from-white
//               dark:via-neutral-300
//               dark:to-white
//             "
//           >
//             {value}
//           </span>
//         </h3>

//         {/* BOTTOM COLOR LINE */}

//         <div
//           className={`
//             absolute
//             bottom-0
//             left-0
//             h-[2px]
//             w-full
//             bg-gradient-to-r
//             ${gradient}
//             animate-gradient
//           `}
//         />
//       </div>
//     </div>
//   );
// }

// "use client";

// import {
//   ArrowUpRight,
//   Code2,
//   MapPin,
//   Sparkles,
//   UserRound,
// } from "lucide-react";
// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// export default function AboutIntro() {
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       gsap.from(".about-reveal", {
//         opacity: 0,
//         y: 50,
//         duration: 0.9,
//         stagger: 0.1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 78%",
//           once: true,
//         },
//       });
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       id="about"
//       className="
//         relative
//         w-full
//         overflow-hidden
//         bg-white
//         py-20
//         text-neutral-900
//         transition-colors
//         duration-500
//         dark:bg-[#0a0a0a]
//         dark:text-white
//         md:py-24
//       "
//     >
//       <div
//         className="
//           mx-auto
//           max-w-[1400px]
//           px-5
//           sm:px-7
//           md:px-10
//           lg:px-14
//         "
//       >
//         {/* HEADER */}

//         <div className="about-reveal">
//           <p
//             className="
//               text-[10px]
//               font-medium
//               uppercase
//               tracking-[0.4em]
//               text-neutral-500
//               dark:text-neutral-400
//             "
//           >
//             02 / ABOUT ME
//           </p>

//           <div
//             className="
//               mt-4
//               h-[2px]
//               w-20
//               bg-gradient-to-r
//               from-fuchsia-500
//               via-cyan-400
//               to-emerald-400
//               animate-gradient
//             "
//           />
//         </div>

//         {/* MAIN GRID */}

//         <div
//           className="
//             mt-14
//             grid
//             grid-cols-1
//             gap-10
//             lg:grid-cols-12
//             lg:items-stretch
//             lg:gap-12
//           "
//         >
//           {/* LEFT IMAGE */}

//           <div
//             className="
//               about-reveal
//               flex
//               flex-col
//               lg:col-span-4
//               lg:h-[540px]
//             "
//           >
//             {/* IMAGE */}

//             <div
//               className="
//                 gradient-border
//                 relative
//                 rounded-[26px]
//                 p-[2px]
//               "
//             >
//               <div
//                 className="
//                   overflow-hidden
//                   rounded-[24px]
//                   bg-neutral-100
//                   dark:bg-[#111111]
//                 "
//               >
//                 <div
//                   className="
//                     relative
//                     aspect-[4/5]
//                     overflow-hidden
//                   "
//                 >
//                   <img
//                     src="/profile.jpg"
//                     alt="Abhishek Yadav"
//                     className="
//                       h-full
//                       w-full
//                       object-cover
//                       grayscale-[8%]
//                       transition-all
//                       duration-700
//                       hover:scale-105
//                       hover:grayscale-0
//                     "
//                   />

//                   <div
//                     className="
//                       pointer-events-none
//                       absolute
//                       inset-0
//                       bg-gradient-to-t
//                       from-black/50
//                       via-transparent
//                       to-transparent
//                     "
//                   />

//                   {/* CONTINUOUS GRADIENT */}

//                   <div
//                     className="
//                       pointer-events-none
//                       absolute
//                       bottom-0
//                       left-0
//                       h-1
//                       w-full
//                       bg-gradient-to-r
//                       from-fuchsia-500
//                       via-cyan-400
//                       to-emerald-400
//                       animate-gradient
//                     "
//                   />
//                 </div>

//                 {/* NAME */}

//                 <div
//                   className="
//                     bg-neutral-100
//                     px-5
//                     py-4
//                     text-center
//                     dark:bg-[#151515]
//                   "
//                 >
//                   <h3
//                     className="
//                       text-base
//                       font-semibold
//                       uppercase
//                       tracking-[0.16em]
//                       text-neutral-900
//                       dark:text-white
//                       md:text-lg
//                     "
//                   >
//                     Abhishek Yadav
//                   </h3>
//                 </div>
//               </div>
//             </div>

//             {/* RESUME BUTTONS */}

//             <div className="mt-5 flex flex-wrap gap-3">
//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-neutral-300
//                   bg-white
//                   px-5
//                   py-2.5
//                   text-xs
//                   font-medium
//                   text-neutral-800
//                   transition-all
//                   duration-300
//                   hover:bg-black
//                   hover:text-white
//                   dark:border-neutral-700
//                   dark:bg-[#111111]
//                   dark:text-white
//                   dark:hover:bg-white
//                   dark:hover:text-black
//                 "
//               >
//                 View Resume
//                 <ArrowUpRight size={15} />
//               </a>

//               <a
//                 href="/resume.pdf"
//                 download
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   bg-black
//                   px-5
//                   py-2.5
//                   text-xs
//                   font-medium
//                   text-white
//                   transition-all
//                   duration-300
//                   hover:scale-105
//                   dark:bg-white
//                   dark:text-black
//                 "
//               >
//                 Download Resume
//               </a>
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}

//           <div
//             className="
//               about-reveal
//               flex
//               flex-col
//               lg:col-span-8
//               lg:h-[540px]
//               lg:overflow-hidden
//             "
//           >
//             {/* HEADING */}

//             <div>
//               <h2
//                 className="
//                   max-w-4xl
//                   text-[2.2rem]
//                   font-medium
//                   leading-[1]
//                   tracking-[-0.055em]
//                   text-neutral-900
//                   dark:text-white
//                   sm:text-[2.7rem]
//                   md:text-[3.2rem]
//                   lg:text-[3.6rem]
//                 "
//               >
//                 <span
//                   className="
//                     bg-gradient-to-r
//                     from-fuchsia-500
//                     via-cyan-400
//                     to-emerald-400
//                     bg-clip-text
//                     text-transparent
//                     animate-gradient
//                   "
//                   style={{ backgroundSize: "200% 200%" }}
//                 >
//                   Crafting digital experiences
//                 </span>

//                 <br />

//                 <span className="text-neutral-800 dark:text-neutral-200">
//                   that people remember.
//                 </span>
//               </h2>
//             </div>

//             {/* DESCRIPTION */}

//             <div className="mt-5 max-w-3xl space-y-3">
//               <p
//                 className="
//                   text-sm
//                   leading-6
//                   text-neutral-600
//                   dark:text-neutral-300
//                   md:text-[15px]
//                   md:leading-6
//                 "
//               >
//                 <strong className="text-neutral-950 dark:text-white">
//                   Hello! I'm Abhishek Yadav,
//                 </strong>{" "}
//                 a passionate Full-Stack Developer focused on building modern,
//                 scalable and user-friendly web applications.
//               </p>

//               <p
//                 className="
//                   text-sm
//                   leading-6
//                   text-neutral-600
//                   dark:text-neutral-300
//                   md:text-[15px]
//                   md:leading-6
//                 "
//               >
//                 I work with React, Next.js, Node.js, Express.js and MongoDB,
//                 while also exploring AI-powered applications and intelligent
//                 workflows.
//               </p>
//             </div>

//             {/* COLOR ACCENTS */}

//             <div className="mt-6 flex gap-2">
//               <span
//                 className="
//                   h-2
//                   w-12
//                   rounded-full
//                   bg-gradient-to-r
//                   from-fuchsia-500
//                   to-purple-500
//                   animate-gradient
//                 "
//               />

//               <span
//                 className="
//                   h-2
//                   w-12
//                   rounded-full
//                   bg-gradient-to-r
//                   from-emerald-400
//                   to-cyan-400
//                   animate-gradient
//                 "
//               />

//               <span
//                 className="
//                   h-2
//                   w-12
//                   rounded-full
//                   bg-gradient-to-r
//                   from-orange-400
//                   to-pink-500
//                   animate-gradient
//                 "
//               />
//             </div>

//             {/* INFO CARDS */}

//             <div
//               className="
//                 mt-6
//                 grid
//                 grid-cols-1
//                 gap-3
//                 sm:grid-cols-2
//               "
//             >
//               <InfoCard
//                 icon={<UserRound size={19} />}
//                 label="Role"
//                 value="Full-Stack Developer"
//                 iconColor="text-yellow-500 dark:text-yellow-400"
//                 gradient="from-yellow-400 via-orange-400 to-pink-500"
//               />

//               <InfoCard
//                 icon={<Code2 size={19} />}
//                 label="Focus"
//                 value="React / Next.js / Node.js"
//                 iconColor="text-emerald-500 dark:text-emerald-400"
//                 gradient="from-emerald-400 via-cyan-400 to-blue-500"
//               />

//               <InfoCard
//                 icon={<Sparkles size={19} />}
//                 label="Expertise"
//                 value="AI & RAG Applications"
//                 iconColor="text-fuchsia-500 dark:text-fuchsia-400"
//                 gradient="from-fuchsia-500 via-purple-500 to-pink-500"
//               />

//               <InfoCard
//                 icon={<MapPin size={19} />}
//                 label="Availability"
//                 value="Open to Opportunities"
//                 iconColor="text-cyan-500 dark:text-cyan-400"
//                 gradient="from-cyan-400 via-blue-500 to-violet-500"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================================================= */
// /* INFO CARD */
// /* ========================================================= */

// function InfoCard({
//   icon,
//   label,
//   value,
//   iconColor,
//   gradient,
// }) {
//   return (
//     <div
//       className="
//         gradient-border
//         rounded-2xl
//         p-[1.5px]
//       "
//     >
//       <div
//         className="
//           group
//           relative
//           h-full
//           overflow-hidden
//           rounded-[15px]
//           bg-white
//           p-4
//           transition-all
//           duration-500
//           hover:-translate-y-1
//           dark:bg-[#111111]
//         "
//       >
//         <div className="flex items-start justify-between">
//           {/* ICON */}

//           <div
//             className={`
//               flex
//               h-9
//               w-9
//               items-center
//               justify-center
//               rounded-xl
//               bg-neutral-100
//               ${iconColor}
//               dark:bg-[#1a1a1a]
//             `}
//           >
//             {icon}
//           </div>

//           {/* ARROW */}

//           <ArrowUpRight
//             size={17}
//             className="
//               text-neutral-500
//               transition-all
//               duration-300
//               group-hover:-translate-y-1
//               group-hover:translate-x-1
//               dark:text-neutral-400
//             "
//           />
//         </div>

//         {/* LABEL */}

//         <p
//           className="
//             mt-4
//             text-[9px]
//             font-semibold
//             uppercase
//             tracking-[0.25em]
//             text-neutral-500
//             dark:text-neutral-400
//           "
//         >
//           {label}
//         </p>

//         {/* VALUE */}

//         <h3
//           className="
//             mt-1.5
//             text-sm
//             font-medium
//             text-neutral-900
//             dark:text-white
//             md:text-[15px]
//           "
//         >
//           <span
//             className="
//               bg-gradient-to-r
//               from-fuchsia-600
//               via-cyan-600
//               to-emerald-600
//               bg-clip-text
//               text-transparent
//               animate-gradient
//               dark:from-fuchsia-400
//               dark:via-cyan-300
//               dark:to-emerald-300
//             "
//             style={{ backgroundSize: "200% 200%" }}
//           >
//             {value}
//           </span>
//         </h3>

//         {/* CONTINUOUS BOTTOM GRADIENT */}

//         <div
//           className={`
//             absolute
//             bottom-0
//             left-0
//             h-[2px]
//             w-full
//             bg-gradient-to-r
//             ${gradient}
//             animate-gradient
//           `}
//           style={{ backgroundSize: "200% 200%" }}
//         />
//       </div>
//     </div>
//   );
// }







// "use client";

// import { ArrowUpRight, Code2, MapPin, Sparkles, UserRound } from "lucide-react";
// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// export default function AboutIntro() {
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       gsap.from(".about-reveal", {
//         opacity: 0,
//         y: 50,
//         duration: 0.9,
//         stagger: 0.1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 78%",
//           once: true,
//         },
//       });
//     },
//     { scope: sectionRef },
//   );

//   return (
//     <section
//       ref={sectionRef}
//       id="about"
//       className="
//         relative
//         w-full
//         overflow-hidden
//        bg-white
//         py-20
//         text-black
//         transition-colors
//         duration-500
//           dark:bg-[#0a0a0a]
//         dark:text-white
//         md:py-24
//       "
//     >
//       <div
//         className="
//           mx-auto
//           max-w-[1400px]
//           px-5
//           sm:px-7
//           md:px-10
//           lg:px-14
//         "
//       >
//         {/* ================= HEADER ================= */}

//         <div className="about-reveal">
//           <p
//             className="
//               text-[10px]
//               font-medium
//               uppercase
//               tracking-[0.4em]
//               text-neutral-600
//               dark:text-neutral-400
               
//             "
//           >
//             02 / ABOUT ME
//           </p>

//           <div
//             className="
//               mt-4
//               h-[2px]
//               w-20
//               rounded-full
//               bg-gradient-to-r
//               from-fuchsia-500
//               via-cyan-400
//               to-emerald-400
//               animate-gradient
//             "
//             style={{ backgroundSize: "200% 200%" }}
//           />
//         </div>

//         {/* ================= MAIN GRID ================= */}

//         <div
//           className="
//             mt-14
//             grid
//             grid-cols-1
//             gap-10
//             lg:grid-cols-12
//             lg:items-start
//             lg:gap-12
//           "
//         >
//           {/* ================================================= */}
//           {/* LEFT IMAGE */}
//           {/* ================================================= */}

//           <div
//             className="
//               about-reveal
//               flex
//               flex-col
//               lg:col-span-4
//             "
//           >
//             {/* IMAGE GRADIENT BORDER */}

//             <div
//               className="
//                 gradient-border
//                 relative
//                 rounded-[26px]
//                 p-[2px]
//               "
//             >
//               <div
//                 className="
//                   overflow-hidden
//                   rounded-[24px]
//                    bg-[var(--surface)]
//                    transition-colors
//                    duration-500
                  
//                 "
//               >
//                 <div
//                   className="
//                     relative
//                     aspect-[4/5]
//                     overflow-hidden
//                   "
//                 >
//                   <img
//                     src="/profile.jpg"
//                     alt="Abhishek Yadav"
//                     className="
//                       h-full
//                       w-full
//                       object-cover
//                       grayscale-[8%]
//                       transition-all
//                       duration-700
//                       hover:scale-105
//                       hover:grayscale-0
//                     "
//                   />

//                   {/* IMAGE OVERLAY */}

//                   <div
//                     className="
//                       pointer-events-none
//                       absolute
//                       inset-0
//                       bg-gradient-to-t
//                       from-black/50
//                       via-transparent
//                       to-transparent
//                     "
//                   />

//                   {/* CONTINUOUS IMAGE GRADIENT */}

//                   <div
//                     className="
//                       pointer-events-none
//                       absolute
//                       bottom-0
//                       left-0
//                       h-[4px]
//                       w-full
//                       bg-gradient-to-r
//                       from-fuchsia-500
//                       via-cyan-400
//                       to-emerald-400
//                       animate-gradient
//                     "
//                     style={{ backgroundSize: "200% 200%" }}
//                   />
//                 </div>

//                 {/* NAME */}

//                 <div
//                   className="
//                     bg-white
//                     px-5
//                     py-4
//                     text-center
//                     dark:bg-[#151515]
//                   "
//                 >
//                   <h3
//                     className="
//                       text-base
//                       font-semibold
//                       uppercase
//                       tracking-[0.16em]
//                       text-black
//                       dark:text-white
//                       md:text-lg
//                     "
//                   >
//                     Abhishek Yadav
//                   </h3>
//                 </div>
//               </div>
//             </div>

//             {/* ================= RESUME BUTTONS ================= */}

//             <div className="mt-5 flex flex-wrap gap-3">
//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   border
//                   border-neutral-300
//                   bg-white
//                   px-5
//                   py-2.5
//                   text-xs
//                   font-medium
//                   text-black
//                   transition-all
//                   duration-300
//                   hover:bg-black
//                   hover:text-white
//                   dark:border-neutral-700
//                   dark:bg-[#111111]
//                   dark:text-white
//                   dark:hover:bg-white
//                   dark:hover:text-black
//                 "
//               >
//                 View Resume
//                 <ArrowUpRight size={15} />
//               </a>

//               <a
//                 href="/resume.pdf"
//                 download
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   bg-black
//                   px-5
//                   py-2.5
//                   text-xs
//                   font-medium
//                   text-white
//                   transition-all
//                   duration-300
//                   hover:scale-105
//                   dark:bg-white
//                   dark:text-black
//                 "
//               >
//                 Download Resume
//               </a>
//             </div>
//           </div>

//           {/* ================================================= */}
//           {/* RIGHT CONTENT */}
//           {/* ================================================= */}

//           <div
//             className="
//               about-reveal
//               flex
//               flex-col
//               lg:col-span-8
//             "
//           >
//             {/* ================= HEADING ================= */}

//             <div>
//               <h2
//                 className="
//                   max-w-4xl
//                   text-[2.2rem]
//                   font-medium
//                   leading-[1]
//                   tracking-[-0.055em]
//                   text-black
//                   dark:text-white
//                   sm:text-[2.7rem]
//                   md:text-[3.2rem]
//                   lg:text-[3.6rem]
//                 "
//               >
//                 <span
//                   className="
//                     bg-gradient-to-r
//                     from-fuchsia-500
//                     via-cyan-400
//                     to-emerald-400
//                     bg-clip-text
//                     text-transparent
//                     animate-gradient
//                   "
//                   style={{ backgroundSize: "200% 200%" }}
//                 >
//                   Crafting digital experiences
//                 </span>

//                 <br />

//                 <span className="text-black dark:text-neutral-200">
//                   that people remember.
//                 </span>
//               </h2>
//             </div>

//             {/* ================= DESCRIPTION ================= */}

//             <div className="mt-5 max-w-3xl space-y-3">
//               <p
//                 className="
//                   text-sm
//                   leading-6
//                   text-neutral-700
//                   dark:text-neutral-300
//                   md:text-[15px]
//                   md:leading-6
//                 "
//               >
//                 <strong className="text-black dark:text-white">
//                   Hello! I'm Abhishek Yadav,
//                 </strong>{" "}
//                 a passionate Full-Stack Developer focused on building modern,
//                 scalable and user-friendly web applications.
//               </p>

//               <p
//                 className="
//                   text-sm
//                   leading-6
//                   text-neutral-700
//                   dark:text-neutral-300
//                   md:text-[15px]
//                   md:leading-6
//                 "
//               >
//                 I work with React, Next.js, Node.js, Express.js and MongoDB,
//                 while also exploring AI-powered applications and intelligent
//                 workflows.
//               </p>
//             </div>

//             {/* ================= COLOR ACCENTS ================= */}

//             <div className="mt-6 flex gap-2">
//               <GradientLine gradient="from-fuchsia-500 via-purple-500 to-pink-500" />

//               <GradientLine gradient="from-emerald-400 via-cyan-400 to-blue-500" />

//               <GradientLine gradient="from-orange-400 via-pink-500 to-fuchsia-500" />
//             </div>

//             {/* ================= INFO CARDS ================= */}

//             <div
//               className="
//                 mt-6
//                 grid
//                 grid-cols-1
//                 gap-3
//                 sm:grid-cols-2
//               "
//             >
//               <InfoCard
//                 icon={<UserRound size={19} />}
//                 label="Role"
//                 value="Full-Stack Developer"
//                 iconColor="text-yellow-500 dark:text-yellow-400"
//                 gradient="from-yellow-400 via-orange-400 to-pink-500"
//               />

//               <InfoCard
//                 icon={<Code2 size={19} />}
//                 label="Focus"
//                 value="React / Next.js / Node.js"
//                 iconColor="text-emerald-500 dark:text-emerald-400"
//                 gradient="from-emerald-400 via-cyan-400 to-blue-500"
//               />

//               <InfoCard
//                 icon={<Sparkles size={19} />}
//                 label="Expertise"
//                 value="AI & RAG Applications"
//                 iconColor="text-fuchsia-500 dark:text-fuchsia-400"
//                 gradient="from-fuchsia-500 via-purple-500 to-pink-500"
//               />

//               <InfoCard
//                 icon={<MapPin size={19} />}
//                 label="Availability"
//                 value="Open to Opportunities"
//                 iconColor="text-cyan-500 dark:text-cyan-400"
//                 gradient="from-cyan-400 via-blue-500 to-violet-500"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================================================= */
// /* GRADIENT LINE */
// /* ========================================================= */

// function GradientLine({ gradient }) {
//   return (
//     <span
//       className={`
//         h-2
//         w-12
//         rounded-full
//         bg-gradient-to-r
//         ${gradient}
//         animate-gradient
//       `}
//       style={{ backgroundSize: "200% 200%" }}
//     />
//   );
// }

// /* ========================================================= */
// /* INFO CARD */
// /* ========================================================= */

// function InfoCard({ icon, label, value, iconColor, gradient }) {
//   return (
//     <div
//       className="
//         gradient-border
//         rounded-2xl
//         p-[1.5px]
//       "
//     >
//       <div
//         className="
//           group
//           relative
//           h-full
//           overflow-hidden
//           rounded-[15px]
//            bg-[var(--surface)]
//           p-4
//           transition-all
//           duration-500
//           hover:-translate-y-1
          
//         "
//       >
//         {/* TOP */}

//         <div className="flex items-start justify-between">
//           <div
//             className={`
//               flex
//               h-9
//               w-9
//               items-center
//               justify-center
//               rounded-xl
//               bg-neutral-100
//               ${iconColor}
//               dark:bg-[#1a1a1a]
//             `}
//           >
//             {icon}
//           </div>

//           <ArrowUpRight
//             size={17}
//             className="
//               text-neutral-600
//               transition-all
//               duration-300
//               group-hover:-translate-y-1
//               group-hover:translate-x-1
//               dark:text-neutral-400
//             "
//           />
//         </div>

//         {/* LABEL */}

//         <p
//           className="
//             mt-4
//             text-[9px]
//             font-semibold
//             uppercase
//             tracking-[0.25em]
//             text-neutral-600
//             dark:text-neutral-400
//           "
//         >
//           {label}
//         </p>

//         {/* VALUE */}

//         <h3
//           className="
//             mt-1.5
//             text-sm
//             font-medium
//             md:text-[15px]
//           "
//         >
//           <span
//             className="
//               bg-gradient-to-r
//               from-fuchsia-600
//               via-cyan-600
//               to-emerald-600
//               bg-clip-text
//               text-transparent
//               animate-gradient
//               dark:from-fuchsia-400
//               dark:via-cyan-300
//               dark:to-emerald-300
//             "
//             style={{ backgroundSize: "200% 200%" }}
//           >
//             {value}
//           </span>
//         </h3>

//         {/* CONTINUOUS CARD GRADIENT */}

//         <div
//           className={`
//             pointer-events-none
//             absolute
//             bottom-0
//             left-0
//             h-[3px]
//             w-full
//             bg-gradient-to-r
//             ${gradient}
//             animate-gradient
//           `}
//           style={{ backgroundSize: "200% 200%" }}
//         />
//       </div>
//     </div>
//   );
// }




"use client";

import {
  ArrowUpRight,
  Download,
  GraduationCap,
  MapPin,
  Code2,
  Mail,
  UserRound,
} from "lucide-react";
import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";

const skills = [
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Next.js",
  "Tailwind CSS",
  "Git & GitHub",
  "REST APIs",
  "Postman",
];

export default function AboutIntro() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".about-item", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#070d19]
        text-white
        py-16
        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-600/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-purple-600/10
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          sm:px-8
          md:px-10
          lg:px-14
        "
      >
        {/* ================= HEADER ================= */}

        <div className="about-item mb-10 md:mb-14">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-400/60
              px-5
              py-2
              text-sm
              font-medium
              text-blue-400
            "
          >
            <UserRound size={17} />
            About Me
          </div>
        </div>

        {/* ================= MAIN ================= */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-16
          "
        >
          {/* ================= LEFT ================= */}

          <div className="about-item">
            <h1
              className="
                text-5xl
                font-semibold
                leading-[0.95]
                tracking-[-0.06em]
                sm:text-6xl
                md:text-7xl
                lg:text-[5.8rem]
              "
            >
              Hi, I'm
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-blue-400
                  via-violet-400
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                Abhishek Yadav
              </span>
            </h1>

            {/* ROLE */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                gap-3
                text-base
                font-medium
                text-neutral-200
                sm:text-lg
              "
            >
              <span>Full Stack Developer</span>

              <span className="text-blue-400">|</span>

              <span>MERN Stack Enthusiast</span>
            </div>

            {/* SMALL LINE */}

            <div
              className="
                mt-7
                h-1
                w-20
                rounded-full
                bg-gradient-to-r
                from-blue-500
                via-violet-500
                to-cyan-400
              "
            />

            {/* DESCRIPTION */}

            <div
              className="
                mt-7
                max-w-2xl
                space-y-3
                text-base
                leading-7
                text-neutral-300
                md:text-lg
                md:leading-8
              "
            >
              <p>
                I'm a passionate Full Stack Developer focused on building
                modern, scalable and user-friendly web applications.
              </p>

              <p>
                I enjoy turning ideas into real-world products using
                technologies like{" "}
                <span className="font-medium text-white">
                  React, Next.js, Node.js, Express.js and MongoDB.
                </span>
              </p>

              <p>
                I'm always learning new technologies and improving my skills
                to create better, faster and more user-friendly solutions.
              </p>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div
            className="
              about-item
              flex
              justify-center
              lg:justify-end
            "
          >
            <div className="relative">
              {/* OUTER GLOW */}

              <div
                className="
                  absolute
                  -inset-4
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  via-violet-500
                  to-cyan-400
                  opacity-20
                  blur-2xl
                "
              />

              {/* GRADIENT RING */}

              <div
                className="
                  relative
                  rounded-full
                  bg-gradient-to-r
                  from-blue-400
                  via-violet-500
                  to-cyan-400
                  p-[6px]
                "
              >
                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-[280px]
                    w-[280px]
                    overflow-hidden
                    rounded-full
                    bg-[#111827]
                    sm:h-[350px]
                    sm:w-[350px]
                    md:h-[400px]
                    md:w-[400px]
                    lg:h-[430px]
                    lg:w-[430px]
                  "
                >
                  <img
                    src="/profile.jpg"
                    alt="Abhishek Yadav"
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                  />

                  {/* IMAGE OVERLAY */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#070d19]/30
                      via-transparent
                      to-transparent
                    "
                  />
                </div>
              </div>

              {/* FLOATING CODE ICON */}

              <div
                className="
                  absolute
                  bottom-5
                  right-3
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-violet-400/40
                  bg-[#0b1220]
                  text-violet-400
                  shadow-xl
                  sm:bottom-8
                  sm:right-5
                "
              >
                <Code2 size={22} />
              </div>

              {/* DECORATIVE CIRCLES */}

              <div
                className="
                  absolute
                  -left-4
                  top-8
                  h-20
                  w-20
                  rounded-full
                  bg-blue-500/20
                  blur-[1px]
                "
              />

              <div
                className="
                  absolute
                  -right-3
                  top-1/2
                  h-12
                  w-12
                  rounded-full
                  bg-violet-500/40
                "
              />
            </div>
          </div>
        </div>

        {/* ================= INFO ROW ================= */}

        <div
          className="
            about-item
            mt-14
            grid
            grid-cols-1
            gap-6
            border-t
            border-white/10
            pt-8
            sm:grid-cols-3
            md:mt-16
          "
        >
          {/* BCA */}

          <InfoItem
            icon={<GraduationCap size={32} />}
            title="BCA Graduate"
            subtitle="Bachelor of Computer Applications"
            color="text-blue-400"
          />

          {/* LOCATION */}

          <InfoItem
            icon={<MapPin size={32} />}
            title="India"
            subtitle="Open to Relocation"
            color="text-violet-400"
          />

          {/* EXPERIENCE */}

          <InfoItem
            icon={<Code2 size={32} />}
            title="Fresher"
            subtitle="0 Years Experience"
            color="text-cyan-400"
          />
        </div>

        {/* ================= SKILLS ================= */}

        <div className="about-item mt-12 md:mt-14">
          <h2
            className="
              text-2xl
              font-semibold
              tracking-tight
              sm:text-3xl
            "
          >
            My Skills
          </h2>

          <div
            className="
              mt-3
              h-1
              w-14
              rounded-full
              bg-gradient-to-r
              from-blue-500
              to-violet-500
            "
          />

          <div
            className="
              mt-7
              flex
              flex-wrap
              gap-3
            "
          >
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-blue-400/20
                  bg-white/[0.02]
                  px-5
                  py-3
                  text-sm
                  text-neutral-200
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/60
                  hover:bg-blue-500/10
                  hover:text-white
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-gradient-to-r
                    from-blue-400
                    to-violet-500
                    transition-transform
                    duration-300
                    group-hover:scale-150
                  "
                />

                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* ================= BUTTONS ================= */}

        <div
          className="
            about-item
            mt-10
            flex
            flex-wrap
            gap-4
          "
        >
          {/* RESUME */}

          <a
            href="/resume.pdf"
            download
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-r
              from-blue-500
              via-violet-500
              to-purple-500
              px-6
              py-3.5
              text-sm
              font-medium
              text-white
              shadow-lg
              shadow-blue-500/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-blue-500/30
            "
          >
            <Download size={18} />
            Download Resume
            <ArrowUpRight size={17} />
          </a>

          {/* CONTACT */}

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-400/60
              px-6
              py-3.5
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-blue-500/10
            "
          >
            <Mail size={18} />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

/* ========================================================= */
/* INFO ITEM */
/* ========================================================= */

function InfoItem({ icon, title, subtitle, color }) {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        border-white/10
        sm:border-r
        sm:last:border-r-0
      "
    >
      <div className={`${color} shrink-0`}>
        {icon}
      </div>

      <div>
        <h3 className="text-base font-semibold text-white sm:text-lg">
          {title}
        </h3>

        <p className="mt-1 text-sm text-neutral-400">
          {subtitle}
        </p>
      </div>
    </div>
  );
}