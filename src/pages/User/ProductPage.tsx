import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  type SelectChangeEvent,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import moment from "moment-jalaali";
import { useState } from "react";
import brand from "../../assets/brand.svg";
import comment from "../../assets/comment.svg";
import laptop from "../../assets/light-laptop.svg";
import scoreImg from "../../assets/socre.svg";
import stock from "../../assets/stock.svg";
import tedad from "../../assets/tedad.svg";
import timeUpdate from "../../assets/time-for-update.svg";

import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import AddToCartButton from "../../components/ProductPageReusables/ProductPageAddToCartButton";
import ProductImage from "../../components/ProductPageReusables/ProductPageImage";
import ProductInfo from "../../components/ProductPageReusables/ProductPageInfo";
import ProductStats from "../../components/ProductPageReusables/ProductPageStats";
import ProductRatingSelector from "../../components/ProductPageReusables/ProductRatingSelector";
import useAllProducts from "../../hooks/useAllProducts";
import useProduct from "../../hooks/useProduct";
import useSubmitReview from "../../hooks/useSubmitReview";
import type { Review } from "../../types/Product";

interface IUserComments {
  score: string;
  comment: string;
  name?: null | string;
}
const ProductPage = () => {
  const { id: productId } = useParams();
  const { data: product, isLoading } = useProduct(productId);
  const { mutate: SubmitReview, isPending } = useSubmitReview();
  const { data: products } = useAllProducts();
  const [userComments, setUserComments] = useState<IUserComments[]>([]);
  const [currentComment, setCurrentComment] = useState("");

  const allReviews: Review[] = [];
  products?.forEach((product) => {
    if (product.reviews && product.reviews.length > 0) {
      allReviews.push(...product.reviews);
    }
  });
  console.log(allReviews);
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState<
    "submit" | "list" | "related"
  >("submit");
  const [rate, setRate] = useState(1);
  const [score, setScore] = useState("");

  const handleSectionToggle = (section: "submit" | "list" | "related") => {
    setActiveSection(section);
  };

  const handleRateChange = (e: SelectChangeEvent<number>) => {
    setRate(e.target.value);
  };

  const handleScoreChange = (e: SelectChangeEvent) => {
    setScore(e.target.value);
  };

  const statsLeft = [
    { icon: scoreImg, label: "امتیاز", value: product?.rating },
    { icon: tedad, label: "تعداد", value: product?.quantity },
    { icon: stock, label: "موجودی", value: product?.countInStock },
  ];

  const statsRight = [
    { icon: brand, label: "برند", value: product?.category.name },
    { icon: timeUpdate, label: "زمان بروزرسانی", value: product?.updatedAt },
    { icon: comment, label: "نظرات", value: product?.numReviews },
  ];
  const toPersianDigits = (str: string) => {
    return str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
  };
  const jalaaliDate = toPersianDigits(
    moment().locale("fa").format("jYYYY/jMM/jDD")
  );
  return (
    <Box sx={{ bgcolor: theme.palette.background.default, minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: 5, mt: 3 }}>
        {/* Main Content */}
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
          {/* Product Image */}
          <Box>
            <ProductImage src={product?.image} alt={product?.name} />
          </Box>

          {/* Product Info */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <ProductInfo
              name={product?.name}
              description={product?.description}
              price={product?.price}
            />

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

        {/* Section Selector */}
        <section id="comment-container" className="flex gap-20">
          <Stack
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              gap: 2,
              mb: 3,
            }}
          >
            <Button
              variant="text"
              onClick={() => handleSectionToggle("submit")}
              sx={{
                color:
                  activeSection === "submit" ? "primary.main" : "text.primary",
                fontWeight: activeSection === "submit" ? "bold" : "normal",
              }}
            >
              ثبت نظر
            </Button>

            <Button
              variant="text"
              onClick={() => handleSectionToggle("list")}
              sx={{
                color:
                  activeSection === "list" ? "primary.main" : "text.primary",
                fontWeight: activeSection === "list" ? "bold" : "normal",
              }}
            >
              مشاهده نظرات
            </Button>

            <Button
              variant="text"
              onClick={() => handleSectionToggle("related")}
              sx={{
                color:
                  activeSection === "related" ? "primary.main" : "text.primary",
                fontWeight: activeSection === "related" ? "bold" : "normal",
              }}
            >
              محصولات مرتبط
            </Button>
          </Stack>

          {/* Active Section */}
          {activeSection === "submit" && (
            <Box component="section" sx={{ p: 3, borderRadius: "10px" }}>
              <Grid container spacing={4}>
                <Grid>
                  <Stack spacing={3}>
                    <FormControl fullWidth>
                      <InputLabel id="score-select-label">امتیاز</InputLabel>
                      <Select
                        labelId="score-select-label"
                        value={score}
                        onChange={handleScoreChange}
                        label="امتیاز"
                        sx={{ bgcolor: theme.palette.background.paper }}
                      >
                        <MenuItem value="">
                          <em>انتخاب امتیاز</em>
                        </MenuItem>
                        {[1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((val) => (
                          <MenuItem key={val} value={val}>
                            {val}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <TextField
                      label="نظر خود را وارد نمایید"
                      multiline
                      rows={5}
                      fullWidth
                      value={currentComment}
                      onChange={(e) => setCurrentComment(e.target.value)}
                      sx={{
                        bgcolor: theme.palette.background.paper,
                        width: "400px",
                      }}
                    />
                  </Stack>

                  <Button
                    variant="contained"
                    disabled={isPending}
                    sx={{
                      backgroundColor: "#DB2777",
                      mt: 3,
                      width: "fit-content",
                    }}
                    onClick={() => {
                      if (score && currentComment) {
                        setUserComments((prev) => [
                          ...prev,
                          { score, comment: currentComment },
                        ]);

                        // clear inputs AFTER state is set
                        setScore("");
                        setCurrentComment("");
                      }
                    }}
                  >
                    {isPending ? "در حال ثبت نظر" : "ثبت نظر "}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}

          {activeSection === "list" && (
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" mb={4} gutterBottom>
                نظرات کاربران
              </Typography>
              <Stack spacing={2}>
                {allReviews.length === 0 ? (
                  <Typography>نظری ثبت نشده است</Typography>
                ) : (
                  allReviews?.map((review) => (
                    <section
                      key={review._id}
                      className="bg-[#E6E8EB] rounded-lg min-w-3xl p-4 space-y-4"
                    >
                      <div className="flex text-[#58616C] items-center justify-between">
                        <p>{review.name}</p>
                        <span className="ml-2">{review.createdAt}</span>
                      </div>
                      <div className="space-y-6">
                        <p className="text-black">{review.comment}</p>
                        <Rating
                          name="read-only-rating"
                          value={review.rating}
                          precision={0.5}
                          readOnly
                          sx={{ direction: "ltr" }}
                        />
                      </div>
                    </section>
                  ))
                )}
              </Stack>
            </Box>
          )}

          {activeSection === "related" && (
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                محصولات مرتبط
              </Typography>
              <Stack>
                <Grid container spacing={2} mt={2}>
                  {[1, 2, 3, 4].map((id) => (
                    <Grid key={id}>
                      <ProductCard
                        productId={id}
                        title={`محصول ${id}`}
                        price={1000000 + id * 100000}
                        description={`توضیحات محصول ${id}`}
                        imageSrc={laptop}
                        onShowMore={() =>
                          console.log(`Show more for product ${id}`)
                        }
                        onAddToBasket={() =>
                          console.log(`Add product ${id} to basket`)
                        }
                      />
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Box>
          )}
        </section>
      </Container>
    </Box>
  );
};

export default ProductPage;
