import { Box, Button, Container, Typography } from "@mui/material";
import { useRef, useState, type ChangeEvent } from "react";
import { toast } from "react-toastify";
import useCreateProduct from "../../hooks/useCreateProduct";
const ProductCreate = () => {
  const { mutate, isPending } = useCreateProduct();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    brand: "",
    description: "",
    quantity: "",
    image: "",
  });
  const [preview, setPreview] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        productImage: file,
      }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, price, brand, description, quantity, image } = formData;

    if (!name || !price || !brand || !description || !quantity || !image) {
      toast.error("لطفا تمام فیلد ها رو تکمیل نمایید و یک عکس بارگذاری کنید");
      return;
    }

    mutate({
      ...formData,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
    });
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
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
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
              {formData.image
                ? `فایل انتخاب شده: ${formData.image}`
                : "آپلود عکس"}
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
              name="productName"
              value={formData.name}
              placeholder="نام محصول خود را وارد نمایید"
              className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
              onChange={handleChange}
            />
          </Box>
          <Box className="flex items-center justify-center gap-8">
            <div className="w-1/2">
              <label htmlFor="productPrice">قیمت</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                id="productPrice"
                placeholder="قیمت محصول خود را وارد نمایید"
                className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="productBrand">برند</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                id="productBrand"
                placeholder="برند محصول را وارد نمایید"
                className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
                onChange={handleChange}
              />
            </div>
          </Box>
          <Box className="flex flex-col gap-3">
            <label htmlFor="productDesc">توضیحات</label>
            <textarea
              id="productDesc"
              name="description"
              value={formData.description}
              rows={4}
              placeholder="توضیحات محصول خود را وارد نمایید"
              className="w-full p-2 outline-none border border-[#CED2D7] rounded-lg bg-white resize-none"
              onChange={handleChange}
            ></textarea>
          </Box>
          <Box className="flex items-center justify-center gap-8">
            <div className="w-1/2">
              <label htmlFor="productQuantity">تعداد قابل خرید</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                id="productQuantity"
                placeholder="تعداد را وارد نمایید"
                className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
                onChange={handleChange}
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
