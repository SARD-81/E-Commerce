import { Box, Container, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

type ProductFormData = {
  productName: string;
  productPrice: number;
  productBrand: string;
  productDesc: string;
  productQuantity: number;
  productStatus: string;
};

const ProductCreate = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>();

  const [filename, setFileName] = useState("");
  const [preview, setPreview] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data: ProductFormData) => {
    const imageFile = fileInputRef.current?.files?.[0];
    const productData = {
      ...data,
      image: imageFile,
    };

    console.log("Submitting Product:", productData);

    reset();
    setFileName("");
    setPreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          mt: 4,
        }}
      >
        <Typography variant="h5">محصول جدید</Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-6"
        >
          <Box
            onClick={handleClick}
            sx={{
              border: "1px dashed #CED2D7",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              mb: 4,
              height: "150px",
              backgroundColor: "#fff",
            }}
          >
            <Typography sx={{ alignSelf: "center", color: "#58616C" }}>
              {filename ? `فایل انتخاب شده: ${filename}` : "آپلود عکس"}
            </Typography>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </Box>
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-40 h-40 object-cover rounded"
            />
          )}
          <Box>
            <label htmlFor="productName">نام</label>
            <input
              id="productName"
              placeholder="نام محصول خود را وارد نمایید"
              className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
              {...register("productName", { required: true })}
            />
            {errors.productName && (
              <span className="text-red-500 text-sm">این فیلد اجباری است</span>
            )}
          </Box>
          <Box className="flex items-center justify-center gap-8">
            <div className="w-1/2">
              <label htmlFor="productPrice">قیمت</label>
              <input
                type="number"
                id="productPrice"
                placeholder="قیمت محصول خود را وارد نمایید"
                className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
                {...register("productPrice", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
              {errors.productPrice && (
                <span className="text-red-500 text-sm">قیمت الزامی است</span>
              )}
            </div>
            <div className="w-1/2">
              <label htmlFor="productBrand">برند</label>
              <input
                type="text"
                id="productBrand"
                placeholder="برند محصول را وارد نمایید"
                className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
                {...register("productBrand", { required: true })}
              />
              {errors.productBrand && (
                <span className="text-red-500 text-sm">برند الزامی است</span>
              )}
            </div>
          </Box>
          <Box className="flex flex-col gap-3">
            <label htmlFor="productDesc">توضیحات</label>
            <textarea
              id="productDesc"
              rows={4}
              placeholder="توضیحات محصول خود را وارد نمایید"
              className="w-full p-2 outline-none border border-[#CED2D7] rounded-lg bg-white resize-none"
              {...register("productDesc")}
            ></textarea>
          </Box>
          <Box className="flex items-center justify-center gap-8">
            <div className="w-1/2">
              <label htmlFor="productQuantity">تعداد قابل خرید</label>
              <input
                type="number"
                id="productQuantity"
                placeholder="تعداد را وارد نمایید"
                className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
                {...register("productQuantity", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="productStatus">موجودی</label>
              <select
                id="productStatus"
                className="appearance-none cursor-pointer w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
                {...register("productStatus")}
              >
                <option value="in-stock">موجود</option>
                <option value="out-of-stock">ناموجود</option>
              </select>
            </div>
          </Box>
          <Box className="w-1/5 text-white flex items-center rounded-lg bg-[#DB2777]">
            <button type="submit" className="m-auto h-[45px] cursor-pointer">
              ساخت محصول جدید
            </button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ProductCreate;
