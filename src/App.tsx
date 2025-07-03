import { CssBaseline, ThemeProvider } from "@mui/material";
import SideMenu from "./components/SideMenu";
import Login from "./pages/Login/Login";
import { theme } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Home from "./pages/User/Home";
import { ToastContainer } from "react-toastify";
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
          <ToastContainer
            position="top-center"
            autoClose={2000}
            pauseOnHover={false}
          />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
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
          </BrowserRouter>
        </SideMenu>
      </ThemeProvider>
    </>
  );
}

export default App;
