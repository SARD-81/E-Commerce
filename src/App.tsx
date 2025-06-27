import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import RelatedProducts from "./components/RelatedProducts";
import SideMenu from "./components/SideMenu";
import { theme } from "./theme";


const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazir, Arial, sans-serif",
  },
});

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
      <ThemeProvider theme={theme}>

        <CssBaseline />
<<<<<<< HEAD
        <Button
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
        </Button>
        <SideMenu>
          {/* <ProductPage /> */}
          {/* <ProductCreate /> */}
        </SideMenu>
=======
        <SideMenu></SideMenu>

>>>>>>> 390c6d74fac228ddc26799b05b439b97a1f0c4bb
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
