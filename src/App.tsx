import SideMenu from "./components/SideMenu";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";

function App() {
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
