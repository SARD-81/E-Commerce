import React from "react";
import { Box, Typography } from "@mui/material";
import ProductCArd_Blank from "./ProductCArd_Blank";

interface ProductCard_BlankProps {
  productId: number | string;
  title: string;
  price: number;
  imageSrc: string;
  size: "small" | "large";
}

const relatedProducts: ProductCard_BlankProps[] = [
  {
    productId: 1,
    title: "Apple iPad Pro 12.9-inch",
    price: 72000000,
    imageSrc: "https://via.placeholder.com/350x300",
    size: "small",
  },
  {
    productId: 2,
    title: "Apple iPad Pro 12.9-inch",
    price: 72000000,
    imageSrc: "https://via.placeholder.com/350x300",
    size: "small",
  },
  {
    productId: 3,
    title: "Apple iPad Pro 12.9-inch",
    price: 72000000,
    imageSrc: "https://via.placeholder.com/350x300",
    size: "small",
  },
  {
    productId: 4,
    title: "Apple iPad Pro 12.9-inch",
    price: 72000000,
    imageSrc: "https://via.placeholder.com/350x300",
    size: "small",
  },
];

export default function RelatedProducts() {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography variant="h6" align="right" fontWeight="bold" mb={3}>
        محصولات مرتبط
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {relatedProducts.map((product) => (
          <Box key={product.productId}>
            <ProductCArd_Blank {...product} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
