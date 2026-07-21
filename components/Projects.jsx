// 'use client'

// import { useRef } from "react";
// import TextReveal from "./TextReveal"
// import gsap, {useGSAP, ScrollTrigger} from "@/libs/gsap";
// import useViewTransitions from "@/hooks/useViewTransitions";

// const ProjectPage = ({ project, nextProject }) => {
//     const containerRef = useRef(null);
//     const imageRef = useRef(null);

//     useGSAP(() => {

//         const sections = gsap.utils.toArray("section");

//         gsap.to(imageRef.current,{
//             clipPath:"inset(0 0 0% 0)",
//             scale: 1,
//             duration:1.6,
//             ease: 'expo.out',
//             delay: 0.9,
//         });

//         sections.forEach((section,idx )=>{
//             const container = section.children[0];

//             gsap.to(container, {
//                 rotate:0,
//                 ease: "none",
//                 scrollTrigger:{
//                     trigger: section,
//                     start: "top bottom",
//                     end: "top 20%",
//                     scrub: true,
//                 },
//             });

//             if(idx === sections.length-1) return;


//             ScrollTrigger.create({
//                 trigger: section,
//                 start: "bottom bottom",
//                 end: "bottom top",
//                 pin: true,
//                 pinSpacing: false,
//             });
//         });

//     }, {scope: containerRef },
//   );

//     const {navigateTo} = useViewTransitions();

//     const handleClick = ()=>{
//        navigateTo(`/project/${nextProject.slug}`);
//     }

//   return (
//    <>
//    <main ref={containerRef}>
//         <section className="h-screen  w-full ">
//             <div className="SectionContainer h-full w-full flex pt-[7rem] pb-[4rem] px-[3rem]">
//                 <div className="firstSegment h-full w-[15%]">
//                 <TextReveal>
//                     <h3 className="text-[2rem] font-bold">{project.number}</h3>
//                 </TextReveal>
//             </div>
//             <div className="secondSegment h-[80%]  w-[25%]">
//                 <div className="imagediv h-full w-full ">
//                     <img
//                     ref={imageRef}
//                     style={{
//                          clipPath: "inset(0 0 100% 0)",
//                     }}
//                       className="h-full scale-[1.7] w-full object-cover"
//                       src={project.coverImage}
//                       alt=''
//                     />
//                 </div>
//             </div>
//             <div className="thirdSegmentdiv p1-[8rem] h-[85%] w-[60%] flex flex-col justify-end">
//                 <div className="heading">
//                     <TextReveal delay="0.85" ease='power4.out' splitBy="chars" >
//                         <h1 className="text-[5rem] leading-[1.1]"  >{project.title}</h1>
//                     </TextReveal>
//                 </div>
//                 <div className="subHeading flex gap-[3rem]">
//                     <TextReveal delay="0.85" splitBy="words" >
//                         <h1 className="text-[2rem]"  >{project.subtitle}</h1>
//                     </TextReveal>
//                     <TextReveal delay="0.85" splitBy="chars" >
//                         <h1 className="text-[2rem]"  >{project.year}</h1>
//                     </TextReveal>
//                 </div>
//                 <div className="description mt-[2rem]  w-[70%] text-balance">
//                     <TextReveal delay="0.25" splitBy="lines" >
//                         <p className="text-[1.5rem] leading-[1.5]"  >{project.description}</p>
//                     </TextReveal>
//                 </div>
//             </div>
//             </div>
//         </section>
//         {project.gallery.map((elem, idx) => {
//             return (
//               <section key={idx} className="h-screen w-full">
//                 <div style={{transformOrigin: 'bottom left'}} className="sectionContainer rotate-[30deg] h-full w-full ">
//                     <img className="h-full w-full object-cover" src={elem} alt="" />
//                 </div>
//               </section>
//             );
//         })}
        
//         <footer className="h-screen flex items-center justify-center w-full">
//             <h1>Next Project</h1>
//             <h1 onClick={handleClick} >{nextProject.title}</h1>
//         </footer>
//    </main>
//    </>
//   )
// }

// export default ProjectPage





"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#f5f5f5] py-32"
    >
      <div className="max-w-[1700px] mx-auto px-8 md:px-16">

        <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
          03 / PROJECTS
        </p>

        <h2
          className="
          mt-8
          text-[5rem]
          md:text-[7rem]
          font-light
          tracking-[-0.08em]
          "
        >
          Selected Work
        </h2>

        <div className="mt-24">

          {projects.map((project, index) => (
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