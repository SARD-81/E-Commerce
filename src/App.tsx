import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import RelatedProducts from "./components/RelatedProducts";
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
        <SideMenu>{/* <DarkMode /> */}</SideMenu>
      </ThemeProvider>
    </>
  );
}

export default App;
// import SideMenu from "./components/SideMenu";
// import { ThemeProvider, CssBaseline } from "@mui/material";
// import { theme } from "./theme";

// function App() {
//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <SideMenu></SideMenu>
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;
