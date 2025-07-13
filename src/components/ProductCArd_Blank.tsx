import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteItem from "./heartButton";
import type { ProductResponseType } from "../types/Product";

interface ProductCard_BlankProps {
  product: ProductResponseType;
  productId: number | string;
  title: string;
  price: number;
  imageSrc: string;
  alt?: string;
  size: "small" | "large";
}
const ProductCArd_Blank = ({
  product,
  productId,
  size = "small",
  title,
  price,
  imageSrc,
  alt,
}: ProductCard_BlankProps) => {
  const navigate = useNavigate();

  const handleToggleFavorite = (
    itemId: string | number,
    isFavorite: boolean
  ) => {
    console.log(itemId, isFavorite);
  };

  const imageSize: { width: number; height: number } =
    size === "small"
      ? { width: 350, height: 335 }
      : { width: 405, height: 385 };

  return (
    <Box
      style={{
        width: imageSize.width,
      }}
      sx={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        overflow: "hidden",
        padding: "16px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        ":hover": {
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        },
      }}
      onClick={() => navigate(`/product-page/${productId}`)}
    >
      <FavoriteItem product={product} onToggleFavorite={handleToggleFavorite} />
      <Box
        component="img"
        sx={{
          borderRadius: "12px",
          marginBottom: "16px",
          backgroundColor: "#797979",
          cursor: "pointer",
          ":hover": {
            scale: 1.05,
            transition: "transform 1000ms ease-in-out",
          },
        }}
        src={imageSrc}
        alt={!alt ? "product_card_blank" : alt}
        width={imageSize.width}
        height={imageSize.height}
        data-product-id={productId}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography component="p" variant="body1">
          {title.length > 11 ? "..." : ""}
          {title.substring(0, 12)}
        </Typography>
        <Box sx={{ background: "#831747", px: 1, py: 1, borderRadius: "25px" }}>
          <Typography
            component="p"
            variant="body1"
            sx={{ color: "#FFFFFF", fontSize: "10px" }}
          >
            {price} تومان
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCArd_Blank;
