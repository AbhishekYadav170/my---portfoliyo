// "use client";

// import Link from "next/link";
// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";
// import MagneticHover from "./MagneticHover";

// export default function ProjectCard({ project, index }) {
//   const cardRef = useRef(null);
//   const imageRef = useRef(null);
//   const numberRef = useRef(null);

//   useGSAP(() => {
//     gsap.from(cardRef.current, {
//       y: 80,
//       opacity: 0,
//       duration: 1,
//       delay: index * 0.1,
//       ease: "power4.out",
//       scrollTrigger: {
//         trigger: cardRef.current,
//         start: "top 85%",
//       },
//     });
//   }, { scope: cardRef });

//   const enter = () => {
//     gsap.to(imageRef.current, {
//       scale: 1.08,
//       rotate:1.5,
//       duration: 8,
//       ease: "power3.out",
//     });
//   };

//   const leave = () => {
//     gsap.to(imageRef.current, {
//       scale: 1,
//       rotate:0,
//       duration: 8,
//       ease: "power3.out",
//     });
//   };

//   return (
//     <MagneticHover strength={18}>
//       <Link href={`/project/${project.slug}`}>
//         <article
//           ref={cardRef}
//           onMouseEnter={enter}
//           onMouseLeave={leave}
//           className="
//           group
//           cursor-pointer
//           border-b
//           border-neutral-300
//           py-16
//           transition-all
//           duration-500
          
//           hover:bg-white
//           hover:shadow-2xl
//           hover:px-6
//           "
//         >
//           <div className="relative grid grid-cols-12 gap-8 items-center">

//             {/* <div className="col-span-1">
//               <span className="text-neutral-400 text-sm">
//                 {project.number}
//               </span>
//             </div> */}

//             <div
//             ref={numberRef}
//                className="
//                absolute
//                right-10
//               top-1/2
//               -translate-y-1/2
//               text-[10rem]
//               md:text-[14rem]
//               font-bold
//              text-neutral-200
//               opacity-40
//              select-none
//              pointer-events-none
//              leading-none
//              tracking-[-0.08em]
//              "
//            >
//   {project.number}
// </div> 

//             <div className="relative z-10 col-span-5 overflow-hidden rounded-3xl">
//               <img
//                 ref={imageRef}
//                 src={project.coverImage}
//                 alt={project.title}
//                 className="
//                 h-[280px]
//                 w-full
//                 object-cover
//                 transition-transform
//                 duration-700
//                 "
//               />
//             </div>

//             <div className="
//              absolute
//              inset-0
//              bg-gradient-to-t
//            from-black/70
//             via-black/20
//              to-transparent
//              opacity-60
//              transition-all
//              duration-500
//              group-hover:opacity-90 
//             ">

//               <h2
//                 className="
//                 text-5xl
//                 font-light
//                 tracking-[-0.05em]
//                 transition-all
//                 duration-500
//                 group-hover:translate-x-4
//                 "
//               >
//                 {project.title}
//               </h2>

//               <p className="mt-3 text-xl text-neutral-500 transition-all duration-500 group-hover:text-black">
//                 {project.subtitle}
//               </p>

//               <div className="mt-8 flex gap-3 flex-wrap">
//                 {project.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="
//                     rounded-full
//                     border
//                     border-neutral-300
//                     px-4
//                     py-2
//                     text-xs
//                     uppercase
//                     transition-all
//                    duration-500
//                  group-hover:border-black
//                 group-hover:bg-black
//                 group-hover:text-white
//                     "
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//             </div>

//             <div className="relative z-10 col-span-1 flex justify-end">

//               <span
//                 className="
//                 text-5xl
//                 transition-transform
//                 duration-500
//                 group-hover:translate-x-5
//                 group-hover:scale-125
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

import Link from "next/link";
import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";
import MagneticHover from "./MagneticHover";

export default function ProjectCard({ project, index }) {

  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const numberRef = useRef(null);
  const arrowRef = useRef(null);

  useGSAP(() => {

    // Card Reveal
    gsap.from(cardRef.current, {
      y: 120,
      opacity: 0,
      duration: 1.2,
      delay: index * 0.12,
      ease: "power4.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
      },
    });

    // Background Number
    gsap.from(numberRef.current, {
      scale: 0.4,
      opacity: 0,
      duration: 1.3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
      },
    });

  }, { scope: cardRef });



  const enter = () => {

    gsap.to(imageRef.current, {
      scale: 1.08,
      rotate: 1.5,
      duration: .8,
      ease: "power3.out",
    });

    gsap.to(overlayRef.current, {
      opacity: .85,
      duration: .5,
    });

    gsap.to(arrowRef.current, {
      x: 14,
      scale: 1.2,
      duration: .5,
      ease: "power3.out",
    });

  };



  const leave = () => {

    gsap.to(imageRef.current, {
      scale: 1,
      rotate: 0,
      duration: .8,
      ease: "power3.out",
    });

    gsap.to(overlayRef.current, {
      opacity: .55,
      duration: .5,
    });

    gsap.to(arrowRef.current, {
      x: 0,
      scale: 1,
      duration: .5,
      ease: "power3.out",
    });

  };



  return (

    <MagneticHover strength={20}>

      <Link href={`/project/${project.slug}`}>

        <article
          ref={cardRef}
          onMouseEnter={enter}
          onMouseLeave={leave}
          className="
          group
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-neutral-300
          py-20
          px-8
          transition-all
          duration-500
          hover:bg-white
          hover:shadow-2xl
          "
        >

          <div className="relative grid grid-cols-12 items-center gap-10">
            {/* Background Number */}

            <div
              ref={numberRef}
              className="
              absolute
              right-6
              top-1/2
              -translate-y-1/2
              text-[9rem]
              md:text-[13rem]
              lg:text-[16rem]
              font-bold
              leading-none
              tracking-[-0.08em]
              text-neutral-200
              opacity-40
              pointer-events-none
              select-none
              "
            >
              {project.number}
            </div>

            {/* Image */}

            <div
              className="
              relative
              z-10
              col-span-12
              lg:col-span-5
              overflow-hidden
              rounded-[32px]
              p-2
              "
            >

              <img
                ref={imageRef}
                src={project.coverImage}
                alt={project.title}
                className="
                h-[320px]
                w-full
                object-cover
                will-change-transform
                "
              />

              <div
                ref={overlayRef}
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/20
                to-transparent
                opacity-55
                "
              />

            </div>

            {/* Content */}

            <div
              className="
              relative
              z-10
              col-span-12
              lg:col-span-6
              "
            >

              <h2
                className="
                text-5xl
                md:text-6xl
                font-light
                tracking-[-0.05em]
                transition-transform
                duration-500
                group-hover:translate-x-3
                "
              >
                {project.title}
              </h2>

              <p
                className="
                mt-5
                text-xl
                text-neutral-500
                "
              >
                {project.subtitle}
              </p>

              <p
                className="
                mt-8
                max-w-xl
                leading-8
                text-neutral-600
                "
              >
                {project.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">

                {project.tags.map((tag) => (

                  <span
                    key={tag}
                    className="
                    rounded-full
                    border
                    border-neutral-300
                    px-5
                    py-2
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    transition-all
                    duration-300
                    group-hover:border-black
                    group-hover:bg-black
                    group-hover:text-white
                    "
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

            {/* Arrow */}

            <div
              className="
              relative
              z-10
              hidden
              lg:flex
              col-span-1
              justify-end
              "
            >

              <span
                ref={arrowRef}
                className="
                text-6xl
                font-light
                "
              >
                →
              </span>

            </div>

          </div>

        </article>

      </Link>

    </MagneticHover>

  );

}