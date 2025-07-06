import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import ShopPageFilter from "../../components/ShopPageFilter";
import { CategoryMockData } from "../../mockData/CategoryMockData";
import type { FilterProductType } from "../../types/filter";
import { Box } from "@mui/material";
import useAllProducts from "../../hooks/useAllProducts";

const Shop = () => {
  const [filters, setFilters] = useState<FilterProductType>({
    categories: [],
    price: [],
  });

  const { data, isError, isLoading, error } = useAllProducts();

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
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
        {data?.map((product) => (
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
