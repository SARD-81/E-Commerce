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

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();
  const { id, logout } = useAuthStore((state) => ({
    id: state.id,
    logout: state.logout,
  }));

  if (!id) return null;

  if (!user || loading) {
    return null;
  }

  const isOpen = Boolean(anchorEl);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl((prev) => (prev ? null : e.currentTarget));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  const menuItems = [{ text: "پروفایل", path: "/profile" }];

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
            gap: 1,
            alignItems: "center",
            color: "text.primary",
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          <IoChevronDownSharp
            style={{
              transform: isOpen ? "rotate(180deg)" : undefined,
              transition: "transform 0.1s ease",
            }}
          />
          <Typography>کاربر</Typography>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "bottom", horizontal: "right" }}
          PaperProps={{
            sx: { width: 169, borderRadius: 1, boxShadow: 3, p: 1 },
          }}
        >
          {menuItems.map(({ text, path }, idx) => (
            <MenuItem
              key={idx}
              onClick={() => {
                handleClose();
                navigate(path);
              }}
              sx={{
                borderRadius: 1,
                textAlign: "right",
                ":hover": {
                  backgroundColor: "rgba(219,39,119,0.08)",
                  color: "#DB2777",
                },
              }}
            >
              {text}
            </MenuItem>
          ))}
          <MenuItem
            onClick={handleLogout}
            sx={{
              borderRadius: 1,
              textAlign: "right",
              ":hover": {
                backgroundColor: "rgba(219,39,119,0.08)",
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

export default UserDropdown;
