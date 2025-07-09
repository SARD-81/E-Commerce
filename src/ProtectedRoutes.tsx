import { Navigate, Outlet } from "react-router";
import useAuthStore from "./state-management/stores/useAuthStore";

const ProtectedRoutes = () => {
  const id = useAuthStore((state) => state.id);

  if (!id) return <Navigate to="/auth?mode=login" />;

  return <Outlet />;
};

export default ProtectedRoutes;
