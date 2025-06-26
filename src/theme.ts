import { createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";

export const theme = createTheme(
  {
    colorSchemes: {
      dark: false,
    },
    direction: "rtl",
    palette: {
      primary: { main: "#E91E63" },
    },
    typography: {
      fontFamily: "IRANSans, sans-serif",
    },
  },
  faIR
);
