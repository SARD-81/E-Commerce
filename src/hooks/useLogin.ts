import { useMutation } from "@tanstack/react-query";
import type { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuthStore from "../state-management/stores/useAuthStore";
import type { AuthResponseModel, LoginPayloadModel } from "../types/auth.model";
import axiosInstance from "../utils/axios";
import authError from "../errors/authError";

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
      toast.success("You've been successfully loggin.");
    },
    onError(error) {
      const err = error as AxiosError;
      const status = err.response?.status as keyof typeof authError;
      const message = authError[status];
      toast.warning(message);
    },
  });
};

export default useLogin;
