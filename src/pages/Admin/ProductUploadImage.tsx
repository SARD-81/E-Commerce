import { Box, Button, Typography } from "@mui/material";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "react-toastify";
import useProductUpload from "../../hooks/useProductUpload";

const ProductUploadImage = () => {
  const { mutate, isPending } = useProductUpload();
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    imageInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!image) {
      toast.error("لطفا عکس آپلود کنید");
      return;
    }
    const fd = new FormData();
    fd.append("image", image);
    for (const [key, value] of fd.entries()) {
      console.log(`${key}:ss`, value);
    }

    mutate(fd);
  };
  return (
    <Box className="mt-3">
      <Typography variant="h5" sx={{ mb: "30px" }}>
        آپلود عکس
      </Typography>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6"
      >
        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-1/2 h-1/4 object-cover rounded"
          />
        )}
        <Box
          onClick={handleClick}
          className=""
          sx={{
            border: "1px dashed #CED2D7",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
            mb: 4,
            height: "100px",
            width: "70%",
            backgroundColor: "#fff",
          }}
        >
          <Typography sx={{ alignSelf: "center", color: "#58616C" }}>
            {image ? `فایل انتخاب شده ${image.name}` : "آپلود فایل"}
          </Typography>
          <input
            type="file"
            className="hidden"
            ref={imageInputRef}
            accept="image/*"
            name="image"
            // id={}
            onChange={handleFileChange}
          />
        </Box>
        <Box mt={2}>
          <Button
            type="submit"
            variant="contained"
            disabled={isPending || !image}
            className="w-[100px] py-1 rounded-lg shadow-none bg-[#DB2777] whitespace-nowrap hover:bg-[#BE1D64]"
          >
            {isPending ? "در حال پردازش" : "آپلود عکس"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ProductUploadImage;
