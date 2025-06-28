import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
const DarkMode = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        background: {
          default: mode === "dark" ? "#0F0F10" : "EEEFF1",
        },
      },
    });
  }, [mode]);
  const handleToggleClick = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <button
        onClick={handleToggleClick}
        className={`cursor-pointer fixed top-7 left-7 z-999 text-3xl transition-all duration-300 ease-in-out ${
          mode === "light" ? "text-[#1A237E]" : "text-[#FFEB3B]"
        }`}
      >
        {mode === "light" ? <FiMoon /> : <FiSun />}
      </button>
    </ThemeProvider>
  );
};

export default DarkMode;
