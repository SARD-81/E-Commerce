import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/Admin/Dashboard";
import ProfilePage from "./pages/User/Profile";
import ShopPage from "./pages/User/Shop";
import UsersPage from "./pages/Admin/UsersPage";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./pages/User/Home";
import NotFoundPage from "./pages/Error404";
import Favorite from "./pages/User/favorite";
import Cart from "./pages/User/Cart";
import ShoppingProgress from "./pages/User/ShoppingProgress";

import ProductPage from "./pages/User/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
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
      { path: "cart", Component: Cart },
      {
        path: "product-page/:id",
        Component: ProductPage,
      },
      {
        path: "wishlist",
        Component: Favorite,
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
          { path: "shipping", Component: ShoppingProgress },
        ],
      },
    ],
  },
]);

export default router;
