import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import useAllProducts from "../../hooks/useAllProducts";
import Preloader from "../../components/Preloader";
const ProductAllProduct = () => {
  const { data: products, isLoading, error } = useAllProducts();
  const navigate = useNavigate();
  const handleEdit = (productId: string | number) => {
    navigate(`/edit-product/${productId}`);
  };
  return (
    <section className="grid grid-cols-3 gap-10">
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <p className="text-red-500">{error.message}</p>
      ) : (
        products?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            title={product.name}
            price={product.price}
            imageSrc={product.image}
            productId={product._id}
            description={product.description}
            onEdit={handleEdit}
          />
        ))
      )}
    </section>
  );
};

export default ProductAllProduct;
