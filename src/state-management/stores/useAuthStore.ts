import { toast } from "react-toastify";
import { create } from "zustand";

interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

type AuthStoreType = {
  id: string | null;
  isAdmin: boolean;
  flashMessage: string | null;
  loading: boolean;
  user: User | null;
  setId: (id: string) => void;
  setIsAdmin: (isAdmin: boolean) => void;
  setFlashMessage: (message: string) => void;
  clearFlashMessage: () => void;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
};

const useAuthStore = create<AuthStoreType>((set) => ({
  id: localStorage.getItem("id"),
  isAdmin: localStorage.getItem("isAdmin") === "true",
  flashMessage: null,
  loading: true,            // start in “loading” state
  user: null,

  setId: (id) => {
    localStorage.setItem("id", id);
    set({ id });
  },
  setIsAdmin: (isAdmin) => {
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
    set({ isAdmin });
  },
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),

  setFlashMessage: (message) => set({ flashMessage: message }),
  clearFlashMessage: () => set({ flashMessage: null }),

  logout: () => {
    set({ id: null, isAdmin: false, flashMessage: null, user: null });
    localStorage.removeItem("id");
    localStorage.removeItem("isAdmin");
    toast.error("خارج شدید.");
  },
}));

// slice-hooks
export const useAuthId      = () => useAuthStore((s) => s.id);
export const useAuthIsAdmin = () => useAuthStore((s) => s.isAdmin);
export const useAuthUser    = () => useAuthStore((s) => s.user);
export const useAuthLoading = () => useAuthStore((s) => s.loading);
export const useSetAuthLoading = () => useAuthStore((s) => s.setLoading);
export const useSetAuthUser    = () => useAuthStore((s) => s.setUser);
export const useSetAuthId      = () => useAuthStore((s) => s.setId);
export const useSetAuthIsAdmin = () => useAuthStore((s) => s.setIsAdmin);

export default useAuthStore;
