import ProductCArd_Blank from "../../components/ProductCArd_Blank";
import pic from "../../assets/iphone-14-pro-model-unselect-gallery-1-202209.jpg";
import ProductSlider from "../../components/ProductSlider";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          marginBottom: "40px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "20%",
          }}
        >
          <Box>
            <ProductCArd_Blank
              size="small"
              imageSrc={pic}
              title="Apple iPad Pro 12.9-inch"
              price={1000}
              productId={1}
            />
            <ProductCArd_Blank
              size="small"
              imageSrc={pic}
              title="Apple iPad Pro 12.9-inch"
              price={1000}
              productId={1}
            />
          </Box>
          <Box>
            <ProductCArd_Blank
              size="small"
              imageSrc={pic}
              title="Apple iPad Pro 12.9-inch"
              price={1000}
              productId={1}
            />
            <ProductCArd_Blank
              size="small"
              imageSrc={pic}
              title="Apple iPad Pro 12.9-inch"
              price={1000}
              productId={1}
            />
          </Box>
        </Box>
        <ProductSlider />
      </Box>
      <Box className="">
        <Box className=" w-full flex justify-between items-center pb-4 ">
          <Typography
            component="p"
            variant="body1"
            sx={{
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            محصولات ویژه
          </Typography>
          <Typography
            component="p"
            variant="body1"
            sx={{
              padding: "8px 16px",
              color: "#FFFFFF",
              borderRadius: "50%",
              backgroundColor: "#DB2777",
            }}
          >
            فروشگاه
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <ProductCArd_Blank
            size="large"
            imageSrc={pic}
            title="Apple iPad Pro 12.9-inch"
            price={10000}
            productId={1}
          />
          <ProductCArd_Blank
            size="large"
            imageSrc={pic}
            title="Apple iPad Pro 12.9-inch"
            price={10000}
            productId={1}
          />
          <ProductCArd_Blank
            size="large"
            imageSrc={pic}
            title="Apple iPad Pro 12.9-inch"
            price={10000}
            productId={1}
          />
          <ProductCArd_Blank
            size="large"
            imageSrc={pic}
            title="Apple iPad Pro 12.9-inch"
            price={10000}
            productId={1}
          />
          <ProductCArd_Blank
            size="large"
            imageSrc={pic}
            title="Apple iPad Pro 12.9-inch"
            price={10000}
            productId={1}
          />
          <ProductCArd_Blank
            size="large"
            imageSrc={pic}
            title="Apple iPad Pro 12.9-inch"
            price={10000}
            productId={1}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
