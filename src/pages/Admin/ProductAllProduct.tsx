import ProductCard from "../../components/ProductCard";
import useAllProducts from "../../hooks/useAllProducts";
const ProductAllProduct = () => {
  const { data: products, isLoading, error } = useAllProducts();
  return (
    <section className="grid grid-cols-3 gap-10">
      {isLoading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p className="text-red-500">{error.message}</p>
      ) : (
        products?.map((product) => (
          <ProductCard
            key={product._id}
            title={product.name}
            price={product.price}
            imageSrc={product.image}
            productId={product._id}
            description={product.description}
          />
        ))
      )}
    </section>
  );
};

export default ProductAllProduct;
