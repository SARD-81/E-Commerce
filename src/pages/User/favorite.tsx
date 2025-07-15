import { Box } from "@mui/material";
import ProductCArd_Blank from "../../components/ProductCArd_Blank";
import { useFavoritesStore } from "../../state-management/stores/useFavoritesStore";

const Favorite = () => {
  const { favorites } = useFavoritesStore();

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {favorites.map((product) => (
        <ProductCArd_Blank
          product={product}
          key={product._id}
          productId={product._id}
          title={product.name}
          price={product.price}
          size="large"
          imageSrc={product.image}
        />
      ))}
    </Box>
  );
};

export default Favorite;
