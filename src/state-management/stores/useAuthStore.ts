// src/state-management/stores/useAuthStore.ts

import { create } from "zustand";
import server from "../../utils/axios";
import { toast } from "react-toastify";

interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

type AuthStoreType = {
  id: string | null;
  isAdmin: boolean;
  loading: boolean;
  user: User | null;
  setId: (id: string | null) => void;
  setIsAdmin: (isAdmin: boolean) => void;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;

  fetchUser: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const useAuthStore = create<AuthStoreType>((set) => ({
  // Initial state
  id: localStorage.getItem("id"),
  isAdmin: localStorage.getItem("isAdmin") === "true",
  loading: true,
  user: null,

  // Synchronous setters
  setId: (id) => {
    if (id) localStorage.setItem("id", id);
    else localStorage.removeItem("id");
    set({ id });
  },
  setIsAdmin: (isAdmin) => {
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
    set({ isAdmin });
  },
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),

  // Fetch current user on app load
  fetchUser: async () => {
    set({ loading: true });
    try {
      const { data } = await server.get("/users/auth");
      set({
        user: data,
        id: data._id,
        isAdmin: data.isAdmin,
      });
    } catch {
      set({
        user: null,
        id: null,
        isAdmin: false,
      });
    } finally {
      set({ loading: false });
    }
  },

  // Log in with credentials
  login: async (email, password) => {
    set({ loading: true });
    try {
      const { data } = await server.post("/users/auth", { email, password });
      set({
        user: data,
        id: data._id,
        isAdmin: data.isAdmin,
      });
    } catch {
      toast.error("Login failed");
      throw new Error("Login failed");
    } finally {
      set({ loading: false });
    }
  },

  // Log out
  logout: async () => {
    set({ loading: true });
    try {
      await server.get("/users/logout");
      set({ user: null, id: null, isAdmin: false });
      localStorage.removeItem("id");
      localStorage.removeItem("isAdmin");
      toast.info("Logged out.");
    } finally {
      set({ loading: false });
    }
  },
}));

// Slice‑hooks for components
export const useAuthId      = () => useAuthStore((s) => s.id);
export const useAuthIsAdmin = () => useAuthStore((s) => s.isAdmin);
export const useAuthUser    = () => useAuthStore((s) => s.user);
export const useAuthLoading = () => useAuthStore((s) => s.loading);

// Async actions from store
export const useFetchUser = () => useAuthStore((s) => s.fetchUser);
export const useLogin     = () => useAuthStore((s) => s.login);
export const useLogout    = () => useAuthStore((s) => s.logout);

export default useAuthStore;
