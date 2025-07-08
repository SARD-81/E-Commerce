import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { theme } from "./theme";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useAuthToken, useAuthLoading, useFetchUser } from "./state-management/stores/useAuthStore";

function App() {
  const token = useAuthToken();
  const loading = useAuthLoading();
  const fetchUser = useFetchUser();

  useEffect(() => {
    if (!token) {
      fetchUser();
    }
  }, [token, fetchUser]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer position="top-center" autoClose={2000} pauseOnHover={false} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;