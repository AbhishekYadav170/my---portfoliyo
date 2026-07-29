"use client";

//import Image from "next/image";
//import Link from "next/link";
import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";

export default function ProjectPage({ project, nextProject }) {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power4.out",
    });

    gsap.from(imageRef.current, {
      scale: 1.2,
      opacity: 0,
      duration: 1.6,
      ease: "power3.out",
    });
  }, []);

  return (
    <main className="bg-[#f8f7f4] text-[#111]">

      {/* HERO */}

      <section
        ref={heroRef}
        className="relative h-screen flex items-end overflow-hidden"
      >
        <img
          ref={imageRef}
          src={project.coverImage}
          alt={project.title}
           className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 w-full max-w-[1700px] mx-auto px-8 md:px-16 pb-24">

          <p className="uppercase tracking-[0.35em] text-white/70 text-sm">
            {project.number} / Selected Work
          </p>

          <h1 className="mt-6 text-white text-6xl md:text-8xl lg:text-[9rem] font-light tracking-[-0.08em] leading-none">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-white/80">
            {project.subtitle}
          </p>

        </div>
      </section>

      {/* INFO */}

      <section className="max-w-[1700px] mx-auto px-8 md:px-16 py-32">

        <div className="grid lg:grid-cols-12 gap-16">

          <div className="lg:col-span-4">

            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Project Info
            </p>

            <div className="mt-10 space-y-8">

              <div>
                <p className="text-neutral-400">Year</p>
                <h3 className="text-2xl mt-2">2026</h3>
              </div>

              <div>
                <p className="text-neutral-400">Role</p>
                <h3 className="text-2xl mt-2">
                  Full Stack Developer
                </h3>
              </div>

              <div>
                <p className="text-neutral-400">Stack</p>

                <div className="flex flex-wrap gap-3 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border rounded-full px-5 py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>

          </div>

          <div className="lg:col-span-8">

            <h2 className="text-5xl font-light tracking-tight">
              About the Project
            </h2>

            <p className="mt-10 text-xl leading-10 text-neutral-600">
              {project.description}
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}