import {
  Box,
  ClickAwayListener,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../state-management/stores/useAuthStore";

const AdminDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const { id, isAdmin, logout } = useAuthStore((state) => ({
    id: state.id,
    isAdmin: state.isAdmin,
    logout: state.logout,
  }));

  // only render when user is admin
  if (!id || !isAdmin) return null;

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleNavigation = (path: string) => {
    handleClose();
    navigate(path);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
          textAlign: "right",
        }}
      >
        <IconButton
          onClick={handleToggle}
          ref={buttonRef}
          disableRipple
          disableFocusRipple
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "8px",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            alignItems: "center",
            color: "text.primary",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <IoChevronDownSharp
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.1s ease",
              marginTop: "4px",
            }}
          />
          <Typography variant="body1" component="span">
            ادمین
          </Typography>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "bottom", horizontal: "right" }}
          PaperProps={{
            sx: {
              width: 169,
              borderRadius: "8px",
              border: "1px solid #CED2D7",
              boxShadow: 3,
              py: 1,
              px: 1,
            },
          }}
        >
          {[
            { text: "داشبورد", path: "/dashboard" },
            { text: "محصول جدید", path: "/products/new" },
            { text: "مدیریت کاربران", path: "/users" },
            { text: "سفارشات", path: "/orders" },
            { text: "پروفایل", path: "/profile" },
          ].map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => handleNavigation(item.path)}
              sx={{
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "21px",
                px: 1,
                py: 1,
                textAlign: "right",
                ":hover": {
                  backgroundColor: "#DB277714",
                  color: "#DB2777",
                },
              }}
            >
              {item.text}
            </MenuItem>
          ))}
          <MenuItem
            onClick={handleLogout}
            sx={{
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "21px",
              px: 1,
              py: 1,
              textAlign: "right",
              ":hover": {
                backgroundColor: "#DB277714",
                color: "#DB2777",
              },
            }}
          >
            خروج از حساب
          </MenuItem>
        </Menu>
      </Box>
    </ClickAwayListener>
  );
};

export default AdminDropdown;
