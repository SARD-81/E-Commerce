import { Box, Button, Container, Typography } from "@mui/material";
import { useRef, useState, type ChangeEvent } from "react";
import server from "../../utils/axios";
import { toast } from "react-toastify";
import type { ApiResponse } from "../../types/ApiResponse";
import type { CreateProductFormResponse } from "../../types/Product";
const ProductCreate = () => {
  const [createProductForm, setCreateProductForm] = useState<
    ApiResponse<CreateProductFormResponse>
  >({
    loading: false,
    data: null,
    error: null,
  });
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    brand: "",
    description: "",
    quantity: "",
    status: "in-stock",
    productImage: null as File | null,
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

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { productName, price, brand, description, quantity, productImage } =
      formData;

    if (
      !productName ||
      !price ||
      !brand ||
      !description ||
      !quantity ||
      !productImage
    ) {
      toast.error("لطفا تمام فیلد ها رو تکمیل نمایید و یک عکس بارگذاری کنید");
      return;
    }

    setCreateProductForm({
      loading: true,
      data: null,
      error: null,
    });

    const payload = new FormData();
    payload.append("name", productName);
    payload.append("description", description);
    payload.append("price", price);
    payload.append("quantity", quantity);
    payload.append("status", formData.status);
    payload.append("image", productImage);

    try {
      const response = await server.post("products", payload);

      toast.success("محصول با موفقیت ساخته شد🎉");

      setCreateProductForm({
        loading: false,
        data: response.data,
        error: null,
      });

      setFormData({
        productName: "",
        price: "",
        description: "",
        brand: "",
        quantity: "",
        status: "in-stock",
        productImage: null,
      });

      setPreview("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "خطا در ایجاد محصول. لطفاً دوباره تلاش کنید.";
      toast.error(message);

      setCreateProductForm({
        loading: false,
        data: null,
        error: message,
      });
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
              {formData.productImage
                ? `فایل انتخاب شده: ${formData.productImage}`
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
              value={formData.productName}
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
                value={formData.status}
                className="appearance-none cursor-pointer w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
                onChange={handleChange}
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
              disabled={createProductForm.loading}
              className={`${
                createProductForm.loading ? "w-[100px]" : ""
              } w-[15.5%] py-1 rounded-lg shadow-none bg-[#DB2777] whitespace-nowrap hover:bg-[#BE1D64]`}
            >
              {createProductForm.loading
                ? "در حال پردازش..."
                : "ساخت محصول جدید"}
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default ProductCreate;
