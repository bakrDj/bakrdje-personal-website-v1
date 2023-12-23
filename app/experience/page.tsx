"use client";
import React, { useEffect, useRef } from "react";
import { delay, motion } from "framer-motion";
type Props = {};

function Me({}: Props) {
  const outerCircleRef = useRef<HTMLDivElement>(null);
  const innerBorderCircleRef = useRef<HTMLDivElement>(null);
  const innerCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const posX = event.clientX - window.innerWidth / 2;
      const posY = event.clientY - window.innerHeight / 2;

      if (outerCircleRef.current && innerCircleRef.current && innerBorderCircleRef.current) {
        // console.log("🚀 ~ file: page.tsx:12 ~ handleMouseMove ~ event:", "hello");

        // outerCircleRef.current.style.transform = `translate(${posX * 0.007}%, ${posY * 0.007}%)`;
        outerCircleRef.current.style.transform = `translate(${posX * -0.006}%, ${posY * -0.006}%) rotateX(${-posY * 0.04}deg) rotateY(${-posX * -0.02}deg)`;
        // innerCircleRef.current.style.transform = `translate(${posX * -0.003}%, ${posY * -0.003}%)`;
        innerBorderCircleRef.current.style.transform = `translate(${posX * 0.002}%, ${posY * 0.002}%) rotateX(${posY * 0.04}deg) rotateY(${posX * -0.02}deg) rotateZ(${posX * -0.008}deg)`;
        innerCircleRef.current.style.transform = `translate(${posX * 0.002}%, ${posY * 0.002}%) rotateX(${posY * 0.04}deg) rotateY(${posX * -0.02}deg) rotateZ(${posX * -0.008}deg)`;
        // innerCircleRef.current.style.perspectiveOrigin = "center center";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [outerCircleRef]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
        className="flex flex-col justify-center flex-1 w-[1200px] mx-auto "
      >
        {/* content wrapper */}

        <div className="relative z-38 w-full h-[560px]">
          <div className="absolute z-40 inset-[-4px]  bg-[#113946] rounded-xl invert mix-blend-difference"></div>
          <div className="w-full h-[560px]  relative z-40 bg-[#fff2df] rounded-lg">content</div>
        </div>
      </motion.div>
    </>
  );
}

export default Me;
