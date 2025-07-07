import { useQuery } from "@tanstack/react-query";
import server from "../utils/axios";
import type { ProductResponseType } from "../types/Product";

const useProduct = (id?: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () =>
      server
        .get<ProductResponseType>(`/products/${id}`)
        .then((res) => res.data),
  });
};

export default useProduct;
