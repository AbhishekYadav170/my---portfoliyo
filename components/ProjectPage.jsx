'use client'

import { useRef } from "react";
import TextReveal from "./TextReveal"
import gsap, {useGSAP} from "@/libs/gsap";


const ProjectPage = ({ project }) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {

        gsap.to(imageRef.current,{
            clipPath:"inset(0 0 0% 0)",
            scale: 1,
            duration:1.6,
            ease: 'expo.out',
            delay: 0.7,
        });
    }, {scope: containerRef });

  return (
   <>
   <main ref={containerRef}>
        <section className="h-screen  w-full ">
            <div className="SectionContainer h-full w-full flex pt-[7rem] pb-[4rem] px-[3rem]">
                <div className="firstSegment h-full w-[15%]">
                <TextReveal>
                    <h3 className="text-[2rem] font-bold">{project.number}</h3>
                </TextReveal>
            </div>
            <div className="secondSegment h-[80%]  w-[25%]">
                <div className="imagediv h-full w-full ">
                    <img
                    ref={imageRef}
                    style={{
                         clipPath: "inset(0 0 100% 0)",
                    }}
                      className="h-full scale-[1.7] w-full object-cover"
                      src={project.coverImage}
                      alt=''
                    />
                </div>
            </div>
            <div className="thirdSegmentdiv p1-[8rem] h-[85%] w-[60%] flex flex-col justify-end">
                <div className="heading">
                    <TextReveal delay="0.85" ease='power4.out' splitBy="chars" >
                        <h1 className="text-[5rem] leading-[1.1]"  >{project.title}</h1>
                    </TextReveal>
                </div>
                <div className="subHeading flex gap-[3rem]">
                    <TextReveal delay="0.85" splitBy="words" >
                        <h1 className="text-[2rem]"  >{project.subtitle}</h1>
                    </TextReveal>
                    <TextReveal delay="0.85" splitBy="chars" >
                        <h1 className="text-[2rem]"  >{project.year}</h1>
                    </TextReveal>
                </div>
                <div className="description mt-[2rem]  w-[70%] text-balance">
                    <TextReveal delay="0.25" splitBy="lines" >
                        <p className="text-[1.5rem] leading-[1.5]"  >{project.description}</p>
                    </TextReveal>
                </div>
            </div>
            </div>
        </section>
        {project.gallery.map((elem, idx) => {
            return (
              <section key={idx} className="h-screen w-full bg-red-400">
                <div style={{transformOrigin: 'bottom left'}} className="sectionContainer rotate-[30deg] h-full w-full ">
                    <img className="h-full w-full object-cover" src={elem} alt="" />
                </div>
              </section>
            );
        })}
        
        <footer></footer>
   </main>
   </>
  )
}

export default ProjectPage
