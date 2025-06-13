import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import RelatedProducts from "./components/RelatedProducts";
import SideMenu from "./components/SideMenu";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazir, Arial, sans-serif",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SideMenu></SideMenu>
        <CssBaseline />
        <RelatedProducts />
      </ThemeProvider>
    </>
  );
}

export default App;
