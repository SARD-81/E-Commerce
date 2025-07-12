import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import ShopPageFilter from "../../components/ShopPageFilter";
import type { FilterProductType } from "../../types/filter";
import { Box } from "@mui/material";
import useAllProducts from "../../hooks/useAllProducts";
import useGetAllCategories from "../../hooks/useCategories";
import useFilterProducts from "../../hooks/useFilters";
import { useNavigate } from "react-router-dom";

const Shop = () => {
const navigate = useNavigate();


  const [filters, setFilters] = useState<FilterProductType>({
    categories: [],
    price: [],
  });

  const { data, isError, isLoading, error } = useAllProducts();

  const { data: allCategories, isLoading: allCategoriesIsLoading } =
    useGetAllCategories();

  const { mutate: filterMutation, data: filteredProducts } =
    useFilterProducts();


  const handleCategoryFilter = (categoryId: string) => {
    const temp = { ...filters };
    temp.categories = [categoryId];
    setFilters(temp);
    filterMutation(temp);

  };

  const handlePriceFilter = (price: string) => {
    const priceTemp = { ...filters };
    priceTemp.price = [1, Number(price)];
    setFilters(priceTemp);
    filterMutation(priceTemp);

  };

  const handleDeleteFilter = () => {
    setFilters({
      categories: [],
      price: [],
    });
  };

  if (isLoading || allCategoriesIsLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const dataToDisplay = filteredProducts || data;

  console.log("dataToDisplay", dataToDisplay);

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
        categories={allCategories}
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
        {dataToDisplay &&
          dataToDisplay.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              title={product.name}
              price={product.price}
              imageSrc={product.image}
              productId={product._id}
              description={product.description}
              onShowMore={()=>navigate(`/product-page/${product._id}`)}
            />
          ))}
      </Box>
    </Box>

  );
};

export default Shop;
