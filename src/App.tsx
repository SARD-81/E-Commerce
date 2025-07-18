import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./router";

import { useMemo } from "react";
import useThemeStore from "./state-management/stores/useThemeStore";
import { faIR } from "@mui/material/locale";

function App() {
  const mode = useThemeStore((state) => state.mode);

  const theme = useMemo(
    () =>
      createTheme(
        {
          direction: "rtl",
          palette: {
            mode,
            primary: { main: "#E91E63" },
            background: {
              default: mode === "dark" ? "#0F0F10" : "#EEEFF1",
            },
          },
          typography: {
            fontFamily: "IRANSans, sans-serif",
          },
        },
        faIR
      ),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer position="top-center" autoClose={2000} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
