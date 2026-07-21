// "use client";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen bg-[#f5f5f5] text-[#010101] pt-32 pb-16 px-8 md:px-16 lg:px-24">

//       <div className="mx-auto flex h-full max-w-7xl flex-col justify-between">

//         {/* Top Row */}
//         <div className="flex items-center justify-between">
//           <span className="text-xs uppercase tracking-[0.4em] text-neutral-500">
//             01 / About
//           </span>

//           <span className="hidden md:block text-sm uppercase tracking-[0.25em] text-neutral-500">
//             Full Stack Developer
//           </span>
//         </div>

//         {/* Hero Content */}
//         <div className="mt-24 grid grid-cols-1 items-end gap-20 lg:grid-cols-2">

//           {/* Left */}
//           <div>

//             <h1 className="leading-[0.88] font-light tracking-tight">

//               <span className="block text-[4rem] md:text-[5rem] lg:text-[6rem]">
//                 I'm
//               </span>

//               <span className="block text-[5rem] md:text-[7rem] lg:text-[8rem]">
//                 Abhishek
//               </span>

//               <span className="block text-[5rem] md:text-[7rem] lg:text-[8rem]">
//                 Yadav
//               </span>

//             </h1>

//           </div>

//           {/* Right */}
//           <div className="flex flex-col justify-end">

//             <p className="max-w-md text-xl leading-10 text-neutral-700">

//               I create premium digital experiences using
//               <span className="font-medium"> React</span>,
//               <span className="font-medium"> Next.js</span>,
//               <span className="font-medium"> GSAP</span> and
//               modern web technologies.

//             </p>

//             <div className="mt-16 flex flex-wrap gap-4">

//               <span className="rounded-full border border-neutral-300 px-5 py-2 text-sm uppercase tracking-widest">
//                 React
//               </span>

//               <span className="rounded-full border border-neutral-300 px-5 py-2 text-sm uppercase tracking-widest">
//                 Next.js
//               </span>

//               <span className="rounded-full border border-neutral-300 px-5 py-2 text-sm uppercase tracking-widest">
//                 GSAP
//               </span>

//               <span className="rounded-full border border-neutral-300 px-5 py-2 text-sm uppercase tracking-widest">
//                 Tailwind
//               </span>

//             </div>

//           </div>

//         </div>

//         {/* Bottom */}
//         <div className="mt-24 flex items-end justify-between border-t border-neutral-300 pt-8">

//           <p className="max-w-lg text-neutral-500">
//             Passionate about building interactive websites with
//             smooth animations and clean user experiences.
//           </p>

//           <div className="flex flex-col items-center gap-3">

//             <span className="text-xs uppercase tracking-[0.45em] text-neutral-500">
//               Scroll
//             </span>

//             <div className="h-12 w-[1px] bg-neutral-400 animate-pulse"></div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }





// "use client";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen bg-[#f5f5f5] text-[#010101] overflow-hidden">

//       <div className="max-w-7xl mx-auto px-8 md:px-16 pt-32 pb-20 h-screen flex flex-col justify-between">

//         {/* Top */}

//         <div className="flex justify-between items-center">

//           <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
//             01 / About
//           </p>

//           <div className="text-right">

//             <p className="text-sm text-neutral-500">
//               Based in India
//             </p>

//             <p className="text-green-600 text-sm mt-1">
//               ● Available for Work
//             </p>

//           </div>

//         </div>

//         {/* Center */}

//         <div className="grid lg:grid-cols-2 gap-20 items-end">

//           {/* Left */}

//           <div>

//             <p className="uppercase text-neutral-400 tracking-[0.4em] mb-3">
//               Hello.
//             </p>

//             <h1 className="font-light leading-[0.88]">

//               <span className="block text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem]">
//                 I'm
//               </span>

//               <span className="block text-[4rem] md:text-[6rem] lg:text-[7rem]">
//                 Abhishek
//               </span>

//               <span className="block text-[4rem] md:text-[6rem] lg:text-[7rem]">
//                 Yadav
//               </span>

//             </h1>

//           </div>

//           {/* Right */}

//           <div className="lg:pb-8">

//             <h2 className="text-3xl md:text-4xl font-light leading-snug">

//               Frontend Engineer
//               <br />

//               & Creative Developer

//             </h2>

//             <p className="mt-8 text-neutral-600 leading-9 text-lg max-w-md">

//               I create modern web experiences using
//               React, Next.js, GSAP and
//               clean user interfaces with smooth
//               interactions.

//             </p>

//             {/* Skills */}

//             <div className="flex flex-wrap gap-3 mt-10">

//               {[
//                 "Html",
//                 "CSS",
//                 "JavaScript",
//                 "TypeScript",
//                 "React.js",
//                 "Next.js",
//                 "Express.js",
//                 "Node.js",
                

//                 "GSAP",
//                 "Tailwind",
//                 "MongoDB",
//               ].map((skill) => (

//                 <span
//                   key={skill}
//                   className="border border-neutral-300 rounded-full px-5 py-2 text-sm hover:bg-black hover:text-white duration-300"
//                 >
//                   {skill}
//                 </span>

//               ))}

//             </div>

//           </div>

//         </div>

//         {/* Bottom */}

//         <div className="flex justify-between items-center border-t border-neutral-300 pt-8">

//           <p className="text-neutral-500">

//             Building beautiful,
//             interactive and fast web experiences.

//           </p>

//           <div className="flex items-center gap-3">

//             <span className="uppercase tracking-[0.35em] text-xs">

//               Scroll

//             </span>

//             <span className="text-xl">
//               ↓
//             </span>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }





"use client";



import { useRef } from "react";
import gsap, { useGSAP, SplitText } from "@/libs/gsap";
import FloatingTech from "@/components/ui/FloatingTech";
import Noise from "@/components/ui/Noise";
import MagneticHover from "@/components/MagneticHover";


export default function Hero() {

  const imRef = useRef(null);

  const firstNameRef = useRef(null);

  const lastNameRef = useRef(null);

   const lightRef = useRef(null);

   const heroRef = useRef(null);

   const topRef = useRef(null);

   const titleRef = useRef(null);

   const rightRef = useRef(null);

   const headingRef = useRef(null);

   const paraRef = useRef(null);

   const btnRef = useRef(null);
 
   const bottomRef = useRef(null);

   const glowRef = useRef(null);

   const arrowRef = useRef(null);

   const contentRef = useRef(null);

  
  useGSAP(() => {

      gsap.from(topRef.current,{
          y:-40,
          opacity:0,
          duration:.8,
          ease:"power3.out"
      });

      // gsap.from(
      //     [imRef.current, firstNameRef.current, lastNameRef.current],
      //   {  y:160,
      //     opacity:0,
      //     stagger:0.18,
      //     duration:1.3,
      //     ease:"power4.out",
      //     delay:0.2
      //   }
      // );

      const firstSplit = new SplitText(firstNameRef.current,{
         type:"chars"
      });

      const lastSplit = new SplitText(lastNameRef.current,{
        type:"chars"
      });

    gsap.from(imRef.current,{
        y:120,
       opacity:0,
       duration:.8,
       delay:.2
    });

    gsap.from(firstSplit.chars,{
       y:180,
       opacity:0,
       stagger:.03,
       duration:1,
       ease:"power4.out",
       delay:.25
    });

    gsap.from(lastSplit.chars,{
       y:180,
       opacity:0,
       stagger:.03,
       duration:1,
       ease:"power4.out",
       delay:.45
    });

      gsap.from(rightRef.current,{
          x:80,
          opacity:0,
          duration:1,
          ease:"power4.out",
          delay:.5
      });

      gsap.from(headingRef.current,{
           x:120,
           opacity:0,
           duration:1,
           delay:.6
      });

      gsap.from(paraRef.current,{
         y:40,
         opacity:0,
         duration:.8,
         delay:.9
      });

      gsap.from(btnRef.current,{
          y:60,
         opacity:0,
         duration:.8,
         delay:1
      });

      gsap.to(arrowRef.current,{
          y:10,
          repeat:-1,
          yoyo:true,
          duration:.8,
          ease:"power1.inOut"
      });

      gsap.from(bottomRef.current,{
          y:50,
          opacity:0,
          duration:.8,
          delay:.8
      });

      gsap.to(glowRef.current,{
          x:100,
          y:-60,
          repeat:-1,
          yoyo:true,
          duration:8,
          ease:"sine.inOut"
      });
      const moveLight = (e) => {

      const rect = heroRef.current.getBoundingClientRect();

      gsap.to(lightRef.current, {
           x: e.clientX - rect.left - 175,
          y: e.clientY - rect.top - 175,
          duration: 0.35,
          ease: "power3.out",
          overwrite: true,
      });

};

      window.addEventListener("mousemove", moveLight);

      // Mouse Parallax
   const move = (e) => {

   const x = (e.clientX / window.innerWidth - 0.5) * 40;
   const y = (e.clientY / window.innerHeight - 0.5) * 40;

   gsap.to(contentRef.current, {
    x,
    y,
    duration: 1.2,
    ease: "power3.out",
    overwrite: true,
  });

};

window.addEventListener("mousemove", move);

return () => {
  window.removeEventListener("mousemove", moveLight);
  window.removeEventListener("mousemove", move);
};



},{scope:heroRef});







  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f5f5f5]"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div
          className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)]
          bg-[size:24px_24px]
        "
        />

        <div
          ref={glowRef}
          className="
          absolute
          left-1/2
          top-1/2
          h-[650px]
          w-[650px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-neutral-300/40
          blur-[170px]
        "
        />

        <div
            ref={lightRef}
            className="
            absolute
            h-[350px]
            w-[350px]
            rounded-full
           bg-white/70
           blur-[120px]
           pointer-events-none
           z-10
           "
        />

      </div>
      <FloatingTech />

      {/* Content */}

      <div
        ref={contentRef}
        className="
        relative
        z-20
        mx-auto
        flex
        min-h-screen
        max-w-[1700px]
        flex-col
        justify-between
        px-8
        py-28
        md:px-16
      "
      >
        {/* Top */}

        <div
         ref={topRef}
         className="flex items-center justify-between">

          <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
            01 / HERO
          </p>

          <div className="text-right">

            <p className="text-sm text-neutral-500">
              Based in India
            </p>

            <p className="mt-2 text-sm text-green-600">
              ● Available for Work
            </p>

          </div>

        </div>

        {/* Center */}

        <div className="grid items-center gap-36 lg:grid-cols-2">

          {/* Left */}

          <div ref={titleRef}>

            <p className="mb-6 uppercase tracking-[0.4em] text-neutral-400">
              Hello.
            </p>

            <h1
              className="
              font-light
              leading-[0.88]
              tracking-[-0.06em]
            "
            >
              <span 
               ref={imRef}
               className="block text-[4rem] md:text-[6rem] lg:text-[7rem]">
                I'm
              </span>

              <span 
              ref={firstNameRef}
              className="block text-[4rem] md:text-[6rem] lg:text-[7rem]">
                Abhishek
              </span>

              <span
              ref={lastNameRef} 
              className="block text-[4rem] md:text-[6rem] lg:text-[7rem]">
                Yadav
              </span>

            </h1>

          </div>

          {/* Right */}

          <div
           ref={rightRef}
           className="max-w-xl">

            <h2
             ref={headingRef}
             className="text-3xl font-light leading-snug md:text-5xl">

              Full Stack Developer

              <br />

              & Creative Developer

            </h2>

            <p
             ref={paraRef}
             className="mt-8 text-lg leading-9 text-neutral-600">

              I build modern digital experiences using
              React, Next.js, GSAP and beautiful UI
              animations focused on performance and
              user experience.

            </p>

            <div
             ref={btnRef}
             className="mt-12 flex flex-wrap gap-5">

              <MagneticHover strength={30}>

                <a
                     href="#projects"
                     className="
                     group
                     relative
                     overflow-hidden
                     rounded-full
                     border
                   border-black
                     px-8
                     py-4
                     text-sm
                     uppercase
                     tracking-[0.25em]
                    "
                  >

                    <span className="relative z-20">
                         View Projects
                   </span>

                   <span
                        className="
                        absolute
                        inset-0
                        origin-left
                        scale-x-0
                      bg-black
                       transition-transform
                        duration-500
                         group-hover:scale-x-100
                        "
                    />

                    <span
                       className="
                       absolute
                       inset-0
                       z-30
                       flex
                       items-center
                       justify-center
                      text-white
                       opacity-0
                       transition
                      duration-500
                       group-hover:opacity-100
                      "
                      >
                       View Projects
                 </span>

                </a>

              </MagneticHover>



  <MagneticHover strength={30}>

    <a
      href="/resume.pdf"
      target="_blank"
      className="
      rounded-full
      border
      border-neutral-300
      bg-white/60
      px-8
      py-4
      text-sm
      uppercase
      tracking-[0.25em]
      backdrop-blur-md
      transition-all
      duration-300
      hover:bg-black
      hover:text-white
      "
    >
      Download CV
    </a>

  </MagneticHover>

</div>

          </div>

        </div>

        {/* Bottom */}

        <div
         ref={bottomRef}
         className="flex items-center justify-between border-t border-neutral-300 pt-8">

          <p className="text-neutral-500">

            Building beautiful digital experiences.

          </p>

          <div className="flex items-center gap-4">

            <span className="uppercase tracking-[0.35em] text-xs">

              Scroll

            </span>

            <span
             ref={arrowRef}
             className="text-xl">

              ↓

            </span>

          </div>

        </div>

      </div>
      <Noise />
    </section>
  );
}


