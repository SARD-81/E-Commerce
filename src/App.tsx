import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import SideMenu from "./components/SideMenu";
import { theme } from "./theme";
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
          <ToastContainer
            position="top-center"
            autoClose={2000}
            pauseOnHover={false}
          />

          {/* <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/products" element={<ProductCreate />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/home"
                element={
                  <div>
                    <Home />
                  </div>
                }
              />
            </Routes>
          </BrowserRouter> */}
        </SideMenu>
      </ThemeProvider>
    </>
  );
}

export default App;
