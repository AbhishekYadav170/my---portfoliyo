// "use client";

// export default function Story() {
//   return (
//     <section className="min-h-screen flex items-center px-8 md:px-16 lg:px-24">

//       <div className="max-w-6xl">

//         <h2 className="text-[4rem] md:text-[7rem] lg:text-[9rem] leading-[0.95] font-light">
//           I DON'T JUST
//           <br />
//           BUILD WEBSITES.
//           <br />
//           I CREATE
//           <br />
//           EXPERIENCES.
//         </h2>

//         <div className="mt-20 max-w-2xl ml-auto">

//           <p className="text-xl leading-10 text-neutral-600">
//             I enjoy creating digital experiences that combine
//             beautiful design, smooth animations and clean code.
//             Every project is an opportunity to build something
//             memorable.
//           </p>

//         </div>

//       </div>

//     </section>
//   );
// }







"use client";

import TextReveal from "@/components/TextReveal";

export default function Story() {
  return (
    <section className="bg-[#f5f5f5] text-[#010101] py-40">

      <div className="max-w-7xl mx-auto px-8 md:px-16">

        {/* Top */}

        <div className="flex justify-between items-center mb-24">

          <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
            02 / Story
          </p>

          <div className="h-px bg-neutral-300 flex-1 ml-10" />

        </div>

        {/* Main Text */}

        <div className="max-w-6xl">

          <TextReveal splitBy="words">

            <h2 className="text-[3.5rem] md:text-[6rem] lg:text-[8rem] leading-[0.92] font-light">

              I DON'T BUILD

              <br />

              WEBSITES.

              <br />
              <br />

              I BUILD

              <br />

              DIGITAL

              <br />

              EXPERIENCES.

              <br />
              <br />

              THAT PEOPLE

              <br />

              REMEMBER.

            </h2>

          </TextReveal>

        </div>

        {/* Bottom */}

        <div className="grid md:grid-cols-2 gap-16 mt-32 border-t border-neutral-300 pt-12">

          <div>

            <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
              Philosophy
            </p>

          </div>

          <div>

            <p className="text-xl leading-10 text-neutral-600">

              Every website I create combines
              clean code, thoughtful design,
              smooth animation and user-focused
              experiences. My goal is not just
              to build websites, but to create
              products that people enjoy using.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}