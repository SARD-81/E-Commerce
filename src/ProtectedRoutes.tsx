import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "./state-management/stores/useAuthStore";

const ProtectedRoutes = () => {
  const id = useAuthStore((state) => state.id);
  return id ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
