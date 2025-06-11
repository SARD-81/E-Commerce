import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { type ReactNode } from "react";

interface IMenuItemProps {
  text: string;
  open: boolean;
  selected: boolean;
  onClick: () => void;
  icon: ReactNode;
}

const SlideMenuItem = ({
  text,
  open,
  selected,
  onClick,
  icon,
}: IMenuItemProps) => (
  <ListItem onClick={onClick} sx={{ display: "block" }}>
    <ListItemButton
      sx={{
        minHeight: 20,
        borderRadius: "10px",
        mb: 2,
        px: 0.5,
        "&:hover": { bgcolor: "rgba(219,39,119,0.1)" },
        justifyContent: open ? "initial" : "center",
        ...(selected && { bgcolor: "rgba(219,39,119,0.1)" }),
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          justifyContent: "center",
          mr: open ? 0 : "auto",
          color: selected ? "#db2777" : "inherit",
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={text}
        sx={{
          opacity: open ? 1 : 0,
          textAlign: "right",
          marginRight: open ? 1 : 0,
          color: selected ? "#db2777" : "inherit",
          fontWeight: selected ? 800 : "normal",
        }}
      />
    </ListItemButton>
  </ListItem>
);

export default SlideMenuItem;
