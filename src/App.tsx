import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { theme } from "./theme";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          pauseOnHover={false}
        />
        <RouterProvider router={router} />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
