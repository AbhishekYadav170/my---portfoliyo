// "use client";

// import { GraduationCap, Calendar, Award } from "lucide-react";
// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// const education = [
//   {
//     year: "2022 – 2025",
//     degree: "Bachelor of Computer Applications",
//     institute: "Veer Bahadur Singh Purvanchal University",
//     description:
//       "Completed BCA with a strong focus on programming, web development, databases and modern software technologies.",
//     type: "Degree",
//   },
//   {
//     year: "2022",
//     degree: "Started Web Development",
//     institute: "Self Learning & Projects",
//     description:
//       "Started learning HTML, CSS and JavaScript and gradually moved towards React, Node.js and full-stack development.",
//     type: "Learning",
//   },
//   {
//     year: "2024 – 2025",
//     degree: "MERN Stack Development",
//     institute: "Projects & Practical Development",
//     description:
//       "Built full-stack applications using React, Next.js, Node.js, Express.js, MongoDB and REST APIs.",
//     type: "Specialization",
//   },
// ];

// export default function Education() {
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       gsap.from(".education-reveal", {
//         opacity: 0,
//         y: 60,
//         duration: 0.9,
//         stagger: 0.15,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           once: true,
//         },
//       });
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       className="
//         bg-[var(--bg)]
//         text-[var(--text)]
//         py-24
//         md:py-32
//         lg:py-40
//       "
//     >
//       <div
//         className="
//           max-w-7xl
//           mx-auto
//           px-6
//           md:px-10
//           lg:px-16
//         "
//       >
//         {/* HEADER */}

//         <div className="education-reveal">
//           <p
//             className="
//               uppercase
//               tracking-[0.4em]
//               text-xs
//               text-neutral-500
//             "
//           >
//             06 / EDUCATION
//           </p>

//           <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-8">
//             <h2
//               className="
//                 text-5xl
//                 md:text-7xl
//                 lg:text-[7rem]
//                 font-light
//                 leading-[0.9]
//                 tracking-[-0.07em]
//               "
//             >
//               Education
//             </h2>

//             <p
//               className="
//                 max-w-md
//                 text-base
//                 md:text-lg
//                 leading-7
//                 text-neutral-500
//               "
//             >
//               My academic foundation and the learning journey that shaped
//               my approach to modern software development.
//             </p>
//           </div>
//         </div>

//         {/* EDUCATION LIST */}

//         <div className="mt-20 md:mt-24 space-y-5">
//           {education.map((item, index) => (
//             <article
//               key={`${item.year}-${item.degree}`}
//               className="
//                 education-reveal
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-[28px]
//                 border
//                 border-[var(--border)]
//                 bg-[var(--surface)]
//                 p-6
//                 md:p-8
//                 lg:p-10
//                 transition-all
//                 duration-500
//                 hover:-translate-y-1
//                 hover:shadow-[0_25px_70px_rgba(0,0,0,.07)]
//               "
//             >
//               <div
//                 className="
//                   flex
//                   flex-col
//                   lg:flex-row
//                   lg:items-center
//                   gap-8
//                   lg:gap-12
//                 "
//               >
//                 {/* ICON */}

//                 <div
//                   className="
//                     shrink-0
//                     flex
//                     h-14
//                     w-14
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-[var(--border)]
//                     bg-[var(--bg)]
//                   "
//                 >
//                   {index === 0 ? (
//                     <GraduationCap size={24} strokeWidth={1.5} />
//                   ) : index === 1 ? (
//                     <Calendar size={22} strokeWidth={1.5} />
//                   ) : (
//                     <Award size={22} strokeWidth={1.5} />
//                   )}
//                 </div>

//                 {/* YEAR */}

//                 <div className="lg:w-36 shrink-0">
//                   <p
//                     className="
//                       text-sm
//                       uppercase
//                       tracking-[0.2em]
//                       text-neutral-500
//                     "
//                   >
//                     {item.year}
//                   </p>

//                   <p
//                     className="
//                       mt-2
//                       text-xs
//                       uppercase
//                       tracking-[0.15em]
//                       text-neutral-400
//                     "
//                   >
//                     {item.type}
//                   </p>
//                 </div>

//                 {/* CONTENT */}

//                 <div className="flex-1">
//                   <h3
//                     className="
//                       text-2xl
//                       md:text-3xl
//                       font-light
//                       tracking-[-0.03em]
//                       transition-transform
//                       duration-500
//                       group-hover:translate-x-1
//                     "
//                   >
//                     {item.degree}
//                   </h3>

//                   <p
//                     className="
//                       mt-2
//                       text-sm
//                       md:text-base
//                       text-neutral-500
//                     "
//                   >
//                     {item.institute}
//                   </p>

//                   <p
//                     className="
//                       mt-4
//                       max-w-2xl
//                       text-sm
//                       md:text-base
//                       leading-7
//                       text-neutral-500
//                     "
//                   >
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* NUMBER */}

//                 <div
//                   className="
//                     hidden
//                     lg:block
//                     text-7xl
//                     font-light
//                     tracking-[-0.08em]
//                     text-neutral-200
//                     transition-transform
//                     duration-500
//                     group-hover:translate-x-2
//                   "
//                 >
//                   0{index + 1}
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* BOTTOM NOTE */}

//         <div
//           className="
//             education-reveal
//             mt-12
//             flex
//             flex-col
//             md:flex-row
//             md:items-center
//             justify-between
//             gap-5
//             border-t
//             border-[var(--border)]
//             pt-6
//           "
//         >
//           <p className="text-sm text-neutral-500">
//             Academic foundation → practical development → continuous learning
//           </p>

//           <p
//             className="
//               text-xs
//               uppercase
//               tracking-[0.3em]
//               text-neutral-400
//             "
//           >
//             Always Learning
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }






// "use client";

// import { GraduationCap, School, BookOpen } from "lucide-react";
// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// const education = [
//   {
//     year: "2025",
//     degree: "Bachelor of Computer Applications",
//     institute: "Veer Bahadur Singh Purvanchal University",
//     location: "Jaunpur, Uttar Pradesh",
//     icon: GraduationCap,
//     label: "BCA",
//   },
//   {
//     year: "2022",
//     degree: "12th Grade",
//     institute: "Sitaram Inter College",
//     location: "Muftiganj, Jaunpur, Uttar Pradesh",
//     icon: School,
//     label: "INTERMEDIATE",
//   },
//   {
//     year: "2020",
//     degree: "10th Grade",
//     institute: "Sarju Das Inter College",
//     location: "Muftiganj, Jaunpur, Uttar Pradesh",
//     icon: BookOpen,
//     label: "HIGH SCHOOL",
//   },
// ];

// export default function Education() {
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       gsap.from(".education-reveal", {
//         opacity: 0,
//         y: 60,
//         duration: 0.9,
//         stagger: 0.15,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           once: true,
//         },
//       });
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       id="education"
//       className="
//         relative
//         w-full
//         bg-[var(--bg)]
//         text-[var(--text)]
//         py-24
//         md:py-32
//         lg:py-40
//       "
//     >
//       <div
//         className="
//           max-w-7xl
//           mx-auto
//           px-6
//           md:px-10
//           lg:px-16
//         "
//       >
//         {/* HEADER */}

//         <div className="education-reveal max-w-4xl">
//           <p
//             className="
//               text-xs
//               uppercase
//               tracking-[0.4em]
//               text-neutral-500
//             "
//           >
//             06 / EDUCATION
//           </p>

//           <h2
//             className="
//               mt-6
//               text-5xl
//               md:text-7xl
//               lg:text-[7rem]
//               font-light
//               leading-[0.9]
//               tracking-[-0.08em]
//             "
//           >
//             Education
//           </h2>

//           <p
//             className="
//               mt-8
//               max-w-xl
//               text-base
//               md:text-lg
//               leading-8
//               text-neutral-500
//             "
//           >
//             My academic journey and the foundation that shaped my
//             development career.
//           </p>
//         </div>

//         {/* EDUCATION CARDS */}

//         <div
//           className="
//             mt-16
//             md:mt-20
//             max-w-6xl
//             space-y-6
//           "
//         >
//           {education.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.year}
//                 className="
//                   education-reveal
//                   relative
//                   rounded-[30px]
//                   p-[1px]
//                   overflow-hidden
//                   group
//                 "
//               >
//                 {/* ANIMATED BORDER */}

//                 <div
//                   className="
//                     absolute
//                     inset-[-100%]
//                     animate-[spin_5s_linear_infinite]
//                     bg-[conic-gradient(from_0deg,transparent_0deg,transparent_70deg,#22c55e_100deg,#3b82f6_180deg,#ec4899_260deg,transparent_320deg,transparent_360deg)]
//                   "
//                 />

//                 {/* CARD */}

//                 <article
//                   className="
//                     relative
//                     z-10
//                     h-[300px]
//                     md:h-[280px]
//                     rounded-[29px]
//                     bg-[var(--surface)]
//                     p-7
//                     md:p-10
//                     overflow-hidden
//                     transition-all
//                     duration-500
//                     group-hover:bg-[var(--bg)]
//                     group-hover:-translate-y-1
//                     group-hover:shadow-[0_25px_70px_rgba(0,0,0,.12)]
//                   "
//                 >
//                   {/* BIG NUMBER */}

//                   <div
//                     className="
//                       absolute
//                       right-6
//                       top-2
//                       text-[7rem]
//                       md:text-[10rem]
//                       font-light
//                       leading-none
//                       tracking-[-0.1em]
//                       text-neutral-200/40
//                       dark:text-white/5
//                       pointer-events-none
//                     "
//                   >
//                     0{index + 1}
//                   </div>

//                   <div
//                     className="
//                       relative
//                       z-10
//                       flex
//                       h-full
//                       flex-col
//                       md:flex-row
//                       md:items-center
//                       gap-7
//                       md:gap-12
//                     "
//                   >
//                     {/* ICON */}

//                     <div
//                       className="
//                         shrink-0
//                         flex
//                         h-16
//                         w-16
//                         items-center
//                         justify-center
//                         rounded-2xl
//                         border
//                         border-[var(--border)]
//                         bg-[var(--bg)]
//                         transition-all
//                         duration-500
//                         group-hover:scale-110
//                         group-hover:rotate-3
//                       "
//                     >
//                       <Icon
//                         size={30}
//                         strokeWidth={1.5}
//                         className="
//                           transition-colors
//                           duration-500
//                           group-hover:text-green-500
//                         "
//                       />
//                     </div>

//                     {/* YEAR */}

//                     <div className="md:w-28 shrink-0">
//                       <p
//                         className="
//                           text-xs
//                           uppercase
//                           tracking-[0.3em]
//                           text-neutral-500
//                         "
//                       >
//                         YEAR
//                       </p>

//                       <p
//                         className="
//                           mt-2
//                           text-2xl
//                           font-light
//                         "
//                       >
//                         {item.year}
//                       </p>
//                     </div>

//                     {/* CONTENT */}

//                     <div className="flex-1">
//                       <p
//                         className="
//                           text-xs
//                           uppercase
//                           tracking-[0.3em]
//                           text-neutral-500
//                         "
//                       >
//                         {item.label}
//                       </p>

//                       <h3
//                         className="
//                           mt-3
//                           text-2xl
//                           md:text-4xl
//                           font-light
//                           tracking-[-0.04em]
//                           transition-transform
//                           duration-500
//                           group-hover:translate-x-2
//                         "
//                       >
//                         {item.degree}
//                       </h3>

//                       <p
//                         className="
//                           mt-3
//                           text-base
//                           md:text-lg
//                           text-neutral-500
//                         "
//                       >
//                         {item.institute}
//                       </p>

//                       <p
//                         className="
//                           mt-1
//                           text-sm
//                           text-neutral-400
//                         "
//                       >
//                         {item.location}
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               </div>
//             );
//           })}
//         </div>

//         {/* BOTTOM LINE */}

//         <div
//           className="
//             education-reveal
//             mt-14
//             max-w-6xl
//             border-t
//             border-[var(--border)]
//             pt-6
//             flex
//             flex-col
//             md:flex-row
//             md:items-center
//             justify-between
//             gap-4
//           "
//         >
//           <p className="text-sm text-neutral-500">
//             Academic foundation → continuous learning → professional growth
//           </p>

//           <p
//             className="
//               text-xs
//               uppercase
//               tracking-[0.3em]
//               text-neutral-400
//             "
//           >
//             Always Learning
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }






// "use client";

// import { GraduationCap, School, BookOpen } from "lucide-react";
// import { useRef } from "react";
// import gsap, { useGSAP } from "@/libs/gsap";

// const education = [
//   {
//     year: "2025",
//     degree: "Bachelor of Computer Applications",
//     institute: "Veer Bahadur Singh Purvanchal University",
//     location: "Jaunpur, Uttar Pradesh",
//     type: "BCA",
//     icon: GraduationCap,
//     color: "text-emerald-400",
//     glow: "rgba(16,185,129,0.8)",
//   },
//   {
//     year: "2022",
//     degree: "12th Grade",
//     institute: "Sitaram Inter College",
//     location: "Muftiganj, Jaunpur, Uttar Pradesh",
//     type: "INTERMEDIATE",
//     icon: School,
//     color: "text-blue-400",
//     glow: "rgba(59,130,246,0.8)",
//   },
//   {
//     year: "2020",
//     degree: "10th Grade",
//     institute: "Sarju Das Inter College",
//     location: "Muftiganj, Jaunpur, Uttar Pradesh",
//     type: "HIGH SCHOOL",
//     icon: BookOpen,
//     color: "text-pink-500",
//     glow: "rgba(236,72,153,0.8)",
//   },
// ];

// export default function Education() {
//   const sectionRef = useRef(null);

//   useGSAP(
//     () => {
//       gsap.from(".education-reveal", {
//         opacity: 0,
//         y: 60,
//         duration: 0.9,
//         stagger: 0.15,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//           once: true,
//         },
//       });
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section
//       ref={sectionRef}
//       id="education"
//       className="
//         relative
//         w-full
//         bg-[var(--bg)]
//         text-[var(--text)]
//         py-24
//         md:py-32
//         lg:py-40
//       "
//     >
//       <div
//         className="
//           max-w-7xl
//           mx-auto
//           px-5
//           md:px-8
//           lg:px-12
//         "
//       >

//         {/* ================= HEADER ================= */}

//         <div className="education-reveal max-w-4xl ml-[-10px] md:ml-[-20px]">

//           <p
//             className="
//               text-xs
//               uppercase
//               tracking-[0.4em]
//               text-neutral-500
//             "
//           >
//             06 / EDUCATION
//           </p>

//           <h2
//             className="
//               mt-6
//               text-5xl
//               md:text-7xl
//               lg:text-[7rem]
//               font-light
//               leading-[0.9]
//               tracking-[-0.08em]
//             "
//           >
//             Education
//           </h2>

//           <p
//             className="
//               mt-7
//               max-w-xl
//               text-base
//               md:text-lg
//               leading-8
//               text-neutral-500
//             "
//           >
//             My academic journey and the foundation that shaped
//             my development career.
//           </p>

//         </div>

//         {/* ================= CARDS ================= */}

//         <div
//           className="
//             mt-16
//             md:mt-20
//             max-w-6xl
//             space-y-6
//           "
//         >

//           {education.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.year}
//                 className="
//                   education-reveal
//                   relative
//                   h-[290px]
//                   md:h-[270px]
//                   rounded-[28px]
//                   overflow-hidden
//                   p-[1px]
//                 "
//               >

//                 {/* ================= MOVING GRADIENT BORDER ================= */}

//                 <div
//                   className="
//                     absolute
//                     inset-[-150%]
//                     animate-[spin_5s_linear_infinite]
//                     bg-[conic-gradient(from_0deg,transparent_0deg,#22c55e_70deg,#3b82f6_150deg,#a855f7_220deg,#ec4899_290deg,transparent_360deg)]
//                   "
//                 />

//                 {/* ================= ORIGINAL CARD ================= */}

//                 <article
//                   className="
//                     relative
//                     z-10
//                     h-full
//                     w-full
//                     rounded-[27px]
//                     border
//                     border-[var(--border)]
//                     bg-[var(--surface)]
//                     p-6
//                     md:p-8
//                     lg:p-10
//                     overflow-hidden
//                     transition-all
//                     duration-500
//                     hover:-translate-y-1
//                     hover:shadow-[0_25px_70px_rgba(0,0,0,.08)]
//                   "
//                 >

//                   {/* BIG NUMBER */}

//                   <div
//                     className={`
//                       absolute
//                       right-6
//                       top-2
//                       text-[7rem]
//                       md:text-[9rem]
//                       font-light
//                       leading-none
//                       tracking-[-0.08em]
//                       pointer-events-none
//                       select-none
//                       opacity-20
//                       ${item.color}
//                     `}
//                   >
//                     0{index + 1}
//                   </div>

//                   <div
//                     className="
//                       relative
//                       z-10
//                       flex
//                       h-full
//                       flex-col
//                       lg:flex-row
//                       lg:items-center
//                       gap-7
//                       lg:gap-12
//                     "
//                   >

//                     {/* ================= ICON ================= */}

//                     <div
//                       className={`
//                         shrink-0
//                         flex
//                         h-16
//                         w-16
//                         items-center
//                         justify-center
//                         rounded-2xl
//                         border
//                         border-[var(--border)]
//                         bg-[var(--bg)]
//                         ${item.color}
//                       `}
//                       style={{
//                         boxShadow: `0 0 25px ${item.glow}`,
//                       }}
//                     >
//                       <Icon
//                         size={30}
//                         strokeWidth={1.5}
//                       />
//                     </div>

//                     {/* ================= YEAR ================= */}

//                     <div className="lg:w-28 shrink-0">

//                       <p
//                         className="
//                           text-xs
//                           uppercase
//                           tracking-[0.25em]
//                           text-neutral-500
//                         "
//                       >
//                         YEAR
//                       </p>

//                       <p
//                         className={`
//                           mt-2
//                           text-3xl
//                           font-light
//                           ${item.color}
//                         `}
//                       >
//                         {item.year}
//                       </p>

//                     </div>

//                     {/* ================= CONTENT ================= */}

//                     <div className="flex-1">

//                       <p
//                         className={`
//                           text-xs
//                           uppercase
//                           tracking-[0.3em]
//                           font-medium
//                           ${item.color}
//                         `}
//                       >
//                         {item.type}
//                       </p>

//                       <h3
//                         className="
//                           mt-3
//                           text-2xl
//                           md:text-3xl
//                           lg:text-4xl
//                           font-light
//                           tracking-[-0.04em]
//                         "
//                       >
//                         {item.degree}
//                       </h3>

//                       <p
//                         className="
//                           mt-3
//                           text-base
//                           md:text-lg
//                           text-neutral-500
//                         "
//                       >
//                         {item.institute}
//                       </p>

//                       <p
//                         className={`
//                           mt-2
//                           text-sm
//                           font-medium
//                           ${item.color}
//                         `}
//                       >
//                         {item.location}
//                       </p>

//                     </div>

//                     {/* ================= CARD NUMBER ================= */}

//                     <div
//                       className={`
//                         hidden
//                         lg:block
//                         text-7xl
//                         font-light
//                         tracking-[-0.08em]
//                         opacity-20
//                         ${item.color}
//                       `}
//                     >
//                       0{index + 1}
//                     </div>

//                   </div>

//                 </article>

//               </div>
//             );
//           })}

//         </div>

//         {/* ================= BOTTOM ================= */}

//         <div
//           className="
//             education-reveal
//             mt-12
//             max-w-6xl
//             border-t
//             border-[var(--border)]
//             pt-6
//             flex
//             flex-col
//             md:flex-row
//             md:items-center
//             justify-between
//             gap-5
//           "
//         >

//           <p className="text-sm text-neutral-500">
//             Academic foundation → practical development → continuous learning
//           </p>

//           <p
//             className="
//               text-xs
//               uppercase
//               tracking-[0.3em]
//               text-neutral-400
//             "
//           >
//             Always Learning
//           </p>

//         </div>

//       </div>
//     </section>
//   );
// }




"use client";

import { GraduationCap, School, Award, MapPin, Calendar } from "lucide-react";
import { useRef } from "react";
import gsap, { useGSAP } from "@/libs/gsap";

const education = [
  {
    year: "2025",
    title: "Bachelor of Computer Applications",
    institute: "Veer Bahadur Singh Purvanchal University",
    location: "Jaunpur, Uttar Pradesh",
    description:
      "Completed BCA with a strong foundation in programming, web development, databases, software engineering and modern computer technologies.",
    type: "BCA",
    icon: GraduationCap,
  },
  {
    year: "2022",
    title: "Intermediate",
    institute: "Sitaram Inter College",
    location: "Muftiganj, Jaunpur, Uttar Pradesh",
    description:
      "Completed Class 12th and developed a strong academic foundation that helped me move towards computer applications and technology.",
    type: "12th",
    icon: School,
  },
  {
    year: "2020",
    title: "High School",
    institute: "Sarju Devi Inter College",
    location: "Muftiganj, Jaunpur, Uttar Pradesh",
    description:
      "Completed Class 10th and built the academic foundation that became the starting point of my learning journey.",
    type: "10th",
    icon: Award,
  },
];

export default function Education() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".education-card", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="education"
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[var(--bg)]
        text-[var(--text)]
        py-24
        md:py-32
        lg:py-36
      "
    >
      <div
        className="
          mx-auto
          max-w-[1500px]
          px-6
          md:px-10
          lg:px-14
        "
      >

        {/* ================= HEADER ================= */}

        <div className="education-card mb-16">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.4em]
              text-neutral-500
            "
          >
            06 / EDUCATION
          </p>

          <h2
            className="
              mt-5
              text-5xl
              md:text-7xl
              lg:text-[6.5rem]
              font-light
              leading-[0.9]
              tracking-[-0.07em]
            "
          >
            Education
          </h2>

          <p
            className="
              mt-7
              max-w-2xl
              text-base
              md:text-lg
              leading-8
              text-neutral-500
            "
          >
            My academic foundation and educational journey that shaped
            my path into software development.
          </p>

        </div>


        {/* ================= CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
            items-stretch
          "
        >

          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  education-card
                  group
                  relative
                  h-full
                  min-h-[520px]
                  rounded-[30px]
                  overflow-hidden
                  p-[1.5px]
                "
              >

                {/* =================================
                    CONTINUOUS ANIMATED GRADIENT
                ================================= */}

                <div
                  className="
                    absolute
                    inset-[-150%]
                    animate-spin
                    [animation-duration:5s]
                    bg-[conic-gradient(from_0deg,#00ff88,#2563eb,#ff0066,#8b5cf6,#00ff88)]
                  "
                />

                {/* ================= CARD ================= */}

                <article
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    min-h-[517px]
                    flex-col
                    rounded-[29px]
                    border
                    border-white/10
                    bg-[#101010]
                    p-8
                    md:p-9
                    lg:p-10
                    transition-all
                    duration-500
                    group-hover:bg-[#111111]
                    group-hover:shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                  "
                >

                  {/* TOP */}

                  <div className="flex items-center justify-between">

                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-black
                        shadow-[0_0_30px_rgba(139,92,246,0.15)]
                        transition-all
                        duration-500
                        group-hover:scale-105
                      "
                    >
                      <Icon
                        size={30}
                        strokeWidth={1.5}
                        className="
                          text-white
                          transition-colors
                          duration-500
                          group-hover:text-cyan-400
                        "
                      />
                    </div>

                    {/* NUMBER */}

                    <span
                      className="
                        text-6xl
                        font-light
                        tracking-[-0.08em]
                        text-white/10
                        transition-all
                        duration-500
                        group-hover:text-white/20
                      "
                    >
                      0{index + 1}
                    </span>

                  </div>


                  {/* TYPE */}

                  <p
                    className="
                      mt-12
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.35em]
                      text-neutral-500
                    "
                  >
                    {item.type}
                  </p>


                  {/* TITLE */}

                  <h3
                    className="
                      mt-5
                      min-h-[90px]
                      text-3xl
                      md:text-4xl
                      font-light
                      leading-tight
                      tracking-[-0.04em]
                      text-white
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    {item.title}
                  </h3>


                  {/* YEAR */}

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-neutral-400
                    "
                  >
                    <Calendar size={15} />

                    <span>
                      Passed in {item.year}
                    </span>
                  </div>


                  {/* INSTITUTE */}

                  <div className="mt-7">

                    <p
                      className="
                        text-lg
                        font-medium
                        leading-7
                        text-white
                      "
                    >
                      {item.institute}
                    </p>

                    <div
                      className="
                        mt-2
                        flex
                        items-start
                        gap-2
                        text-sm
                        leading-6
                        text-neutral-500
                      "
                    >
                      <MapPin
                        size={15}
                        className="mt-1 shrink-0"
                      />

                      <span>
                        {item.location}
                      </span>
                    </div>

                  </div>


                  {/* DIVIDER */}

                  <div
                    className="
                      mt-7
                      h-px
                      w-full
                      bg-white/10
                    "
                  />


                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-7
                      text-sm
                      leading-7
                      text-neutral-400
                    "
                  >
                    {item.description}
                  </p>


                  {/* BOTTOM */}

                  <div className="mt-auto pt-8">

                    <div
                      className="
                        h-1
                        w-12
                        rounded-full
                        bg-gradient-to-r
                        from-purple-500
                        via-blue-500
                        to-cyan-400
                        transition-all
                        duration-500
                        group-hover:w-24
                      "
                    />

                  </div>

                </article>

              </div>
            );
          })}

        </div>


        {/* ================= BOTTOM ================= */}

        <div
          className="
            education-card
            mt-12
            border-t
            border-[var(--border)]
            pt-6
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-4
          "
        >

          <p className="text-sm text-neutral-500">
            Education → Skills → Projects → Professional Growth
          </p>

          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-purple-500
            "
          >
            Always Learning
          </p>

        </div>

      </div>
    </section>
  );
}