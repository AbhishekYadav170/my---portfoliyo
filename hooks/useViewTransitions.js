// "use client";

// import gsap from "@/libs/gsap"
// import { useRouter } from "next/navigation";
// import { useCallback } from "react";




// const STRIP_COUNT = 7;

// const createStrips = ()=>{
//     const overlay = document.createElement("div");
//     overlay.id = "page-transition-overlay";
//     overlay.style.cssText = `
//         position: fixed;
//         inset: 0;
//         z-index: 9999;
//         pointer-events: none;
//         display:flex;
//     `;

//     for (let i = 0; i < STRIP_COUNT; i++) {
//         const strip = document.createElement("div");
//         strip.style.cssText = `
//             flex: 1;
//             height: 100%;
//             background-color: #010101;
//             transform: scaleY(0);
//             transform-origin: bottom;
//         `;
//         overlay.appendChild(strip);
//     }
//     document.body.appendChild(overlay);

//     return overlay;
// };

// const removeOverlay = () =>{
//     if (typeof document === "undefined") return;
//     const el = document.getElementById("page-transition-overlay");
//     if (el) el.remove();
// }


// const useViewTransitions = () => {

//     removeOverlay();

//     const router = useRouter();

//     const navigateTo = useCallback((href)=>{

//         const overlay = createStrips();

//         const strip = Array.from(overlay.children);

//         gsap.to(strip, {
//            scaleY: 1,
//            duration: 0.58,
//            ease: "power3.inOut",
//            stagger: 0.06,
//            onComplete: ()=>{
//               router.push(href);

//               gsap.to(strip, {
//                 scaleY: 0,
//                 duration: 0.7,
//                 ease: "power3.inOut",
//                 stagger: 0.05,
//                 transformOrigine: "top",
//                 onComplete: removeOverlay,
//               });
//             }
//        });

//     },[router])

    

//   return { navigateTo};
// }

// export default useViewTransitions







"use client";

import gsap from "@/libs/gsap";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const STRIP_COUNT = 12;

const createStrips = () => {
  if (typeof document === "undefined") return null;

  const overlay = document.createElement("div");
  overlay.id = "page-transition-overlay";
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    display: flex;
  `;

  for (let i = 0; i < STRIP_COUNT; i++) {
    const strip = document.createElement("div");
    strip.style.cssText = `
      flex: 1;
      height: 100%;
      background-color: #34e2a5;
      transform: scaleY(0);
      transform-origin: bottom;
    `;
    overlay.appendChild(strip);
  }

  document.body.appendChild(overlay);

  return overlay;
};

const removeOverlay = () => {
  if (typeof document === "undefined") return;

  const el = document.getElementById("page-transition-overlay");
  if (el) el.remove();
};

const useViewTransitions = () => {
  const router = useRouter();

  const navigateTo = useCallback(
    (href) => {
      removeOverlay();

      const overlay = createStrips();
      if (!overlay) return;

      const strips = Array.from(overlay.children);

      gsap.to(strips, {
        scaleY: 1,
        duration: 0.58,
        ease: "power3.inOut",
        stagger: {
            each: 0.06,
            from: 'edges'
        },

        onComplete: () => {
          router.push(href);

          gsap.to(strips, {
            scaleY: 0,
            duration: 0.7,
            ease: "power3.inOut",
            delay:0.12,
            stagger:{
                each: 0.06,
                from: 'edges'
            },
            transformOrigin: "top", // ✅ Fixed typo
            onComplete: removeOverlay,
          });
        },
      });
    },
    [router]
  );

  return { navigateTo };
};

export default useViewTransitions;