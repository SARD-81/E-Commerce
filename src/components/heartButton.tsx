import React, { useState } from "react";
import emptyHeart from "../assets/non-favorite.png";
import favorite from '../assets/favoriteIcon.png';
import { Box } from "@mui/material";
import { useFavoriteStore } from "../hooks/useFavoriteStore";
import type { Product } from "../types/Product";

interface FavoriteItemProps {
  product: Product;
  // itemId: string | number;
  // initialIsFavorite?: boolean;
  // onToggleFavorite: (itemId: string | number, isFavorite: boolean) => void;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({
  product
  // itemId,
  // initialIsFavorite = false,
  // onToggleFavorite,
}) => {
  const {favorites, toggleFavorite} = useFavoriteStore();
  const isFavorite = favorites.some(item => item.id === product.id);
  // const [isFavorite, setIsFavorite] = useState<boolean>(initialIsFavorite);

  const handleClick = () => {
    toggleFavorite(product);
    // const newFavoriteState = !isFavorite;
    // setIsFavorite(newFavoriteState);
    // onToggleFavorite(itemId, newFavoriteState);
  };

  const heartImageSrc = isFavorite ? favorite : emptyHeart;

  return (
    <Box
      component="img"
      sx={{
        position: "absolute",
        top: "10px",
        right: "10px",
        cursor: "pointer",
      }}
      onClick={handleClick}
      src={heartImageSrc}
      alt={isFavorite ? "Red heart icon" : "Empty heart icon"}
    />
  );
};

export default FavoriteItem;
