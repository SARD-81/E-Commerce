import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import server from "../../utils/axios";

interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

type AuthStoreType = {
  user: User | null;
  loading: boolean;
  flashMessage: string | null;

  fetchUser: () => Promise<void>;
  login: (email: string, password: string | number) => Promise<void>;
  logout: () => Promise<void>;

  setFlashMessage: (message: string) => void;
  clearFlashMessage: () => void;
};

const useAuthStore = create<AuthStoreType>();
persist<AuthStoreType>(
  (set) => ({
    user: null,
    loading: true,
    flashMessage: null,

    fetchUser: async () => {
      set({ loading: true });
      try {
        const { data } = await server.get("/users/profile");
        set({ user: data });
      } catch {
        set({ user: null });
      } finally {
        set({ loading: false });
      }
    },

    login: async (email, password) => {
      set({ loading: true });
      const { data } = await server.post("/users/auth", { email, password });
      set({ user: data, loading: false });
    },

    logout: async () => {
      await server.post("/users/logout");
      set({ user: null });
    },

    setFlashMessage: (message) => set({ flashMessage: message }),
    clearFlashMessage: () => set({ flashMessage: null }),
  }),
  {
    name: "auth-storage",
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({ user: state.user }),
  }
);

export default useAuthStore;
