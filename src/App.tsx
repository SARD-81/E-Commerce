import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import UsersList from "./pages/Admin/usersList";


function App() {
  return (
    <UsersList/>
  );
}

export default App;
