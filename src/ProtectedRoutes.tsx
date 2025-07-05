import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "./state-management/stores/useAuthStore";

const ProtectedRoutes = () => {
  const id = useAuthStore((state) => state.id);
  if (!id) <Navigate to="/login" />;
  return <Outlet />;
};

export default ProtectedRoutes;
