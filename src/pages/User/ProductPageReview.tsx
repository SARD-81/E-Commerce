import SideMenu from "../../components/SideMenu";
import laptop from "../../assets/light-laptop.svg";
import scoreImg from "../../assets/socre.svg";
import tedad from "../../assets/tedad.svg";
import stock from "../../assets/stock.svg";
import brand from "../../assets/brand.svg";
import timeUpdate from "../../assets/time-for-update.svg";
import comment from "../../assets/comment.svg";
import { Container, Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import ProductImage from "../../components/ProductPageReusables/ProductPageImage";
import ProductInfo from "../../components/ProductPageReusables/ProductPageInfo";
import ProductStats from "../../components/ProductPageReusables/ProductPageStats";
import ProductRatingSelector from "../../components/ProductPageReusables/ProductRatingSelector";
import AddToCartButton from "../../components/ProductPageReusables/ProductPageAddToCartButton";
import ProductPageConstantComment from "../../components/ProductPageReusables/ProductPageConstantComment";

const ProductPageReview = () => {
  const theme = useTheme();
  const [rate, setRate] = useState(1);

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
      <SideMenu>
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
          <div className="flex justify-between">
            <ProductPageConstantComment />
            <Box
              sx={{
                borderRadius: 2,
                p: 2,
                mb: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  علی موسوی
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  ۱۴۰۳/۰۵/۳۱
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{ textAlign: "right", lineHeight: 1.8 }}
              >
                متن پیام اینجا وارد میشود که میتواند یه متن بلند باشد برای مثال
                لورم ایپسوم یک متن ساختگی هست برای کارهای گرافیکی
              </Typography>

              <Stack direction="row" justifyContent="flex-end">
                <Rating
                  name="read-only"
                  sx={{
                    direction: "ltr",
                  }}
                  value={4}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </Box>
          </div>
        </Container>
      </SideMenu>
    </Box>
  );
};

export default ProductPageReview;
