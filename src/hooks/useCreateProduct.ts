import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import server from "../utils/axios";

export interface CreateProductType {
  name: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
  image: string;
}

const useCreateProduct = (image: string | undefined) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["new-product"],
    mutationFn: (data: CreateProductType) => {
      return server.post(
        "/products",
        { ...data, image: image },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-products"] });
      toast.success("Product has been successfully created");
      navigate("/");
    },
    onError: (error) => toast.error(error.message),
  });
};

export default useCreateProduct;
