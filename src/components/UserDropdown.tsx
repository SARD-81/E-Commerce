import {
  Menu,
  MenuItem,
  IconButton,
  ClickAwayListener,
  Box,
  Typography,
} from "@mui/material";
import { IoChevronDownSharp } from "react-icons/io5";
import { useState, useRef } from "react";
import useAuthStore from "../state-management/stores/useAuthStore";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { logout } = useAuthStore((state) => ({
    logout: state.logout,
  }));
  const navigate = useNavigate();

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate("/");
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
            کاربر
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
          <MenuItem
            onClick={() => navigate("/profile")}
            sx={{
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "21px",
              textAlign: "right",
              px: 1,
              py: 1,
              ":hover": {
                backgroundColor: "#DB277714",
                color: "#DB2777",
              },
            }}
          >
            پروفایل
          </MenuItem>
          <MenuItem
            onClick={handleLogout}
            sx={{
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "21px",
              textAlign: "right",
              px: 1,
              py: 1,
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

export default UserDropdown;
