import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAuthStore from "../state-management/stores/useAuthStore";
import server from "../utils/axios";

type LoginPayload = {
  email: string;
  password: string;
};

const useLogin = () => {
  const { setId, setIsAdmin } = useAuthStore();
  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const response = await server.post("/users/auth", payload);
      const { _id, isAdmin } = response.data;
      // write to zustand
      setId(_id);
      setIsAdmin(isAdmin);
    },
    onSuccess: () => toast.success("ورود با موفقیت انجام شد."),
    onError: (error: any) => {
      const message =
        error.message ||
        error.response?.data?.message ||
        "خطا در ورود. لطفا دوباره تلاش کنید.";
      toast.error(message);
    },
  });
};

export default useLogin;
