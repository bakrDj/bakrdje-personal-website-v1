"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { create } from "zustand";

type Props = {};

export const useBearStore = create((set) => ({
  menuId: null,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
}));

const SlideEraser = (props: Props) => {
  const contorls = useAnimationControls();
  const menuId = useBearStore((state: any) => state.menuId);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (menuId === null) return; // Skip effect on initial page load when menuId is 0
    contorls.start({
      x: "50vw",
      y: "-50vh",
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 1.5,
        delay: 0,
        opacity: {
          delay: 1,
          duration: 2,
        },
      },
    });
  }, [menuId]);

  // Generate a unique key based on menuId to force remount
  const key = `slide-eraser-${menuId}`;

  return (
    <motion.div
      key={key}
      className="z-30 overflow-hidden origin-center absolute right-0 top-0   w-[200vw] h-[350vh] bg-[#fff2d8]"
      //   style={{ transform: "rotateZ(-45deg) " }}
      initial={{ x: "200vw", y: "-350vh", rotateZ: -45 }}
      animate={contorls}
    >
      <div className="absolute top-0 left-0 w-1 h-[350vh] bg-[#113946]"></div>
    </motion.div>
  );
};

export default SlideEraser;
