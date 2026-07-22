"use client";

const stats = [
  {
    number: "20+",
    title: "Projects Completed",
  },
  {
    number: "15+",
    title: "Technologies",
  },
  {
    number: "100%",
    title: "Responsive Design",
  },
  {
    number: "24/7",
    title: "Learning Mindset",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#111111] text-white py-32">

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

        <p className="uppercase tracking-[0.4em] text-sm text-neutral-400">
          05 / Stats
        </p>

        <h2 className="text-6xl md:text-8xl font-light mt-6">
          Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24">

          {stats.map((item, index) => (

            <div
              key={index}
              className="border-t border-neutral-700 pt-8"
            >

              <h3 className="text-7xl md:text-8xl font-light">
                {item.number}
              </h3>

              <p className="text-lg mt-4 text-neutral-400">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}