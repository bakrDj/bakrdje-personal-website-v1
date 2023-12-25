"use client";
import React, { useEffect, useState } from "react";
import { motion as Motion, useAnimationControls, useMotionValue, useMotionValueEvent } from "framer-motion";
import { create } from "zustand";

type Props = {};

export const useBearStore = create((set) => ({
  menuId: null,
  sliderAnimationStart: false,
  sliderAnimationEnd: false,
  sliderHide: false,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}));

const SlideEraser = (props: Props) => {
  const contorls = useAnimationControls();
  const menuId: number = useBearStore((state: any) => state.menuId);
  const sliderHide = useBearStore((state: any) => state.sliderHide);
  const [isVisible, setIsVisible] = useState(true);

  // const pathname = usePathname();

  useEffect(() => {
    if (menuId === null) return; // Skip effect on initial page load when menuId is 0
    contorls.start({
      translateX: "50vw",
      translateY: "-50vh",
      // opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 2.5,
        delay: 0,
        // opacity: {
        //   delay: 1,
        //   duration: 2,
        // },
      },
    });
  }, [menuId]);

  // Generate a unique key based on menuId to force remount
  const key = `slide-eraser-${menuId}`;

  return (
    <>
      <Motion.div
        key={key}
        className=" z-30 overflow-hidden origin-center absolute right-0 top-0   w-[200vw] h-[350vh] bg-[#fff2d8]"
        style={{ opacity: sliderHide && 0, transition: sliderHide && "opacity 1.5s ease " }}
        initial={{ translateX: "200vw", translateY: "-350vh", rotateZ: -45 }}
        animate={contorls}
        onAnimationStart={() => useBearStore.setState({ sliderAnimationStart: true, sliderAnimationEnd: false })}
        onAnimationComplete={() => useBearStore.setState({ sliderAnimationStart: false, sliderAnimationEnd: true })}
      >
        <div className="absolute top-0 left-0 w-2 h-[350vh] bg-[#113946] "></div>
        <div className="absolute top-0 left-0 w-[400px] h-[350vh] bg-gradient-to-r from-[rgba(17,57,70,0.08)] bg-transparent "></div>
      </Motion.div>
    </>
  );
};

export default SlideEraser;
