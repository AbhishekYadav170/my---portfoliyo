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





"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#f5f5f5] text-[#010101] overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-32 pb-20 h-screen flex flex-col justify-between">

        {/* Top */}

        <div className="flex justify-between items-center">

          <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
            01 / About
          </p>

          <div className="text-right">

            <p className="text-sm text-neutral-500">
              Based in India
            </p>

            <p className="text-green-600 text-sm mt-1">
              ● Available for Work
            </p>

          </div>

        </div>

        {/* Center */}

        <div className="grid lg:grid-cols-2 gap-20 items-end">

          {/* Left */}

          <div>

            <p className="uppercase text-neutral-400 tracking-[0.4em] mb-3">
              Hello.
            </p>

            <h1 className="font-light leading-[0.88]">

              <span className="block text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem]">
                I'm
              </span>

              <span className="block text-[4rem] md:text-[6rem] lg:text-[7rem]">
                Abhishek
              </span>

              <span className="block text-[4rem] md:text-[6rem] lg:text-[7rem]">
                Yadav
              </span>

            </h1>

          </div>

          {/* Right */}

          <div className="lg:pb-8">

            <h2 className="text-3xl md:text-4xl font-light leading-snug">

              Frontend Engineer
              <br />

              & Creative Developer

            </h2>

            <p className="mt-8 text-neutral-600 leading-9 text-lg max-w-md">

              I create modern web experiences using
              React, Next.js, GSAP and
              clean user interfaces with smooth
              interactions.

            </p>

            {/* Skills */}

            <div className="flex flex-wrap gap-3 mt-10">

              {[
                "Html",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "Express.js",
                "Node.js",
                

                "GSAP",
                "Tailwind",
                "MongoDB",
              ].map((skill) => (

                <span
                  key={skill}
                  className="border border-neutral-300 rounded-full px-5 py-2 text-sm hover:bg-black hover:text-white duration-300"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex justify-between items-center border-t border-neutral-300 pt-8">

          <p className="text-neutral-500">

            Building beautiful,
            interactive and fast web experiences.

          </p>

          <div className="flex items-center gap-3">

            <span className="uppercase tracking-[0.35em] text-xs">

              Scroll

            </span>

            <span className="text-xl">
              ↓
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}