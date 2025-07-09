import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
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
      toast.success("Product created successfully");
      navigate("/");
    },
    onError: (error) => toast.error(error.message),
  });
};

export default useCreateProduct;
