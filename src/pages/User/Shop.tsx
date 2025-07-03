import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import ShopPageFilter from "../../components/ShopPageFilter";
import { CategoryMockData } from "../../mockData/CategoryMockData";
import type { FilterProductType } from "../../types/filter";
import type { ProductType } from "../../types/Product";
import server from "../../utils/axios";
import { Box } from "@mui/material";

const Shop = () => {
  const [productsResponse, setProductsResponse] = useState<ProductType>({
    loading: false,
    data: [],
    error: null,
  });

  const [filters, setFilters] = useState<FilterProductType>({
    categories: [],
    price: [],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProductsResponse({ loading: true, data: [], error: null });
        const res = await server.get("products/allproducts");
        setProductsResponse({
          loading: false,
          data: res.data,
          error: null,
        });
      } catch (error) {
        setProductsResponse({
          loading: false,
          data: [],
          error: `Failed to fetch products: ${error}`,
        });
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryFilter = (categoryId: string) => {
    const temp = { ...filters };
    temp.categories = [categoryId];
    setFilters(temp);
  };

  const handlePriceFilter = (price: string) => {
    const priceTemp = { ...filters };
    priceTemp.price = [Number(price)];
    setFilters(priceTemp);
  };

  const handleDeleteFilter = () => {
    setFilters({
      categories: [],
      price: [],
    });
  };

  if (productsResponse.loading) {
    return <div>Loading...</div>;
  }

  if (productsResponse.error) {
    return <div>Error: {productsResponse.error}</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: "32px",
        paddingTop: "24px",
        paddingRight: "32px",

        backgroundColor: "#EEEFF1",
      }}
    >
      <ShopPageFilter
        onPriceFilter={handlePriceFilter}
        onDeleteFilter={handleDeleteFilter}
        categories={CategoryMockData}
        onCategoryFilter={handleCategoryFilter}
      />
      <Box
        sx={{
          display: "flex",
          gap: "32px",
          width: "75%",
          flexWrap: "wrap",
        }}
      >
        {productsResponse.data.map((product) => (

          <ProductCard
            title={product.name}
            price={product.price}
            imageSrc={product.image}
            productId={product._id}
            description={product.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Shop;
