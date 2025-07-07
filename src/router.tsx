import { createBrowserRouter } from "react-router";
import ProtectedRoutes from "./ProtectedRoutes";
import ProductUploadImage from "./pages/Admin/ProductUploadImage";
import NotFoundPage from "./pages/Error404";
import Layout from "./pages/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/User/Home";
import ProductPage from "./pages/User/ProductPage";
import Profile from "./pages/User/Profile";
import Shop from "./pages/User/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "products/:productId", Component: ProductPage },
      {
        Component: ProtectedRoutes,
        children: [
          { path: "admin/products/new", Component: ProductUploadImage },
          { path: "profile", Component: Profile },
        ],
      },
    ],
  },
]);

export default router;
