

"use client";


import MouseGlow from "./MouseGlow";
import Link from "next/link";
import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";
import MagneticHover from "./MagneticHover";
import TextReveal from "./TextReveal";

export default function ProjectCard({ project, index }) {

  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const numberRef = useRef(null);
  const arrowRef = useRef(null);
  const titleRef = useRef(null);
  const tagsRef = useRef([]);
  const lineRef = useRef(null);
  const glowRef = useRef(null);

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

    gsap.from(lineRef.current, {
            scaleX: 0,
            transformOrigin: "left",
            duration: 1,
            delay: index * 0.15,
           scrollTrigger: {
               trigger: cardRef.current,
               start: "top 85%",
            },
    });
    gsap.from(tagsRef.current, {
         y: 20,
          opacity: 0,
         stagger: 0.08,
         duration: 0.5,
        delay: 0.4,
       scrollTrigger: {
         trigger: cardRef.current,
         start: "top 85%",
        },
    });

  }, { scope: cardRef });



  const enter = () => {

    gsap.to(imageRef.current, {
      scale: 1.6,
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

  const move = (e) => {
     const rect = cardRef.current.getBoundingClientRect();

     const x = e.clientX - rect.left;
     const y = e.clientY - rect.top;

     gsap.to(glowRef.current, {
          x,
          y,
          duration: 0.5,
          ease: "power3.out",
       });

        gsap.to(imageRef.current, {
             x: (x - rect.width / 2) / 30,
              y: (y - rect.height / 2) / 30,
             duration: 0.5,
        });
     };



  return (

    <MagneticHover strength={20}>

      <Link href={`/project/${project.slug}`}>

        <article
          ref={cardRef}
          onMouseEnter={enter}
          onMouseLeave={leave}
          onMouseMove={move}
          className="
          group
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-[#E5E2DC]
          py-20
          px-8
          transition-all
          duration-500
          hover:bg-white/90
          hover:shadow-[0_35px_80px_rgba(0,0,0,.08)]
          hover:translate-y-3
          "
        >
            <MouseGlow />

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
                object-cover saturate-90
                will-change-transform
                transition-all
                duration-700
                group-hover:scale-110
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

             <TextReveal splitBy="chars" stagger={0.02}>
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
             </TextReveal>
              
              <TextReveal splite="words" stagger={0.04}>
                <p
                  className="
                  mt-5
                  text-xl
                text-neutral-500
                  "
                >
                  {project.subtitle}
                </p>
              </TextReveal>

              <TextReveal splitBy="lines" stagger={0.06}>
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
              </TextReveal>

              <div className="mt-10 flex flex-wrap gap-4">

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