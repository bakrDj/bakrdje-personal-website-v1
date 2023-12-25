"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useBearStore } from "../components/SlideEraser";
import { randomInt } from "crypto";

type Props = {};

function Me({}: Props) {
  const outerCircleRef = useRef<HTMLDivElement>(null);
  // const middleBorderCircleRef = useRef<HTMLDivElement>(null);
  const innerBorderCircleRef = useRef<HTMLDivElement>(null);
  const innerCircleRef = useRef<HTMLDivElement>(null);
  const sliderAnimationStart = useBearStore((state: any) => state.sliderAnimationStart);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const posX = event.clientX - window.innerWidth / 2;
      const posY = event.clientY - window.innerHeight / 2;

      if (outerCircleRef.current && innerCircleRef.current && innerBorderCircleRef.current) {
        // console.log("🚀 ~ file: page.tsx:12 ~ handleMouseMove ~ event:", "hello");

        // outerCircleRef.current.style.transform = `translate(${posX * 0.007}%, ${posY * 0.007}%)`;
        outerCircleRef.current.style.transform = `translate(${posX * -0.006}%, ${posY * -0.006}%) rotateX(${-posY * 0.04}deg) rotateY(${-posX * -0.02}deg)`;
        // innerCircleRef.current.style.transform = `translate(${posX * -0.003}%, ${posY * -0.003}%)`;
        // middleBorderCircleRef.current.style.transform = `translate(${posX * -0.006}%, ${posY * -0.006}%) rotateX(${-posY * 0.04}deg) rotateY(${-posX * -0.02}deg)`;
        innerBorderCircleRef.current.style.transform = `translate(${posX * 0.002}%, ${posY * 0.002}%) rotateX(${posY * 0.04}deg) rotateY(${posX * -0.02}deg) rotateZ(${posX * -0.008}deg)`;
        innerCircleRef.current.style.transform = `translate(${posX * 0.002}%, ${posY * 0.002}%) rotateX(${posY * 0.04}deg) rotateY(${posX * -0.02}deg) rotateZ(${posX * -0.008}deg)`;
        // innerCircleRef.current.style.perspectiveOrigin = "center center";
      }
    };

    // const middleBorderHandler = (event: MouseEvent) => {
    //   const posX = event.clientX - window.innerWidth / 2;
    //   const posY = event.clientY - window.innerHeight / 2;

    //   if (outerCircleRef.current && innerCircleRef.current && innerBorderCircleRef.current && middleBorderCircleRef.current) {
    //     middleBorderCircleRef.current.style.opacity = "0.8";
    //     middleBorderCircleRef.current.style.transition = "all 0.3s ease-out";
    //     middleBorderCircleRef.current.style.transform = `translate(${randomInt(0, window.innerWidth) * 0.002}%, ${randomInt(0, window.innerHeight) * 0.002}%) rotateX(${
    //       randomInt(0, window.innerHeight) * 0.04
    //     }deg) rotateY(${randomInt(0, window.innerWidth) * -0.02}deg) rotateZ(${randomInt(0, window.innerWidth) * -0.008}deg)`;
    //     middleBorderCircleRef.current.style.width = "280px";
    //     middleBorderCircleRef.current.style.height = "280px";

    //     setTimeout(() => {
    //       // middleBorderCircleRef.current.style.transition = "unset";
    //       middleBorderCircleRef.current.style.transform = `translate(${posX * -0.006}%, ${posY * -0.006}%) rotateX(${-posY * 0.04}deg) rotateY(${-posX * -0.02}deg)`;
    //       middleBorderCircleRef.current.style.opacity = "0";
    //       middleBorderCircleRef.current.style.width = "358px";
    //       middleBorderCircleRef.current.style.height = "358px";
    //     }, 300);
    //   }
    // };

    // document.addEventListener("click", middleBorderHandler);

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      // document.removeEventListener("click", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0 } }}
        className="flex flex-col justify-center flex-1 w-[1200px] mx-auto "
        > */}
      {/* content wrapper */}
      <div className="flex flex-col justify-center flex-1 w-[1200px] mx-auto ">
        <div className="px-10 flex justify-between items-center gap-6 w-full h-[560px] border-4 border-transparent rounded-xl ">
          <div className="flex flex-col gap-3 flex-1 flex-shrink-0  text-[#113946] ">
            <div
              className={`text-7xl font-semibold whitespace-nowrap ${!sliderAnimationStart && "invert mix-blend-difference"}`}
              style={{ letterSpacing: "-4.5px" }}
            >
              boubaker djedidi
            </div>
            <div className={`text-2xl ${!sliderAnimationStart && "invert mix-blend-difference"}`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolorum ipsum itaque ad reiciendis quasi earum aut alias odio quam.
            </div>
          </div>
          {/* right side */}
          <div className="flex-1 flex justify-end">
            {/* outer circle */}
            <div className="relative flex justify-center items-center rounded-full border-4 border-transparent w-[364px] h-[364px]">
              <div
                ref={outerCircleRef}
                className={` relative flex justify-center items-center rounded-full border-4 border-[#113946] w-[364px] h-[364px] ${!sliderAnimationStart && "invert mix-blend-difference"}`}
                style={
                  {
                    // background: "rgb(17,57,70)",
                    // background: "radial-gradient(circle, rgba(17, 57, 70, 0) 55%, rgba(181, 156, 120, 0.45) 88%, rgba(181, 156, 120, 0.91) 100%)",
                  }
                }
              ></div>
              {/* <div
                ref={middleBorderCircleRef}
                className={`opacity-0 absolute flex justify-center items-center rounded-full w-[364px] h-[364px] border-4 border-[#113946] ${!sliderAnimationStart && "invert mix-blend-difference"}`}
                style={
                  {
                    // background: "rgb(17,57,70)",
                    // background: "radial-gradient(circle, rgba(17, 57, 70, 0) 55%, rgba(181, 156, 120, 0.45) 88%, rgba(181, 156, 120, 0.91) 100%)",
                  }
                }
              ></div> */}
              {/* inner circle */}
              <div
                ref={innerBorderCircleRef}
                // className="invert mix-blend-difference absolute rounded-full border-4 border-[#113946] w-[280px] h-[280px] bg-cover bg-center bg-[url('https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
                className={`overflow-hidden absolute rounded-full border-4 border-[#113946] w-[280px] h-[280px] bg-cover bg-center ${!sliderAnimationStart && "invert mix-blend-difference"}`}
              ></div>
              <div
                ref={innerCircleRef}
                // className="invert mix-blend-difference absolute rounded-full border-4 border-[#113946] w-[280px] h-[280px] bg-cover bg-center bg-[url('https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
                className="overflow-hidden absolute rounded-full border-4 border-transparent w-[280px] h-[280px] bg-cover bg-center "
              >
                {/* image */}

                <img
                  className="absolute w-full h-full object-cover"
                  src="/images/grayed.jpg"
                  // src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-[560px] border-4 border-[#113946] bg-[#fff2d8] rounded-xl ">content</div> */}
      {/* </motion.div> */}
    </>
  );
}

export default Me;
