// "use client";

// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// export default function AboutContent() {
//   const sectionRef = useRef(null);

//   useGSAP(() => {
//     gsap.from(".about-reveal", {
//       y: 80,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.15,
//       ease: "power4.out",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 75%",
//       },
//     });
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="py-40 bg-[var(--bg)] text-[var(--text)]"
//     >
//       <div className="max-w-7xl mx-auto px-8 md:px-16">

//         <p className="about-reveal uppercase tracking-[0.4em] text-sm text-neutral-500">
//           ABOUT ME
//         </p>

//         <h2
//           className="
//           about-reveal
//           mt-10
//           text-5xl
//           md:text-7xl
//           lg:text-8xl
//           font-light
//           leading-[1]
//           tracking-[-0.06em]
//         "
//         >
//           I don't just build websites.
//           <br />
//           I build digital experiences.
//         </h2>

//         <div className="grid lg:grid-cols-2 gap-20 mt-20">

//           <div className="about-reveal">
//             <p className="text-xl leading-10 text-neutral-500">

//               I'm Abhishek Yadav, a passionate Full Stack Developer
//               from India who loves building modern, interactive,
//               and high-performance web applications.

//               <br /><br />

//               I enjoy transforming ideas into beautiful digital
//               products using React, Next.js, Node.js, MongoDB,
//               GSAP and modern UI animations.

//             </p>
//           </div>

//           <div className="space-y-8">

//             {[
//               ["Location", "Jaunpur, Uttar Pradesh"],
//               ["Education", "Bachelor of Computer Applications"],
//               ["Focus", "Frontend • MERN • AI"],
//               ["Availability", "Open for Opportunities"],
//             ].map(([title, value]) => (
//               <div
//                 key={title}
//                 className="
//                   about-reveal
//                   border-b
//                   border-[var(--border)]
//                   pb-6
//                 "
//               >
//                 <p className="text-sm uppercase text-neutral-400">
//                   {title}
//                 </p>

//                 <h3 className="mt-2 text-2xl font-light">
//                   {value}
//                 </h3>
//               </div>
//             ))}

//           </div>

//         </div>

//         <div
//           className="
//             about-reveal
//             mt-32
//             rounded-[40px]
//             border
//             border-[var(--border)]
//             p-14
//             bg-[var(--surface)]
//           "
//         >

//           <p className="text-4xl md:text-6xl font-light leading-tight">

//             "Code is easy.

//             <br /><br />

//             Building experiences people remember
//             is what truly excites me."

//           </p>

//         </div>

//       </div>
//     </section>
//   );
// }






// "use client";

// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// export default function AboutContent() {
//   const sectionRef = useRef(null);

//   useGSAP(() => {
//     gsap.from(".about-item", {
//       y: 80,
//       opacity: 0,
//       stagger: 0.15,
//       duration: 1,
//       ease: "power4.out",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 80%",
//       },
//     });
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[var(--bg)] text-[var(--text)] py-40"
//     >
//       <div className="max-w-[1700px] mx-auto px-8 md:px-16">

//         <p className="about-item uppercase tracking-[0.4em] text-sm text-neutral-500">
//           ABOUT
//         </p>

//         <h2
//           className="
//           about-item
//           mt-8
//           text-5xl
//           md:text-7xl
//           lg:text-[7rem]
//           leading-none
//           tracking-[-0.06em]
//           font-light
//         "
//         >
//           Creating Modern
//           <br />
//           Digital Experiences
//         </h2>

//         <div className="mt-28 grid lg:grid-cols-12 gap-20">

//           {/* Left */}

//           <div className="lg:col-span-5">

//             <div
//               className="
//               about-item
//               sticky
//               top-32
//               rounded-[35px]
//               border
//               border-[var(--border)]
//               bg-[var(--surface)]
//               p-10
//             "
//             >
//               <h3 className="text-4xl font-light">
//                 Hello,
//                 <br />
//                 I'm Abhishek.
//               </h3>

//               <p className="mt-8 leading-9 text-neutral-500">
//                 Full Stack Developer passionate about
//                 React, Next.js, Node.js, GSAP,
//                 Three.js and AI.
//               </p>

//               <div className="mt-12 space-y-6">

//                 <div>
//                   <p className="text-neutral-400 text-sm">Location</p>
//                   <h4 className="text-2xl">India</h4>
//                 </div>

//                 <div>
//                   <p className="text-neutral-400 text-sm">Experience</p>
//                   <h4 className="text-2xl">MERN Developer</h4>
//                 </div>

//                 <div>
//                   <p className="text-neutral-400 text-sm">Focus</p>
//                   <h4 className="text-2xl">
//                     UI • Animation • Performance
//                   </h4>
//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* Right */}

//           <div className="lg:col-span-7 space-y-20">

//             <div className="about-item">

//               <h3 className="text-4xl font-light">
//                 My Story
//               </h3>

//               <p className="mt-8 text-xl leading-10 text-neutral-500">

//                 My journey started with curiosity.

//                 I was fascinated by how beautiful
//                 interfaces are built.

//                 Over time I mastered React,
//                 Next.js, Node.js, MongoDB,
//                 GSAP and modern frontend architecture.

//               </p>

//             </div>

//             <div className="about-item">

//               <h3 className="text-4xl font-light">
//                 What I Love
//               </h3>

//               <div className="mt-8 grid md:grid-cols-2 gap-8">

//                 {[
//                   "Modern UI Design",
//                   "GSAP Animation",
//                   "Three.js Experiences",
//                   "AI Applications",
//                   "Performance",
//                   "Responsive Design",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="
//                     rounded-2xl
//                     border
//                     border-[var(--border)]
//                     p-6
//                     hover:scale-105
//                     transition
//                   "
//                   >
//                     {item}
//                   </div>
//                 ))}

//               </div>

//             </div>

//             <div
//               className="
//               about-item
//               rounded-[40px]
//               bg-black
//               text-white
//               p-16
//             "
//             >

//               <p className="text-5xl leading-tight font-light">

//                 "I don't just write code.

//                 <br /><br />

//                 I design experiences people
//                 remember."

//               </p>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";

export default function AboutIntro() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
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
      className="w-full bg-[var(--bg)] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* HEADER */}
        <div className="about-reveal">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            02 / ABOUT ME
          </p>

          <div className="mt-5 h-[2px] w-20 bg-black" />
        </div>

        {/* CONTENT */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* IMAGE */}
          <div className="about-reveal lg:col-span-4">
            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src="/images/about.jpg"
                alt="Abhishek Yadav"
                className="
                  w-full
                  h-[420px]
                  md:h-[480px]
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              <div className="
                absolute
                bottom-0
                left-0
                right-0
                bg-black/50
                backdrop-blur-sm
                px-6
                py-4
              ">
                <p className="text-white text-lg font-medium">
                  Abhishek Yadav
                </p>

                <p className="mt-1 text-xs tracking-[0.2em] uppercase text-white/60">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="lg:col-span-8">

            {/* SMALL HEADING */}
            <h2
              className="
                about-reveal
                max-w-4xl
                text-3xl
                md:text-4xl
                lg:text-[3.2rem]
                font-light
                leading-[1.05]
                tracking-[-0.045em]
              "
            >
              Crafting modern digital experiences
              <span className="text-neutral-400">
                {" "}with clean code and thoughtful design.
              </span>
            </h2>

            {/* PARAGRAPH 1 */}
            <p
              className="
                about-reveal
                mt-8
                max-w-3xl
                text-base
                md:text-[17px]
                leading-7
                text-neutral-600
              "
            >
              Hello! I'm Abhishek Yadav, a Full-Stack MERN Developer
              passionate about building modern, responsive and scalable
              web applications.
            </p>

            {/* PARAGRAPH 2 */}
            <p
              className="
                about-reveal
                mt-5
                max-w-3xl
                text-base
                md:text-[17px]
                leading-7
                text-neutral-600
              "
            >
              I work with React, Next.js, Node.js, Express.js and MongoDB,
              while also exploring AI-powered applications using LangChain,
              Gemini APIs and RAG systems.
            </p>

            {/* INFO CARDS */}
            <div className="about-reveal mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div
                className="
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  px-5
                  py-5
                "
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                  Education
                </p>

                <p className="mt-2 text-sm md:text-base font-medium">
                  BCA · 2025
                </p>

                <p className="mt-1 text-xs text-neutral-500">
                  VBSPU, Jaunpur
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  px-5
                  py-5
                "
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                  Focus
                </p>

                <p className="mt-2 text-sm md:text-base font-medium">
                  Full Stack & AI
                </p>

                <p className="mt-1 text-xs text-neutral-500">
                  Modern Web Applications
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}