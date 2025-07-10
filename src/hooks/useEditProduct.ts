import { useMutation, useQueryClient } from "@tanstack/react-query";
import server from "../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export interface IEditProduct {
  name: string;
  price: number;
  category: string;
  description: string;
  quantity: number;
}

const useEditProduct = (image: string | undefined) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  return useMutation({
    mutationKey: ["update-product"],
    mutationFn: (data: IEditProduct) =>
      server.put(
        `/products/${id}`,
        { ...data, image },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-products"] });
      toast.success("محصول با موفقیت آپدیت شد");
      navigate("/all-product");
    },
  });
};

export default useEditProduct;
