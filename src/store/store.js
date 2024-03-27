import { create } from "zustand";

const useLogin = create((set) => ({
  isTrue: false,
  isAllowed: false,
  setIsTrue: () => set((state) => ({ isTrue: (state.isTrue = true) })),
  setIsFalse: () => set((state) => ({ isTrue: (state.isTrue = false) })),
  setAllow: () => set((state) => ({ isAllowed: (state.isAllowed = true) })),
  setDisallow: () => set((state) => ({ isAllowed: (state.isAllowed = false) })),
}));

export default useLogin;
