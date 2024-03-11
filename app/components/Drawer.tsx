"use client";
import React, { useState } from "react";
import { Drawer as DrawerUI, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerOverlay } from "@/components/ui/drawer";
import { Navbar } from "./Menu";
import { useBearStore } from "@/zustand/store";

type Props = {};

const Drawer = (props: Props) => {
  const isdrawerOpen = useBearStore((state: any) => state?.isdrawerOpen);
  return (
    <DrawerUI
      open={isdrawerOpen}
      onClose={() => {
        useBearStore.setState({ isdrawerOpen: false });
      }}
    >
      <DrawerOverlay
        className="!bg-transparent z-[55] pointer-events-auto"
        onClick={(e) => {
          console.log("🚀 ~ Drawer ~ e:", e);
          useBearStore.setState({ isdrawerOpen: false });
        }}
      />
      <DrawerContent style={{ zIndex: "60" }}>
        <div
          className="py-8 px-4 "
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName.toLowerCase().search(/svg|path|li/) !== -1) {
              useBearStore.setState({ isdrawerOpen: false });
            }
            // console.log("🚀 ~ Drawer ~ (e.target as HTMLElement).tagName.toLowerCase():", (e.target as HTMLElement).tagName.toLowerCase());
          }}
        >
          <Navbar is_vertical></Navbar>
        </div>
      </DrawerContent>
    </DrawerUI>
  );
};

export default Drawer;
