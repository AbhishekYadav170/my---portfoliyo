// // "use client";

// // import Link from "next/link";

// // export default function ContactCTA() {
// //   return (
// //     <section 
// //       id="contact" 
// //       className="bg-[#f8f7f4] py-40">

// //       <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

// //         <p className="uppercase tracking-[0.4em] text-sm text-neutral-500">
// //           06 / Contact
// //         </p>

// //         <h2 className="mt-8 text-[4rem] md:text-[7rem] lg:text-[9rem] leading-[0.9] font-light">

// //           LET'S
// //           <br />

// //           BUILD
// //           <br />

// //           SOMETHING
// //           <br />

// //           AMAZING.

// //         </h2>

// //         <div className="mt-20">

// //           <Link
// //             href="/contact"
// //             className="inline-flex items-center gap-4 border border-black rounded-full px-10 py-5 text-lg hover:bg-black hover:text-white transition-all duration-500"
// //           >
// //             Contact Me
// //             <span>→</span>
// //           </Link>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }








// "use client";

// import Link from "next/link";
// import {
//   ArrowUpRight,
//   Mail,
//   Phone,
// } from "lucide-react";

// const contactLinks = [
//   {
//     label: "LinkedIn",
//     value: "Connect with me",
//     href: "https://www.linkedin.com/in/abhishek-yadav-2248262b6",
//     type: "brand",
//     icon: "in",
//     external: true,
//   },
//   {
//     label: "GitHub",
//     value: "View my projects",
//     href: "https://github.com/AbhishekYadav170",
//     type: "brand",
//     icon: "GH",
//     external: true,
//   },
//   {
//     label: "Email",
//     value: "abhishek170yadav@gmail.com",
//     href: "mailto:abhishek170yadav@gmail.com",
//     type: "icon",
//     icon: Mail,
//     external: false,
//   },
//   {
//     label: "Phone",
//     value: "Call me",
//     href: "tel:+91XXXXXXXXXX",
//     type: "icon",
//     icon: Phone,
//     external: false,
//   },
// ];

// export default function ContactCTA() {
//   return (
//     <section
//       id="contact"
//       className="
//         w-full
//         overflow-hidden
//         bg-[var(--bg)]
//         text-[var(--text)]
//         py-24
//         sm:py-28
//         md:py-32
//         lg:py-36
//       "
//     >
//       <div
//         className="
//           mx-auto
//           w-full
//           max-w-7xl
//           px-6
//           sm:px-8
//           md:px-10
//           lg:px-16
//         "
//       >

//         {/* ================= TOP LABEL ================= */}

//         <div className="flex items-center gap-5">

//           <p
//             className="
//               whitespace-nowrap
//               text-[10px]
//               uppercase
//               tracking-[0.35em]
//               text-neutral-500
//               sm:text-xs
//             "
//           >
//             07 / CONTACT
//           </p>

//           <div className="h-px flex-1 bg-[var(--border)]" />

//         </div>

//         {/* ================= MAIN HEADING ================= */}

//         <div className="mt-12 sm:mt-16 md:mt-20">

//           <p
//             className="
//               text-xs
//               uppercase
//               tracking-[0.25em]
//               text-neutral-400
//               sm:text-sm
//             "
//           >
//             Have a project in mind?
//           </p>

//           <h2
//             className="
//               mt-6
//               max-w-6xl
//               text-[3.4rem]
//               font-light
//               leading-[0.88]
//               tracking-[-0.07em]
//               sm:text-6xl
//               md:text-7xl
//               lg:text-[8rem]
//             "
//           >
//             LET&apos;S
//             <br />
//             BUILD
//             <br />
//             SOMETHING
//             <br />
//             AMAZING.
//           </h2>

//         </div>

//         {/* ================= CONTACT BUTTON ================= */}

//         <div className="mt-10 sm:mt-14">

//           <Link
//             href="mailto:abhishek170yadav@gmail.com"
//             className="
//               group
//               inline-flex
//               items-center
//               gap-4
//               rounded-full
//               border
//               border-[var(--text)]
//               px-7
//               py-4
//               text-sm
//               transition-all
//               duration-300
//               hover:bg-[var(--text)]
//               hover:text-[var(--bg)]
//               sm:px-9
//               sm:py-5
//               sm:text-base
//             "
//           >
//             Start a Conversation

//             <ArrowUpRight
//               className="
//                 h-5
//                 w-5
//                 transition-transform
//                 duration-300
//                 group-hover:-translate-y-1
//                 group-hover:translate-x-1
//               "
//             />
//           </Link>

//         </div>

//         {/* ================= CONTACT CARDS ================= */}

//         <div
//           className="
//             mt-16
//             grid
//             grid-cols-1
//             gap-4
//             sm:mt-20
//             sm:grid-cols-2
//             lg:grid-cols-4
//           "
//         >

//           {contactLinks.map((item) => {

//             const Icon = item.icon;

//             return (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 target={item.external ? "_blank" : undefined}
//                 rel={
//                   item.external
//                     ? "noopener noreferrer"
//                     : undefined
//                 }
//                 className="
//                   group
//                   rounded-[24px]
//                   border
//                   border-[var(--border)]
//                   bg-[var(--surface)]
//                   p-6
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]
//                   sm:p-7
//                 "
//               >

//                 {/* ICON */}

//                 <div className="flex items-center justify-between">

//                   <div
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-[var(--border)]
//                       bg-[var(--bg)]
//                     "
//                   >

//                     {item.type === "brand" ? (
//                       <span
//                         className="
//                           text-xs
//                           font-semibold
//                           uppercase
//                           tracking-tight
//                         "
//                       >
//                         {item.icon}
//                       </span>
//                     ) : (
//                       <Icon className="h-5 w-5" />
//                     )}

//                   </div>

//                   <ArrowUpRight
//                     className="
//                       h-5
//                       w-5
//                       text-neutral-400
//                       transition-all
//                       duration-300
//                       group-hover:-translate-y-1
//                       group-hover:translate-x-1
//                     "
//                   />

//                 </div>

//                 {/* TEXT */}

//                 <p
//                   className="
//                     mt-8
//                     text-[10px]
//                     uppercase
//                     tracking-[0.3em]
//                     text-neutral-400
//                     sm:text-xs
//                   "
//                 >
//                   {item.label}
//                 </p>

//                 <p
//                   className="
//                     mt-3
//                     break-words
//                     text-base
//                     font-light
//                     leading-6
//                   "
//                 >
//                   {item.value}
//                 </p>

//               </Link>
//             );
//           })}

//         </div>

//         {/* ================= BOTTOM ================= */}

//         <div
//           className="
//             mt-16
//             flex
//             flex-col
//             gap-4
//             border-t
//             border-[var(--border)]
//             pt-6
//             text-xs
//             text-neutral-400
//             sm:mt-20
//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           "
//         >

//           <p>
//             Available for freelance &amp; full-time opportunities.
//           </p>

//           <p>
//             © {new Date().getFullYear()} Abhishek Yadav
//           </p>

//         </div>

//       </div>
//     </section>
//   );
// }










// "use client";

// import Link from "next/link";
// import {
//   ArrowUpRight,
//   Mail,
//   Phone,
// } from "lucide-react";

// const contactLinks = [
//   {
//     label: "LinkedIn",
//     value: "Connect with me",
//     href: "https://www.linkedin.com/in/abhishek-yadav-2248262b6",
//     type: "brand",
//     icon: "in",
//     external: true,
//   },
//   {
//     label: "GitHub",
//     value: "View my projects",
//     href: "https://github.com/AbhishekYadav170",
//     type: "brand",
//     icon: "GH",
//     external: true,
//   },
//   {
//     label: "Email",
//     value: "abhishek170yadav@gmail.com",
//     href: "mailto:abhishek170yadav@gmail.com",
//     type: "icon",
//     icon: Mail,
//     external: false,
//   },
//   {
//     label: "Phone",
//     value: "Call me",
//     href: "tel:+91XXXXXXXXXX",
//     type: "icon",
//     icon: Phone,
//     external: false,
//   },
// ];

// export default function ContactCTA() {
//   return (
//     <section
//       id="contact"
//       className="
//         relative
//         w-full
//         overflow-hidden
//         bg-[var(--bg)]
//         text-[var(--text)]
//         py-20
//         sm:py-24
//         md:py-28
//         lg:py-32
//         transition-colors
//         duration-500
//       "
//     >
//       {/* ================= BACKGROUND GLOW ================= */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-1/2
//           top-[45%]
//           h-[500px]
//           w-[500px]
//           -translate-x-1/2
//           rounded-full
//           bg-gradient-to-r
//           from-fuchsia-500/5
//           via-cyan-400/5
//           to-emerald-400/5
//           blur-[140px]
//         "
//       />

//       <div
//         className="
//           relative
//           mx-auto
//           w-full
//           max-w-7xl
//           px-6
//           sm:px-8
//           md:px-10
//           lg:px-16
//         "
//       >

//         {/* ================= TOP LABEL ================= */}

//         <div className="flex items-center gap-4">

//           <p
//             className="
//               whitespace-nowrap
//               text-[9px]
//               font-medium
//               uppercase
//               tracking-[0.35em]
//               text-neutral-500
//               dark:text-neutral-400
//             "
//           >
//             07 / CONTACT
//           </p>

//           <div className="h-px flex-1 bg-[var(--border)]" />

//         </div>

//         {/* ================= HEADING ================= */}

//         <div className="mt-10 sm:mt-12 md:mt-14">

//           <p
//             className="
//               text-[10px]
//               uppercase
//               tracking-[0.25em]
//               text-neutral-400
//               sm:text-xs
//             "
//           >
//             Have a project in mind?
//           </p>

//           <h2
//             className="
//               mt-5
//               max-w-5xl
//               text-[2.8rem]
//               font-light
//               leading-[0.9]
//               tracking-[-0.065em]
//               sm:text-5xl
//               md:text-6xl
//               lg:text-[6.5rem]
//             "
//           >
//             LET&apos;S
//             <br />
//             BUILD
//             <br />
//             SOMETHING
//             <br />
//             <span
//               className="
//                 bg-gradient-to-r
//                 from-fuchsia-500
//                 via-cyan-400
//                 to-emerald-400
//                 bg-clip-text
//                 text-transparent
//                 animate-gradient
//               "
//               style={{ backgroundSize: "250% 250%" }}
//             >
//               AMAZING.
//             </span>
//           </h2>

//         </div>

//         {/* ================= CTA BUTTON ================= */}

//         <div className="mt-9 sm:mt-11">

//           <Link
//             href="mailto:abhishek170yadav@gmail.com"
//             className="
//               group
//               inline-flex
//               items-center
//               gap-3
//               rounded-full
//               border
//               border-[var(--text)]
//               px-6
//               py-3.5
//               text-xs
//               font-medium
//               uppercase
//               tracking-[0.16em]
//               transition-all
//               duration-300
//               hover:bg-[var(--text)]
//               hover:text-[var(--bg)]
//               sm:px-7
//               sm:py-4
//               sm:text-sm
//             "
//           >
//             Start a Conversation

//             <ArrowUpRight
//               className="
//                 h-4
//                 w-4
//                 transition-transform
//                 duration-300
//                 group-hover:-translate-y-1
//                 group-hover:translate-x-1
//               "
//             />
//           </Link>

//         </div>

//         {/* ================= CONTACT CARDS ================= */}

//         <div
//           className="
//             mt-14
//             grid
//             grid-cols-1
//             gap-3
//             sm:mt-16
//             sm:grid-cols-2
//             lg:grid-cols-4
//           "
//         >

//           {contactLinks.map((item) => {

//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.label}
//                 className="
//                   gradient-border
//                   rounded-[19px]
//                   p-[1.5px]
//                 "
//               >

//                 <Link
//                   href={item.href}
//                   target={item.external ? "_blank" : undefined}
//                   rel={
//                     item.external
//                       ? "noopener noreferrer"
//                       : undefined
//                   }
//                   className="
//                     group
//                     relative
//                     block
//                     h-full
//                     overflow-hidden
//                     rounded-[17px]
//                     bg-[var(--surface)]
//                     p-5
//                     transition-all
//                     duration-500
//                     hover:-translate-y-1
//                     hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
//                     dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
//                     sm:p-5
//                   "
//                 >

//                   {/* ================= CARD TOP ================= */}

//                   <div className="flex items-center justify-between">

//                     <div
//                       className="
//                         flex
//                         h-9
//                         w-9
//                         items-center
//                         justify-center
//                         rounded-xl
//                         border
//                         border-[var(--border)]
//                         bg-[var(--bg)]
//                         transition-all
//                         duration-300
//                         group-hover:scale-105
//                       "
//                     >

//                       {item.type === "brand" ? (
//                         <span
//                           className="
//                             text-[10px]
//                             font-bold
//                             uppercase
//                             tracking-tight
//                           "
//                         >
//                           {item.icon}
//                         </span>
//                       ) : (
//                         <Icon className="h-4 w-4" />
//                       )}

//                     </div>

//                     <ArrowUpRight
//                       className="
//                         h-4
//                         w-4
//                         text-neutral-400
//                         transition-all
//                         duration-300
//                         group-hover:-translate-y-1
//                         group-hover:translate-x-1
//                       "
//                     />

//                   </div>

//                   {/* ================= CARD TEXT ================= */}

//                   <p
//                     className="
//                       mt-6
//                       text-[8px]
//                       font-semibold
//                       uppercase
//                       tracking-[0.28em]
//                       text-neutral-400
//                     "
//                   >
//                     {item.label}
//                   </p>

//                   <p
//                     className="
//                       mt-2
//                       break-words
//                       text-[13px]
//                       font-medium
//                       leading-5
//                       text-[var(--text)]
//                       sm:text-sm
//                     "
//                   >
//                     {item.value}
//                   </p>

//                   {/* ================= CARD BOTTOM GRADIENT ================= */}

//                   <div
//                     className="
//                       pointer-events-none
//                       absolute
//                       bottom-0
//                       left-0
//                       h-[2px]
//                       w-full
//                       bg-gradient-to-r
//                       from-fuchsia-500
//                       via-cyan-400
//                       to-emerald-400
//                       animate-gradient
//                     "
//                     style={{ backgroundSize: "250% 250%" }}
//                   />

//                 </Link>

//               </div>
//             );
//           })}

//         </div>

//         {/* ================= BOTTOM ================= */}

//         <div
//           className="
//             mt-14
//             flex
//             flex-col
//             gap-3
//             border-t
//             border-[var(--border)]
//             pt-5
//             text-[10px]
//             text-neutral-400
//             sm:mt-16
//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//             sm:text-xs
//           "
//         >

//           <p>
//             Available for freelance &amp; full-time opportunities.
//           </p>

//           <p>
//             © {new Date().getFullYear()} Abhishek Yadav
//           </p>

//         </div>

//       </div>
//     </section>
//   );
// }



// // "use client";

// // import Link from "next/link";

// // export default function ContactCTA() {
// //   return (
// //     <section 
// //       id="contact" 
// //       className="bg-[#f8f7f4] py-40">

// //       <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

// //         <p className="uppercase tracking-[0.4em] text-sm text-neutral-500">
// //           06 / Contact
// //         </p>

// //         <h2 className="mt-8 text-[4rem] md:text-[7rem] lg:text-[9rem] leading-[0.9] font-light">

// //           LET'S
// //           <br />

// //           BUILD
// //           <br />

// //           SOMETHING
// //           <br />

// //           AMAZING.

// //         </h2>

// //         <div className="mt-20">

// //           <Link
// //             href="/contact"
// //             className="inline-flex items-center gap-4 border border-black rounded-full px-10 py-5 text-lg hover:bg-black hover:text-white transition-all duration-500"
// //           >
// //             Contact Me
// //             <span>→</span>
// //           </Link>

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }








// "use client";

// import Link from "next/link";
// import {
//   ArrowUpRight,
//   Mail,
//   Phone,
// } from "lucide-react";

// const contactLinks = [
//   {
//     label: "LinkedIn",
//     value: "Connect with me",
//     href: "https://www.linkedin.com/in/abhishek-yadav-2248262b6",
//     type: "brand",
//     icon: "in",
//     external: true,
//   },
//   {
//     label: "GitHub",
//     value: "View my projects",
//     href: "https://github.com/AbhishekYadav170",
//     type: "brand",
//     icon: "GH",
//     external: true,
//   },
//   {
//     label: "Email",
//     value: "abhishek170yadav@gmail.com",
//     href: "mailto:abhishek170yadav@gmail.com",
//     type: "icon",
//     icon: Mail,
//     external: false,
//   },
//   {
//     label: "Phone",
//     value: "Call me",
//     href: "tel:+91XXXXXXXXXX",
//     type: "icon",
//     icon: Phone,
//     external: false,
//   },
// ];

// export default function ContactCTA() {
//   return (
//     <section
//       id="contact"
//       className="
//         w-full
//         overflow-hidden
//         bg-[var(--bg)]
//         text-[var(--text)]
//         py-24
//         sm:py-28
//         md:py-32
//         lg:py-36
//       "
//     >
//       <div
//         className="
//           mx-auto
//           w-full
//           max-w-7xl
//           px-6
//           sm:px-8
//           md:px-10
//           lg:px-16
//         "
//       >

//         {/* ================= TOP LABEL ================= */}

//         <div className="flex items-center gap-5">

//           <p
//             className="
//               whitespace-nowrap
//               text-[10px]
//               uppercase
//               tracking-[0.35em]
//               text-neutral-500
//               sm:text-xs
//             "
//           >
//             07 / CONTACT
//           </p>

//           <div className="h-px flex-1 bg-[var(--border)]" />

//         </div>

//         {/* ================= MAIN HEADING ================= */}

//         <div className="mt-12 sm:mt-16 md:mt-20">

//           <p
//             className="
//               text-xs
//               uppercase
//               tracking-[0.25em]
//               text-neutral-400
//               sm:text-sm
//             "
//           >
//             Have a project in mind?
//           </p>

//           <h2
//             className="
//               mt-6
//               max-w-6xl
//               text-[3.4rem]
//               font-light
//               leading-[0.88]
//               tracking-[-0.07em]
//               sm:text-6xl
//               md:text-7xl
//               lg:text-[8rem]
//             "
//           >
//             LET&apos;S
//             <br />
//             BUILD
//             <br />
//             SOMETHING
//             <br />
//             AMAZING.
//           </h2>

//         </div>

//         {/* ================= CONTACT BUTTON ================= */}

//         <div className="mt-10 sm:mt-14">

//           <Link
//             href="mailto:abhishek170yadav@gmail.com"
//             className="
//               group
//               inline-flex
//               items-center
//               gap-4
//               rounded-full
//               border
//               border-[var(--text)]
//               px-7
//               py-4
//               text-sm
//               transition-all
//               duration-300
//               hover:bg-[var(--text)]
//               hover:text-[var(--bg)]
//               sm:px-9
//               sm:py-5
//               sm:text-base
//             "
//           >
//             Start a Conversation

//             <ArrowUpRight
//               className="
//                 h-5
//                 w-5
//                 transition-transform
//                 duration-300
//                 group-hover:-translate-y-1
//                 group-hover:translate-x-1
//               "
//             />
//           </Link>

//         </div>

//         {/* ================= CONTACT CARDS ================= */}

//         <div
//           className="
//             mt-16
//             grid
//             grid-cols-1
//             gap-4
//             sm:mt-20
//             sm:grid-cols-2
//             lg:grid-cols-4
//           "
//         >

//           {contactLinks.map((item) => {

//             const Icon = item.icon;

//             return (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 target={item.external ? "_blank" : undefined}
//                 rel={
//                   item.external
//                     ? "noopener noreferrer"
//                     : undefined
//                 }
//                 className="
//                   group
//                   rounded-[24px]
//                   border
//                   border-[var(--border)]
//                   bg-[var(--surface)]
//                   p-6
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]
//                   sm:p-7
//                 "
//               >

//                 {/* ICON */}

//                 <div className="flex items-center justify-between">

//                   <div
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-[var(--border)]
//                       bg-[var(--bg)]
//                     "
//                   >

//                     {item.type === "brand" ? (
//                       <span
//                         className="
//                           text-xs
//                           font-semibold
//                           uppercase
//                           tracking-tight
//                         "
//                       >
//                         {item.icon}
//                       </span>
//                     ) : (
//                       <Icon className="h-5 w-5" />
//                     )}

//                   </div>

//                   <ArrowUpRight
//                     className="
//                       h-5
//                       w-5
//                       text-neutral-400
//                       transition-all
//                       duration-300
//                       group-hover:-translate-y-1
//                       group-hover:translate-x-1
//                     "
//                   />

//                 </div>

//                 {/* TEXT */}

//                 <p
//                   className="
//                     mt-8
//                     text-[10px]
//                     uppercase
//                     tracking-[0.3em]
//                     text-neutral-400
//                     sm:text-xs
//                   "
//                 >
//                   {item.label}
//                 </p>

//                 <p
//                   className="
//                     mt-3
//                     break-words
//                     text-base
//                     font-light
//                     leading-6
//                   "
//                 >
//                   {item.value}
//                 </p>

//               </Link>
//             );
//           })}

//         </div>

//         {/* ================= BOTTOM ================= */}

//         <div
//           className="
//             mt-16
//             flex
//             flex-col
//             gap-4
//             border-t
//             border-[var(--border)]
//             pt-6
//             text-xs
//             text-neutral-400
//             sm:mt-20
//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           "
//         >

//           <p>
//             Available for freelance &amp; full-time opportunities.
//           </p>

//           <p>
//             © {new Date().getFullYear()} Abhishek Yadav
//           </p>

//         </div>

//       </div>
//     </section>
//   );
// }










"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

const contactLinks = [
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/abhishek-yadav-2248262b6",
    type: "brand",
    icon: "in",
    external: true,
  },
  {
    label: "GitHub",
    value: "View my projects",
    href: "https://github.com/AbhishekYadav170",
    type: "brand",
    icon: "GH",
    external: true,
  },
  {
    label: "Email",
    value: "abhishek170yadav@gmail.com",
    href: "mailto:abhishek170yadav@gmail.com",
    type: "icon",
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: "Call me",
    href: "tel:+91XXXXXXXXXX",
    type: "icon",
    icon: Phone,
    external: false,
  },
];

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        bg-[var(--bg)]
        text-[var(--text)]
        py-20
        sm:py-24
        md:py-28
        lg:py-32
        transition-colors
        duration-500
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[45%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-r
          from-fuchsia-500/5
          via-cyan-400/5
          to-emerald-400/5
          blur-[140px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          px-6
          sm:px-8
          md:px-10
          lg:px-16
        "
      >

        {/* ================= TOP LABEL ================= */}

        <div className="flex items-center gap-4">

          <p
            className="
              whitespace-nowrap
              text-[9px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-neutral-500
              dark:text-neutral-400
            "
          >
            07 / CONTACT
          </p>

          <div className="h-px flex-1 bg-[var(--border)]" />

        </div>

        {/* ================= HEADING ================= */}

        <div className="mt-10 sm:mt-12 md:mt-14">

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-neutral-400
              sm:text-xs
            "
          >
            Have a project in mind?
          </p>

          <h2
            className="
              mt-5
              max-w-5xl
              text-[2.8rem]
              font-light
              leading-[0.9]
              tracking-[-0.065em]
              sm:text-5xl
              md:text-6xl
              lg:text-[6.5rem]
            "
          >
            LET&apos;S
            <br />
            BUILD
            <br />
            SOMETHING
            <br />
            <span
              className="
                bg-gradient-to-r
                from-fuchsia-500
                via-cyan-400
                to-emerald-400
                bg-clip-text
                text-transparent
                animate-gradient
              "
              style={{ backgroundSize: "250% 250%" }}
            >
              AMAZING.
            </span>
          </h2>

        </div>

        {/* ================= CTA BUTTON ================= */}

        <div className="mt-9 sm:mt-11">

          <Link
            href="mailto:abhishek170yadav@gmail.com"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[var(--text)]
              px-6
              py-3.5
              text-xs
              font-medium
              uppercase
              tracking-[0.16em]
              transition-all
              duration-300
              hover:bg-[var(--text)]
              hover:text-[var(--bg)]
              sm:px-7
              sm:py-4
              sm:text-sm
            "
          >
            Start a Conversation

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>

        {/* ================= CONTACT CARDS ================= */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-3
            sm:mt-16
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {contactLinks.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  gradient-border
                  rounded-[19px]
                  p-[1.5px]
                "
              >

                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    group
                    relative
                    block
                    h-full
                    overflow-hidden
                    rounded-[17px]
                    bg-[var(--surface)]
                    p-5
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                    dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                    sm:p-5
                  "
                >

                  {/* ================= CARD TOP ================= */}

                  <div className="flex items-center justify-between">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[var(--border)]
                        bg-[var(--bg)]
                        transition-all
                        duration-300
                        group-hover:scale-105
                      "
                    >

                      {item.type === "brand" ? (
                        <span
                          className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-tight
                          "
                        >
                          {item.icon}
                        </span>
                      ) : (
                        <Icon className="h-4 w-4" />
                      )}

                    </div>

                    <ArrowUpRight
                      className="
                        h-4
                        w-4
                        text-neutral-400
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                      "
                    />

                  </div>

                  {/* ================= CARD TEXT ================= */}

                  <p
                    className="
                      mt-6
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.28em]
                      text-neutral-400
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      mt-2
                      break-words
                      text-[13px]
                      font-medium
                      leading-5
                      text-[var(--text)]
                      sm:text-sm
                    "
                  >
                    {item.value}
                  </p>

                  {/* ================= CARD BOTTOM GRADIENT ================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-full
                      bg-gradient-to-r
                      from-fuchsia-500
                      via-cyan-400
                      to-emerald-400
                      animate-gradient
                    "
                    style={{ backgroundSize: "250% 250%" }}
                  />

                </Link>

              </div>
            );
          })}

        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-14
            flex
            flex-col
            gap-3
            border-t
            border-[var(--border)]
            pt-5
            text-[10px]
            text-neutral-400
            sm:mt-16
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-xs
          "
        >

          <p>
            Available for freelance &amp; full-time opportunities.
          </p>

          <p>
            © {new Date().getFullYear()} Abhishek Yadav
          </p>

        </div>

      </div>
    </section>
  );
}







// "use client";

// import Link from "next/link";
// import { ArrowUpRight, Mail, Phone } from "lucide-react";

// const contactLinks = [
//   {
//     label: "LinkedIn",
//     value: "Connect with me",
//     href: "https://www.linkedin.com/in/abhishek-yadav-2248262b6",
//     type: "linkedin",
//     external: true,
//   },
//   {
//     label: "GitHub",
//     value: "View my projects",
//     href: "https://github.com/AbhishekYadav170",
//     type: "github",
//     external: true,
//   },
//   {
//     label: "Email",
//     value: "abhishek170yadav@gmail.com",
//     href: "mailto:abhishek170yadav@gmail.com",
//     type: "icon",
//     icon: Mail,
//     external: false,
//   },
//   {
//     label: "Phone",
//     value: "Call me",
//     href: "tel:+91XXXXXXXXXX",
//     type: "icon",
//     icon: Phone,
//     external: false,
//   },
// ];

// export default function ContactCTA() {
//   return (
//     <section
//       id="contact"
//       className="
//         relative
//         w-full
//         overflow-hidden
//         bg-[var(--bg)]
//         text-[var(--text)]
//         py-20
//         sm:py-24
//         md:py-28
//         lg:py-32
//       "
//     >
//       <div
//         className="
//           mx-auto
//           w-full
//           max-w-7xl
//           px-6
//           sm:px-8
//           md:px-10
//           lg:px-16
//         "
//       >
//         {/* TOP LABEL */}
//         <div className="flex items-center gap-4">
//           <p
//             className="
//               whitespace-nowrap
//               text-[9px]
//               uppercase
//               tracking-[0.35em]
//               text-neutral-500
//               sm:text-[10px]
//             "
//           >
//             07 / CONTACT
//           </p>

//           <div className="h-px flex-1 bg-[var(--border)]" />
//         </div>

//         {/* HEADING */}
//         <div className="mt-12 sm:mt-14 md:mt-16">
//           <p
//             className="
//               text-[10px]
//               uppercase
//               tracking-[0.25em]
//               text-neutral-400
//               sm:text-xs
//             "
//           >
//             Have a project in mind?
//           </p>

//           <h2
//             className="
//               mt-5
//               max-w-5xl
//               text-[2.8rem]
//               font-light
//               leading-[0.9]
//               tracking-[-0.07em]
//               sm:text-5xl
//               md:text-6xl
//               lg:text-[7rem]
//             "
//           >
//             LET&apos;S
//             <br />
//             BUILD
//             <br />
//             SOMETHING
//             <br />
//             AMAZING.
//           </h2>
//         </div>

//         {/* BUTTON */}
//         <div className="mt-9 sm:mt-11">
//           <Link
//             href="mailto:abhishek170yadav@gmail.com"
//             className="
//               group
//               inline-flex
//               items-center
//               gap-3
//               rounded-full
//               border
//               border-[var(--text)]
//               px-6
//               py-3.5
//               text-xs
//               transition-all
//               duration-300
//               hover:bg-[var(--text)]
//               hover:text-[var(--bg)]
//               sm:px-7
//               sm:py-4
//             "
//           >
//             Start a Conversation

//             <ArrowUpRight
//               className="
//                 h-4
//                 w-4
//                 transition-transform
//                 duration-300
//                 group-hover:-translate-y-1
//                 group-hover:translate-x-1
//               "
//             />
//           </Link>
//         </div>

//         {/* CONTACT ITEMS */}
//         <div
//           className="
//             mt-14
//             grid
//             grid-cols-2
//             gap-3
//             sm:mt-16
//             sm:grid-cols-4
//           "
//         >
//           {contactLinks.map((item) => {
//             const Icon = item.icon;

//             return (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 target={item.external ? "_blank" : undefined}
//                 rel={
//                   item.external
//                     ? "noopener noreferrer"
//                     : undefined
//                 }
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-2xl
//                   border
//                   border-[var(--border)]
//                   bg-[var(--surface)]
//                   p-4
//                   transition-all
//                   duration-500
//                   hover:-translate-y-1
//                   sm:p-5
//                 "
//               >
//                 {/* ICON ROW */}
//                 <div className="flex items-center justify-between">
//                   <div
//                     className="
//                       flex
//                       h-9
//                       w-9
//                       items-center
//                       justify-center
//                       rounded-xl
//                       border
//                       border-[var(--border)]
//                       bg-[var(--bg)]
//                       transition-all
//                       duration-300
//                       group-hover:scale-110
//                     "
//                   >
//                     {item.type === "linkedin" && (
//                       <svg
//                         viewBox="0 0 24 24"
//                         className="h-[17px] w-[17px] fill-current"
//                       >
//                         <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.3ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.98H3.56v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
//                       </svg>
//                     )}

//                     {item.type === "github" && (
//                       <svg
//                         viewBox="0 0 24 24"
//                         className="h-[18px] w-[18px] fill-current"
//                       >
//                         <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.46 11.46 0 0 1 6.01 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
//                       </svg>
//                     )}

//                     {item.type === "icon" && (
//                       <Icon className="h-[17px] w-[17px]" />
//                     )}
//                   </div>

//                   <ArrowUpRight
//                     className="
//                       h-4
//                       w-4
//                       text-neutral-400
//                       transition-all
//                       duration-300
//                       group-hover:-translate-y-1
//                       group-hover:translate-x-1
//                     "
//                   />
//                 </div>

//                 {/* TEXT */}
//                 <p
//                   className="
//                     mt-5
//                     text-[9px]
//                     uppercase
//                     tracking-[0.25em]
//                     text-neutral-400
//                   "
//                 >
//                   {item.label}
//                 </p>

//                 <p
//                   className="
//                     mt-2
//                     truncate
//                     text-xs
//                     font-light
//                     text-[var(--text)]
//                     sm:text-[13px]
//                   "
//                 >
//                   {item.value}
//                 </p>

//                 {/* CONTINUOUS GRADIENT */}
//                 <div
//                   className="
//                     absolute
//                     bottom-0
//                     left-0
//                     h-[2px]
//                     w-full
//                     bg-gradient-to-r
//                     from-fuchsia-500
//                     via-cyan-400
//                     to-emerald-400
//                     bg-[length:250%_250%]
//                     animate-gradient
//                   "
//                 />
//               </Link>
//             );
//           })}
//         </div>

//         {/* BOTTOM */}
//         <div
//           className="
//             mt-14
//             flex
//             flex-col
//             gap-3
//             border-t
//             border-[var(--border)]
//             pt-5
//             text-[10px]
//             text-neutral-400
//             sm:mt-16
//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           "
//         >
//           <p>
//             Available for freelance &amp; full-time opportunities.
//           </p>

//           <p>
//             © {new Date().getFullYear()} Abhishek Yadav
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }