import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import NotFoundPage from "./pages/Error404";

// User pages
import Home from "./pages/User/Home";
import Shop from "./pages/User/Shop";
import Profile from "./pages/User/Profile";
import ProductPage from "./pages/User/ProductPage";

// Auth
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// Admin pages
import Dashboard from "./pages/Admin/Dashboard";
import Orders from "./pages/Admin/Orders";
import OrderDetails from "./pages/Admin/Orders_Details";
import AllProducts from "./pages/Admin/ProductAllProduct";
import ProductCreate from "./pages/Admin/ProductCreate";
import UsersList from "./pages/Admin/UsersList";
import ProductUploadImage from "./pages/Admin/ProductUploadImage";

import ProtectedRoutes, { AdminRoutes } from "./ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFoundPage />,
    children: [
      // Public
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "products/:productId", Component: ProductPage },
      { path: "login", Component: Login },
      { path: "register", Component: Register },

      // Authenticated users (any role)
      {
        Component: ProtectedRoutes,
        children: [
          { path: "profile", Component: Profile },
        ],
      },

      // Admin-only
      {
        path: "admin",
        Component: AdminRoutes,
        children: [
          { index: true, Component: Dashboard }, // Default admin route
          { path: "dashboard", Component: Dashboard },
          { path: "orders", Component: Orders },
          { path: "orders/:orderId", Component: OrderDetails },
          { path: "products", Component: AllProducts },
          { path: "products/new", Component: ProductCreate },
          { path: "products/upload", Component: ProductUploadImage },
          { path: "users", Component: UsersList },
        ],
      },
    ],
  },
]);

export default router;