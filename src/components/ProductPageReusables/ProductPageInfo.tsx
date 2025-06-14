import { Typography } from "@mui/material";

const ProductInfo = () => (
  <>
    <Typography variant="h5" gutterBottom>
      Apple MacBook Air M2
    </Typography>
    <Typography variant="body2" gutterBottom>
      مک بوک ایر با تراشه M2 دارای صفحه نمایش 13.6 اینچی رتینا است. تا 18 ساعت
      عمر باتری و طراحی بدون فن.
    </Typography>
    <Typography variant="h4" color="text.primary" sx={{ my: 2 }}>
      ۱۰,۰۰۰ تومان
    </Typography>
  </>
);

export default ProductInfo;
