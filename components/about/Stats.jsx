// "use client";

// const stats = [
//   {
//     number: "20+",
//     title: "Projects Completed",
//   },
//   {
//     number: "15+",
//     title: "Technologies",
//   },
//   {
//     number: "100%",
//     title: "Responsive Design",
//   },
//   {
//     number: "24/7",
//     title: "Learning Mindset",
//   },
// ];

// export default function Stats() {
//   return (
//     <section className="bg-[#111111] text-white py-32">

//       <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

//         <p className="uppercase tracking-[0.4em] text-sm text-neutral-400">
//           05 / Stats
//         </p>

//         <h2 className="text-6xl md:text-8xl font-light mt-6">
//           Numbers
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24">

//           {stats.map((item, index) => (

//             <div
//               key={index}
//               className="border-t border-neutral-700 pt-8"
//             >

//               <h3 className="text-7xl md:text-8xl font-light">
//                 {item.number}
//               </h3>

//               <p className="text-lg mt-4 text-neutral-400">
//                 {item.title}
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

// const stats = [
//   {
//     number: "15+",
//     title: "Projects Completed",
//     desc: "Modern web applications built with React, Next.js and MERN."
//   },
//   {
//     number: "2+",
//     title: "Years Learning",
//     desc: "Continuously improving frontend and backend development."
//   },
//   {
//     number: "100%",
//     title: "Responsive Design",
//     desc: "Every project works beautifully across all devices."
//   },
//   {
//     number: "AI",
//     title: "AI Applications",
//     desc: "LangGraph, RAG, Gemini, OpenAI integrations."
//   }
// ];

// export default function Stats() {

//   const sectionRef = useRef(null);

//   useGSAP(() => {

//     gsap.from(".stat-card",{
//       y:80,
//       opacity:0,
//       duration:1,
//       stagger:.15,
//       ease:"power4.out",
//       scrollTrigger:{
//         trigger:sectionRef.current,
//         start:"top 75%"
//       }
//     })

//   },[])

//   return (

//     <section
//       ref={sectionRef}
//       className="py-40 bg-[var(--bg)]"
//     >

//       <div className="max-w-7xl mx-auto px-8 md:px-16">

//         <p className="uppercase tracking-[0.4em] text-sm text-neutral-500">
//           MY NUMBERS
//         </p>

//         <h2 className="mt-6 text-6xl md:text-8xl font-light tracking-[-0.06em]">
//           Building
//           <br />
//           Digital Products
//         </h2>

//         <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

//           {stats.map((item)=>(
//             <div

//               key={item.title}

//               className="
//               stat-card
//               rounded-[32px]
//               border
//               border-[var(--border)]
//               bg-[var(--surface)]
//               p-10
//               transition-all
//               duration-500
//               hover:-translate-y-4
//               hover:shadow-2xl
//               "

//             >

//               <h2 className="text-6xl font-light">
//                 {item.number}
//               </h2>

//               <h3 className="mt-8 text-2xl">
//                 {item.title}
//               </h3>

//               <p className="mt-5 text-neutral-500 leading-8">
//                 {item.desc}
//               </p>

//             </div>
//           ))}

//         </div>

//       </div>

//     </section>

//   )

// }






// "use client";

// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// const stats = [
//   {
//     number: "20+",
//     title: "Projects Completed",
//   },
//   {
//     number: "15+",
//     title: "Technologies",
//   },
//   {
//     number: "100%",
//     title: "Responsive Design",
//   },
//   {
//     number: "AI",
//     title: "Powered Applications",
//   },
// ];

// export default function Stats() {

//   const sectionRef = useRef(null);

//   useGSAP(() => {

//     gsap.from(".stat-card",{
//       opacity:0,
//       y:80,
//       duration:1,
//       stagger:0.15,
//       ease:"power4.out",
//       scrollTrigger:{
//         trigger:sectionRef.current,
//         start:"top 75%"
//       }
//     });

//   });

//   return (

// <section
// ref={sectionRef}
// className="py-20 md:py-24 bg-[var(--bg)]"
// >

// <div className="max-w-7xl mx-auto px-8 md:px-16">

// <p className="uppercase tracking-[0.4em] text-sm text-neutral-500">
// 05 / Statistics
// </p>

// <h2 className="mt-8 text-6xl md:text-8xl font-light tracking-[-0.06em]">
// By The Numbers
// </h2>

// <div className="grid md:grid-cols-2 grid-cols-4 gap-4 mt-10">

// {
// stats.map((item)=>(
// <div
// key={item.title}
// className="
// stat-card
// rounded-[36px]
// border
// border-[var(--border)]
// bg-[var(--surface)]
// p-10
// transition-all
// duration-500
// hover:-translate-y-4
// hover:shadow-[0_30px_70px_rgba(0,0,0,.08)]
// "
// >

// <h3 className="text-6xl font-light">
// {item.number}
// </h3>

// <p className="mt-6 text-lg text-neutral-500 leading-8">
// {item.title}
// </p>

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

// const stats = [
//   {
//     number: "20+",
//     title: "Projects Completed",
//   },
//   {
//     number: "15+",
//     title: "Technologies",
//   },
//   {
//     number: "100%",
//     title: "Responsive Design",
//   },
//   {
//     number: "AI",
//     title: "Powered Applications",
//   },
// ];

// export default function Stats() {
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       gsap.from(".stat-card", {
//         y: 30,
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
//       className="bg-[#111] text-white py-20 md:py-24"
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

//         <div className="mb-10 md:mb-14">

//           <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
//             05 / NUMBERS
//           </p>

//           <h2 className="mt-5 text-5xl md:text-7xl font-light tracking-[-0.06em]">
//             By The Numbers
//           </h2>

//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">

//           {stats.map((item) => (
//             <div
//               key={item.title}
//               className="
//                 stat-card
//                 min-h-[150px]
//                 md:min-h-[190px]
//                 rounded-[24px]
//                 border
//                 border-white/10
//                 bg-white/[0.04]
//                 p-5
//                 md:p-7
//                 flex
//                 flex-col
//                 justify-between
//                 transition-all
//                 duration-500
//                 hover:-translate-y-2
//                 hover:bg-white/[0.08]
//               "
//             >

//               <span className="text-3xl md:text-5xl font-light">
//                 {item.number}
//               </span>

//               <p className="text-xs md:text-sm text-neutral-400 leading-5">
//                 {item.title}
//               </p>

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";

const stats = [
  {
    number: "20+",
    title: "Projects Completed",
    gradient: "from-fuchsia-500 via-cyan-400 to-emerald-400",
  },
  {
    number: "15+",
    title: "Technologies",
    gradient: "from-emerald-400 via-cyan-400 to-blue-500",
  },
  {
    number: "100%",
    title: "Responsive Design",
    gradient: "from-orange-400 via-pink-500 to-fuchsia-500",
  },
  {
    number: "AI",
    title: "Powered Applications",
    gradient: "from-violet-500 via-fuchsia-500 to-cyan-400",
  },
];

export default function Stats() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".stat-card", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        bg-[var(--bg)]
        text-[var(--text)]
        py-16
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

        {/* ================= HEADER ================= */}

        <div className="mb-9 md:mb-12">

          <div className="flex items-center gap-4">

            <p
              className="
                whitespace-nowrap
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-neutral-500
                sm:text-[10px]
              "
            >
              05 / NUMBERS
            </p>

            <div className="h-px flex-1 bg-[var(--border)]" />

          </div>

          <p
            className="
              mt-6
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-neutral-400
            "
          >
            A quick look
          </p>

          <h2
            className="
              mt-3
              text-4xl
              font-light
              leading-none
              tracking-[-0.06em]
              sm:text-5xl
              md:text-6xl
              lg:text-[5.5rem]
            "
          >
            The Numbers
          </h2>

        </div>

        {/* ================= STATS ================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-3
            md:grid-cols-4
            md:gap-4
          "
        >

          {stats.map((item) => (

            <div
              key={item.title}
              className={`
                stat-card
                group
                rounded-[20px]
                bg-gradient-to-r
                ${item.gradient}
                animate-gradient
                p-[1.5px]
              `}
              style={{
                backgroundSize: "250% 250%",
              }}
            >

              {/* INNER CARD */}

              <div
                className="
                  relative
                  flex
                  min-h-[145px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[19px]
                  bg-[var(--surface)]
                  p-5
                  transition-all
                  duration-500
                  group-hover:-translate-y-[1px]
                  sm:p-6
                  md:min-h-[165px]
                  md:p-7
                "
              >

                {/* NUMBER */}

                <span
                  className="
                    text-2xl
                    font-medium
                    tracking-[-0.04em]
                    sm:text-3xl
                    md:text-4xl
                  "
                >
                  {item.number}
                </span>

                {/* TITLE */}

                <p
                  className="
                    max-w-[140px]
                    text-[10px]
                    leading-4
                    text-neutral-500
                    dark:text-neutral-400
                    sm:text-xs
                    sm:leading-5
                  "
                >
                  {item.title}
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

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}