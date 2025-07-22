import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ReviewPayload } from "../types/ReviewPayload";
import server from "../utils/axios";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import reviewError from "../errors/reviewError";

const useSubmitReview = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ comment, rating }: ReviewPayload) => {
      await server.post(`/products/${id}/reviews`, { comment, rating });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [""] });
      toast.success("Your comment was submitted successfully.");
    },
    onError: (error) => {
      const err = error as AxiosError;
      const status = err.response?.status as keyof typeof reviewError;
      const message = reviewError[status];
      toast.warning(message);
    },
  });
};

export default useSubmitReview;
