


"use client";

import TextReveal from "./TextReveal";
import MagneticHover from "./MagneticHover";

const Navbar = () =>{
  return (
  <header
    className="
    fixed
    top-0
    left-0
    w-full
    z-[100]
    backdrop-blur-xl
    shadow-[0_10px_40px_rgba(0,0,0,.05)]
    bg-gradient-to-r
   from-[#ffffffdd]
   via-[#ffffff99]
   to-[#ffffffdd]
    border-b
    border-neutral-/30
    "
  >
    <div
      className="
      max-w-[1700px]
      mx-auto
      h-[80px]
      px-8
      md:px-16
      flex
      items-center
      justify-between
      "
    >

      {/* Logo */}

      <MagneticHover strength={18}>
        <div className="cursor-pointer">

          <TextReveal splitBy="chars" stagger={0.03}>

            <h3
              className="
             text-[1.1rem]
             tracking-[0.15em]
             uppercase
             font-medium
             bg-gradient-to-r
          
          via-neutral-500
          inline-block
              "
            >
              ABHISHEK YADAV
            </h3>

          </TextReveal>

        </div>
      </MagneticHover>

      {/* Links */}

      <div className="flex items-center gap-10">

        {["Home", "About", "Projects", "Contact"].map((item) => (

          <MagneticHover
            key={item}
            strength={20}
          >

            <a
              href={`#${item.toLowerCase()}`}
              className="
                group
                relative
               text-[1rem]
              tracking-wide
              uppercase
              cursor-pointer
              transition-all
              duration-500
              hover:bg-gradient-to-r
            hover:from-black
            hover:via-neutral-500
            hover:to-black
              hover:bg-clip-text
              hover:mask-linear-from-neutral-500
              "
            >

              <TextReveal splitBy="chars" stagger={0.02}>

                <span>{item}</span>

              </TextReveal>

              <span
                className="
                absolute
                left-0
                -bottom-1
                h-[2px]
                w-0
                bg-black
                transition-all
                duration-500
                group-hover:w-full
                "
              />

            </a>

          </MagneticHover>

        ))}

      </div>

    </div>
  </header>
);
}

export default Navbar ;