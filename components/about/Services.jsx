// "use client";

// const services = [
//   {
//     number: "01",
//     title: "Frontend Development",
//     desc: "Modern, responsive and interactive interfaces built using React, Next.js and Tailwind CSS."
//   },
//   {
//     number: "02",
//     title: "Full Stack Development",
//     desc: "Scalable backend development with Node.js, Express.js and MongoDB."
//   },
//   {
//     number: "03",
//     title: "Creative Development",
//     desc: "Smooth animations and immersive experiences using GSAP and modern web technologies."
//   },
// ];

// export default function Services() {
//   return (
//     <section className="bg-[#f8f7f4] py-36">

//       <div className="max-w-7xl mx-auto px-8 md:px-16">

//         <div className="mb-24">

//           <p className="uppercase tracking-[0.4em] text-neutral-500 text-sm">
//             06 / SERVICES
//           </p>

//           <h2 className="mt-6 text-6xl md:text-8xl font-light">
//             What I Do
//           </h2>

//         </div>

//         <div className="space-y-10">

//           {services.map((item) => (

//             <div
//               key={item.number}
//               className="group border-t border-[#E5E2DC] pt-10 flex flex-col md:flex-row justify-between gap-8 hover:pl-8 duration-500"
//             >

//               <div className="flex gap-10">

//                 <span className="text-neutral-500 text-xl">
//                   {item.number}
//                 </span>

//                 <h3 className="text-4xl md:text-5xl font-light">
//                   {item.title}
//                 </h3>

//               </div>

//               <p className="max-w-xl text-lg text-neutral-600 leading-8">
//                 {item.desc}
//               </p>

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }





// "use client";

// import { ArrowUpRight } from "lucide-react";
// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// const services = [
//   {
//     number: "01",
//     title: "Frontend Development",
//     desc: "Modern, responsive and pixel-perfect interfaces built with React, Next.js, Tailwind CSS and premium animations.",
//   },
//   {
//     number: "02",
//     title: "Full Stack Development",
//     desc: "Scalable backend architecture using Node.js, Express.js, MongoDB and REST APIs with clean code practices.",
//   },
//   {
//     number: "03",
//     title: "AI Applications",
//     desc: "Building intelligent products using LangChain, Gemini APIs, RAG systems and modern AI workflows.",
//   },
// ];

// export default function Services() {
//   const sectionRef = useRef(null);

//   useGSAP(() => {
//     gsap.from(".service-card", {
//       opacity: 0,
//       y: 80,
//       duration: 1,
//       stagger: 0.15,
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
//       className="py-40 bg-[var(--bg)] text-[var(--text)]"
//     >
//       <div className="max-w-7xl mx-auto px-8 md:px-16">

//         <p className="uppercase tracking-[0.4em] text-sm text-neutral-500">
//           06 / SERVICES
//         </p>

//         <h2 className="mt-8 text-6xl md:text-8xl font-light tracking-[-0.06em]">
//           What I Do
//         </h2>

//         <div className="mt-24 space-y-8">

//           {services.map((item) => (
//             <div
//               key={item.number}
//               className="
//                 service-card
//                 group
//                 rounded-[36px]
//                 border
//                 border-[var(--border)]
//                 bg-[var(--surface)]
//                 p-10
//                 transition-all
//                 duration-500
//                 hover:-translate-y-2
//                 hover:shadow-[0_30px_70px_rgba(0,0,0,.08)]
//               "
//             >
//               <div className="flex flex-col lg:flex-row justify-between gap-10">

//                 <div>

//                   <p className="text-sm tracking-[0.3em] text-neutral-500">
//                     {item.number}
//                   </p>

//                   <h3
//                     className="
//                       mt-5
//                       text-4xl
//                       md:text-5xl
//                       font-light
//                       transition-all
//                       duration-500
//                       group-hover:translate-x-3
//                     "
//                   >
//                     {item.title}
//                   </h3>

//                 </div>

//                 <div className="max-w-xl">

//                   <p className="text-lg leading-9 text-neutral-500">
//                     {item.desc}
//                   </p>

//                 </div>

//                 <div
//                   className="
//                     flex
//                     items-start
//                     justify-end
//                   "
//                 >
//                   <ArrowUpRight
//                     className="
//                       h-10
//                       w-10
//                       transition-all
//                       duration-500
//                       group-hover:rotate-45
//                       group-hover:scale-125
//                     "
//                   />
//                 </div>

//               </div>
//             </div>
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

const services = [
  {
    number: "01",
    title: "Frontend Development",
    desc: "Modern, responsive and pixel-perfect interfaces built with React, Next.js, Tailwind CSS and premium animations.",
  },
  {
    number: "02",
    title: "Full Stack Development",
    desc: "Scalable backend architecture using Node.js, Express.js, MongoDB and REST APIs with clean code practices.",
  },
  {
    number: "03",
    title: "AI Applications",
    desc: "Building intelligent products using LangChain, Gemini APIs, RAG systems and modern AI workflows.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".service-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Recalculate positions after the page layout is ready
      requestAnimationFrame(() => {
        if (gsap.ScrollTrigger) {
          gsap.ScrollTrigger.refresh();
        }
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="
        bg-[var(--bg)]
        text-[var(--text)]
        py-24
        md:py-32
        lg:py-36
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          sm:px-8
          md:px-12
          lg:px-16
        "
      >
        {/* HEADER */}

        <div className="mb-14 md:mb-20">
          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-neutral-500
            "
          >
            06 / SERVICES
          </p>

          <h2
            className="
              mt-5
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[7rem]
              font-light
              leading-[0.9]
              tracking-[-0.07em]
            "
          >
            What I Do
          </h2>
        </div>

        {/* SERVICES */}

        <div className="space-y-5 md:space-y-6">
          {services.map((item) => (
            <article
              key={item.number}
              className="
                service-card
                group
                rounded-[24px]
                md:rounded-[32px]
                border
                border-[var(--border)]
                bg-[var(--surface)]
                p-6
                sm:p-8
                md:p-10
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_25px_60px_rgba(0,0,0,.07)]
              "
            >
              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-[80px_1fr_1fr_50px]
                  gap-6
                  md:gap-8
                  items-start
                "
              >
                {/* NUMBER */}

                <div>
                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-neutral-400
                    "
                  >
                    {item.number}
                  </span>
                </div>

                {/* TITLE */}

                <div>
                  <h3
                    className="
                      text-3xl
                      sm:text-4xl
                      md:text-5xl
                      font-light
                      leading-tight
                      tracking-[-0.04em]
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                    "
                  >
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}

                <div>
                  <p
                    className="
                      text-base
                      md:text-lg
                      leading-7
                      md:leading-8
                      text-neutral-500
                    "
                  >
                    {item.desc}
                  </p>
                </div>

                {/* ARROW */}

                <div
                  className="
                    hidden
                    md:flex
                    justify-end
                  "
                >
                  <ArrowUpRight
                    className="
                      h-7
                      w-7
                      text-neutral-500
                      transition-all
                      duration-500
                      group-hover:rotate-45
                      group-hover:scale-110
                      group-hover:text-[var(--text)]
                    "
                  />
                </div>
              </div>

              {/* MOBILE ARROW */}

              <div className="mt-5 flex justify-end md:hidden">
                <ArrowUpRight
                  className="
                    h-6
                    w-6
                    text-neutral-500
                    transition-transform
                    duration-500
                    group-hover:rotate-45
                  "
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}