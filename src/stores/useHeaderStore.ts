import { create } from "zustand";

interface IHeaderStore {
  isOpen: boolean;
  isMobile: boolean;
  videoKey: string;
  setIsOpen: (value: boolean) => void;
  setIsMobile: (value: boolean) => void;
  setVideoKey: (value: string) => void;
}

export const useHeaderStore = create<IHeaderStore>((set) => ({
  isOpen: false,
  isMobile: true,
  videoKey: "",
  setIsOpen: (value) => set({ isOpen: value }),
  setIsMobile: (value) => set({ isMobile: value }),
  setVideoKey: (value) => set({ videoKey: value }),
}));
