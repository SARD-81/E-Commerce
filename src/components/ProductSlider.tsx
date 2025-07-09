import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import LocalGroceryStoreSharpIcon from "@mui/icons-material/LocalGroceryStoreSharp";
import WidgetsSharpIcon from "@mui/icons-material/WidgetsSharp";
import WatchLaterSharpIcon from "@mui/icons-material/WatchLaterSharp";
import QuestionAnswerSharpIcon from "@mui/icons-material/QuestionAnswerSharp";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import useNewProduct from "../hooks/useNewProducts";

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    data: newProduct,
    isError: isErrorNewProduct,
    isLoading: isLoadingNewProduct,
    error: errorNewProduct,
  } = useNewProduct();

  if (newProduct === undefined) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newProduct.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newProduct.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (isLoadingNewProduct) {
    return <div>Loading...</div>;
  }

  if (isErrorNewProduct) {
    return <div>Error: {errorNewProduct.message}</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
      }}
    >
      <Box
        sx={{
          width: "full",
          overflow: "hidden",
        }}
        dir="rtl"
      >
        <Box
          sx={{
            position: "relative",
            boxShadow: "var(--tw-inset-shadow)",
          }}
        >
          <Box
            component="img"
            alt="Product"
            src={newProduct[currentIndex].image}
            style={{ minHeight: "400px" }}
            sx={{
              width: "full",
              height: "auto",
              objectFit: "cover",
              opacity: 1,
              transition: "opacity 500ms ease-in-out",
              borderRadius: "8px",
            }}
          />

          <Button
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "calc(1/2 * 100%)",
              left: 0,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              },
              "&:focus": {
                outline: "none",
              },
              borderRadius: "50px",
              padding: "15px",
              transition: "background-color 300ms ease-in-out",
            }}
          >
            <ArrowBackIosSharpIcon
              sx={{
                height: "24px",
                width: "24px",
                color: "#1e2939",
              }}
            />
          </Button>
          <Button
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "calc(1/2 * 100%)",
              right: 0,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              },
              "&:focus": {
                outline: "none",
              },
              borderRadius: "50px",
              padding: "15px",
              transition: "background-color 300ms ease-in-out",
            }}
          >
            <ArrowForwardIosSharpIcon
              sx={{
                height: "24px",
                width: "24px",
                color: "#1e2939",
              }}
            />
          </Button>
        </Box>

        <Box
          sx={{
            paddingTop: "6px",
            display: "flex",
            gap: "6px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "16px",
              rowGap: "16px",
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1e2939",
                marginBottom: 0,
              }}
            >
              {newProduct[currentIndex].name}
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                textAlign:'left',
                color: "#101828",
              }}
            >
              {newProduct[currentIndex].price} تومان
            </Typography>
            <Typography
              sx={{
                color: "#364153",
                fontSize: "1rem",
                lineHeight: 1.625,
              }}
            >
              {newProduct[currentIndex].description}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              width: "60%",
              rowGap: "16px",
              fontSize: "14px",
              color: " #4a5565",
              marginBottom: "24px",
            }}
          >
            <Typography>
              <StorefrontSharpIcon /> برند :{" "}
              {newProduct[currentIndex].category.name}
            </Typography>
            <Typography>
              <StarPurple500SharpIcon /> امتیاز :{" "}
              {newProduct[currentIndex].rating}{" "}
            </Typography>
            <Typography>
              <LocalGroceryStoreSharpIcon /> تعداد :{" "}
              {newProduct[currentIndex].quantity}
            </Typography>
            <Typography>
              <WatchLaterSharpIcon /> زمان بروزرسانی :{" "}
              {newProduct[currentIndex].updatedAt}{" "}
            </Typography>
            <Typography>
              <QuestionAnswerSharpIcon /> نظرات :{" "}
              {newProduct[currentIndex].numReviews}{" "}
            </Typography>
            <Typography>
              <WidgetsSharpIcon /> موجودی :{" "}
              {newProduct[currentIndex].countInStock}{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductSlider;
