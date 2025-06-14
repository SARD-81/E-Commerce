import {
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Typography,
} from "@mui/material";

const ProductRatingSelector = ({
  rate,
  onRateChange,
}: {
  rate: number;
  onRateChange: (e: any) => void;
}) => (
  <>
    <div className="flex justify-center items-center gap-2">
      <Typography variant="subtitle1" sx={{ fontWeight: 900, fontSize: 17 }}>
        ۵۰۰۰ نظر
      </Typography>
      <Rating
        name="half-rating"
        defaultValue={4.5}
        precision={0.5}
        size="small"
        sx={{ direction: "ltr" }}
      />
    </div>
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id="rate-select-label">{rate}</InputLabel>
      <Select
        labelId="rate-select-label"
        id="rate-select"
        value={rate}
        onChange={onRateChange}
        autoWidth
        label="rate"
      >
        {[1, 2, 3, 4, 5].map((val) => (
          <MenuItem key={val} value={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </>
);

export default ProductRatingSelector;
