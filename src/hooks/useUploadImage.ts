import { useMutation } from "@tanstack/react-query";
import server from "../utils/axios";

const useUploadImage = () => {
  return useMutation({
    mutationKey: ["upload-image"],
    mutationFn: (data: File) => {
      const formData = new FormData();
      formData.append("image", data);
      return server
        .post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => res.data);
    },
  });
};

export default useUploadImage;
