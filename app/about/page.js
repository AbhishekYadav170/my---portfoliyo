

import ContactCTA from "@/components/about/ContactCTA";
import Hero from "@/components/about/Hero";
import Services from "@/components/about/Services";
import SkillsMarquee from "@/components/about/SkillsMarquee";
import Stats from "@/components/about/Stats";
import Story from "@/components/about/Story";
import Timeline from "@/components/about/TimeLine";
//import AboutImage from "@/components/AboutImage";
import Projects from "@/components/Projects";
//import AboutContent from "@/components/about/AboutContent";
import AboutIntro from "@/components/about/AboutIntro";

export default function AboutPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#010101]">
      <Hero />
      {/* <Story />
      <AboutImage />
      <AboutContent /> */}
      <AboutIntro />
      <SkillsMarquee />
      <Timeline />
      <Stats />
      <Services />
      <Projects />
      <ContactCTA />
    </main>
  );
}