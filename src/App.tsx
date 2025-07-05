import { CssBaseline, ThemeProvider } from "@mui/material";
import SideMenu from "./components/SideMenu";
import { theme } from "./theme";
import UsersList from "./pages/Admin/usersList";


// import Buttons from "./components/SlideMenuReuseables/buttons";

// import { useState } from "react";
// import { useMemo } from "react";
// import ProductPage from "./pages/User/ProductPage";

// const theme = createTheme({
//   direction: "rtl",
//   typography: {
//     fontFamily: "Vazir, Arial, sans-serif",
//   },
// });

function App() {
  // const [mode, setMode] = useState<"light" | "dark">("light");
  // const theme = useMemo(() => {
  //   return createTheme({
  //     palette: {
  //       mode,
  //       background: {
  //         default: mode === "dark" ? "#0F0F10" : "#EEEFF1",
  //       },
  //     },
  //   });
  // }, [mode]);
  // const handleToggleClick = () => {
  //   setMode((prev) => (prev === "light" ? "dark" : "light"));
  // };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Button
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
        </Button> */}
      
        <SideMenu></SideMenu>
        <UsersList/>
      </ThemeProvider>
    </>
  );
}

export default App;
