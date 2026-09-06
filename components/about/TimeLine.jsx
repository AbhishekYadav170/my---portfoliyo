// "use client";

// const timeline = [
//   {
//     year: "2023",
//     title: "Started Web Development",
//     description:
//       "Began learning HTML, CSS and JavaScript while building small projects.",
//   },
//   {
//     year: "2024",
//     title: "React Development",
//     description:
//       "Focused on React.js, responsive UI, APIs and modern frontend practices.",
//   },
//   {
//     year: "2025",
//     title: "MERN Stack & Next.js",
//     description:
//       "Built full-stack applications using MongoDB, Express, React, Next.js and Node.js.",
//   },
//   {
//     year: "2026",
//     title: "Creative Frontend",
//     description:
//       "Learning GSAP, Three.js and creating premium interactive web experiences.",
//   },
// ];

// export default function Timeline() {
//   return (
//     <section className="bg-[#f8f7f4] py-32">

//       <div className="mx-auto max-w-7xl px-8 md:px-16 lg:px-24">

//         {/* Heading */}

//         <div className="mb-20">

//           <p className="uppercase tracking-[0.4em] text-sm text-neutral-500">
//             04 / Journey
//           </p>

//           <h2 className="mt-6 text-6xl md:text-8xl font-light">
//             My Journey
//           </h2>

//         </div>

//         {/* Timeline */}

//         <div className="space-y-16">

//           {timeline.map((item, index) => (
//             <div
//               key={index}
//               className="grid md:grid-cols-[180px_1fr] gap-10 border-b border-[#E5E2DC] pb-12"
//             >
//               <h3 className="text-3xl md:text-4xl font-light text-neutral-500">
//                 {item.year}
//               </h3>

//               <div>

//                 <h4 className="text-3xl md:text-5xl font-light">
//                   {item.title}
//                 </h4>

//                 <p className="mt-6 max-w-2xl text-lg leading-9 text-neutral-600">
//                   {item.description}
//                 </p>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }






// "use client";

// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// const timeline = [
//   {
//     year: "2022",
//     title: "Started Programming",
//     text: "Began learning HTML, CSS and JavaScript while exploring web development."
//   },
//   {
//     year: "2023",
//     title: "MERN Development",
//     text: "Built full stack applications using React, Node.js, Express and MongoDB."
//   },
//   {
//     year: "2024",
//     title: "Advanced Frontend",
//     text: "Focused on Next.js, GSAP animations, performance optimization and UI design."
//   },
//   {
//     year: "2025",
//     title: "AI Development",
//     text: "Started building AI-powered applications with LangChain, Gemini and modern LLM APIs."
//   },
//   {
//     year: "2026",
//     title: "Professional Growth",
//     text: "Creating production-ready products and actively looking for exciting opportunities."
//   }
// ];

// export default function Timeline() {
//   const sectionRef = useRef(null);

//   useGSAP(() => {
//     gsap.from(".timeline-card", {
//       opacity: 0,
//       y: 100,
//       stagger: 0.2,
//       duration: 1,
//       ease: "power4.out",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 75%",
//       },
//     });
//   });

//   return (
//     <section
//       ref={sectionRef}
//       className="py-40 bg-[var(--bg)]"
//     >
//       <div className="max-w-6xl mx-auto px-8">

//         <p className="uppercase tracking-[0.4em] text-sm text-neutral-500">
//           MY JOURNEY
//         </p>

//         <h2 className="mt-8 text-6xl md:text-8xl font-light tracking-[-0.06em]">
//           Experience
//         </h2>

//         <div className="relative mt-24">

//           <div
//             className="
//             absolute
//             left-5
//             top-0
//             bottom-0
//             w-px
//             bg-[var(--border)]
//           "
//           />

//           {timeline.map((item, index) => (
//             <div
//               key={item.year}
//               className="
//               timeline-card
//               relative
//               pl-20
//               mb-24
//             "
//             >

//               <div
//                 className="
//                 absolute
//                 left-0
//                 top-3
//                 h-10
//                 w-10
//                 rounded-full
//                 bg-black
//               "
//               />

//               <h3 className="text-5xl font-light">
//                 {item.year}
//               </h3>

//               <h4 className="mt-5 text-3xl">
//                 {item.title}
//               </h4>

//               <p className="mt-6 max-w-2xl text-lg leading-9 text-neutral-500">
//                 {item.text}
//               </p>

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }




// "use client";

// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// const timeline = [
//   {
//     year: "2022",
//     title: "Started Programming",
//     text: "Started learning HTML, CSS and JavaScript. This was the beginning of my journey into web development."
//   },
//   {
//     year: "2023",
//     title: "MERN Stack Development",
//     text: "Built multiple full stack projects using React, Node.js, Express and MongoDB while improving backend architecture."
//   },
//   {
//     year: "2024",
//     title: "Creative Frontend",
//     text: "Focused on premium UI, GSAP animations, Three.js and Next.js to build immersive user experiences."
//   },
//   {
//     year: "2025",
//     title: "AI Development",
//     text: "Started creating AI powered applications using LangChain, Gemini APIs and RAG systems."
//   },
//   {
//     year: "2026",
//     title: "Professional Growth",
//     text: "Building production ready products and actively looking for challenging software engineering opportunities."
//   }
// ];

// export default function Timeline() {

//   const sectionRef = useRef(null);

//   useGSAP(() => {

//     gsap.from(".timeline-item",{
//       //opacity:0,
//       y:100,
//       duration:1,
//       stagger:0.18,
//       ease:"power4.out",
//       scrollTrigger:{
//         trigger:sectionRef.current,
//         start:"top 85%"
//       }
//     });

//   });

//   return(

// <section
// ref={sectionRef}
// className="py-40 bg-[var(--bg)]"
// >

// <div className="max-w-7xl mx-auto px-8 md:px-16">

// <p className="uppercase tracking-[0.4em] text-sm text-neutral-500">
// 04 / Journey
// </p>

// <h2 className="mt-8 text-6xl md:text-8xl font-light tracking-[-0.06em]">
// My Journey
// </h2>

// <div className="relative mt-28">

// <div
// className="
// absolute
// left-1/2
// top-0
// bottom-0
// w-[2px]
// bg-[var(--border)]
// -translate-x-1/2
// "
// />

// {
// timeline.map((item,index)=>(

// <div
// key={item.year}
// className={`
// timeline-item
// relative
// mb-40
// flex
// ${index%2===0?"justify-start":"justify-end"}
// `}
// >

// <div
// className="
// w-full
// md:w-[46%]
// rounded-[36px]
// border
// border-[var(--border)]
// bg-[var(--surface)]
// p-10
// transition-all
// duration-500
// hover:-translate-y-3
// hover:shadow-[0_30px_70px_rgba(0,0,0,.08)]
// "
// />

// <div
// className="
// absolute
// left-1/2
// top-10
// h-6
// w-6
// rounded-full
// bg-[var(--text)]
// -translate-x-1/2
// ring-8
// ring-[var(--bg)]
// "
// />

// <div className="relative">

// <h3
// className="
// text-6xl
// font-light
// tracking-[-0.06em]
// "
// >
// {item.year}
// </h3>

// <h4
// className="
// mt-8
// text-3xl
// font-medium
// "
// >
// {item.title}
// </h4>

// <p
// className="
// mt-6
// leading-9
// text-neutral-500
// text-lg
// "
// >
// {item.text}
// </p>

// </div>

// </div>

// ))
// }

// </div>

// </div>

// </section>

//   )

// }





// "use client";

// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// const timeline = [
//   {
//     year: "2022",
//     title: "Started Programming",
//     text: "Started learning HTML, CSS and JavaScript. This was the beginning of my journey into web development.",
//   },
//   {
//     year: "2023",
//     title: "MERN Stack Development",
//     text: "Built multiple full stack projects using React, Node.js, Express and MongoDB.",
//   },
//   {
//     year: "2024",
//     title: "Creative Frontend",
//     text: "Focused on premium UI, GSAP animations, Three.js and Next.js.",
//   },
//   {
//     year: "2025",
//     title: "AI Development",
//     text: "Started creating AI powered applications using LangChain, Gemini APIs and RAG systems.",
//   },
//   {
//     year: "2026",
//     title: "Professional Growth",
//     text: "Building production-ready products and looking for challenging software engineering opportunities.",
//   },
// ];

// export default function Timeline() {
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       gsap.from(".timeline-item", {
//         y: 35,
//         duration: 0.7,
//         stagger: 0.1,
//         ease: "power3.out",
//         clearProps: "transform",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 85%",
//           once: true,
//         },
//       });
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[var(--bg)] text-[var(--text)] py-20 md:py-24"
//     >
//       <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

//         {/* Header */}
//         <div className="mb-12 md:mb-16">
//           <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
//             04 / JOURNEY
//           </p>

//           <h2 className="mt-5 text-5xl md:text-7xl font-light tracking-[-0.06em]">
//             My Journey
//           </h2>
//         </div>

//         {/* Timeline */}
//         <div className="relative">

//           {/* Timeline Line */}
//           <div className="absolute left-[42px] top-0 bottom-0 w-px bg-[var(--border)] hidden md:block" />

//           <div className="space-y-5 md:space-y-7">

//             {timeline.map((item) => (
//               <div
//                 key={item.year}
//                 className="
//                   timeline-item
//                   relative
//                   grid
//                   grid-cols-1
//                   md:grid-cols-[84px_1fr]
//                   gap-5
//                   md:gap-8
//                   items-start
//                 "
//               >

//                 {/* Year */}
//                 <div
//                   className="
//                     relative
//                     z-10
//                     flex
//                     items-center
//                     justify-center
//                     md:h-12
//                     md:w-[84px]
//                     rounded-full
//                     border
//                     border-[var(--border)]
//                     bg-[var(--surface)]
//                     text-sm
//                     font-medium
//                   "
//                 >
//                   {item.year}
//                 </div>

//                 {/* Content */}
//                 <div
//                   className="
//                     rounded-[24px]
//                     border
//                     border-[var(--border)]
//                     bg-[var(--surface)]
//                     p-6
//                     md:p-8
//                     transition-all
//                     duration-500
//                     hover:-translate-y-1
//                     hover:shadow-[0_20px_50px_rgba(0,0,0,.06)]
//                   "
//                 >
//                   <h3 className="text-xl md:text-2xl font-light">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 max-w-2xl text-sm md:text-base leading-7 text-neutral-500">
//                     {item.text}
//                   </p>
//                 </div>

//               </div>
//             ))}

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }






// "use client";

// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// const skills = [
//   {
//     number: "01",
//     title: "Frontend",
//     skills: "HTML • CSS • JavaScript • React • Next.js",
//     description: "Modern responsive interfaces and interactive web experiences.",
//     gradient: "from-fuchsia-500 via-purple-500 to-cyan-400",
//   },
//   {
//     number: "02",
//     title: "Styling & UI",
//     skills: "Tailwind CSS • SCSS • Responsive Design",
//     description: "Clean layouts, reusable components and polished user interfaces.",
//     gradient: "from-cyan-400 via-blue-500 to-violet-500",
//   },
//   {
//     number: "03",
//     title: "Backend",
//     skills: "Node.js • Express.js • MongoDB • REST APIs",
//     description: "Scalable server-side applications and API development.",
//     gradient: "from-emerald-400 via-cyan-400 to-blue-500",
//   },
//   {
//     number: "04",
//     title: "Animation",
//     skills: "GSAP • Framer Motion • Three.js",
//     description: "Smooth animations, creative interactions and immersive experiences.",
//     gradient: "from-orange-400 via-pink-500 to-fuchsia-500",
//   },
//   {
//     number: "05",
//     title: "AI Development",
//     skills: "LangChain • Gemini • RAG • AI Workflows",
//     description: "AI-powered applications and intelligent product experiences.",
//     gradient: "from-yellow-400 via-orange-400 to-pink-500",
//   },
//   {
//     number: "06",
//     title: "Tools",
//     skills: "Git • GitHub • Docker • JWT",
//     description: "Development tools, authentication and production workflows.",
//     gradient: "from-blue-500 via-cyan-400 to-emerald-400",
//   },
// ];

// export default function Timeline() {
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       const cards = gsap.utils.toArray(".skill-card");

//       gsap.fromTo(
//         cards,
//         {
//           opacity: 0,
//           x: 50,
//         },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 0.8,
//           stagger: 0.1,
//           ease: "power3.out",
//           clearProps: "transform,opacity",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 82%",
//             once: true,
//           },
//         }
//       );
//     },
//     {
//       scope: sectionRef,
//     }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       id="skills"
//       className="
//         w-full
//         overflow-hidden
//         bg-[var(--bg)]
//         py-16
//         text-[var(--text)]
//         transition-colors
//         duration-500
//         sm:py-20
//         md:py-24
//       "
//     >
//       <div
//         className="
//           mx-auto
//           max-w-7xl
//           px-6
//           sm:px-8
//           md:px-10
//           lg:px-16
//         "
//       >

//         {/* ================= HEADER ================= */}

//         <div className="mb-10 md:mb-12">

//           <div className="flex items-center gap-4">

//             <p
//               className="
//                 whitespace-nowrap
//                 text-[9px]
//                 uppercase
//                 tracking-[0.35em]
//                 text-neutral-500
//               "
//             >
//               04 / SKILLS
//             </p>

//             <div className="h-px flex-1 bg-[var(--border)]" />

//           </div>

//           <h2
//             className="
//               mt-5
//               max-w-3xl
//               text-4xl
//               font-light
//               leading-none
//               tracking-[-0.06em]
//               sm:text-5xl
//               md:text-6xl
//             "
//           >
//             What I Work With
//           </h2>

//           <p
//             className="
//               mt-4
//               max-w-xl
//               text-sm
//               leading-6
//               text-neutral-500
//               md:text-[15px]
//             "
//           >
//             Technologies I use to build modern, scalable and interactive
//             digital experiences.
//           </p>

//         </div>

//         {/* ================= SKILL CARDS ================= */}

//         <div className="space-y-4">

//           {skills.map((item) => (
//             <article
//               key={item.number}
//               className={`
//                 skill-card
//                 group
//                 rounded-[22px]
//                 bg-gradient-to-r
//                 ${item.gradient}
//                 p-[1.5px]
//                 animate-gradient
//               `}
//               style={{
//                 backgroundSize: "250% 250%",
//               }}
//             >

//               <div
//                 className="
//                   relative
//                   overflow-hidden
//                   rounded-[21px]
//                   bg-[var(--surface)]
//                   px-5
//                   py-5
//                   transition-all
//                   duration-500
//                   group-hover:-translate-y-[2px]
//                   sm:px-6
//                   md:px-8
//                   md:py-6
//                 "
//               >

//                 {/* CONTENT */}

//                 <div
//                   className="
//                     flex
//                     flex-col
//                     gap-4
//                     md:flex-row
//                     md:items-center
//                     md:gap-8
//                   "
//                 >

//                   {/* NUMBER */}

//                   <span
//                     className="
//                       shrink-0
//                       text-[9px]
//                       font-medium
//                       tracking-[0.25em]
//                       text-neutral-400
//                       md:w-10
//                     "
//                   >
//                     {item.number}
//                   </span>

//                   {/* TITLE */}

//                   <h3
//                     className="
//                       shrink-0
//                       text-xl
//                       font-medium
//                       tracking-[-0.03em]
//                       md:w-44
//                       md:text-2xl
//                     "
//                   >
//                     {item.title}
//                   </h3>

//                   {/* SKILLS */}

//                   <div className="min-w-0 flex-1">

//                     <p
//                       className="
//                         text-sm
//                         font-medium
//                         leading-6
//                         text-[var(--text)]
//                         sm:text-[15px]
//                       "
//                     >
//                       {item.skills}
//                     </p>

//                     <p
//                       className="
//                         mt-1
//                         text-xs
//                         leading-5
//                         text-neutral-500
//                       "
//                     >
//                       {item.description}
//                     </p>

//                   </div>

//                   {/* ARROW */}

//                   <span
//                     className="
//                       hidden
//                       h-9
//                       w-9
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-[var(--border)]
//                       text-sm
//                       text-neutral-400
//                       transition-all
//                       duration-500
//                       group-hover:rotate-45
//                       group-hover:text-[var(--text)]
//                       md:flex
//                     "
//                   >
//                     ↗
//                   </span>

//                 </div>

//                 {/* BOTTOM GRADIENT */}

//                 <div
//                   className={`
//                     pointer-events-none
//                     absolute
//                     bottom-0
//                     left-0
//                     h-[2px]
//                     w-full
//                     bg-gradient-to-r
//                     ${item.gradient}
//                     animate-gradient
//                   `}
//                   style={{
//                     backgroundSize: "250% 250%",
//                   }}
//                 />

//               </div>

//             </article>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }





"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";

const skills = [
  {
    number: "01",
    title: "Frontend",
    skills: "HTML • CSS • JavaScript • React • Next.js",
    description: "Modern responsive interfaces and interactive web experiences.",
    gradient: "from-fuchsia-500 via-purple-500 to-cyan-400",
  },
  {
    number: "02",
    title: "Styling & UI",
    skills: "Tailwind CSS • SCSS • Responsive Design",
    description: "Clean layouts, reusable components and polished UI.",
    gradient: "from-cyan-400 via-blue-500 to-violet-500",
  },
  {
    number: "03",
    title: "Backend",
    skills: "Node.js • Express.js • MongoDB • REST APIs",
    description: "Scalable server-side applications and API development.",
    gradient: "from-emerald-400 via-cyan-400 to-blue-500",
  },
  {
    number: "04",
    title: "Animation",
    skills: "GSAP • Framer Motion • Three.js",
    description: "Smooth animations and immersive interactions.",
    gradient: "from-orange-400 via-pink-500 to-fuchsia-500",
  },
  {
    number: "05",
    title: "AI Development",
    skills: "LangChain • Gemini • RAG",
    description: "AI-powered applications and intelligent workflows.",
    gradient: "from-yellow-400 via-orange-400 to-pink-500",
  },
  {
    number: "06",
    title: "Tools",
    skills: "Git • GitHub • Docker • JWT",
    description: "Development tools and production workflows.",
    gradient: "from-blue-500 via-cyan-400 to-emerald-400",
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".skill-card",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="
        w-full
        overflow-hidden
        bg-[var(--bg)]
        py-16
        text-[var(--text)]
        transition-colors
        duration-500
        sm:py-20
        md:py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          sm:px-8
          md:px-10
          lg:px-16
        "
      >

        {/* HEADER */}

        <div className="mb-10 md:mb-12">

          <div className="flex items-center gap-4">

            <p
              className="
                whitespace-nowrap
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-neutral-500
              "
            >
              04 / SKILLS
            </p>

            <div className="h-px flex-1 bg-[var(--border)]" />

          </div>

          <h2
            className="
              mt-5
              text-4xl
              font-light
              leading-none
              tracking-[-0.06em]
              sm:text-5xl
              md:text-6xl
            "
          >
            What I Work With
          </h2>

          <p
            className="
              mt-3
              max-w-lg
              text-sm
              leading-6
              text-neutral-500
            "
          >
            Technologies I use to create modern digital experiences.
          </p>

        </div>

        {/* VERTICAL CARDS */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {skills.map((item) => (
            <article
              key={item.number}
              className={`
                skill-card
                group
                rounded-[22px]
                bg-gradient-to-r
                ${item.gradient}
                p-[1.5px]
                animate-gradient
              `}
              style={{
                backgroundSize: "250% 250%",
              }}
            >

              <div
                className="
                  relative
                  flex
                  min-h-[230px]
                  flex-col
                  overflow-hidden
                  rounded-[21px]
                  bg-[var(--surface)]
                  p-5
                  transition-all
                  duration-500
                  group-hover:-translate-y-1
                  sm:p-6
                "
              >

                {/* TOP */}

                <div className="flex items-center justify-between">

                  <span
                    className="
                      text-[9px]
                      tracking-[0.25em]
                      text-neutral-400
                    "
                  >
                    {item.number}
                  </span>

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[var(--border)]
                      text-neutral-400
                      transition-all
                      duration-500
                      group-hover:rotate-45
                      group-hover:text-[var(--text)]
                    "
                  >
                    <ArrowUpRight size={16} />
                  </div>

                </div>

                {/* TITLE */}

                <h3
                  className="
                    mt-8
                    text-2xl
                    font-medium
                    tracking-[-0.04em]
                    sm:text-[27px]
                  "
                >
                  {item.title}
                </h3>

                {/* SKILLS */}

                <p
                  className="
                    mt-4
                    text-sm
                    font-medium
                    leading-6
                  "
                >
                  {item.skills}
                </p>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-neutral-500
                  "
                >
                  {item.description}
                </p>

                {/* BOTTOM GRADIENT */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    bg-gradient-to-r
                    ${item.gradient}
                    animate-gradient
                  `}
                  style={{
                    backgroundSize: "250% 250%",
                  }}
                />

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}