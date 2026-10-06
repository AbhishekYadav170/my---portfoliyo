





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


