import { useMutation, useQueryClient } from "@tanstack/react-query";
import server from "../utils/axios";
import { toast } from "react-toastify";

const useProductUpload = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: FormData) => server.post("/upload", payload),
    onSuccess: () => {
      toast.success("عکس با موفقیت آپلود شد🎉");
      queryClient.invalidateQueries({ queryKey: ["all-products"] });
    },
    onError: (error) => {
      console.error("Upload error:", error);
      toast.error("خطا در آپلود عکس. لطفا دوباره تلاش کنید");
    },
  });
};

export default useProductUpload;
