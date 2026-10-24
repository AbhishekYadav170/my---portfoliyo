// "use client";

// import Link from "next/link";
// import TextReveal from "./TextReveal";
// import MagneticHover from "./MagneticHover";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "./ThemeProvider";

// const Navbar = () => {
//   const { theme, toggleTheme } = useTheme();

//   const navLinks = [
//     { name: "Home", href: "/#home" },
//     { name: "About", href: "/#about" },
//     { name: "Skill", href: "/#skill" },
//     { name: "Projects", href: "/#projects" },
//     { name: "Education", href: "/#education" },
//     { name: "Contact", href: "/#contact" },
//   ];

//   return (
//     <header
//       style={{
//         background: "var(--surface)",
//         color: "var(--text)",
//         borderColor: "var(--border)",
//       }}
//       className="
//         fixed
//         top-0
//         left-0
//         z-[100]
//         w-full
//         border-b
//         backdrop-blur-xl
//         shadow-[0_10px_40px_rgba(0,0,0,.05)]
//       "
//     >
//       <div
//         className="
//           mx-auto
//           flex
//           h-[80px]
//           max-w-[1700px]
//           items-center
//           justify-between
//           px-8
//           md:px-16
//         "
//       >
//         {/* LOGO */}

//         <MagneticHover strength={18}>
//           <Link href="/#home" className="cursor-pointer">
//             <TextReveal splitBy="chars" stagger={0.03}>
//               <h3
//                 className="
//                   inline-block
//                   text-[1.1rem]
//                   font-medium
//                   uppercase
//                   tracking-[0.15em]
//                 "
//               >
//                 ABHISHEK YADAV
//               </h3>
//             </TextReveal>
//           </Link>
//         </MagneticHover>

//         {/* NAV LINKS */}

//         <nav className="flex items-center gap-10">
//           {navLinks.map((item) => (
//             <MagneticHover
//               key={item.name}
//               strength={20}
//             >
//               <Link
//                 href={item.href}
//                 className="
//                   group
//                   relative
//                   cursor-pointer
//                   text-[1rem]
//                   uppercase
//                   tracking-wide
//                   transition-all
//                   duration-500
//                   hover:bg-gradient-to-r
//                   hover:from-black
//                   hover:via-neutral-500
//                   hover:to-black
//                   hover:bg-clip-text
//                   hover:text-transparent
//                 "
//               >
//                 <TextReveal splitBy="chars" stagger={0.02}>
//                   <span>{item.name}</span>
//                 </TextReveal>

//                 {/* UNDERLINE */}

//                 <span
//                   className="
//                     absolute
//                     -bottom-1
//                     left-0
//                     h-[2px]
//                     w-0
//                     bg-gradient-to-r
//                     from-black
//                     via-neutral-400
//                     to-black
//                     transition-all
//                     duration-500
//                     group-hover:w-full
//                   "
//                 />
//               </Link>
//             </MagneticHover>
//           ))}

//           {/* THEME BUTTON */}

//           <button
//             onClick={toggleTheme}
//             aria-label="Toggle theme"
//             className="
//               ml-4
//               flex
//               h-11
//               w-11
//               items-center
//               justify-center
//               rounded-full
//               border
//               border-neutral-300
//               transition-all
//               duration-300
//               hover:scale-110
//             "
//           >
//             {theme === "dark" ? (
//               <Sun size={20} />
//             ) : (
//               <Moon size={20} />
//             )}
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;





"use client";

import { useState } from "react";
import Link from "next/link";
import TextReveal from "./TextReveal";
import MagneticHover from "./MagneticHover";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "/#about" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        background: "var(--surface)",
        color: "var(--text)",
        borderColor: "var(--border)",
      }}
      className="fixed left-0 top-0 z-[100] w-full border-b backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,.05)]"
    >
      <div className="mx-auto flex h-[70px] max-w-[1700px] items-center justify-between px-5 sm:px-8 md:h-[80px] md:px-16">
        {/* LOGO */}
        <Link href="/#about" className="shrink-0">
          <TextReveal splitBy="chars" stagger={0.03}>
            <span className="text-sm font-medium uppercase tracking-[0.15em] sm:text-base">
              ABHISHEK YADAV
            </span>
          </TextReveal>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((item) => (
            <MagneticHover key={item.name} strength={10}>
              <Link
                href={item.href}
                className="group relative text-xs uppercase tracking-wide transition-opacity hover:opacity-60"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </Link>
            </MagneticHover>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:scale-105"
            style={{ borderColor: "var(--border)" }}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border lg:hidden"
            style={{ borderColor: "var(--border)" }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {menuOpen && (
        <nav
          className="border-t px-5 py-4 lg:hidden"
          style={{
            background: "var(--surface)",
            color: "var(--text)",
            borderColor: "var(--border)",
          }}
        >
          <div className="mx-auto flex max-w-[1700px] flex-col">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b py-3 text-sm uppercase tracking-wider last:border-b-0"
                style={{ borderColor: "var(--border)" }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
