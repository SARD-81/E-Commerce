import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import AuthPage from "./pages/AuthPage";
import CreateProductPage from "./pages/Admin/ProductCreate";
import DashboardPage from "./pages/Admin/Dashboard";
import ProfilePage from "./pages/User/Profile";
import ShopPage from "./pages/User/Shop";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./pages/User/Home";
import NotFoundPage from "./pages/Error404";
import EditProduct from "./pages/Admin/EditProduct";
import ProductAllProduct from "./pages/Admin/ProductAllProduct";

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
      {
        Component: ProtectedRoutes,
        children: [
          {
            path: "profile",
            Component: ProfilePage,
          },

          {
            path: "dashboard",
            Component: DashboardPage,
          },
          {
            path: "create-product",
            Component: CreateProductPage,
          },
          { path: "edit-product/:id", Component: EditProduct },
          {
            path: "all-product",
            Component: ProductAllProduct,
          },
        ],
      },
    ],
  },
]);

export default router;
