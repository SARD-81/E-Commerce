import { CssBaseline, ThemeProvider } from "@mui/material";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";
import SideMenu from "./components/SideMenu";
import ProductCreate from "./pages/Admin/ProductCreate";
import { theme } from "./theme";
import ProductAllProduct from "./pages/Admin/ProductAllProduct";
//   direction: "rtl",
//   typography: {
//     fontFamily: "Vazir, Arial, sans-serif",
//   },
// });
=======
import { theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./router";
>>>>>>> 1b0bed57563047fe14ad4cb816abd93d6db4ce27

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
<<<<<<< HEAD
        <CssBaseline />
        <SideMenu>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            pauseOnHover={false}
          />
          <ProductAllProduct />
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
=======
        <CssBaseline>
          <RouterProvider router={router} />
        </CssBaseline>
>>>>>>> 1b0bed57563047fe14ad4cb816abd93d6db4ce27
      </ThemeProvider>
    </>
  );
}

export default App;
