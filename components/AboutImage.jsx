// "use client";

// import Image from "next/image";

// export default function AboutImage() {
//   return (
//     <section className="relative bg-[#f5f5f5] text-[#010101] py-32">

//       <div className="mx-auto max-w-7xl px-8 md:px-16 lg:px-24">

//         {/* Top */}
//         <div className="mb-10 flex items-center justify-between border-b border-[#E5E2DC] pb-6">

//           <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
//              About Me
//           </p>

//           <p className="text-sm text-neutral-500">
//             Creative Frontend Developer
//           </p>

//         </div>

//         {/* Image */}

//         <div className="relative overflow-hidden rounded-3xl">

//           <Image
//             src="/profile.jpg"
//             alt="Abhishek Yadav"
//             width={1800}
//             height={1200}
//             priority
//             className="h-[80vh] w-full object-cover"
//           />

//           {/* Overlay */}

//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//           {/* Bottom Text */}

//           <div className="absolute bottom-10 left-10">

//             <h2 className="text-5xl md:text-7xl font-light text-white">
//               About Me
//             </h2>

//             <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-200">

//               I believe great digital experiences are created
//               through clean code, thoughtful design and
//               meaningful interactions.

//             </p>

//           </div>

//         </div>

//         {/* Bottom */}

//         <div className="mt-20 grid gap-16 md:grid-cols-2">

//           <div>

//             <h3 className="text-4xl font-light">

//               Building products
//               <br />
//               with purpose.

//             </h3>

//           </div>

//           <div>

//             <p className="text-lg leading-9 text-neutral-600">

//               I enjoy turning ideas into beautiful and
//               interactive web experiences using React,
//               Next.js, GSAP and modern frontend tools.

//               Every project I build focuses on performance,
//               user experience and smooth animation.

//             </p>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }




"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";

export default function AboutImage() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {

    gsap.from(imageRef.current,{
      scale:1.2,
      opacity:0,
      duration:1.4,
      ease:"power4.out",
      scrollTrigger:{
        trigger:sectionRef.current,
        start:"top 80%"
      }
    });

    gsap.from(cardRef.current,{
      y:80,
      opacity:0,
      duration:1,
      delay:.2,
      ease:"power4.out",
      scrollTrigger:{
        trigger:sectionRef.current,
        start:"top 80%"
      }
    });

  });

  return(

<section
ref={sectionRef}
className="py-40 bg-[var(--bg)]"
>

<div className="max-w-[1700px] mx-auto px-8 md:px-16">

<div className="grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-6">

<div
ref={imageRef}
className="
relative
overflow-hidden
rounded-[40px]
"
>

<Image
src="/profile.jpg"
alt="Abhishek"
width={900}
height={1100}
className="
w-full
h-[750px]
object-cover
"
/>

<div
className="
absolute
inset-0
bg-gradient-to-t
from-black/50
to-transparent
"
/>

</div>

</div>

<div className="lg:col-span-6">

<div
ref={cardRef}
className="
rounded-[35px]
border
border-[var(--border)]
bg-[var(--surface)]
p-14
backdrop-blur-xl
"
>

<p className="uppercase tracking-[0.35em] text-sm text-neutral-500">
INTRODUCTION
</p>

<h2
className="
mt-6
text-6xl
leading-none
font-light
tracking-[-0.05em]
"
>
Design.
<br/>
Development.
<br/>
Experience.
</h2>

<p
className="
mt-10
text-xl
leading-10
text-neutral-500
"
>
I'm passionate about creating immersive,
high-performance digital experiences using
React, Next.js, GSAP, Three.js and AI.

Every project is built with performance,
animation and clean architecture in mind.
</p>

<div className="mt-14 flex flex-wrap gap-4">

{[
"React",
"Next.js",
"GSAP",
"Three.js",
"Node",
"MongoDB",
"AI"
].map(skill=>(
<span
key={skill}
className="
rounded-full
border
border-[var(--border)]
px-5
py-2
"
>
{skill}
</span>
))}

</div>

</div>

</div>

</div>

</div>

</section>

  );

}