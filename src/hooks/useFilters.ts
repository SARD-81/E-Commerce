import server from "../utils/axios";
import { useMutation } from "@tanstack/react-query";
import type { FilterProductType } from "../types/filter";
import type { ProductResponseType } from "../types/Product";

const useFilterProducts = () => {
  return useMutation<ProductResponseType[], Error, FilterProductType>({
    mutationFn: async (payload: FilterProductType) => {
      const res = await server.post("/products/filtered", payload);
      return res.data;
    },
  });
};

export default useFilterProducts;
