import React from "react";
import { Box, Container } from "@mui/material";
import ProductCardAllProducts from "./ProductCardAllProducts";

const products = [
  {
    productId: 1,
    title: "Apple iPhone 14 Pro",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است، فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه‌گانه ...",
    price: 10000000,
    date: "۳۱ مرداد ۱۴۰۳",
    imageSrc: "https://via.placeholder.com/120x120",
  },
  {
    productId: 2,
    title: "Apple iPhone 14 Pro",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است، فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه‌گانه ...",
    price: 10000000,
    date: "۳۱ مرداد ۱۴۰۳",
    imageSrc: "https://via.placeholder.com/120x120",
  },
  {
    productId: 3,
    title: "Apple iPhone 14 Pro",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است، فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه‌گانه ...",
    price: 10000000,
    date: "۳۱ مرداد ۱۴۰۳",
    imageSrc: "https://via.placeholder.com/120x120",
  },
  {
    productId: 4,
    title: "Apple iPhone 14 Pro",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است، فناوری ProMotion، تراشه A16 Bionic و سیستم دوربین سه‌گانه ...",
    price: 10000000,
    date: "۳۱ مرداد ۱۴۰۳",
    imageSrc: "https://via.placeholder.com/120x120",
  },
];

export default function AllProducts() {
  return (
    <Container sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "space-between" },
          gap: 2,
        }}
      >
        {products.map((product) => (
          <Box
            key={product.productId}
            sx={{
              flex: {
                xs: "1 1 100%", // موبایل: کل عرض
                md: "1 1 calc(50% - 16px)", // دسکتاپ: نصف عرض با فاصله بینشون
              },
            }}
          >
            <ProductCardAllProducts {...product} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
