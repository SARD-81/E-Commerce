import { createBrowserRouter } from "react-router";
import NotFoundPage from "./pages/Error404";
import Layout from "./pages/Layout";
import Shop from "./pages/User/Shop";
import Profile from "./pages/User/Profile";
import Home from "./pages/User/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import ProductCreate from "./pages/Admin/ProductCreate";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
// import MyOrders from "./pages/User/myOrders";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "my-orders", Component: MyOrders },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      {
        Component: ProtectedRoutes,
        children: [
          { path: "create-product", Component: ProductCreate },
          { path: "profile", Component: Profile },
        ],
      },
    ],
  },
]);

export default router;
