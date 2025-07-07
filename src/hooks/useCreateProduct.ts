import server from "../utils/axios";
import { toast } from "react-toastify";
import type { CreateProductPayload } from "../types/Product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateProductPayload) =>
      server.post("/products", payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-products"] });
      toast.success("محصول با موفقیت ساخته شد🎉");
    },
    onError: () => {
      const message = "خطا در ایجاد محصول. لطفاً دوباره تلاش کنید.";
      toast.error(message);
    },
  });
};

export default useCreateProduct;
