import { useQuery } from "@tanstack/react-query";
import server from "../utils/axios";
import type { CategoryType } from "../types/Category";

const fetchCategories = async (): Promise<CategoryType[]> => {
  const { data } = await server.get("category/categories");
  return data;
};

const useGetAllCategories = () => {
  const { data = [], ...rest } = useQuery({
    queryKey: ["list-categories"],
    queryFn: fetchCategories,
  });

  return {
    data,
    ...rest,
  };
};

export default useGetAllCategories;
