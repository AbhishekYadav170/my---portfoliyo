

import ContactCTA from "@/components/about/ContactCTA";
import Hero from "@/components/about/Hero";
import Services from "@/components/about/Services";
import SkillsMarquee from "@/components/about/SkillsMarquee";
import Stats from "@/components/about/Stats";
import Story from "@/components/about/Story";
import Timeline from "@/components/about/TimeLine";
import AboutImage from "@/components/AboutImage";

export default function AboutPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#010101]">
      <Hero />
      <Story />
      <AboutImage />
      <SkillsMarquee />
      <Timeline />
      <Stats />
      <Services />
      <ContactCTA />
    </main>
  );
}