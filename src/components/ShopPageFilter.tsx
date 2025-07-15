import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import type { CategoryType } from "../types/Category";
import TextField from "@mui/material/TextField";

import { Button, Box } from "@mui/material";


interface IShopFilterProps {
  onCategoryFilter: (categoryId: string) => void;
  onPriceFilter: (price: string) => void;
  onDeleteFilter: () => void;
  categories: CategoryType[];
}

const ShopPageFilter = ({
  onCategoryFilter,
  onPriceFilter,
  categories,
  onDeleteFilter,
}: IShopFilterProps) => {
  const [inputValue, setInputValue] = React.useState("");

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value;
    const regex = /^\d+$/;
    const isOnlyNumber = regex.test(str);
    if (isOnlyNumber || str === "") {
      setInputValue(e.target.value);
      onPriceFilter(e.target.value);
    }
  };
  return (

    <Box
      sx={{
        width: "25%",
        padding: "0 48px",
        paddingTop: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        backgroundColor: "#E6E8EB",
      }}
    >
      <Box
        sx={{
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          padding: "8px",
          cursor: "pointer",
        }}
      >
        فیلتر برند
      </Box>

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="apple"
          name="radio-buttons-group"
        >
          {categories.map((category) => (
            <FormControlLabel
              value={category._id}
              control={<Radio />}
              label={category.name}
              onClick={() => onCategoryFilter(category._id)}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Box
        sx={{
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          padding: "8px",
          cursor: "pointer",
        }}
      >
        فیلتر قیمت{" "}
      </Box>

      <TextField
        sx={{
          backgroundColor: "#fff",
        }}
        id="filled-hidden-label-small"
        value={inputValue}
        onChange={handlePriceChange}
        variant="filled"
        size="small"
        placeholder="قیمت را وارد نمایید "
      />
      <Button
        onClick={onDeleteFilter}
        sx={{
          backgroundColor: "#E6E8EB",
          border: "1px solid #99a1af  ",
          borderRadius: "6px",
          width: "90%",
          padding: "4px",
          cursor: "pointer",
        }}
      >
        حذف فیلترها
      </Button>
    </Box>

  );
};

export default ShopPageFilter;
