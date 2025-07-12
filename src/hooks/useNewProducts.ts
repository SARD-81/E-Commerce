import { useQuery } from "@tanstack/react-query";
import server from "../utils/axios";
import type { ProductResponseType } from "../types/Product";

const useNewProduct = () => {
  const fetchNewProducts = async () => {
    const response = await server.get("products/sort/new");
    return response.data;
  };

  return useQuery<ProductResponseType[]>({
    queryKey: ["new-products"],
    queryFn: fetchNewProducts,
    staleTime: 5 * 60 * 1000,
  });
};

export default useNewProduct;
