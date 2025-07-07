import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";
import useAuthStore, {
  useSetAuthUser,
  useSetAuthId,
  useSetAuthIsAdmin,
  useSetAuthLoading,
} from "../state-management/stores/useAuthStore";
import { getUserData } from "../api/userService";
import server from "../utils/axios";

interface AuthContextType {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const setUser = useSetAuthUser();
  const setId = useSetAuthId();
  const setIsAdmin = useSetAuthIsAdmin();
  const setLoading = useSetAuthLoading();
  const logoutAction = useAuthStore((s) => s.logout);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getUserData();
        setUser(data);
        setId(data._id);
        setIsAdmin(data.isAdmin);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, [setUser, setId, setIsAdmin, setLoading]);

  const value = useMemo<AuthContextType>(() => {
    const login = async (email: string, password: string) => {
      setLoading(true);
      try {
        const resp = await server.post("/users/auth", { email, password });
        setUser(resp.data);
        setId(resp.data._id);
        setIsAdmin(resp.data.isAdmin);
      } finally {
        setLoading(false);
      }
    };

    const logout = async () => {
      setLoading(true);
      try {
        await server.get("/users/logout");
        logoutAction();
      } finally {
        setLoading(false);
      }
    };

    return { login, logout };
  }, [logoutAction, setId, setIsAdmin, setLoading, setUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
