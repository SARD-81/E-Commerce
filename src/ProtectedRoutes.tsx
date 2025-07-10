import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "./state-management/stores/useAuthStore";
import { toast } from "react-toastify";
import { useEffect } from "react";

// Define route configuration types
interface RouteConfig {
  path: string;
  requiresAdmin?: boolean;
}

// Define admin-only routes
const adminRoutes: RouteConfig[] = [
  { path: "/users", requiresAdmin: true },
  { path: "/dashboard", requiresAdmin: true },
  { path: "/all-product", requiresAdmin: true },
  { path: "/create-product", requiresAdmin: true },
  { path: "/edit-product/:id", requiresAdmin: true },
];

const ProtectedRoutes = () => {
  const { id, isAdmin } = useAuthStore();
  const location = useLocation();

  // If not authenticated, redirect to login
  if (!id) {
    return (
      <Navigate to="/auth?mode=login" state={{ from: location }} replace />
    );
  }

  // Check if current route requires admin access
  const requiresAdmin = adminRoutes.some(
    (route) => location.pathname.startsWith(route.path) && route.requiresAdmin
  );

  useEffect(() => {
    if (id && requiresAdmin && !isAdmin) {
      toast.warning("شما اجازه دسترسی به این بخش را ندارید!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        rtl: true,
      });
    }
  }, [id, isAdmin, requiresAdmin]);

  // If admin access required but not admin, redirect to home
  if (requiresAdmin && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  // Allow access to the route
  return <Outlet />;
};

export default ProtectedRoutes;
