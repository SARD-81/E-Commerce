import { Box, Button, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import useCategories from "../../hooks/useCategories";
import useCreateProduct, {
  type CreateProductType,
} from "../../hooks/useCreateProduct";
import useUploadImage from "../../hooks/useUploadImage";
import UploadImage from "./ProductUploadImage";
const ProductCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductType>();

  const { data: categories } = useCategories();
  const { mutate: uploadImage, data: UploadedImage } = useUploadImage();
  const { mutate, isPending } = useCreateProduct(UploadedImage?.image);

  const onSubmit = (data: CreateProductType) => {
    mutate(data);
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
          <Box component="div">
            <UploadImage onUploadImage={(file) => uploadImage(file)} />
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
                id="productPrice"
                placeholder="قیمت محصول خود را وارد نمایید"
                className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="productBrand">دسته بندی</label>

              <select {...register("category")} id="category">
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
          <Box>
            <Button
              type="submit"
              variant="contained"
              disabled={isPending}
              className={`${
                isPending ? "w-[100px]" : ""
              } w-[15.5%] py-1 rounded-lg shadow-none bg-[#DB2777] whitespace-nowrap hover:bg-[#BE1D64]`}
            >
              {isPending ? "در حال پردازش..." : "ساخت محصول جدید"}
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ProductCreate;
