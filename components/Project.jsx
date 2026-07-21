"use client";

import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {

  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {

    gsap.from(titleRef.current,{
      y:80,
      opacity:0,
      duration:1,
      ease:"power4.out",
      scrollTrigger:{
        trigger:titleRef.current,
        start:"top 85%",
      }
    });

  },{scope:sectionRef});

  return (

    <section
      id="projects"
      ref={sectionRef}
      className="
      relative
      bg-[#f5f5f5]
      py-40
      "
    >

      <div
        className="
        mx-auto
        max-w-[1700px]
        px-8
        md:px-16
        "
      >

        {/* Header */}

        <div
          ref={titleRef}
          className="
          sticky
          top-28
          z-20
          mb-28
          flex
          items-end
          justify-between
          "
        >

          <div>

            <p
              className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-neutral-500
              "
            >
              03 / PROJECTS
            </p>

            <h2
              className="
              mt-5
              text-6xl
              md:text-8xl
              font-light
              tracking-[-0.06em]
              "
            >
              Selected
              <br />
              Work
            </h2>

          </div>

          <p
            className="
            hidden
            md:block
            max-w-sm
            text-neutral-500
            leading-8
            "
          >
            A collection of projects focused on interaction,
            performance and modern web experiences.
          </p>

        </div>

        {/* Cards */}

        <div className="space-y-12">

          {projects.map((project,index)=>(
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}

        </div>

      </div>

    </section>

  );

}