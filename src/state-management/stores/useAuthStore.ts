import { create } from "zustand";

type AuthStoreType = {
  id: string | null;
  isAdmin: boolean;
  flashMessage: string | null;
  setId: (id: string) => void;
  setIsAdmin: (isAdmin: boolean) => void;
  setFlashMessage: (message: string) => void;
  clearFlashMessage: () => void;
  logout: () => void;
};

const useAuthStore = create<AuthStoreType>((set) => ({
  id: localStorage.getItem("id"),
  isAdmin: localStorage.getItem("isAdmin") === "true" ? true : false,
  flashMessage: null,
  hasShownFlash: false,
  setId: (id: string) => {
    set({ id });
    localStorage.setItem("id", id);
  },
  setIsAdmin: (isAdmin: boolean) => {
    set({ isAdmin });
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
  },
  setFlashMessage: (message: string) => set({ flashMessage: message }),
  clearFlashMessage: () => set({ flashMessage: null }),
  logout: () =>
    set({
      id: null,
      isAdmin: false,
      flashMessage: null,
    }),
}));

export default useAuthStore;
