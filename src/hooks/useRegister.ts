import type {
  AuthResponseModel,
  RegisterPayloadModel,
} from "../types/auth.model";
import axiosInstance from "../utils/axios";
import useAuthStore from "../state-management/stores/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

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
      toast.success("ثبت نام موفق");
    },
    onError: () => {
      toast.error("خطا در ثبت نام");
    },
  });
};

export default useRegister;
