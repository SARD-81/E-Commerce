import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const products = [
  {
    id: 1,
    title: "Apple iPad Pro 12.9-inch",
    price: "۱۰,۰۰۰ تومان",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Apple iPad Pro 12.9-inch",
    price: "۱۰,۰۰۰ تومان",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Apple iPad Pro 12.9-inch",
    price: "۱۰,۰۰۰ تومان",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Apple iPad Pro 12.9-inch",
    price: "۱۰,۰۰۰ تومان",
    image: "https://via.placeholder.com/300x200",
  },
];

const RelatedProducts: React.FC = () => {
  return (
    <Box sx={{ p: 2, direction: "rtl" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
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
        {products.map((product) => (
          <Box
            key={product.id}
            sx={{
              width: { xs: "100%", sm: "45%", md: "23%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
            }}
          >
            {/* تصویر محصول */}
            <Box
              sx={{
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#6C7885",
                height: 290,
              }}
            >
              {/* آیکن قلب د */}
              <IconButton
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  color: "#333",
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>

              <Box
                component="img"
                src={product.image}
                alt={product.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* اطلاعات پایین کارت */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 1,
                mt: 1,
              }}
            >
              {/* عنوان سمت راست */}
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  fontSize: 13,
                }}
              >
                {product.title}
              </Typography>
              {/* قیمت سمت چپ */}
              <Box
                sx={{
                  bgcolor: "#831747",
                  color: "#F8D4E4",
                  borderRadius: "999px",
                  px: 1.5,
                  py: 0.3,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {product.price}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RelatedProducts;
