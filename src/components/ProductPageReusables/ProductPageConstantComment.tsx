import { Grid, Stack, Typography } from "@mui/material";

const ProductPageConstantComment = () => {
  return (
    <Grid>
      <Stack spacing={2}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          ثبت نظر
        </Typography>
        <Typography variant="body2">مشاهده نظرات</Typography>
        <Typography variant="body2">محصولات مرتبط</Typography>
      </Stack>
    </Grid>
  );
};

export default ProductPageConstantComment;
