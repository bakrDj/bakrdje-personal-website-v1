import { create } from "zustand";

interface BearStore {
  menuId: null | number;
  sliderAnimationStart: boolean;
  sliderAnimationEnd: boolean;
  sliderHide: boolean;
  isdrawerOpen: boolean;
}

export const useBearStore = create<BearStore>(() => ({
  menuId: null,
  sliderAnimationStart: false,
  sliderAnimationEnd: false,
  sliderHide: false,
  isdrawerOpen: false,
}));
