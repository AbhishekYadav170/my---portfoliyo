// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function CustomCursor() {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;

//     if (!cursor) return;

//     const moveX = gsap.quickTo(cursor, "x", {
//       duration: 0.18,
//       ease: "power3.out",
//     });

//     const moveY = gsap.quickTo(cursor, "y", {
//       duration: 0.18,
//       ease: "power3.out",
//     });

//     const handleMove = (e) => {
//       moveX(e.clientX);
//       moveY(e.clientY);
//     };

//     window.addEventListener("mousemove", handleMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMove);
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="
//       pointer-events-none
//       fixed
//       left-0
//       top-0
//       z-[9999]
//       h-5
//       w-5
//       -translate-x-1/2
//       -translate-y-1/2
//       rounded-full
//       border
//       border-black
//       mix-blend-difference
//       "
//     />
//   );
// }



// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function CustomCursor() {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;

//     if (!cursor) return;

//     // Hide initially
//     gsap.set(cursor, {
//       xPercent: -50,
//       yPercent: -50,
//       opacity: 0,
//       scale: 0,
//     });

//     // Smooth movement
//     const xTo = gsap.quickTo(cursor, "x", {
//       duration: 0.18,
//       ease: "power3.out",
//     });

//     const yTo = gsap.quickTo(cursor, "y", {
//       duration: 0.18,
//       ease: "power3.out",
//     });

//     const move = (e) => {
//       xTo(e.clientX);
//       yTo(e.clientY);

//       gsap.to(cursor, {
//         opacity: 1,
//         scale: 1,
//         duration: 0.2,
//         overwrite: true,
//       });
//     };

//     window.addEventListener("mousemove", move);

//     // Elements that should enlarge the cursor
//     const hoverTargets = document.querySelectorAll(
//       "a, button, .story-line"
//     );

//     const enter = () => {
//       gsap.to(cursor, {
//         scale: 2.2,
//         duration: 0.25,
//         ease: "power2.out",
//       });
//     };

//     const leave = () => {
//       gsap.to(cursor, {
//         scale: 1,
//         duration: 0.25,
//         ease: "power2.out",
//       });
//     };

//     hoverTargets.forEach((el) => {
//       el.addEventListener("mouseenter", enter);
//       el.addEventListener("mouseleave", leave);
//     });

//     return () => {
//       window.removeEventListener("mousemove", move);

//       hoverTargets.forEach((el) => {
//         el.removeEventListener("mouseenter", enter);
//         el.removeEventListener("mouseleave", leave);
//       });
//     };
//   }, []);

//  return (
//   <div
//     ref={cursorRef}
//     className="
//       fixed
//       left-0
//       top-0
//       z-[999999]
//       h-6
//       w-6
//       rounded-full
//       bg-red-500
//       pointer-events-none
//     "
//   />
//  );
// }







"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: .18,
        ease: "power3.out",
      });

     gsap.set(dotRef.current,{
         x:e.clientX,
         y:e.clientY,
      });

    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

   return (
  <>
    {/* Outer Cursor */}
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "34px",
        height: "34px",
        borderRadius: "999px",
        border: "1.5px solid #111",
        pointerEvents: "none",
        zIndex: 999999,
        transform: "translate(-50%, -50%)",
      }}
    />

    {/* Inner Dot */}
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "7px",
        height: "7px",
        borderRadius: "999px",
        background: "#111",
        pointerEvents: "none",
        zIndex: 1000000,
        transform: "translate(-50%, -50%)",
      }}
    />
  </>
 );
}