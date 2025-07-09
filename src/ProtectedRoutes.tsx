import { Navigate, Outlet } from "react-router-dom";
import { 
  useAuthToken, 
  useAuthIsAdmin, 
  useAuthLoading,
  useAuthUser
} from "./state-management/stores/useAuthStore";

export const ProtectedRoutes = () => {
  const token = useAuthToken();
  const loading = useAuthLoading();

  if (loading) {
    return <div>Loading...</div>;
  }

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export const AdminRoutes = () => {
  const token = useAuthToken();
  const isAdmin = useAuthIsAdmin();
  const loading = useAuthLoading();
  const user = useAuthUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">دسترسی ممنوع</h1>
        <p className="mt-4">
          شما دسترسی ادمین ندارید.
          <br />
          نقش فعلی: {user?.isAdmin ? "ادمین" : "کاربر عادی"}
        </p>
        <button 
          className="mt-4 text-blue-500 hover:underline"
          onClick={() => window.location.href = '/'}
        >
          بازگشت به صفحه اصلی
        </button>
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoutes;