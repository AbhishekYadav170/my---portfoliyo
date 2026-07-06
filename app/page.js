"use client"

import InfiniteCarousel from "@/components/InfiniteCarousel"
import TextReveal from "@/components/TextReveal";
import { projects } from "@/data/projects";
import { useRef } from "react";

export default function Home() {
  

  return (
    <main className="h-[300vh]  w-full">
      <InfiniteCarousel projects={projects} />
    </main>
  )
}