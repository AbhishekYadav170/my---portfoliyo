// "use client";

// import Link from "next/link";

// export default function ContactCTA() {
//   return (
//     <section 
//       id="contact" 
//       className="bg-[#f8f7f4] py-40">

//       <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

//         <p className="uppercase tracking-[0.4em] text-sm text-neutral-500">
//           06 / Contact
//         </p>

//         <h2 className="mt-8 text-[4rem] md:text-[7rem] lg:text-[9rem] leading-[0.9] font-light">

//           LET'S
//           <br />

//           BUILD
//           <br />

//           SOMETHING
//           <br />

//           AMAZING.

//         </h2>

//         <div className="mt-20">

//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-4 border border-black rounded-full px-10 py-5 text-lg hover:bg-black hover:text-white transition-all duration-500"
//           >
//             Contact Me
//             <span>→</span>
//           </Link>

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
        w-full
        overflow-hidden
        bg-[var(--bg)]
        text-[var(--text)]
        py-24
        sm:py-28
        md:py-32
        lg:py-36
      "
    >
      <div
        className="
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

        <div className="flex items-center gap-5">

          <p
            className="
              whitespace-nowrap
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-neutral-500
              sm:text-xs
            "
          >
            07 / CONTACT
          </p>

          <div className="h-px flex-1 bg-[var(--border)]" />

        </div>

        {/* ================= MAIN HEADING ================= */}

        <div className="mt-12 sm:mt-16 md:mt-20">

          <p
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-neutral-400
              sm:text-sm
            "
          >
            Have a project in mind?
          </p>

          <h2
            className="
              mt-6
              max-w-6xl
              text-[3.4rem]
              font-light
              leading-[0.88]
              tracking-[-0.07em]
              sm:text-6xl
              md:text-7xl
              lg:text-[8rem]
            "
          >
            LET&apos;S
            <br />
            BUILD
            <br />
            SOMETHING
            <br />
            AMAZING.
          </h2>

        </div>

        {/* ================= CONTACT BUTTON ================= */}

        <div className="mt-10 sm:mt-14">

          <Link
            href="mailto:abhishek170yadav@gmail.com"
            className="
              group
              inline-flex
              items-center
              gap-4
              rounded-full
              border
              border-[var(--text)]
              px-7
              py-4
              text-sm
              transition-all
              duration-300
              hover:bg-[var(--text)]
              hover:text-[var(--bg)]
              sm:px-9
              sm:py-5
              sm:text-base
            "
          >
            Start a Conversation

            <ArrowUpRight
              className="
                h-5
                w-5
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
            mt-16
            grid
            grid-cols-1
            gap-4
            sm:mt-20
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {contactLinks.map((item) => {

            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={
                  item.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  group
                  rounded-[24px]
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                  sm:p-7
                "
              >

                {/* ICON */}

                <div className="flex items-center justify-between">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[var(--border)]
                      bg-[var(--bg)]
                    "
                  >

                    {item.type === "brand" ? (
                      <span
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-tight
                        "
                      >
                        {item.icon}
                      </span>
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}

                  </div>

                  <ArrowUpRight
                    className="
                      h-5
                      w-5
                      text-neutral-400
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />

                </div>

                {/* TEXT */}

                <p
                  className="
                    mt-8
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-neutral-400
                    sm:text-xs
                  "
                >
                  {item.label}
                </p>

                <p
                  className="
                    mt-3
                    break-words
                    text-base
                    font-light
                    leading-6
                  "
                >
                  {item.value}
                </p>

              </Link>
            );
          })}

        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-[var(--border)]
            pt-6
            text-xs
            text-neutral-400
            sm:mt-20
            sm:flex-row
            sm:items-center
            sm:justify-between
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