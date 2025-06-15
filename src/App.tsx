// import SideMenu from "./components/SideMenu";
import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import SideMenu from "./components/SideMenu";
import ProductPage from "./pages/User/ProductPage";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        background: {
          default: mode === "dark" ? "#0F0F10" : "#EEEFF1",
        },
      },
    });
  }, [mode]);
  const handleToggleClick = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Button
          variant="outlined"
          onClick={handleToggleClick}
          sx={{
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 999,
            backgroundColor: "Background.paper",
          }}
        >
          {mode === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
        <SideMenu>
          {/* <ProductPageReview /> */}
          <ProductPage />
        </SideMenu>
      </ThemeProvider>
    </>
  );
}

export default App;
