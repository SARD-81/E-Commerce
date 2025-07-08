import { create } from "zustand";
import { persist } from "zustand/middleware";
import server from "../../utils/axios";
import { toast } from "react-toastify";

interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

type AuthStoreType = {
  token: string | null;
  user: User | null;
  loading: boolean;

  setToken: (token: string) => void;
  setUser: (user: User) => void;
  setLoading: (loading: boolean) => void;

  login: (email: string, password: string) => Promise<User>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
};

const initialState = {
  token: null,
  user: null,
  loading: true,
};

const useAuthStore = create<AuthStoreType>()(
  persist(
    (set) => ({  // Removed unused 'get' parameter here
      ...initialState,

      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),
      setLoading: (loading) => set({ loading }),

      login: async (email, password) => {
        set({ loading: true });
        try {
          const { data } = await server.post("/users/auth", { email, password });
          
          // Ensure admin flag exists and is boolean
          const userData = {
            ...data.user,
            isAdmin: Boolean(data.user?.isAdmin)
          };
          
          set({
            token: data.token,
            user: userData,
          });
          toast.success("Logged in successfully");
          return userData;
        } catch (error) {
          toast.error("Login failed");
          throw error;
        } finally {
          set({ loading: false });
        }
      },

      logout: async () => {
        set({ loading: true });
        try {
          await server.post("/users/logout");
          set(initialState);
          localStorage.removeItem("auth-storage");
          toast.info("Logged out successfully");
        } catch (error) {
          toast.error("Failed to log out");
          console.error(error);
        } finally {
          set({ loading: false });
        }
      },

      fetchUser: async () => {
        set({ loading: true });
        try {
          const { data } = await server.get("/users/profile");
          // Ensure admin flag is properly set
          set({ 
            user: {
              ...data,
              isAdmin: Boolean(data?.isAdmin)
            } 
          });
        } catch {
          set(initialState);
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        loading: state.loading,
      }),
    }
  )
);

// Selectors
export const useAuthToken = () => useAuthStore((s) => s.token);
export const useAuthUser = () => useAuthStore((s) => s.user);
export const useAuthLoading = () => useAuthStore((s) => s.loading);
export const useAuthIsAdmin = () => 
  useAuthStore((s) => s.user?.isAdmin || false);
export const useLogin = () => useAuthStore((s) => s.login);
export const useLogout = () => useAuthStore((s) => s.logout);
export const useFetchUser = () => useAuthStore((s) => s.fetchUser);

export default useAuthStore;