"use client";
import React, { useEffect, useRef } from "react";

type Props = {};

function Me({}: Props) {
  const outerCircleRef = useRef<HTMLDivElement>(null);
  const innerBorderCircleRef = useRef<HTMLDivElement>(null);
  const innerCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const posX = event.clientX - window.innerWidth / 2;
      console.log("🚀 ~ file: page.tsx:13 ~ handleMouseMove ~ event.clientX:", innerCircleRef);
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
      <div className="flex flex-col justify-center flex-1 w-[1200px] mx-auto ">
        {/* content wrapper */}
        <div className="px-10 flex justify-between items-center gap-6 w-full h-[560px] border-4 border-transparent rounded-xl ">
          <div className="flex flex-col gap-3 flex-1 flex-shrink-0  text-[#113946] ">
            <div
              className="text-7xl font-semibold whitespace-nowrap invert mix-blend-difference"
              style={{ letterSpacing: "-4.5px" }}
            >
              boubaker djedidi
            </div>
            <div className="text-2xl invert mix-blend-difference">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dolorum ipsum itaque ad reiciendis quasi earum aut alias odio quam.</div>
          </div>
          <div className="flex-1 flex justify-end">
            {/* outer circle */}
            <div className="relative flex justify-center items-center rounded-full border-4 border-transparent w-[364px] h-[364px]">
              <div
                ref={outerCircleRef}
                className="invert mix-blend-difference relative flex justify-center items-center rounded-full border-4 border-[#113946] w-[364px] h-[364px]"
                style={
                  {
                    // background: "rgb(17,57,70)",
                    // background: "radial-gradient(circle, rgba(17, 57, 70, 0) 55%, rgba(181, 156, 120, 0.45) 88%, rgba(181, 156, 120, 0.91) 100%)",
                  }
                }
              ></div>

              {/* inner circle */}
              <div
                ref={innerBorderCircleRef}
                // className="invert mix-blend-difference absolute rounded-full border-4 border-[#113946] w-[280px] h-[280px] bg-cover bg-center bg-[url('https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
                className="invert mix-blend-difference overflow-hidden absolute rounded-full border-4 border-[#113946] w-[280px] h-[280px] bg-cover bg-center"
              ></div>
              <div
                ref={innerCircleRef}
                // className="invert mix-blend-difference absolute rounded-full border-4 border-[#113946] w-[280px] h-[280px] bg-cover bg-center bg-[url('https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
                className="overflow-hidden absolute rounded-full border-4 border-transparent w-[280px] h-[280px] bg-cover bg-center]"
              >
                {/* image */}
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full h-[560px] border-4 border-[#113946] bg-[#fff2d8] rounded-xl ">content</div> */}
      </div>
    </>
  );
}

export default Me;
