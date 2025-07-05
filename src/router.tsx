import { createBrowserRouter } from "react-router";
import NotFoundPage from "./pages/Error404";
import Layout from "./pages/Layout";
import Shop from "./pages/User/Shop";
import Profile from "./pages/User/Profile";
import { Home } from "lucide-react";
import ProtectedRoutes from "./ProtectedRoutes";
import ProductCreate from "./pages/Admin/ProductCreate";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "profile", Component: Profile },
      {
        Component: ProtectedRoutes,
        children: [{ path: "create-product", Component: ProductCreate }],
      },
    ],
  },
]);

export default router;
