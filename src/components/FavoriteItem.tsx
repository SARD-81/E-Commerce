import React from "react";
import emptyHeart from "../assets/non-favorite.png";
import favorite from "../assets/favoriteIcon.png";
import { Box } from "@mui/material";
import { useFavoriteStore } from "../state-management/stores/useFavoritesStore";
import type { ProductResponseType } from "../types/Product";

interface FavoriteItemProps {
  product: ProductResponseType;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({ product }) => {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const isFavorite = favorites.some((item) => item._id === product?._id);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(product);
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
        zIndex: 10,
      }}
      onClick={handleClick}
      src={heartImageSrc}
      alt={isFavorite ? "Red heart icon" : "Empty heart icon"}
    />
  );
};

export default FavoriteItem;
