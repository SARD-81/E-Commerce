import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Drawer,
  styled,
  type Theme,
  type CSSObject,
  useTheme,
  CssBaseline,
} from "@mui/material";
import {
  HomeOutlined,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
  FavoriteOutlined,
  Login,
  PersonAddOutlined,
  Menu as MenuIcon,
  ChevronRight,
} from "@mui/icons-material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import useAuthStore from "../state-management/stores/useAuthStore";
import SideDropdown from "../components/SideDropdown";

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

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface MenuItem {
  text: string;
  icon: React.ReactNode;
  path: string;
}

interface SideMenuProps {
  children: React.ReactNode;
}

const SideMenu = ({ children }: SideMenuProps) => {
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const id = useAuthStore((state) => state.id);

  const mainMenuItems: MenuItem[] = [
    { text: "داشبورد", icon: <HomeOutlined />, path: "/" },
    { text: "فروشگاه", icon: <ShoppingBagOutlined />, path: "/shop" },
    { text: "سبد خرید", icon: <ShoppingCartOutlined />, path: "/cart" },
    { text: "علاقه‌مندی‌ها", icon: <FavoriteOutlined />, path: "/wishlist" },
  ];

  const authMenuItems: MenuItem[] = [
    { text: "ورود", icon: <Login />, path: "/auth?mode=login" },
    {
      text: "ثبت‌نام",
      icon: <PersonAddOutlined />,
      path: "/auth?mode=register",
    },
  ];

  const isActive = (path: string) => location.pathname === path;

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
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: theme.spacing(0, 1),
            minHeight: "64px",
          }}
        >
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <ChevronRight /> : <MenuIcon />}
          </IconButton>
        </Box>
        <Divider />

        {/* Main Menu Items */}
        <List sx={{ flexGrow: 1 }}>
          {mainMenuItems.map((item) => (
            <ListItem key={item.path} sx={{ display: "block" }}>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                selected={isActive(item.path)}
                sx={{
                  minHeight: 48,
                  borderRadius: "10px",
                  mb: 1,
                  justifyContent: open ? "initial" : "center",
                  "&.Mui-selected": {
                    backgroundColor: "rgba(219,39,119,0.1)",
                    color: "#DB2777",
                    "&:hover": {
                      backgroundColor: "rgba(219,39,119,0.15)",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "rgba(219,39,119,0.08)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    mr: open ? 3 : "auto",
                    color: isActive(item.path) ? "#DB2777" : "inherit",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 0,
                    textAlign: "right",
                    color: isActive(item.path) ? "#DB2777" : "inherit",
                    fontWeight: isActive(item.path) ? 700 : "normal",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Bottom Section */}
        <Box sx={{ marginTop: "auto" }}>
          <Divider />
          {id ? (
            <Box sx={{ p: 1, display: "flex", justifyContent: "center" }}>
              <SideDropdown />
            </Box>
          ) : (
            <List>
              {authMenuItems.map((item) => (
                <ListItem key={item.path} sx={{ display: "block" }}>
                  <ListItemButton
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      minHeight: 48,
                      borderRadius: "10px",
                      mb: 1,
                      justifyContent: open ? "initial" : "center",
                      "&:hover": {
                        backgroundColor: "rgba(219,39,119,0.08)",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        justifyContent: "center",
                        mr: open ? 3 : "auto",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        opacity: open ? 1 : 0,
                        textAlign: "right",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </StyledDrawer>

      {/* Main Content */}
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
