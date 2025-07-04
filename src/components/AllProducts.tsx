import axios from "axios";
import { useEffect, useState } from "react";
import ProductCardAllProducts from "./ProductCardAllProducts";
import type { Product } from "../types/Product";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://qbc9.liara.run/api/products/allproducts"
        );
        setProducts(res.data);
      } catch (error) {
        console.error("خطا در دریافت محصولات:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>در حال دریافت محصولات...</p>;

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {products.map((product) => (
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
    </div>
  );
};

export default AllProducts;
