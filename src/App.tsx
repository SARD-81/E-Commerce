import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import RelatedProducts from "./components/RelatedProducts";
import SideMenu from "./components/SideMenu";
import { theme } from "./theme";
import DarkMode from "./DarkMode";
import ProductCreate from "./pages/Admin/ProductCreate";
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
        <SideMenu>
          {/* <DarkMode /> */}
          {/* <ProductCreate /> */}
        </SideMenu>
      </ThemeProvider>
    </>
  );
}

export default App;
