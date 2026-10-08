import { create } from "zustand";

export const useContactStore = create((set) => ({
  scrollToForm: false,

  setScrollToForm: (value) => set({ scrollToForm: value }),
}));
