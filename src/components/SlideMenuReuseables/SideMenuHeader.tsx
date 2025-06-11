import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const SideMenuHeaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface ISideMenuHeaderProps {
  open: boolean;
  onDrawerOpen: () => void;
}

const SideMenuHeader = ({ open, onDrawerOpen }: ISideMenuHeaderProps) => (
  <Box>
    <SideMenuHeaderContainer>
      <IconButton onClick={onDrawerOpen}>
        {open ? <ChevronRightIcon /> : <MenuIcon />}
      </IconButton>
    </SideMenuHeaderContainer>
    <Divider />
  </Box>
);

export default SideMenuHeader;
