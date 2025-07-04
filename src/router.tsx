import { createBrowserRouter } from "react-router";
import NotFoundPage from "./pages/Error404";
import Layout from "./pages/Layout";
import Shop from "./pages/User/Shop";
import Profile from "./pages/User/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    Component: Layout,
    children: [
      { path: "/shop", Component: Shop },
      { path: "/profile", Component: Profile },
    ],
  },
]);

export default router;
