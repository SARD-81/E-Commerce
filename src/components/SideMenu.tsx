import { styled, useTheme } from "@mui/material/styles";
import type { Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
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
  children?: React.ReactNode;
}

const SideMenu = ({ children }: SideMenuProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDrawerOpen = () => setOpen(!open);
  const handleSelectItem = (id: number) => setSelectedIndex(id);

  const mainMenuItems = [
    { text: "داشبورد", icon: <HomeOutlinedIcon /> },
    { text: "فروشگاه", icon: <ShoppingBagOutlinedIcon /> },
    { text: "سبد خرید", icon: <ShoppingCartOutlinedIcon /> },
    { text: "علاقه‌مندی‌ها", icon: <FavoriteOutlinedIcon /> },
  ];

  const authMenuItems = [
    { text: "ورود", icon: <LoginIcon /> },
    { text: "ثبت‌نام", icon: <PersonAddOutlinedIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
        }}
      >
        {children}
      </Box>
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
          <SlideMenuList
            items={authMenuItems}
            open={open}
            selectedIndex={-1}
            onItemClick={() => {}}
          />
        </Box>
      </StyledDrawer>
    </Box>
  );
};

export default SideMenu;
