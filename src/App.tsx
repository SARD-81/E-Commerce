import SideMenu from "./components/SideMenu";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { useState } from "react";

function App() {
  const [Response, SetResponse] = useState({
    loading: true,
    error: false,
    data: null,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SideMenu></SideMenu>
      </ThemeProvider>
    </>
  );
}

export default App;
