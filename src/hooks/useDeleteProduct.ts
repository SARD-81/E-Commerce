import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import server from "../utils/axios";
import { toast } from "react-toastify";

const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  return useMutation({
    mutationKey: ["delete-product"],
    mutationFn: () => server.delete(`products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-products"] });
      toast.success("محصول به موفقیت حدف شد");
      navigate("/all-product");
    },
  });
};

export default useDeleteProduct;
