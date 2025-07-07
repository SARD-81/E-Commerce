import useAllProducts from "../hooks/useAllProducts";
import ProductCardAllProducts from "./ProductCardAllProducts";
import { Box, Typography, CircularProgress } from "@mui/material";

const AllProducts = () => {
  const { data: products, isLoading, isError } = useAllProducts();

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );

  if (isError)
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography color="error">خطا در دریافت محصولات</Typography>
      </Box>
    );

  return (
    <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center" p={2}>
      {products?.map((product) => (
        <ProductCardAllProducts
          key={product._id}
          productId={product._id}
          title={product.name}
          price={product.price}
          imageSrc={product.image}
          description={product.description}
          date={product.createdAt}
        />
      ))}
    </Box>
  );
};

export default AllProducts;
