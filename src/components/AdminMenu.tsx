import {
  Menu,
  MenuItem,
  IconButton,
  ClickAwayListener,
  Box,
} from "@mui/material";
import { FiMenu } from "react-icons/fi";
import { useState, useRef } from "react";

const AdminMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box sx={{ position: "relative", display: "inline-block" }}>
        <IconButton
          onClick={handleToggle}
          ref={buttonRef}
          disableRipple
          disableFocusRipple
          sx={{
            fontSize: "24px",
            color: "#000",
            padding: 0,
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <FiMenu />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          PaperProps={{
            sx: {
              width: 169,
              borderRadius: "8px",
              border: "1px solid #CED2D7",
              boxShadow: 3,
              py: 1,
              px: 1,
              mt: 1,
            },
          }}
        >
          {["داشبورد", "محصول جدید", "مدیریت کاربران", "سفارشات"].map(
            (item, index) => (
              <MenuItem
                key={index}
                onClick={handleClose}
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "21px",
                  textAlign: "right",
                  borderRadius: "8px",
                  px: 1,
                  py: 1,
                  ":hover": {
                    backgroundColor: "#DB277714",
                    color: "#DB2777",
                  },
                }}
              >
                {item}
              </MenuItem>
            )
          )}
        </Menu>
      </Box>
    </ClickAwayListener>
  );
};

export default AdminMenu;
