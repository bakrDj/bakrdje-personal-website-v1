"use client";
import React, { Suspense, useEffect, useRef } from "react";
import { delay, motion } from "framer-motion";
import { useBearStore } from "@/zustand/store";
import { Button } from "@/components/ui/button";
type Props = {};
import "./contact.scss";

function Contact({}: Props) {
  const outerCircleRef = useRef<HTMLDivElement>(null);
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
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}
          className="flex flex-col justify-center flex-1 w-[1200px] mx-auto "
          > */}
      <div className="flex flex-col justify-center flex-1 px-4 lg:px-8 md:max-w-full xl:px-0 xl:w-[1200px] mx-auto ">
        {/* content wrapper */}
        <div className="relative z-38 w-full h-[560px]">
          <div className={`absolute z-40 inset-[-4px]  bg-[#113946] rounded-xl ${!sliderAnimationStart && "invert mix-blend-difference"}`}></div>
          <div className="flex w-full h-[560px]  relative z-40 bg-[#FFF2D8] rounded-lg">
            <div className="flex-1 p-4 flex flex-col gap-4 items-center h-auto rounded-lg">
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-[#113946]">Contact</h1>
                <div className="w-full h-[4px] bg-[#113946] my-1 rounded"></div>
              </div>
              <div className="flex flex-col px-4 lg:px-0 lg:w-3/4">
                <p className="text-base font-medium text-center text-[#113946]">
                  I'm actively seeking for new job opportunities and collaborations in web development. Let's connect to discuss how we can work together. Reach me at{" "}
                  <span className="font-bold text-base text-[#af7e39] hover:text-[#113946] whitespace-nowrap">
                    — <span className="[user-select:all]">abubakr.dje@gmail.com</span> —
                  </span>{" "}
                  or through contact links below.{" "}
                </p>
              </div>
              <div className="py-11 flex flex-col w-full px-10 gap-8 justify-start items-center flex-1">
                <div className="flex flex-col gap-2 items-center ">
                  <a
                    className=""
                    href="mailto:email@email.com"
                  >
                    <Button
                      variant="default"
                      className=" flex items-center py-6 gap-2 bg-[#113946] hover:bg-[#b59c78]"
                    >
                      <div>send message</div>
                      <span className="wave text-xl">👋</span>
                    </Button>
                  </a>
                </div>
                <div className="h-[2px] w-[200px] bg-[#113946bb] rounded"></div>
                <div className="sm_icons flex gap-8 justify-center items-center">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 0C7.61175 0 0 7.73094 0 17.2662C0 25.3568 5.48533 32.1266 12.8803 34C12.801 33.7669 12.75 33.4964 12.75 33.1612V30.2101C12.0601 30.2101 10.9041 30.2101 10.6137 30.2101C9.45058 30.2101 8.41642 29.7022 7.91492 28.7583C7.35817 27.7094 7.26183 26.105 5.882 25.1237C5.47258 24.7971 5.78425 24.4245 6.256 24.4748C7.12725 24.7252 7.84975 25.3324 8.52975 26.2331C9.20692 27.1353 9.52567 27.3396 10.7907 27.3396C11.4042 27.3396 12.3222 27.3036 13.1863 27.1655C13.651 25.9669 14.4542 24.8633 15.436 24.3424C9.775 23.7511 7.07342 20.8906 7.07342 17.0072C7.07342 15.3353 7.77467 13.718 8.96608 12.3554C8.57508 11.0029 8.0835 8.24461 9.11625 7.19424C11.6634 7.19424 13.2033 8.87194 13.5731 9.32518C14.8424 8.88345 16.2364 8.63309 17.7013 8.63309C19.1689 8.63309 20.5686 8.88345 21.8407 9.32806C22.2062 8.8777 23.7476 7.19424 26.3004 7.19424C27.3374 8.24604 26.8402 11.0158 26.4449 12.3655C27.6292 13.7252 28.3263 15.3381 28.3263 17.0072C28.3263 20.8878 25.6289 23.7468 19.9764 24.341C21.5319 25.1655 22.6667 27.482 22.6667 29.2273V33.1612C22.6667 33.3108 22.6341 33.4187 22.6171 33.5468C29.2414 31.1885 34 24.8 34 17.2662C34 7.73094 26.3882 0 17 0Z"
                      fill="#113946"
                    />
                  </svg>

                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.66667 0C2.53705 0 0 2.53705 0 5.66667V28.3333C0 31.463 2.53705 34 5.66667 34H28.3333C31.463 34 34 31.463 34 28.3333V5.66667C34 2.53705 31.463 0 28.3333 0H5.66667ZM7.35528 7.28571H13.7809L18.3439 13.7698L23.881 7.28571H25.9048L19.2578 15.0679L27.4542 26.7143H21.0302L15.7351 19.1914L9.30952 26.7143H7.28571L14.8212 17.8933L7.35528 7.28571ZM10.4542 8.90476L21.8745 25.0952H24.3553L12.935 8.90476H10.4542Z"
                      fill="#113946"
                    />
                  </svg>

                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.9524 0H4.04762C1.81333 0 0 1.81333 0 4.04762V29.9524C0 32.1867 1.81333 34 4.04762 34H29.9524C32.1867 34 34 32.1867 34 29.9524V4.04762C34 1.81333 32.1867 0 29.9524 0ZM10.5238 12.9524V28.3333H5.66667V12.9524H10.5238ZM5.66667 8.47571C5.66667 7.34238 6.6381 6.47619 8.09524 6.47619C9.55238 6.47619 10.4671 7.34238 10.5238 8.47571C10.5238 9.60905 9.61714 10.5238 8.09524 10.5238C6.6381 10.5238 5.66667 9.60905 5.66667 8.47571ZM28.3333 28.3333H23.4762C23.4762 28.3333 23.4762 20.8371 23.4762 20.2381C23.4762 18.619 22.6667 17 20.6429 16.9676H20.5781C18.619 16.9676 17.8095 18.6352 17.8095 20.2381C17.8095 20.9748 17.8095 28.3333 17.8095 28.3333H12.9524V12.9524H17.8095V15.0248C17.8095 15.0248 19.3719 12.9524 22.5129 12.9524C25.7267 12.9524 28.3333 15.1624 28.3333 19.639V28.3333Z"
                      fill="#113946"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </motion.div> */}
    </>
  );
}

export default Contact;
