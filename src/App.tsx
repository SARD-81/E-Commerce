import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <RouterProvider router={router} />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
