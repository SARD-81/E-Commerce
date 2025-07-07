import { styled, useTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import type { Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { useState } from "react";
import SideMenuHeader from "./SlideMenuReuseables/SideMenuHeader";
import SlideMenuList from "./SlideMenuReuseables/SlideMenuList";
import { useAuth } from "../context/AuthContext";
import AdminDropdown from "./AdminDropdown";
import UserDropdown from "./UserDropdown";
import Preloader from "./Preloader";
import useAuthStore from "../state-management/stores/useAuthStore";

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface ISideMenuProps {
  open?: boolean;
  theme?: Theme;
}

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<ISideMenuProps>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme!),
    "& .MuiDrawer-paper": openedMixin(theme!),
  }),
  ...(!open && {
    ...closedMixin(theme!),
    "& .MuiDrawer-paper": closedMixin(theme!),
  }),
}));

interface SideMenuProps {
  children: React.ReactNode;
}

const SideMenu = ({ children }: SideMenuProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { loading } = useAuth();
  const { id, isAdmin } = useAuthStore((state) => ({
    id: state.id,
    isAdmin: state.isAdmin,
  }));

  const handleDrawerOpen = () => setOpen(!open);
  const handleSelectItem = (id: number) => setSelectedIndex(id);

  const mainMenuItems = [
    { text: "داشبورد", icon: <HomeOutlinedIcon />, to: "/" },
    { text: "فروشگاه", icon: <ShoppingBagOutlinedIcon />, to: "/shop" },
    { text: "سبد خرید", icon: <ShoppingCartOutlinedIcon />, to: "/cart" },
    { text: "علاقه‌مندی‌ها", icon: <FavoriteOutlinedIcon />, to: "/wishlist" },
  ];

  const authMenuItems = [
    { text: "ورود", icon: <LoginIcon />, to: "/login" },
    { text: "ثبت‌نام", icon: <PersonAddOutlinedIcon />, to: "/register" },
  ];

  if (loading) {
    return <Preloader />;
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <StyledDrawer
        variant="permanent"
        open={open}
        anchor="right"
        sx={{
          position: "fixed",
          right: 0,
          height: "100%",
          zIndex: theme.zIndex.drawer,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <SideMenuHeader open={open} onDrawerOpen={handleDrawerOpen} />

        <Box sx={{ flexGrow: 1 }}>
          <SlideMenuList
            items={mainMenuItems}
            open={open}
            selectedIndex={selectedIndex}
            onItemClick={handleSelectItem}
          />
        </Box>

        <Box sx={{ marginTop: "auto" }}>
          <Divider />

          {id ? (
            isAdmin ? (
              <AdminDropdown />
            ) : (
              <UserDropdown />
            )
          ) : (
            <SlideMenuList
              items={authMenuItems}
              open={open}
              selectedIndex={-1}
              onItemClick={() => {}}
            />
          )}
        </Box>
      </StyledDrawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginRight: open
            ? `${drawerWidth}px`
            : `calc(${theme.spacing(7)} + 1px)`,
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: "100%",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SideMenu;
