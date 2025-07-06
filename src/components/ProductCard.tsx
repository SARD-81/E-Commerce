import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import shoppingCard from "../assets/shop.svg";
import { Box, Button, Typography } from "@mui/material";
import FavoriteItem from "./Favorite";

interface ProductCardProps {
  productId: number | string;
  title: string;
  price: number;
  description: string;
  imageSrc: string;
  onShowMore?: (productId: number | string) => void;
  onAddToBasket?: (productId: number | string) => void;
}

export default function wProductCard({
  productId,
  title,
  price,
  description,
  imageSrc,
  onShowMore,
  onAddToBasket,
}: ProductCardProps) {
  const handleToggleFavorite = (itemId: string | number, isFavorite: boolean) => {
    console.log(itemId, isFavorite);
  };

  return (
    <Box sx={{ width: "384px" }}>
      <Box
        sx={{
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "170px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box component="img" src={imageSrc} alt="product-picture" />
        <FavoriteItem
          itemId={productId}
          initialIsFavorite={false}
          onToggleFavorite={handleToggleFavorite}
        />
      </Box>

      <Box
        sx={{
          borderBottomLeftRadius: "6px",
          borderBottomRightRadius: "6px",
          backgroundColor: "#1F2937",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography component="p" variant="body1" sx={{ color: "#DB2777" }}>
            {price} تومان
          </Typography>
          <Typography
            component="p"
            variant="body1"
            sx={{ color: "#FFFFFF", fontSize: "20px", fontWeight: "bold" }}
          >
            {title}
          </Typography>
        </Box>
        <Typography className="text-[#9CA3AF] text-right">
          {description}
        </Typography>
        <Box className=" flex justify-between ">
          <Box
            component="img"
            sx={{
              borderRadius: "12px",
              marginBottom: "16px",
              backgroundColor: "#797979",
            }}
            src={shoppingCard}
            alt="product_card"
            onClick={() => onAddToBasket?.(productId)}
          />

          <Button
            variant="contained"
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#DB2777",
            }}
            onClick={() => onShowMore?.(productId)}
          >
            <KeyboardBackspaceIcon /> مشاهده بیشتر{" "}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
