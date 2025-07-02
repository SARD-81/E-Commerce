import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import SideMenu from "./components/SideMenu";
import { theme } from "./theme";
// const theme = createTheme({
//   direction: "rtl",
//   typography: {
//     fontFamily: "Vazir, Arial, sans-serif",
//   },
// });

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
