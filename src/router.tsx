import { createBrowserRouter } from "react-router-dom";
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
import Checkout from "./pages/User/Checkout";
import MyOrders from "./pages/User/myOrders";
import ProductAllProduct from "./pages/Admin/ProductAllProduct";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "auth", Component: AuthPage },

      // Protected routes (both user and admin)
      {
        Component: ProtectedRoutes,
        children: [
          { path: "shop", Component: ShopPage },
          { path: "cart", Component: Cart },
          { path: "product-page/:id", Component: ProductPage },
          { path: "wishlist", Component: Favorite },
          { path: "profile", Component: ProfilePage },
          { path: "orders", Component: MyOrders },

          {
            path: "profile",
            Component: ProfilePage,
          },
          {
            path: "shooping-progress",
            Component: ShoppingProgress,
          },
          {
            path: "checkout",
            Component: Checkout,
          },
          { path: "shipping", Component: ShoppingProgress },
          { path: "all-product", Component: ProductAllProduct },
          { path: "users", Component: UsersPage },
          { path: "dashboard", Component: DashboardPage },
        ],
      },
    ],
  },
]);

export default router;
