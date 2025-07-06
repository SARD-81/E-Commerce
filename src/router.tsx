import Home from "./pages/User/Home";
import { createBrowserRouter } from "react-router";
import ProtectedRoutes from "./ProtectedRoutes";
import ProductUploadImage from "./pages/Admin/ProductUploadImage";
import NotFoundPage from "./pages/Error404";
import Layout from "./pages/Layout";
<<<<<<< HEAD
=======
import Shop from "./pages/User/Shop";
import Profile from "./pages/User/Profile";
import  Home  from "./pages/User/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import ProductCreate from "./pages/Admin/ProductCreate";
>>>>>>> dc5a699c763bde1d17515e83dcb2b013cf566f24
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/User/Profile";
import Shop from "./pages/User/Shop";
import ProductPage from "./pages/User/ProductPage";

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
