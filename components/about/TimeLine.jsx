"use client";

const timeline = [
  {
    year: "2023",
    title: "Started Web Development",
    description:
      "Began learning HTML, CSS and JavaScript while building small projects.",
  },
  {
    year: "2024",
    title: "React Development",
    description:
      "Focused on React.js, responsive UI, APIs and modern frontend practices.",
  },
  {
    year: "2025",
    title: "MERN Stack & Next.js",
    description:
      "Built full-stack applications using MongoDB, Express, React, Next.js and Node.js.",
  },
  {
    year: "2026",
    title: "Creative Frontend",
    description:
      "Learning GSAP, Three.js and creating premium interactive web experiences.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-[#f8f7f4] py-32">

      <div className="mx-auto max-w-7xl px-8 md:px-16 lg:px-24">

        {/* Heading */}

        <div className="mb-20">

          <p className="uppercase tracking-[0.4em] text-sm text-neutral-500">
            04 / Journey
          </p>

          <h2 className="mt-6 text-6xl md:text-8xl font-light">
            My Journey
          </h2>

        </div>

        {/* Timeline */}

        <div className="space-y-16">

          {timeline.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[180px_1fr] gap-10 border-b border-[#E5E2DC] pb-12"
            >
              <h3 className="text-3xl md:text-4xl font-light text-neutral-500">
                {item.year}
              </h3>

              <div>

                <h4 className="text-3xl md:text-5xl font-light">
                  {item.title}
                </h4>

                <p className="mt-6 max-w-2xl text-lg leading-9 text-neutral-600">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}