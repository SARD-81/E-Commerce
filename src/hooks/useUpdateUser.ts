import { useMutation } from "@tanstack/react-query";
import server from "../utils/axios";

type ProfileInputValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const updateUser = async (data: ProfileInputValues) => {
  const response = await server.put("users/profile", data);
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
