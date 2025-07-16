import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/Admin/Dashboard";
import EditProduct from "./pages/Admin/EditProduct";
import ProductAllProduct from "./pages/Admin/ProductAllProduct";
import ProductCreate from "./pages/Admin/ProductCreate";
import UsersPage from "./pages/Admin/UsersPage";
import AuthPage from "./pages/AuthPage";
import NotFoundPage from "./pages/Error404";
import Layout from "./pages/Layout";
import Cart from "./pages/User/Cart";
import Checkout from "./pages/User/Checkout";
import Favorite from "./pages/User/favorite";
import Home from "./pages/User/Home";
import MyOrders from "./pages/User/MyOrders";
import ProductPage from "./pages/User/ProductPage";
import ProfilePage from "./pages/User/Profile";
import ShopPage from "./pages/User/Shop";
import ShoppingProgress from "./pages/User/ShoppingProgress";
import ProtectedRoutes from "./ProtectedRoutes";

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
          { path: "create-product", Component: ProductCreate },
          { path: "all-product", Component: ProductAllProduct },
          { path: "users", Component: UsersPage },
          { path: "dashboard", Component: DashboardPage },
          { path: "edit-product/:id", Component: EditProduct },
        ],
      },
    ],
  },
]);

export default router;
