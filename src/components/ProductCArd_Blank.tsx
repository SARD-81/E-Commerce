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
      ? { width: 200, height: 200 }
      : { width: 250, height: 250 };

  return (
    <Box
      style={{
        width: imageSize.width,
      }}
      sx={{
        position: "relative",
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
