import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authError from "../errors/authError";
import useAuthStore from "../state-management/stores/useAuthStore";
import axiosInstance from "../utils/axios";

const useLogout = () => {
  const reset = useAuthStore((state) => state.reset);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => axiosInstance.post("/users/logout"),
    onSuccess: () => {
      reset();
      navigate("/auth?mode=login");
      toast.success("You've been successfully logged out");
    },
    onError: (error) => {
      const status = error.response?.status;
      toast.warning(authError[status]);
    },
  });
};

export default useLogout;
