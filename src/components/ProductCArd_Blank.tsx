import { Box, Typography } from "@mui/material";

interface ProductCard_BlankProps {
  productId: number | string;
  title: string;
  price: number;
  imageSrc: string;
  size: "small" | "large";
}
const ProductCArd_Blank = ({
  size = "small",
  title,
  price,
  imageSrc,
}: ProductCard_BlankProps) => {
  const imageSize: { width: number; height: number } =
    size === "small"
      ? { width: 200, height: 200 }
      : { width: 250, height: 250 };

  return (
    <Box
      style={{
        width: imageSize.width,
      }}
    >
      <Box
        component="img"
        className="rounded-xl mb-4 bg-[#797979]"
        src={imageSrc}
        alt="product_card_blank"
        width={imageSize.width}
        height={imageSize.height}
      />

      <Box className="flex justify-between items-center ">
        <Typography component="p" variant="body1" className="font-bold">
          {title}
        </Typography>
        <Box className="bg-[#831747]  px-2 rounded-full">
          <Typography
            component="p"
            variant="body1"
            className="text-white text-sm"
          >
            {price} تومان
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCArd_Blank;
