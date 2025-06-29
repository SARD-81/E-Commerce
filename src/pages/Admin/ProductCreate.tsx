import { Box, Container, Typography } from "@mui/material";
import { useRef, useState } from "react";

const ProductCreate = () => {
  const [filename, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
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
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
          }}
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
              onChange={handleChange}
            />
          </Box>
          <Box>
            <label htmlFor="product-name">نام</label>
            <input
              type="text"
              id="product-name"
              name="product-name"
              placeholder="نام محصول خود را وارد نمایید"
              className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white "
            />
          </Box>
          <Box className="flex items-center justify-center gap-8">
            <div className="w-1/2">
              <label htmlFor="product-price">قیمت</label>
              <input
                type="number"
                id="product-price"
                name="product-price"
                placeholder="قیمت محصول خود را وارد نمایید"
                className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="product-brand">برند</label>
              <input
                type="text"
                id="product-brand"
                name="product-brand"
                className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
                placeholder="برند محصول خود را وارد نمایید"
              />
            </div>
          </Box>
          <Box className="flex flex-col gap-3">
            <label htmlFor="product-desc">توضیحات</label>
            <textarea
              rows={4}
              name="product-desc"
              id="product-desc"
              placeholder="توضیحات محصول خود را وارد نمایید"
              className="w-full p-2 outline-none border border-[#CED2D7] rounded-lg bg-white resize-none"
            ></textarea>
          </Box>
          <Box className="flex items-center justify-center gap-8">
            <div className="w-1/2">
              <label htmlFor="product-price">
                تعداد قابل خرید را وارد نمایید
              </label>
              <input
                type="number"
                id="product-price"
                name="product-price"
                placeholder="قیمت محصول خود را وارد نمایید"
                className="w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="product-brand">موجودی</label>
              <select
                id="product-brand"
                name="product-brand"
                className="appearance-none cursor-pointer w-full mt-3 p-2 outline-none border border-[#CED2D7] rounded-lg bg-white"
              >
                <option className="color-[]" value="in-stock">
                  موجودی
                </option>
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
