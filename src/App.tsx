// import SideMenu from "./components/SideMenu";
import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import SideMenu from "./components/SideMenu";
import Badge from "./components/SlideMenuReuseables/badge";
import Heading from "./components/SlideMenuReuseables/heading";
import TextField from "./components/SlideMenuReuseables/textField";

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
      <SideMenu>
        
      </SideMenu>
    </>
  );
}

export default App;
