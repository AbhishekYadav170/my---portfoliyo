"use client";

import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-[#f8f7f4] py-40">

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

        <p className="uppercase tracking-[0.4em] text-sm text-neutral-500">
          06 / Contact
        </p>

        <h2 className="mt-8 text-[4rem] md:text-[7rem] lg:text-[9rem] leading-[0.9] font-light">

          LET'S
          <br />

          BUILD
          <br />

          SOMETHING
          <br />

          AMAZING.

        </h2>

        <div className="mt-20">

          <Link
            href="/contact"
            className="inline-flex items-center gap-4 border border-black rounded-full px-10 py-5 text-lg hover:bg-black hover:text-white transition-all duration-500"
          >
            Contact Me
            <span>→</span>
          </Link>

        </div>

      </div>

    </section>
  );
}