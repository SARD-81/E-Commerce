import { useMutation } from "@tanstack/react-query";
import server from "../utils/axios";

type ProfileInputValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userId: string;
};

const updateUser = async (data: ProfileInputValues) => {
  const response = await server.put(`users/${data.userId}`, data);
  return response.data as ProfileInputValues;
};

const useUpdateUser = () => {
  const mutation = useMutation({
    mutationFn: (data: ProfileInputValues) => {
      return updateUser(data);
    },
  });

  return mutation;
};
export default useUpdateUser;
