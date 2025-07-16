import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ReviewPayload } from "../types/ReviewPayload";
import server from "../utils/axios";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";
import { useParams } from "react-router-dom";

const useSubmitReview = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ comment, rating }: ReviewPayload) => {
      await server.post(`/products/${id}/reviews`, { comment, rating });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [""] });
      toast.success("نظر شما با موفقیت ثبت شد.");
    },
    onError: (error) => {
      const err = error as AxiosError<{ message: string }>;
      const message =
        err?.response?.data?.message ||
        err.message ||
        "ثبت نظر با خطا مواجه شد";
      toast.error(message);
    },
  });
};

export default useSubmitReview;
