import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import server from "../../utils/axios";
import type { ProductType } from "../../types/Product";
const ProductAllProduct = () => {
  const [productsResponse, setProductResponse] = useState<ProductType>({
    loading: false,
    data: [],
    error: null,
  });
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProductResponse({ loading: true, data: [], error: null });
        const response = await server.get("products/allproducts");
        console.log("✅ API response:", response);
        setProductResponse({
          loading: false,
          data: response.data,
          error: null,
        });
      } catch (error) {
        setProductResponse({
          loading: false,
          data: [],
          error: `Failed to fetch products: ${error}`,
        });
      }
    };
    fetchProducts();
  }, []);
  return (
    <section className="grid grid-cols-3 gap-10">
      {productsResponse.loading ? (
        <p>Loading ...</p>
      ) : productsResponse.error ? (
        <p className="text-red-500">{productsResponse.error}</p>
      ) : (
        productsResponse.data?.map((product) => (
          <ProductCard
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
