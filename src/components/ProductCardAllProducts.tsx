import React from "react";
import { Box, Typography, Button, Card, CardMedia } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

interface ProductCardAllProductsProps {
  productId: number | string;
  title: string;
  description: string;
  price: number;
  date: string;
  imageSrc: string;
  onShowMore?: (id: number | string) => void;
}

const ProductCardAllProducts = ({
  productId,
  title,
  description,
  price,
  date,
  imageSrc,
  onShowMore,
}: ProductCardAllProductsProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#F1F5F9",
        borderRadius: 2,
        boxShadow: 0,
        p: 2,
        mb: 2,
      }}
    >
      {/* تصویر محصول سمت راست */}
      <CardMedia
        component="img"
        sx={{ width: 120, height: 120, borderRadius: 2 }}
        image={imageSrc}
        alt="product-image"
      />

      {/* متن‌ها و دکمه سمت چپ */}
      <Box sx={{ flex: 1, pr: 2 }}>
        <Typography
          variant="caption"
          display="block"
          color="#58616C"
          textAlign="left"
        >
          {date}
        </Typography>
        <Typography variant="h6" fontWeight="bold" textAlign="right">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="right"
          mt={1}
        >
          {description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              backgroundColor: "#DB2777",
              borderRadius: "8px",
            }}
            endIcon={<KeyboardBackspaceIcon />}
            onClick={() => onShowMore?.(productId)}
          >
            مشاهده بیشتر
          </Button>
          <Typography fontWeight="bold">
            {price.toLocaleString()} تومان
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCardAllProducts;
