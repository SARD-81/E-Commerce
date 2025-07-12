import { useMutation } from "@tanstack/react-query";
import type { ReviewPayload } from "../types/ReviewPayload";
import server from "../utils/axios";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";

const useSubmitReview = () => {
  return useMutation({
    mutationFn: async ({ productId, comment, rating }: ReviewPayload) => {
      await server.post(`/products/${productId}/reviews`, {
        comment,
        rating,
      });
    },
    onSuccess: () => toast.success("نظر شما با موفقیت ثبت شد."),
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
