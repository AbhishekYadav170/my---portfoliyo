// import { useRef } from "react";
// import TextReveal from "./TextReveal";
// import gsap from "@/libs/gsap";

// const CARD_W = 300;
// const CARD_H = 380;
// const SCALE = 1.35;
// const CARD_GAP = 200;

//  const CarouselCard = ({project, onHoverStart, onHoverEnd}) => {
//     const cardRef = useRef(null);
//     const imgRef = useRef(null);

//     const numberRef = useRef(null);
//     const titleRef = useRef(null);

//     const onEnter = ()=>{
//         onHoverEnd?.();

//         gsap.to(cardRef.current, {
//             width: CARD_W ,
//             height: CARD_H ,
//             duration: 0.24,
//             ease: 'power3.out',
//         })

//         numberRef.current?.reverse();
//         titleRef.current?.reverse();
//     };

//     const onLeave = ()=>{
//         onHoverStart?.();

//         gsap.to(cardRef.current, {
//             width: CARD_W * SCALE,
//             height: CARD_H * SCALE,
//             duration: 0.45,
//             ease: 'power.out',
//         })

//         numberRef.current?.play();
//         titleRef.current?.play();
//     };


//     return (
//         <div ref={cardRef}
//         onMouseEnter={onEnter}
//         onMouseLeave={onLeave}
//         style={{
//             width: CARD_W,
//             height: CARD_H,
//             flexShrink: 0,
//             overflow: "visible",
//             cursor: "pointer",
//         }}
//         className="relative"
//         >
//             {/* Title Panel */}

//           <div
//              style={{bottom: "calc(100% + 3rem)"}}
//              className="titlePanel absolute left-0 pointer-events-none flex flex-col gap-[1rem]">

//                 <TextReveal ref={numberRef} trigger="manual" splitBy="chars">
//                     <h3 className="text-[1rem] text-[#010101]" > {project.number}</h3>
//                 </TextReveal>
//                 <TextReveal ref={numberRef} trigger="manual" splitBy="words">
//                     <h3 className="text-[1rem] text-[#010101]" > {project.Title}</h3>
//                 </TextReveal>

//           </div>

//           <div className="imageDiv absolute h-full w-full overflow-hidden ">
//             <img
//                style={{ transformOrigin: "center center", userSelect: "none" }}
//                className=" h-full w-full object-cover "
//                ref={imgRef}
//                src={project.coverImage}
//                alt={project.title} 
//             />
//           </div>

//         </div>
//     )
// }

// export default CarouselCard;





import { useRef } from "react";
import TextReveal from "./TextReveal";
import gsap from "@/libs/gsap";

const CARD_W = 300;
const CARD_H = 380;
const SCALE = 1.35;

const CarouselCard = ({ project, onHoverStart, onHoverEnd }) => {
  const cardRef = useRef(null);
  const numberRef = useRef(null);
  const titleRef = useRef(null);

  const onEnter = () => {
    onHoverStart?.();

    gsap.to(cardRef.current, {
      width: CARD_W * SCALE,
      height: CARD_H * SCALE,
      duration: 0.45,
      ease: "power3.out",
    });

    numberRef.current?.play();
    titleRef.current?.play();
  };

  const onLeave = () => {
    onHoverEnd?.();

    gsap.to(cardRef.current, {
      width: CARD_W,
      height: CARD_H,
      duration: 0.24,
      ease: "power3.out",
    });

    numberRef.current?.reverse();
    titleRef.current?.reverse();
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
        overflow: "visible",
        cursor: "pointer",
      }}
      className="relative"
    >
      {/* Title Panel */}
      <div
        style={{ bottom: "calc(100% + 3rem)" }}
        className="absolute left-0 pointer-events-none flex flex-col gap-4"
      >
        <TextReveal
          ref={numberRef}
          trigger="manual"
          splitBy="chars"
        >
          <h3 className="text-[1rem] text-[#010101]">
            {project.number}
          </h3>
        </TextReveal>

        <TextReveal
          ref={titleRef}
          trigger="manual"
          splitBy="words"
        >
          <h3 className="text-[1rem] text-[#010101]">
            {project.title}
          </h3>
        </TextReveal>
      </div>

      {/* Image */}
      <div className="absolute h-full w-full overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="h-full w-full object-cover"
          style={{
            transformOrigin: "center center",
            userSelect: "none",
          }}
        />
      </div>
    </div>
  );
};

export default CarouselCard;