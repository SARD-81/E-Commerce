import { useQuery } from "@tanstack/react-query";
import server from "../utils/axios";
import type { CategoryType } from "../types/Category";

const useCategories = () => {
  return useQuery<CategoryType[]>({
    queryKey: ["category-list"],
    queryFn: () => server.get("/category/categories").then((res) => res.data),
    staleTime: 5 * 60 * 1000,
  });
};

export default useCategories;
