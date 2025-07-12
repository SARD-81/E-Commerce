import { Box, Button, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Preloader from "../../components/Preloader";
import useGetAllCategories from "../../hooks/useCategories";
import useDeleteProduct from "../../hooks/useDeleteProduct";
import type { IEditProduct } from "../../hooks/useEditProduct";
import useEditProduct from "../../hooks/useEditProduct";
import useProductById from "../../hooks/useProductById";
import useUploadImage from "../../hooks/useUploadImage";
import UploadImage from "./ProductUploadImage";
import { useEffect } from "react";

const EditProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEditProduct>();
  const { data: categories } = useGetAllCategories();
  const { mutate: deleteProduct } = useDeleteProduct();
  const { mutate: uploadImage, data: uploadedImage } = useUploadImage();
  const { id } = useParams();
  const { data: product, isLoading } = useProductById(id);
  const { mutate } = useEditProduct(uploadedImage?.image);

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        price: product.price,
        description: product.description,
        quantity: product.quantity,
      });
    }
  }, [product, reset]);
  const onSubmit = (data: IEditProduct) => {
    mutate(data);
  };

  function handleDelete(): void {
    deleteProduct();
  }
  if (isLoading) <Preloader />;

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
        <Typography variant="h5">ویرایش محصول</Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-6"
        >
          <Box component="div">
            <UploadImage
              onUploadImage={(file) => uploadImage(file)}
              defaultImageUrl={product?.image}
            />
          </Box>
          <Box>
            <label htmlFor="productName">نام</label>
            <input
              id="name"
              {...register("name", {
                required: true,
                minLength: 3,
              })}
              placeholder="نام محصول خود را وارد نمایید"
              defaultValue={product?.name}
              className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
            />
            {errors.name?.type === "required" && (
              <p className="text-error text-sm">این فیلد اجباری است</p>
            )}
            {errors.name?.type === "minLength" && (
              <p className="text-error text-sm">حداقل باید 3 کارکتر باشد</p>
            )}
          </Box>
          <Box className="flex items-center justify-center gap-8">
            <div className="w-1/2">
              <label htmlFor="productPrice">قیمت</label>
              <input
                type="number"
                {...register("price")}
                defaultValue={product?.price}
                id="productPrice"
                placeholder="قیمت محصول خود را وارد نمایید"
                className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="category">دسته‌بندی</label>
              <select
                id="category"
                {...register("category", { required: false })}
                className="appearance-none cursor-pointer w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
              >
                <option value="">انتخاب دسته‌بندی</option>
                {categories?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </Box>
          <Box className="flex flex-col gap-3">
            <label htmlFor="productDesc">توضیحات</label>
            <textarea
              id="productDesc"
              rows={4}
              {...register("description")}
              defaultValue={product?.description}
              placeholder="توضیحات محصول خود را وارد نمایید"
              className="w-full p-2 outline-none border border-[#CED2D7] rounded-lg bg-white resize-none"
            ></textarea>
          </Box>
          <Box className="flex items-center justify-center gap-8">
            <div className="w-1/2">
              <label htmlFor="productQuantity">تعداد قابل خرید</label>
              <input
                type="number"
                {...register("quantity")}
                defaultValue={product?.quantity}
                id="productQuantity"
                placeholder="تعداد را وارد نمایید"
                className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="productStatus">موجودی</label>
              <select
                id="productStatus"
                name="status"
                className="appearance-none cursor-pointer w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
              >
                <option value="in-stock">موجود</option>
                <option value="out-of-stock">ناموجود</option>
              </select>
            </div>
          </Box>
          <Box component="section" className="flex gap-8">
            <Button
              type="submit"
              variant="contained"
              disabled={isLoading}
              className={`${
                isLoading ? "w-[100px]" : ""
              } w-[15.5%] py-1 rounded-lg bg-[#22C55E] shadow-none whitespace-nowrap`}
            >
              {isLoading ? "در حال پردازش..." : "بروزرسانی محصول"}
            </Button>
          </Box>
        </form>
        <Button
          variant="contained"
          disabled={isLoading}
          onClick={handleDelete}
          className={`${
            isLoading ? "w-[100px]" : ""
          } w-[15.5%] py-1 rounded-lg cursor-pointer bg-[#B71D18] shadow-none whitespace-nowrap`}
        >
          {isLoading ? "در حال پردازش..." : "حذف محصول"}
        </Button>
      </Box>
    </Container>
  );
};

export default EditProduct;
