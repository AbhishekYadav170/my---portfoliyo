"use client";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    desc: "Modern, responsive and interactive interfaces built using React, Next.js and Tailwind CSS."
  },
  {
    number: "02",
    title: "Full Stack Development",
    desc: "Scalable backend development with Node.js, Express.js and MongoDB."
  },
  {
    number: "03",
    title: "Creative Development",
    desc: "Smooth animations and immersive experiences using GSAP and modern web technologies."
  },
];

export default function Services() {
  return (
    <section className="bg-[#f8f7f4] py-36">

      <div className="max-w-7xl mx-auto px-8 md:px-16">

        <div className="mb-24">

          <p className="uppercase tracking-[0.4em] text-neutral-500 text-sm">
            06 / SERVICES
          </p>

          <h2 className="mt-6 text-6xl md:text-8xl font-light">
            What I Do
          </h2>

        </div>

        <div className="space-y-10">

          {services.map((item) => (

            <div
              key={item.number}
              className="group border-t border-[#E5E2DC] pt-10 flex flex-col md:flex-row justify-between gap-8 hover:pl-8 duration-500"
            >

              <div className="flex gap-10">

                <span className="text-neutral-500 text-xl">
                  {item.number}
                </span>

                <h3 className="text-4xl md:text-5xl font-light">
                  {item.title}
                </h3>

              </div>

              <p className="max-w-xl text-lg text-neutral-600 leading-8">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}