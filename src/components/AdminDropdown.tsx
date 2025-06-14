import {
  Menu,
  MenuItem,
  IconButton,
  Typography,
  ClickAwayListener,
  Box,
} from "@mui/material";
import { IoChevronDownSharp } from "react-icons/io5";
import { useState, useRef } from "react";

const AdminDropdown = () => {
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
            "داشبورد",
            "محصول جدید",
            "مدیریت کاربران",
            "سفارشات",
            "پروفایل",
            "خروج از حساب",
          ].map((item, index) => (
            <MenuItem
              key={index}
              onClick={handleClose}
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
              {item}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </ClickAwayListener>
  );
};

export default AdminDropdown;
