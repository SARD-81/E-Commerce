import  axiosInstance  from "../utils/axios";
import useAuthStore from "../state-management/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useLogout = () => {
  const reset = useAuthStore((state) => state.reset);

  return useMutation({
    mutationFn: () => axiosInstance.post("/users/logout"),
    onSuccess: () => {
      reset();
      toast.success("خروج موفق");
    },
    onError: () => {
      toast.warning("خطا در خروج");
    },
  });
};

export default useLogout;