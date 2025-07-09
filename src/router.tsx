import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import AuthPage from "./pages/AuthPage";
import CreateProductPage from "./pages/Admin/ProductCreate";
import DashboardPage from "./pages/Admin/Dashboard";
import ProfilePage from "./pages/User/Profile";
import ShopPage from "./pages/User/Shop";
import UsersPage from "./pages/Admin/usersList";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./pages/User/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "auth",
        Component: AuthPage,
      },
      {
        path: "shop",
        Component: ShopPage,
      },
      {
        Component: ProtectedRoutes,
        children: [
          {
            path: "profile",
            Component: ProfilePage,
          },

          {
            path: "users",
            Component: UsersPage,
          },
          {
            path: "dashboard",
            Component: DashboardPage,
          },
          {
            path: "create-product",
            Component: CreateProductPage,
          },
        ],
      },
    ],
  },
]);

export default router;
