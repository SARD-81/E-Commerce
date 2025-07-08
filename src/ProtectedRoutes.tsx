import { Navigate, Outlet } from "react-router-dom";
import { useAuthId, useAuthIsAdmin } from "./state-management/stores/useAuthStore";

export const ProtectedRoutes = () => {
  const id = useAuthId();
  return id ? <Outlet /> : <Navigate to="/login" replace />;
};

export const AdminRoutes = () => {
  const id      = useAuthId();
  const isAdmin = useAuthIsAdmin();

  if (!id) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }
  if (!isAdmin) {
    // Logged in but not admin
    return <Navigate to="*" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
