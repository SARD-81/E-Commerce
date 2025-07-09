import { useQuery } from "@tanstack/react-query";
import server from "../utils/axios";
import type { CategoryType } from "../types/Category";

const useGetAllCategories = () => {
  const response = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      server.get<CategoryType[]>("category/categories").then((res) => res.data),
  });
  return {
    ...response,
    data: response.data || [],
  };
};

export default useGetAllCategories;
