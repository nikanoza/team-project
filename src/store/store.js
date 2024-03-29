import { create } from "zustand";

const useLogin = create((set) => ({
  isVisible: false,
  isAllowed: false,
  toggleIsVisible: () => set((state) => ({ isVisible: !state.isVisible })),
  toggleIsAllowed: () => set((state) => ({ isAllowed: !state.isAllowed })),
}));

export default useLogin;
