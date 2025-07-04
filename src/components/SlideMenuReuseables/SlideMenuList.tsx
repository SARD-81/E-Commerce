import List from "@mui/material/List";
import { type ReactNode } from "react";
import SlideMenuItem from "./SlideMenuItem";

interface IMenuListProps {
  items: {
    text: string;
    icon: ReactNode;
    to: string; 
  }[];
  open: boolean;
  selectedIndex: number;
  onItemClick: (id: number) => void;
}

const SlideMenuList = ({
  items,
  open,
  selectedIndex,
  onItemClick,
}: IMenuListProps) => (
  <List>
    {items.map((item, index) => (
      <SlideMenuItem
        key={item.text}
        text={item.text}
        open={open}
        selected={selectedIndex === index}
        onClick={() => onItemClick(index)}
        icon={item.icon}
        to={item.to} 
      />
    ))}
  </List>
);

export default SlideMenuList;