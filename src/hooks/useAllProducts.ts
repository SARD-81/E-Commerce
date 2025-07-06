import { useQuery } from "@tanstack/react-query";
import server from "../utils/axios";
import type { ProductResponseType } from "../types/Product";
const useAllProducts = () => {
  const fetchAllProducts = async () => {
    const response = await server.get("/products/allproducts");
    return response.data;
  };

  return useQuery<ProductResponseType[]>({
    queryKey: ["all-products"],
    queryFn: fetchAllProducts,
    staleTime: 5 * 60 * 1000,
  });
};

export default useAllProducts;
