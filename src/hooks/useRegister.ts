import type {
  AuthResponseModel,
  RegisterPayloadModel,
} from "../types/auth.model";
import axiosInstance from "../utils/axios";
import useAuthStore from "../state-management/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import registrationError from "../errors/registrationError";

const useRegister = () => {
  const navigate = useNavigate();
  const { setIsAdmin, setId } = useAuthStore();

  return useMutation({
    mutationFn: async (payload: RegisterPayloadModel) => {
      const res = await axiosInstance.post<
        RegisterPayloadModel,
        AxiosResponse<AuthResponseModel>
      >("/users", payload);

      setIsAdmin(res.data.isAdmin);
      setId(res.data._id);

      return res.data;
    },
    onSuccess: () => {
      navigate("/");
      toast.success("Registration successful.");
    },
    onError: (error) => {
      const err = error as AxiosError;
      const status = err.response?.status as keyof typeof registrationError;
      const message = registrationError[status];
      toast.warning(message);
    },
  });
};

export default useRegister;
