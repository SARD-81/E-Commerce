import { useEffect } from "react";
import { toast } from "react-toastify";
import ProductCArd_Blank from "../../components/ProductCArd_Blank";
import ProductSlider from "../../components/ProductSlider";
import { Box, Typography } from "@mui/material";
import useAuthStore from "../../state-management/stores/useAuthStore";
import useAllProducts from "../../hooks/useAllProducts";
import useNewProduct from "../../hooks/useNewProducts";

const Home = () => {
  const { flashMessage, clearFlashMessage } = useAuthStore();
  const toastId = "flash-success-toast";
  useEffect(() => {
    if (flashMessage) {
      if (!toast.isActive(toastId)) {
        toast.success(flashMessage, { toastId });
      }
      setTimeout(() => {
        clearFlashMessage();
      }, 100);
    }
  }, [flashMessage, clearFlashMessage]);

  const {
    data: allProducts,
    isError: isErrorAllProducts,
    isLoading: isLoadingAllProducts,
    error: errorAllProduct,
  } = useAllProducts();

  const {
    data: newProduct,
    isError: isErrorNewProduct,
    isLoading: isLoadingNewProduct,
    error: errorNewProduct,
  } = useNewProduct();

  if (isLoadingAllProducts) {
    return <div>Loading...</div>;
  }

  if (isErrorAllProducts) {
    return <div>Error: {errorAllProduct.message}</div>;
  }

  if (isLoadingNewProduct) {
    return <div>Loading...</div>;
  }

  if (isErrorNewProduct) {
    return <div>Error: {errorNewProduct.message}</div>;
  }
  return (
    <Box sx={{backgroundColor : "#F3F4F6" , padding : "20px"}}>
      <Box
        sx={{
          display: "flex",
          marginBottom: "40px",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "40%",
          }}
        >
          <Box>
            {newProduct?.slice(0, 2).map((product) => (
              <ProductCArd_Blank
                size="small"
                imageSrc={product.image}
                title={product.name}
                price={product.price}
                productId={product._id}
              />
            ))}
          </Box>
          <Box>
            {newProduct?.slice(3, 5).map((product) => (
              <ProductCArd_Blank
                size="small"
                imageSrc={product.image}
                title={product.name}
                price={product.price}
                productId={product._id}
              />
            ))}
          </Box>
        </Box>
        <ProductSlider />
      </Box>
      <Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "4px",
          }}
        >
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
              padding: "4px 10px",
              color: "#FFFFFF",
              borderRadius: "25px",
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
          {allProducts?.map((product) => (
            <ProductCArd_Blank
              size="large"
              imageSrc={product.image}
              title={product.name}
              price={product.price}
              productId={product._id}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
