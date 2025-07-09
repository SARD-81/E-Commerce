import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Button, 
  Menu, 
  MenuItem, 
  Box,
  Typography
} from "@mui/material";
import useAuthStore from "../state-management/stores/useAuthStore";
import useLogout from "../hooks/useLogout";

const NavDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const isAdmin = useAuthStore((state) => state.isAdmin);
  const { mutate: logout } = useLogout();
  
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleClose();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        id="nav-dropdown-button"
        aria-controls={open ? "nav-dropdown-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined"
        size="small"
        sx={{
          minWidth: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          textTransform: "none",
          color: "text.primary",
          borderColor: "divider",
          "&:hover": {
            borderColor: "primary.main",
            backgroundColor: "action.hover"
          }
        }}
      >
        <Typography variant="body2">
          {isAdmin ? "ادمین" : "کاربر"}
        </Typography>
        <Box
          sx={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease"
          }}
        >
          ▼
        </Box>
      </Button>
      
      <Menu
        id="nav-dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "nav-dropdown-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            width: 200,
            borderRadius: 1,
            boxShadow: 3,
            mt: 1,
            py: 0.5,
            "& .MuiMenuItem-root": {
              py: 1.5,
              px: 2,
              fontSize: "0.875rem",
              "&:hover": {
                backgroundColor: "rgba(219,39,119,0.08)",
                color: "#DB2777",
              }
            }
          }
        }}
      >
        {isAdmin && (
          <MenuItem onClick={() => handleNavigation("/dashboard")}>
            داشبورد
          </MenuItem>
        )}
        {isAdmin && (
          <MenuItem onClick={() => handleNavigation("/create-product")}>
            محصول جدید
          </MenuItem>
        )}
        {isAdmin && (
          <MenuItem onClick={() => handleNavigation("/users")}>
            مدیریت کاربران
          </MenuItem>
        )}
        {isAdmin && (
          <MenuItem onClick={() => handleNavigation("/orders")}>
            سفارشات
          </MenuItem>
        )}

        <MenuItem onClick={() => handleNavigation("/profile")}>
          پروفایل
        </MenuItem>
        <MenuItem onClick={() => logout()}>
          خروج از حساب
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default NavDropdown;