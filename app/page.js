// "use client"

// import InfiniteCarousel from "@/components/InfiniteCarousel"
// import TextReveal from "@/components/TextReveal";
// import { projects } from "@/data/projects";
// import { useRef } from "react";

// export default function Home() {
  

//   return (
//     <main className="  w-full">
//       <InfiniteCarousel projects={projects} />
//     </main>
//   )
// }



// "use client";

// import InfiniteCarousel from "@/components/InfiniteCarousel";

// import AboutIntro from "@/components/about/AboutIntro";
// import TimeLine from "@/components/about/TimeLine";
// import Stats from "@/components/about/Stats";
// import Services from "@/components/about/Services";

// import Projects from "@/components/Projects";

// import { projects } from "@/data/projects";
// import ContactCTA from "@/components/about/ContactCTA";

// export default function Home() {
//   return (
//     <main className="w-full overflow-x-hidden">

//       {/* ================= HERO ================= */}
//       <section className="w-full">
//         <InfiniteCarousel projects={projects} />
//       </section>

//       {/* ================= ABOUT ================= */}
//       <AboutIntro />

//       {/* ================= MY JOURNEY ================= */}
//       <TimeLine />

//       {/* ================= BY THE NUMBERS ================= */}
//       <Stats />

//       {/* ================= WHAT I DO ================= */}
//       <Services />

//       {/* ================= SELECTED WORKS ================= */}
//       <Projects />

//       <ContactCTA />

//     </main>
//   );
// }




// "use client";

// import InfiniteCarousel from "@/components/InfiniteCarousel";
// import AboutIntro from "@/components/about/AboutIntro";
// import SkillsMarquee from "@/components/about/SkillsMarquee";
// import Projects from "@/components/Projects";
// import TimeLine from "@/components/about/TimeLine";
// import Education from "@/components/about/Education";
// import ContactCTA from "@/components/about/ContactCTA";

// import { projects } from "@/data/projects";
// import Services from "@/components/about/Services";

// export default function Home() {
//   return (
//     <main className="w-full overflow-x-hidden">

//       {/* ================= HOME ================= */}
//       <section id="home">
//         <InfiniteCarousel projects={projects} />
//       </section>


//       {/* ================= ABOUT ================= */}
//       <section id="about">
//         <AboutIntro />
//       </section>


//       {/* ================= SKILLS ================= */}
//       <section id="skills">
//         <SkillsMarquee />
//       </section>


//       {/* ================= PROJECTS ================= */}
//       <section id="projects">
//         <Projects />
//       </section>


//       {/* ================= MY JOURNEY ================= */}
//       <section id="journey">
//         <TimeLine />
//       </section>


//       ================= EDUCATION =================
//       <section id="education">
//         <Education />
//       </section>


//       <section id="education">
//         <Services />
//       </section>


//       {/* ================= CONTACT ================= */}
//       <section id="contact">
//         <ContactCTA />
//       </section>

//     </main>
//   );
// }




"use client";

import InfiniteCarousel from "@/components/InfiniteCarousel";
import AboutIntro from "@/components/about/AboutIntro";
import SkillsMarquee from "@/components/about/SkillsMarquee";
import Projects from "@/components/Projects";
import Education from "@/components/about/Education";
import ContactCTA from "@/components/about/ContactCTA";
import Services from "@/components/about/Services";

import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* ================= HOME ================= */}
      <section id="home">
        <InfiniteCarousel projects={projects} />
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about">
        <AboutIntro />
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills">
        <SkillsMarquee />
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects">
        <Projects />
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education">
        <Education />
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services">
        <Services />
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact">
        <ContactCTA />
      </section>

    </main>
  );
}