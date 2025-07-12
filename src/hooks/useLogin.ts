import type { AuthResponseModel, LoginPayloadModel } from "../types/auth.model";
import  axiosInstance  from "../utils/axios";
import useAuthStore from "../state-management/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const useLogin = () => {
  const navigate = useNavigate();
  const { setIsAdmin, setId } = useAuthStore();

  return useMutation({
    mutationFn: async (payload: LoginPayloadModel) => {
      const res = await axiosInstance.post<
        LoginPayloadModel,
        AxiosResponse<AuthResponseModel>
      >("/users/auth", payload);

      setIsAdmin(res.data.isAdmin);
      setId(res.data._id);

      return res.data;
    },
    onSuccess: () => {
      navigate("/");
      toast.success("ورود موفق");
    },
    onError() {
      toast.error("خطا در ورود");
    },
  });
};

export default useLogin;