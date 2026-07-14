// "use client";

// import gsap, { ScrollTrigger, SplitText, useGSAP } from "@/libs/gsap";
// import { forwardRef, useImperativeHandle, useRef } from "react";


// const TextReveal = forwardRef(
//   (
//     {
//         children,
//         className = "",
//         trigger = "mount",
//         scrollStart = "top 75%",
//         splitBy = "lines",
//         duration= 0.67,
//         stagger = 0.12,
//         delay =  0,
//         ease = "power3.out",
//     },
//     ref
//   )  => {
//     const wrapperRef = useRef(null);
//     const splitRef = useRef(null);
//     const tiRef = useRef(null);

//     useImperativeHandle(ref, () => ({
//         play: () => tiRef.current?.play(),
//         reverse: () => tiRef.current?.reverse(),
//         reset: () => tiRef.current?.pause(0)
//     }));

//     useGSAP(
//         () => {
//             splitRef.current = new SplitText(wrapperRef.current, {
//                 type: splitBy,
//                 lineThreshold: 0.3,
//             });

//             const elements = splitRef.current[splitBy];
            

//             gsap.set(elements, {
//                 y:100,
//                 opacity: 0,
//                 //yPercent: 110,
//             });

//             tiRef.current = gsap.timeline({
//                 paused: true,
//                 defaults: { delay, ease,},
//             });

//             // tiRef.current.to(elements, {
//             //     yPercent: 0,
//             //     opacity: 1,
//             //     duration,
//             //     ease, 
//             //     stagger: {
//             //         each: stagger,
//             //         from: "start",
//             //     },
//             // });

//             tiRef.current.to(elements, {
//                  y: 0,
//                  opacity: 1,
//                  duration: 1,
//                  ease: "power4.out",
//                   stagger: {
//                       each: 0.08,
//                       from: "start",
//                   },
//             });

//             if (trigger === "mount") {
//                 tiRef.current.play();
//             }
            
//             if(trigger === "scroll") {
//                 ScrollTrigger.create({
//                     trigger: wrapperRef.current,
//                     start: scrollStart,
//                     once: true,
//                     onEnter: () => tiRef.current?.play(),
//                 });
//             }

//             return () =>{
//                 tiRef.current?.kill();
//                 splitRef.current?.revert();

//             }

//         },
//         {
//             scope: wrapperRef,
//             dependencies: [splitBy, trigger, stagger, duration],
//         },
//     );

//     return (
//         <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
//             {children}
//         </div>
//     )
// });

// export default TextReveal;






"use client";

import gsap, {
  ScrollTrigger,
  SplitText,
  useGSAP,
} from "@/libs/gsap";

import {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

const TextReveal = forwardRef(
  (
    {
      children,
      className = "",
      trigger = "mount", // mount | scroll | manual
      scrollStart = "top 80%",
      splitBy = "lines",
      duration = 0.8,
      stagger = 0.08,
      delay = 0,
      ease = "power4.out",
    },
    ref
  ) => {
    const wrapperRef = useRef(null);
    const splitRef = useRef(null);
    const tlRef = useRef(null);

    useImperativeHandle(ref, () => ({
      play: () => tlRef.current?.play(),
      reverse: () => tlRef.current?.reverse(),
      reset: () => tlRef.current?.pause(0),
    }));

    useGSAP(
      () => {
        if (!wrapperRef.current) return;

        splitRef.current = new SplitText(wrapperRef.current, {
          type: splitBy,
          lineThreshold: 0.3,
        });

        const elements = splitRef.current[splitBy];

        gsap.set(elements, {
          yPercent: 110,
          opacity: 0,
          willChange: "transform",
        });

        tlRef.current = gsap.timeline({
          paused: true,
          defaults: {
            duration,
            ease,
            delay,
          },
        });

        tlRef.current.to(elements, {
          yPercent: 0,
          opacity: 1,
          stagger: {
            each: stagger,
            from: "start",
          },
          clearProps: "willChange",
        });

        if (trigger === "mount") {
          tlRef.current.play();
        }

        if (trigger === "scroll") {
          ScrollTrigger.create({
            trigger: wrapperRef.current,
            start: scrollStart,
            once: true,
            onEnter: () => tlRef.current?.play(),
          });
        }

        return () => {
          tlRef.current?.kill();
          splitRef.current?.revert();
        };
      },
      {
        scope: wrapperRef,
        dependencies: [
          splitBy,
          trigger,
          duration,
          stagger,
          delay,
          ease,
          scrollStart,
        ],
      }
    );

    return (
      <div
        ref={wrapperRef}
        className={`overflow-hidden ${className}`}
      >
        {children}
      </div>
    );
  }
);

TextReveal.displayName = "TextReveal";

export default TextReveal;