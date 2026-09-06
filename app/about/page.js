

// import ContactCTA from "@/components/about/ContactCTA";
// import Hero from "@/components/about/Hero";
// import Services from "@/components/about/Services";
// import SkillsMarquee from "@/components/about/SkillsMarquee";
// import Stats from "@/components/about/Stats";
// import Story from "@/components/about/Story";
// import Timeline from "@/components/about/TimeLine";
// //import AboutImage from "@/components/AboutImage";
// import Projects from "@/components/Projects";
// //import AboutContent from "@/components/about/AboutContent";
// import AboutIntro from "@/components/about/AboutIntro";

// export default function AboutPage() {
//   return (
//     <main className="bg-[#f5f5f5] text-[#010101]">
//       <Hero />
//       {/* <Story />
//       <AboutImage />
//       <AboutContent /> */}
//       <AboutIntro />
//       <SkillsMarquee />
//       <Timeline />
//       <Stats />
//       <Services />
//       <Projects />
//       <ContactCTA />
//     </main>
//   );
// }




"use client";

import Hero from "@/components/about/Hero";
import AboutIntro from "@/components/about/AboutIntro";
import SkillsMarquee from "@/components/about/SkillsMarquee";
import Stats from "@/components/about/Stats";
import Services from "@/components/about/Services";
import Projects from "@/components/Projects";
import Education from "@/components/about/Education";
import ContactCTA from "@/components/about/ContactCTA";

export default function AboutPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">

      {/* ================= ABOUT HERO ================= */}
      <Hero />

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

      {/* ================= STATS ================= */}
      <Stats />

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