"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren, useContext, useRef } from "react";
import { useBearStore } from "./SlideEraser";

type Props = {} & React.PropsWithChildren;

function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>;
}

const RouteAnimation = ({ children }: Props) => {
  //   const sliderHide = useBearStore((state: any) => state.sliderHide);

  let pathname = usePathname();
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
        exit={{ opacity: 0, transition: { delay: 1.0 } }}
        // transition={{ duration: 0.5, delay: 1 }}
        onAnimationStart={() => useBearStore.setState({ sliderHide: false })}
        onAnimationComplete={() => useBearStore.setState({ sliderHide: true })}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default RouteAnimation;
