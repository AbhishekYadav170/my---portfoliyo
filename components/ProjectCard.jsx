

// "use client";


// import MouseGlow from "./MouseGlow";
// import Link from "next/link";
// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";
// import MagneticHover from "./MagneticHover";
// import TextReveal from "./TextReveal";

// export default function ProjectCard({ project, index }) {

//   const cardRef = useRef(null);
//   const imageRef = useRef(null);
//   const overlayRef = useRef(null);
//   const numberRef = useRef(null);
//   const arrowRef = useRef(null);
//   const titleRef = useRef(null);
//   const tagsRef = useRef([]);
//   const lineRef = useRef(null);
//   const glowRef = useRef(null);

//   tagsRef.current = [];

//   useGSAP(
//   () => {
//     // Card reveal
//     gsap.from(cardRef.current, {
//       y: 40,
//       duration: 0.8,
//       delay: index * 0.08,
//       ease: "power3.out",
//       clearProps: "transform",
//       scrollTrigger: {
//         trigger: cardRef.current,
//         start: "top 90%",
//         once: true,
//       },
//     });

//     // Background number
//     gsap.from(numberRef.current, {
//       scale: 0.85,
//       duration: 0.8,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: cardRef.current,
//         start: "top 90%",
//         once: true,
//       },
//     });

//     // Tags
//     if (tagsRef.current.length) {
//       gsap.from(tagsRef.current, {
//         y: 10,
//         duration: 0.4,
//         stagger: 0.05,
//         delay: 0.25,
//         clearProps: "transform",
//         scrollTrigger: {
//           trigger: cardRef.current,
//           start: "top 90%",
//           once: true,
//         },
//       });
//     }
//   },
//   { scope: cardRef }
// );

//   const enter = () => {

//     gsap.to(imageRef.current, {
//       scale: 1.08,
//       rotate: 1,
//       duration: 0.7,
//       ease: "power3.out",
//     });

//     gsap.to(overlayRef.current, {
//       opacity: .85,
//       duration: .5,
//     });

//     gsap.to(arrowRef.current, {
//       x: 14,
//       scale: 1.2,
//       duration: .5,
//       ease: "power3.out",
//     });

//   };



//   const leave = () => {

//     gsap.to(imageRef.current, {
//       scale: 1,
//       rotate: 0,
//       duration: .8,
//       ease: "power3.out",
//     });

//     gsap.to(overlayRef.current, {
//       opacity: .55,
//       duration: .5,
//     });

//     gsap.to(arrowRef.current, {
//       x: 0,
//       scale: 1,
//       duration: .5,
//       ease: "power3.out",
//     });

//   };

//   const move = (e) => {
//      const rect = cardRef.current.getBoundingClientRect();

//      const x = e.clientX - rect.left;
//      const y = e.clientY - rect.top;

    

//         gsap.to(imageRef.current, {
//              x: (x - rect.width / 2) / 30,
//               y: (y - rect.height / 2) / 30,
//              duration: 0.5,
//         });
//      };



//   return (

//     <MagneticHover strength={20}>

//       <Link href={`/project/${project.slug}`}>

//         <article
//           ref={cardRef}
//           onMouseEnter={enter}
//           onMouseLeave={leave}
//           onMouseMove={move}
//           className="
//           group
//           relative
//           overflow-hidden
//           rounded-[40px]
//           border
//           border-[#E5E2DC]
//           py-10
//           px-5
//           md:py-14
//           md:px-8
//           transition-all
//           duration-500
//           hover:bg-white/90
//           hover:shadow-[0_35px_80px_rgba(0,0,0,.08)]
//           hover:translate-y-3
//           "
//         >
//             <MouseGlow />

//           <div className="relative grid grid-cols-12 items-center gap-10">
//             {/* Background Number */}

//             <div
//               ref={numberRef}
//               className="
//               absolute
//               right-6
//               top-1/2
//               -translate-y-1/2
//               text-[9rem]
//               md:text-[13rem]
//               lg:text-[16rem]
//               font-bold
//               leading-none
//               tracking-[-0.08em]
//               text-neutral-200
//               opacity-40
//               pointer-events-none
//               select-none
//               "
//             >
//               {project.number}
//             </div>

//             {/* Image */}

//             <div
//               className="
//               relative
//               z-10
//               col-span-12
//               lg:col-span-5
//               overflow-hidden
//               rounded-[32px]
//               p-2
//               "
//             >

//               <img
//                 ref={imageRef}
//                 src={project.coverImage}
//                 alt={project.title}
//                 className="
//                 h-[240px]
//                 md: h-[300px]
//                 lg:h-[340px]
//                 w-full
//                 object-cover
//                 saturate-90
//                 will-change-transform
//                 transition-all
//                 duration-700
//                 group-hover:scale-110
//                 "
//               />

//               <div
//                 ref={overlayRef}
//                 className="
//                 absolute
//                 inset-0
//                 bg-gradient-to-t
//                 from-black/70
//                 via-black/20
//                 to-transparent
//                 opacity-55
//                 "
//               />

//             </div>

//             {/* Content */}

//             <div
//               className="
//               relative
//               z-10
//               col-span-12
//               lg:col-span-6
//               "
//             >

//              <TextReveal splitBy="chars" stagger={0.02}>
//                 <h2
//                     className="
//                     text-5xl
//                     md:text-6xl
//                     font-light
//                     tracking-[-0.05em]
//                     transition-transform
//                     duration-500
//                     group-hover:translate-x-3
//                    "
//                   >
//                      {project.title}
//                 </h2>
//              </TextReveal>
              
//               <TextReveal splitBy="words" stagger={0.04}>
//                 <p
//                   className="
//                   mt-5
//                   text-xl
//                 text-neutral-500
//                   "
//                 >
//                   {project.subtitle}
//                 </p>
//               </TextReveal>

//               <TextReveal splitBy="lines" stagger={0.06}>
//                  <p
//                     className="
//                     mt-8
//                     max-w-xl
//                     leading-8
//                    text-neutral-600
//                    "
//                   >
//                     {project.description}
//                  </p>
//               </TextReveal>

//               <div className="mt-10 flex flex-wrap gap-4">

//                 {project.tags.map((tag, i) => (

//                   <span
//                     ref={(el) => (tagsRef.current[i] = el)}
//                     key={i}
//                     className="
//                     rounded-full
//                     border
//                     border-neutral-300
//                     px-5
//                     py-2
//                     text-xs
//                     uppercase
//                     tracking-[0.18em]
//                     transition-all
//                     duration-300
//                     group-hover:border-black
//                     group-hover:bg-black
//                     group-hover:text-white
//                     "
//                   >
//                     {tag}
//                   </span>

//                 ))}

//               </div>

//             </div>

//             {/* Arrow */}

//             <div
//               className="
//               relative
//               z-10
//               hidden
//               lg:flex
//               col-span-1
//               justify-end
//               "
//             >

//               <span
//                 ref={arrowRef}
//                 className="
//                 text-6xl
//                 font-light
//                 "
//               >
//                 →
//               </span>

//             </div>

//           </div>

//         </article>

//       </Link>

//     </MagneticHover>

//   );

// }





"use client";

import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";
import Link from "next/link";

import MouseGlow from "./MouseGlow";
import MagneticHover from "./MagneticHover";
import TextReveal from "./TextReveal";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const arrowRef = useRef(null);
  const tagsRef = useRef([]);

  tagsRef.current = [];

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        delay: index * 0.08,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: cardRef }
  );

  const enter = () => {
    gsap.to(imageRef.current, {
      scale: 1.06,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(overlayRef.current, {
      opacity: 0.7,
      duration: 0.4,
    });

    gsap.to(arrowRef.current, {
      x: 8,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const leave = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
    });

    gsap.to(overlayRef.current, {
      opacity: 0.5,
      duration: 0.4,
    });

    gsap.to(arrowRef.current, {
      x: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const move = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(imageRef.current, {
      x: (x - rect.width / 2) / 45,
      y: (y - rect.height / 2) / 45,
      duration: 0.5,
      ease: "power3.out",
      overwrite: true,
    });
  };

  return (
    <MagneticHover strength={10}>
      <Link href={`/project/${project.slug}`} className="block">
        <article
          ref={cardRef}
          onMouseEnter={enter}
          onMouseLeave={leave}
          onMouseMove={move}
          className="
            group
            relative
            overflow-hidden
            rounded-[26px]
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-3
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
            md:p-4
          "
        >
          {/* Gradient Border Glow */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[26px]
              p-[1px]
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
              bg-[linear-gradient(
                120deg,
                #ff00cc,
                #7928ff,
                #00e5ff,
                #00ff88,
                #ffe600,
                #ff4d00,
                #ff00cc
              )]
              bg-[length:300%_300%]
              animate-gradient
            "
          />

          <MouseGlow />

          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              gap-5
              md:grid-cols-[42%_1fr]
              md:gap-7
              lg:grid-cols-[40%_1fr]
              lg:gap-10
            "
          >
            {/* IMAGE */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[20px]
                bg-neutral-100
              "
            >
              <img
                ref={imageRef}
                src={project.coverImage}
                alt={project.title}
                className="
                  block
                  h-[190px]
                  w-full
                  object-cover
                  saturate-[0.9]
                  will-change-transform
                  sm:h-[220px]
                  md:h-[250px]
                  lg:h-[270px]
                "
              />

              <div
                ref={overlayRef}
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/20
                  to-transparent
                  opacity-50
                "
              />

              {/* Project Number */}

              <span
                className="
                  absolute
                  bottom-4
                  left-4
                  text-4xl
                  font-light
                  tracking-[-0.05em]
                  text-white/80
                "
              >
                {project.number}
              </span>
            </div>

            {/* CONTENT */}

            <div
              className="
                flex
                min-w-0
                flex-col
                justify-center
                py-2
                md:py-4
              "
            >
              {/* Small Label */}

              <p
                className="
                  mb-3
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-neutral-400
                "
              >
                Featured Project
              </p>

              {/* TITLE */}

              <TextReveal splitBy="chars" stagger={0.015}>
                <h2
                  className="
                    text-3xl
                    font-light
                    leading-[0.95]
                    tracking-[-0.05em]
                    sm:text-4xl
                    md:text-5xl
                    lg:text-[3.5rem]
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                >
                  {project.title}
                </h2>
              </TextReveal>

              {/* SUBTITLE */}

              <p
                className="
                  mt-3
                  text-sm
                  font-medium
                  text-neutral-500
                  sm:text-base
                "
              >
                {project.subtitle}
              </p>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-neutral-500
                  md:text-[15px]
                  md:leading-7
                "
              >
                {project.description}
              </p>

              {/* TAGS */}

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.slice(0, 5).map((tag, i) => (
                  <span
                    ref={(el) => {
                      tagsRef.current[i] = el;
                    }}
                    key={i}
                    className="
                      rounded-full
                      border
                      border-[var(--border)]
                      bg-[var(--bg)]
                      px-3
                      py-1.5
                      text-[9px]
                      uppercase
                      tracking-[0.16em]
                      text-neutral-500
                      transition-all
                      duration-300
                      group-hover:border-neutral-300
                      group-hover:text-[var(--text)]
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* VIEW PROJECT */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-neutral-500
                "
              >
                <span>View Project</span>

                <span
                  ref={arrowRef}
                  className="
                    text-lg
                    font-light
                  "
                >
                  →
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    </MagneticHover>
  );
}