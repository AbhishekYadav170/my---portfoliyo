"use client";

import Image from "next/image";

export default function AboutImage() {
  return (
    <section className="relative bg-[#f5f5f5] text-[#010101] py-32">

      <div className="mx-auto max-w-7xl px-8 md:px-16 lg:px-24">

        {/* Top */}
        <div className="mb-10 flex items-center justify-between border-b border-neutral-300 pb-6">

          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            02 / About Me
          </p>

          <p className="text-sm text-neutral-500">
            Creative Frontend Developer
          </p>

        </div>

        {/* Image */}

        <div className="relative overflow-hidden rounded-3xl">

          <Image
            src="/profile.jpg"
            alt="Abhishek Yadav"
            width={1800}
            height={1200}
            priority
            className="h-[80vh] w-full object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Bottom Text */}

          <div className="absolute bottom-10 left-10">

            <h2 className="text-5xl md:text-7xl font-light text-white">
              About Me
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-200">

              I believe great digital experiences are created
              through clean code, thoughtful design and
              meaningful interactions.

            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 grid gap-16 md:grid-cols-2">

          <div>

            <h3 className="text-4xl font-light">

              Building products
              <br />
              with purpose.

            </h3>

          </div>

          <div>

            <p className="text-lg leading-9 text-neutral-600">

              I enjoy turning ideas into beautiful and
              interactive web experiences using React,
              Next.js, GSAP and modern frontend tools.

              Every project I build focuses on performance,
              user experience and smooth animation.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}