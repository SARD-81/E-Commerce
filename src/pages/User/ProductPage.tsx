import { Box, Container, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import brand from "../../assets/brand.svg";
import comment from "../../assets/comment.svg";
import laptop from "../../assets/light-laptop.svg";
import scoreImg from "../../assets/socre.svg";
import stock from "../../assets/stock.svg";
import tedad from "../../assets/tedad.svg";
import timeUpdate from "../../assets/time-for-update.svg";

import AddToCartButton from "../../components/ProductPageReusables/ProductPageAddToCartButton";
import CommentSection from "../../components/ProductPageReusables/ProductPageCommentSection";
import ProductImage from "../../components/ProductPageReusables/ProductPageImage";
import ProductInfo from "../../components/ProductPageReusables/ProductPageInfo";
import ProductStats from "../../components/ProductPageReusables/ProductPageStats";
import ProductRatingSelector from "../../components/ProductPageReusables/ProductRatingSelector";

const ProductPage = () => {
  const theme = useTheme();
  const [rate, setRate] = useState(1);
  const [score, setScore] = useState("");

  const handleRateChange = (e) => setRate(e.target.value);
  const handleScoreChange = (e) => setScore(e.target.value);

  const statsLeft = [
    { icon: scoreImg, label: "امتیاز", value: "۵" },
    { icon: tedad, label: "تعداد", value: "۵۲" },
    { icon: stock, label: "موجودی", value: "۱۰" },
  ];

  const statsRight = [
    { icon: brand, label: "برند", value: "اپل" },
    { icon: timeUpdate, label: "زمان بروزرسانی", value: "چند لحظه قبل" },
    { icon: comment, label: "نظرات", value: "۴۲۰۲" },
  ];

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: 5, mt: 3 }}>
        <Box
          sx={{
            display: "flex",
            gap: 15,
            alignItems: "start",
            justifyContent: "center",
            flexDirection: { xs: "column", md: "row" },
            mb: 5,
          }}
        >
          {/* Image */}
          <Box>
            <ProductImage src={laptop} alt="laptop" />
          </Box>

          {/* Info */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <ProductInfo />

            <Stack spacing={1} mb={2}>
              <section className="flex justify-between">
                <ProductStats stats={statsLeft} />
                <ProductStats stats={statsRight} />
              </section>
            </Stack>

            <Box
              sx={{
                marginBottom: 3,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ProductRatingSelector
                rate={rate}
                onRateChange={handleRateChange}
              />
            </Box>

            <AddToCartButton />
          </Box>
        </Box>

        {/* Comments */}
        <CommentSection score={score} onScoreChange={handleScoreChange} />
      </Container>
    </Box>
  );
};

export default ProductPage;
